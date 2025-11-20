import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectivesNgSwitchVsSwitch } from './structural-directives-ng-switch-vs-switch';

describe('StructuralDirectivesNgSwitchVsSwitch', () => {
  let component: StructuralDirectivesNgSwitchVsSwitch;
  let fixture: ComponentFixture<StructuralDirectivesNgSwitchVsSwitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectivesNgSwitchVsSwitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectivesNgSwitchVsSwitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
