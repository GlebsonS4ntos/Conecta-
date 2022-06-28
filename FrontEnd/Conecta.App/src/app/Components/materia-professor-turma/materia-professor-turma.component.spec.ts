import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateriaProfessorTurmaComponent } from './materia-professor-turma.component';

describe('MateriaProfessorTurmaComponent', () => {
  let component: MateriaProfessorTurmaComponent;
  let fixture: ComponentFixture<MateriaProfessorTurmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MateriaProfessorTurmaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MateriaProfessorTurmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
