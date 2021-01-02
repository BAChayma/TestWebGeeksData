import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GimpComponent } from './gimp.component';

describe('GimpComponent', () => {
  let component: GimpComponent;
  let fixture: ComponentFixture<GimpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GimpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GimpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
