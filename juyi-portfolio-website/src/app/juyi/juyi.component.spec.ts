import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuyiComponent } from './juyi.component';

describe('JuyiComponent', () => {
  let component: JuyiComponent;
  let fixture: ComponentFixture<JuyiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuyiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuyiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
