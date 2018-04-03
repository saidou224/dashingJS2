import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldComponent } from './hello-world.component';

describe('HelloWorldComponent', () => {
  let component: HelloWorldComponent;
  let componentFixture: ComponentFixture<HelloWorldComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [HelloWorldComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    componentFixture = TestBed.createComponent(HelloWorldComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should render title in a h4 tag',
    async(() => {
      const compiled = componentFixture.debugElement.nativeElement;
      expect(compiled.querySelector('h4').textContent).toContain('Hello world!');
    })
  );
});
