import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageUpperViewComponent } from './image-upper-view.component';

describe('ImageUpperViewComponent', () => {
  let component: ImageUpperViewComponent;
  let fixture: ComponentFixture<ImageUpperViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageUpperViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageUpperViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
