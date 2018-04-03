import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { WidgetGiphyComponent } from './widget-giphy.component';
import { GiphyDataService } from './giphy-data.service';
import { MockGiphyDataService } from './giphy-data.service.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockDashingjs2GridsterItem } from '../../../../testing/dashingjs2-gridster-item-helpers';

describe('WidgetGiphyComponent', () => {
  let component: WidgetGiphyComponent;
  let fixture: ComponentFixture<WidgetGiphyComponent>;
  let giphyDataService: GiphyDataService;
  const mockData = MockDashingjs2GridsterItem;
  mockData.widget.params.q = 'test';

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [WidgetGiphyComponent],
        providers: [{ provide: GiphyDataService, useClass: MockGiphyDataService }]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetGiphyComponent);
    component = fixture.componentInstance;
    component.data = mockData;
    fixture.detectChanges();
    giphyDataService = TestBed.get(GiphyDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should render copyright tag',
    async(() => {
      const compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('small').textContent).toContain('©Giphy');
    })
  );

  /*
 WIP ///
 
 it(
    'should get images',
    fakeAsync(() => {
      component.getImages();
      tick();
      fixture.detectChanges();
  
      expect(component.image).toBe('Test quote');
    })
  );*/
});
