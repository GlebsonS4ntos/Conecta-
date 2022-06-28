using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Conecta.API.Models
{
    public class Materia
    {
        public int MateriaId { get; set; }
        [StringLength(50)]
        public string Nome { get; set; }
        public ICollection<Professor> Professores { get; set; }
        public ICollection<Turma> Turmas { get; set; }
    }
}