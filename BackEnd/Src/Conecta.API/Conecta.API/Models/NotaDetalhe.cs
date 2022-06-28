using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Conecta.API.Models
{
    public class NotaDetalhe
    {
        
        public int NotaDetalheId { get; set; }
        public int? MateriaProfessorTurmaId { get; set; }
        public MateriaProfessorTurma MateriaProfessorTurma{ get; set; }
        public int? NotaId { get; set; }
        public Nota Nota { get; set; }
    }
}
