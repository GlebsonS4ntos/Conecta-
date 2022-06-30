import { Turma } from './../turmas/Turma';
import { Professor } from './../professor/Professor';
import { Materia } from '../materia/Materia';
export class materiaProfessorTurma{
  materiaProfessorTurmaId: number;
  turmaId: number;
  materiaId: number;
  professorId: number;
  professor: Professor;
  turma: Turma;
  materia: Materia;
}
