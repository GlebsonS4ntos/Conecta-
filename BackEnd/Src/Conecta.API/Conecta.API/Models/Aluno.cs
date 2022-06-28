using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Conecta.API.Models
{
    public class Aluno
    {
        public int AlunoId { get; set; }
        [StringLength(50)]
        public string Nome { get; set; }
        [StringLength(14)]
        public string Cpf { get; set; }
        [StringLength(9)]
        public string Cep { get; set; }
        [StringLength(30)]
        public string Endereco { get; set; }
        [StringLength(30)]
        public string Bairro { get; set; }
        [StringLength(30)]
        public string Cidade { get; set; }
        public string DataNasc { get; set; }
        [StringLength(20)]
        public string Telefone { get; set; }
        [StringLength(50)]
        public string Email { get; set; }
        [StringLength(10)]
        public string Senha { get; set; }
        public string Foto { get; set; }
        public int TurmaId { get; set; }
        public Turma Turma { get; set; }
        public ICollection<Nota> Notas { get; set; }
    }
}