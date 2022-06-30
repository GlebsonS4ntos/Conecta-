/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LancarNotasComponent } from './LancarNotas.component';

describe('LancarNotasComponent', () => {
  let component: LancarNotasComponent;
  let fixture: ComponentFixture<LancarNotasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LancarNotasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LancarNotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
