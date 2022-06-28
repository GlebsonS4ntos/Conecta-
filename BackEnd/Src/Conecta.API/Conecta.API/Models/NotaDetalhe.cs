using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Conecta.API.Models
{
    public class NotaDetalhe
    {
        [Key]
        public int NotaDetalheId { get; set; }
        [ForeignKey("MateriaProfessorTurmaId")]
        public MateriaProfessorTurma MateriaProfessorTurma{ get; set; }
        [ForeignKey("NotaId")]
        public Nota Nota { get; set; }
    }
}
