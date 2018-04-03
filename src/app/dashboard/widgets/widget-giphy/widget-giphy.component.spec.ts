import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetGiphyComponent } from './widget-giphy.component';
import { GiphyDataService } from './giphy-data.service';
import { MockGiphyDataService } from './giphy-data.service.mock';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MockDashingjs2GridsterItem } from '../../../../testing/dashingjs2-gridster-item-helpers';

describe('WidgetGiphyComponent', () => {
  let component: WidgetGiphyComponent;
  let componentFixture: ComponentFixture<WidgetGiphyComponent>;
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
    componentFixture = TestBed.createComponent(WidgetGiphyComponent);
    component = componentFixture.componentInstance;
    component.data = mockData;
    componentFixture.detectChanges();
    giphyDataService = TestBed.get(GiphyDataService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
