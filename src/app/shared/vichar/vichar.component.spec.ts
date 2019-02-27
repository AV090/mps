import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VicharComponent } from './vichar.component';

describe('VicharComponent', () => {
  let component: VicharComponent;
  let fixture: ComponentFixture<VicharComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VicharComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VicharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
