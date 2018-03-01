import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import 'rxjs/add/operator/map';

export interface GiphyImage {
  url: string;
  mp4: string;
  width: number;
  height: number;
  frames: number;
}

@Injectable()
export class GiphyDataService {
  private GIPHY_API_KEY = 'dc6zaTOxFJmzC';

  private timer = Observable.interval(600000) // 10 minutes
    .startWith(0);

  constructor(private http: HttpClient) {}

  public get(q: string): Observable<[GiphyImage]> {
    return this.timer.switchMap(() => this.getGiphyImages(q));
  }

  private getGiphyImages(q: string): Observable<[GiphyImage]> {
    const params = new HttpParams()
      .set('q', q)
      .set('limit', '100')
      .set('rating', 'g')
      .set('offset', (Math.floor(Math.random() * 600) + 1).toString())
      .set('api_key', this.GIPHY_API_KEY);

    return this.http
      .get<[GiphyImage]>(`http://api.giphy.com/v1/gifs/search`, { params: params })
      .map((response: any) => {
        const images: any = [];
        for (let _i = 0; _i < response.data.length; _i++) {
          const data_original = response.data[_i].images.original;
          const data_fixed_height = response.data[_i].images.fixed_height;
          const image: GiphyImage = {
            url: data_fixed_height.url,
            mp4: data_fixed_height.mp4,
            width: data_fixed_height.width,
            height: data_fixed_height.height,
            frames: data_original.frames
          };

          // only landscape image
          if (image.width > image.height) {
            images.push(image);
          }
        }
        return images;
      });
  }
}
