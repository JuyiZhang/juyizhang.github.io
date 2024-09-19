import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummargComponent } from './summarg.component';

describe('SummargComponent', () => {
  let component: SummargComponent;
  let fixture: ComponentFixture<SummargComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SummargComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummargComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
