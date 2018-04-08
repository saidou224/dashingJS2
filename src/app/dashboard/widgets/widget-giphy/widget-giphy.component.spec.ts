import { async, ComponentFixture, discardPeriodicTasks, fakeAsync, TestBed } from '@angular/core/testing';
import { WidgetGiphyComponent } from './widget-giphy.component';
import { GiphyDataService } from './giphy-data.service';
import { MockGiphyDataService } from './giphy-data.service.mock';
import { MockDashingjs2GridsterItem } from '../../../../testing/dashingjs2-gridster-item-helpers';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { GiphyImage } from './interfaces/giphy-image';

describe('WidgetGiphyComponent', () => {
  let component: WidgetGiphyComponent;
  let fixture: ComponentFixture<WidgetGiphyComponent>;
  let giphyDataService: GiphyDataService;
  let imgDebugElement: DebugElement;
  let copyrightDebugElement: DebugElement;
  const mockData = MockDashingjs2GridsterItem;
  mockData.widget.params.q = 'test';

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetGiphyComponent]
      })
        .overrideComponent(WidgetGiphyComponent, {
          set: {
            providers: [{ provide: GiphyDataService, useClass: MockGiphyDataService }]
          }
        })
        .compileComponents()
        .then(() => {
          fixture = TestBed.createComponent(WidgetGiphyComponent);
          component = fixture.componentInstance;
          component.data = {
            widget: {
              class: null,
              icon: null,
              component: null,
              params: { q: 'test' }
            }
          };
          giphyDataService = fixture.debugElement.injector.get(GiphyDataService);
        });
    })
  );

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'data.widget.params.q should be equal test',
    async(() => {
      expect(component.data.widget.params.q).toBe('test');
    })
  );

  it('data.images should be equal GiphyImages[]', async(() => {}));

  it(
    'should render copyright tag',
    async(() => {
      copyrightDebugElement = fixture.debugElement.query(By.css('small'));
      expect(copyrightDebugElement.nativeElement.textContent).toContain('©Giphy');
    })
  );

  it(
    'should render image tag',
    fakeAsync(() => {
      imgDebugElement = fixture.debugElement.query(By.css('img'));
      expect(imgDebugElement).toBeNull();

      component.ngOnInit();
      fixture.detectChanges();

      expect(component.images).toEqual([
        { url: '//foo.com/', width: 200, height: 100 },
        { url: '//bar.com/', width: 300, height: 200 }
      ]);
      expect(component.images[0].url).toBe('//foo.com/');

      imgDebugElement = fixture.debugElement.query(By.css('img'));
      expect(imgDebugElement.nativeElement.src).toBe('http://foo.com/');
      discardPeriodicTasks();
    })
  );
});
