using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Conecta.API.Models
{
    public class Nota
    {
        public int NotaId { get; set; }
        public int AlunoId { get; set; }
        public Aluno Aluno { get; set; }
        public decimal Bimestre1 { get; set; }
        public decimal Bimestre2 { get; set; }
        public decimal Bimestre3 { get; set; }
        public decimal Bimestre4 { get; set; }
        public DateTime Ano { get; set; }
        public ICollection<MateriaProfessorTurma> MateriaProfessorTurmas { get; set; }
        public ICollection<NotaDetalhe> NotaDetalhes { get; set; }
    }
}
