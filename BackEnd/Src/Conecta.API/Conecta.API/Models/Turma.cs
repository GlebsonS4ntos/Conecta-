using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Conecta.API.Models
{
    public class Turma
    {
        public int TurmaId { get; set; }
        [StringLength(10)]
        public string CodigoTurma { get; set; }
        public ICollection<MateriaProfessorTurma> MateriaProfessorTurma { get; set; }
    }
}
