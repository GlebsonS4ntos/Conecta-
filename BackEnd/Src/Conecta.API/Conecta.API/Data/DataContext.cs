using Conecta.API.Models;
using Microsoft.EntityFrameworkCore;

namespace Conecta.API.Data
{
    public class DataContext : DbContext
    {
        public DbSet<Adm> Adms { get; set; }

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Conecta.API.Models.Aluno> Aluno { get; set; }

        public DbSet<Conecta.API.Models.Materia> Materia { get; set; }

        public DbSet<Conecta.API.Models.Professor> Professor { get; set; }

        public DbSet<Conecta.API.Models.Nota> Nota { get; set; }

        public DbSet<Conecta.API.Models.Turma> Turma { get; set; }

        public DbSet<Conecta.API.Models.MateriaProfessorTurma> MateriaProfessorTurma { get; set; }

    }
}
