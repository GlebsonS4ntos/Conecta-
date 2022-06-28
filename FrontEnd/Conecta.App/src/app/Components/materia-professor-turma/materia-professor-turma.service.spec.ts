import { TestBed } from '@angular/core/testing';

import { MateriaProfessorTurmaService } from './materia-professor-turma.service';

describe('MateriaProfessorTurmaService', () => {
  let service: MateriaProfessorTurmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MateriaProfessorTurmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
