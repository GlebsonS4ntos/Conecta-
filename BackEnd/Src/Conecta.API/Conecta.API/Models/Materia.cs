using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Conecta.API.Models
{
    public class Materia
    {
        public int MateriaId { get; set; }
        [StringLength(50)]
        public string Nome { get; set; }
        public ICollection<MateriaProfessorTurma> MateriaProfessorTurma { get; set; }

        public static explicit operator Materia(MateriaProfessorTurma v)
        {
            throw new NotImplementedException();
        }
    }
}