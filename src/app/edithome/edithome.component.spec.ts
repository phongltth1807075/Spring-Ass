import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdithomeComponent } from './edithome.component';

describe('EdithomeComponent', () => {
  let component: EdithomeComponent;
  let fixture: ComponentFixture<EdithomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdithomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdithomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
