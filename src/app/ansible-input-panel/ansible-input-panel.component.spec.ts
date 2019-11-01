import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsibleInputPanelComponent } from './ansible-input-panel.component';

describe('AnsibleInputPanelComponent', () => {
  let component: AnsibleInputPanelComponent;
  let fixture: ComponentFixture<AnsibleInputPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnsibleInputPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnsibleInputPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
