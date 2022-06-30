import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarNotaComponent } from './visualizar-nota.component';

describe('VisualizarNotaComponent', () => {
  let component: VisualizarNotaComponent;
  let fixture: ComponentFixture<VisualizarNotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarNotaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarNotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
