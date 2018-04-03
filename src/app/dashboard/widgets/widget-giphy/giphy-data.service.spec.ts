import { TestBed, inject } from '@angular/core/testing';

import { GiphyDataService } from './giphy-data.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { GiphyImage } from './interfaces/giphy-image';
import { asyncData } from '../../../../testing/async-observable-helpers';

describe('GiphyDataService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let giphyDataService: GiphyDataService;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    giphyDataService = new GiphyDataService(<any>httpClientSpy);

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GiphyDataService]
    });
  });

  it(
    'should be created',
    inject([GiphyDataService], (service: GiphyDataService) => {
      expect(service).toBeTruthy();
    })
  );

  it('should return expected images', () => {
    const giphyApiFakeResponse = {
      pagination: { total_count: 42 },
      data: [
        {
          images: {
            fixed_height: { url: 'http://foo.com', width: 200, height: 100 }
          }
        },
        {
          images: {
            fixed_height: { url: 'http://bar.com', width: 500, height: 300 }
          }
        }
      ]
    };

    const expectedImages: GiphyImage[] = [
      { url: 'http://foo.com', width: 200, height: 100 },
      { url: 'http://bar.com', width: 500, height: 300 }
    ];

    httpClientSpy.get.and.returnValue(asyncData(giphyApiFakeResponse));

    giphyDataService.getImages('foo').subscribe(images => {
      expect(images).toEqual(expectedImages, 'expected images');
    }, fail);
  });

  it('should return expected images without unused entries', () => {
    const giphyApiFakeResponse = {
      pagination: { total_count: 42 },
      unused: 'entry',
      data: [
        {
          unused: 'entry',
          images: {
            unused: 'entry',
            fixed_height: { unused: 'entry', url: 'http://foo.com', width: 200, height: 100 }
          }
        },
        {
          unused: 'entry',
          images: {
            unused: 'entry',
            fixed_height: { unused: 'entry', url: 'http://bar.com', width: 500, height: 300 }
          }
        }
      ]
    };

    const expectedImages: GiphyImage[] = [
      { url: 'http://foo.com', width: 200, height: 100 },
      { url: 'http://bar.com', width: 500, height: 300 }
    ];

    httpClientSpy.get.and.returnValue(asyncData(giphyApiFakeResponse));

    giphyDataService.getImages('foo').subscribe(images => {
      expect(images).toEqual(expectedImages, 'expected images');
    }, fail);
  });

  it('should return expected images without portrait images', () => {
    const giphyApiFakeResponse = {
      pagination: { total_count: 42 },
      data: [
        // portrait image
        {
          images: {
            fixed_height: { url: 'http://x.io', width: 20, height: 100 }
          }
        },
        // landscape image
        {
          images: {
            fixed_height: { url: 'http://test.com', width: 200, height: 100 }
          }
        },
        // landscape image
        {
          images: {
            fixed_height: { url: 'http://foo.com', width: 500, height: 300 }
          }
        }
      ]
    };

    const expectedImages: GiphyImage[] = [
      { url: 'http://test.com', width: 200, height: 100 },
      { url: 'http://foo.com', width: 500, height: 300 }
    ];

    httpClientSpy.get.and.returnValue(asyncData(giphyApiFakeResponse));

    giphyDataService.getImages('foo').subscribe(images => {
      expect(images).toEqual(expectedImages, 'expected images');
    }, fail);
  });
});
