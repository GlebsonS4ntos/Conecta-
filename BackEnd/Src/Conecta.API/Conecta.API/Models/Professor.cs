using System;
using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Conecta.API.Models
{
    public class Professor
    {
        public int ProfessorId { get; set; }
        [StringLength(50)]
        public string Nome { get; set; }
        [StringLength(14)]
        public string Cpf { get; set; }
        [StringLength(20)]
        public string Telefone { get; set; }
        [StringLength(50)]
        public string Email { get; set; }
        [StringLength(10)]
        public string Senha { get; set; }
        public ICollection<Turma> Turmas { get; set; }
        public ICollection<Materia> Materias { get; set; }
    }
}
