using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Conecta.API.Models
{
    public class MateriaProfessorTurma
    {
        public int MateriaProfessorTurmaId { get; set; }
        [ForeignKey("TurmaId")]
        public Turma Turma { get; set; }
        [ForeignKey("MateriaId")]
        public Materia Materia { get; set; }
        [ForeignKey("ProfessorId")]
        public Professor Professor { get; set; }
        public ICollection<Nota> Notas { get; set; }
    }
}
