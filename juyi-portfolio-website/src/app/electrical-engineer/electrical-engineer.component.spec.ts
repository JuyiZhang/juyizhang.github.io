import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricalEngineerComponent } from './electrical-engineer.component';

describe('ElectricalEngineerComponent', () => {
  let component: ElectricalEngineerComponent;
  let fixture: ComponentFixture<ElectricalEngineerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricalEngineerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricalEngineerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
