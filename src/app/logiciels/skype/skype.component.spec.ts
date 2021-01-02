import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkypeComponent } from './skype.component';

describe('SkypeComponent', () => {
  let component: SkypeComponent;
  let fixture: ComponentFixture<SkypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
