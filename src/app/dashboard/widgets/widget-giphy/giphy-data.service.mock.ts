import { Injectable } from '@angular/core';
import { GiphyImage } from './interfaces/giphy-image';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class MockGiphyDataService {
  public getImages(q: string): Observable<GiphyImage[]> {
    return Observable.of([
      { url: '//foo.com/', width: 200, height: 100 },
      { url: '//bar.com/', width: 300, height: 200 }
    ]);
  }
}
