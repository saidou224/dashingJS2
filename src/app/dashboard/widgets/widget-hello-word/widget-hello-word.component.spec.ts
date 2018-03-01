import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetHelloWordComponent } from './widget-hello-word.component';

describe('WidgetHelloWordComponent', () => {
  let component: WidgetHelloWordComponent;
  let fixture: ComponentFixture<WidgetHelloWordComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [WidgetHelloWordComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetHelloWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
