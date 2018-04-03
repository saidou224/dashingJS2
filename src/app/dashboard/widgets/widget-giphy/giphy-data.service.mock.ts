import { Injectable } from '@angular/core';
import { GiphyImage } from './interfaces/giphy-image';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { GiphyDataService } from './giphy-data.service';

@Injectable()
export class MockGiphyDataService extends GiphyDataService {
  public getImages(q: string): Observable<GiphyImage[]> {
    return new Observable<GiphyImage[]>(observer => {
      observer.next([
        { url: 'http://foo.com', width: 200, height: 100 },
        { url: 'http://bar.com', width: 300, height: 200 }
      ]);
    });
  }
}
