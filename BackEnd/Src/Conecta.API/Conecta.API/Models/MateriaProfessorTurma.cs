using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Conecta.API.Models
{
    public class MateriaProfessorTurma
    {
        public int MateriaProfessorTurmaId { get; set; }
        public int TurmaId { get; set; }
        public Turma Turma { get; set; }
        public int MateriaId { get; set; }
        public Materia Materia { get; set; }
        public int ProfessorId { get; set; }
        public Professor Professor { get; set; }
        public ICollection<Nota> Notas { get; set; }
    }
}
