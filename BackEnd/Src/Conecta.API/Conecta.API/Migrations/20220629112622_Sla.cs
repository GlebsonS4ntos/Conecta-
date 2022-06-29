using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Conecta.API.Migrations
{
    public partial class Sla : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Adms",
                columns: table => new
                {
                    AdmId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    User = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Adms", x => x.AdmId);
                });

            migrationBuilder.CreateTable(
                name: "Materia",
                columns: table => new
                {
                    MateriaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Materia", x => x.MateriaId);
                });

            migrationBuilder.CreateTable(
                name: "Professor",
                columns: table => new
                {
                    ProfessorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Cpf = table.Column<string>(type: "nvarchar(14)", maxLength: 14, nullable: true),
                    Telefone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Senha = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Professor", x => x.ProfessorId);
                });

            migrationBuilder.CreateTable(
                name: "Turma",
                columns: table => new
                {
                    TurmaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CodigoTurma = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Turma", x => x.TurmaId);
                });


            migrationBuilder.CreateTable(
                name: "Aluno",
                columns: table => new
                {
                    AlunoId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Cpf = table.Column<string>(type: "nvarchar(14)", maxLength: 14, nullable: true),
                    Cep = table.Column<string>(type: "nvarchar(9)", maxLength: 9, nullable: true),
                    Endereco = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Bairro = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    Cidade = table.Column<string>(type: "nvarchar(30)", maxLength: 30, nullable: true),
                    DataNasc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Telefone = table.Column<string>(type: "nvarchar(20)", maxLength: 20, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(50)", maxLength: 50, nullable: true),
                    Senha = table.Column<string>(type: "nvarchar(10)", maxLength: 10, nullable: true),
                    Foto = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TurmaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Aluno", x => x.AlunoId);
                    table.ForeignKey(
                        name: "FK_Aluno_Turma_TurmaId",
                        column: x => x.TurmaId,
                        principalTable: "Turma",
                        principalColumn: "TurmaId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MateriaProfessorTurma",
                columns: table => new
                {
                    MateriaProfessorTurmaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    TurmaId = table.Column<int>(type: "int", nullable: false),
                    MateriaId = table.Column<int>(type: "int", nullable: false),
                    ProfessorId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MateriaProfessorTurma", x => x.MateriaProfessorTurmaId);
                    table.ForeignKey(
                        name: "FK_MateriaProfessorTurma_Materia_MateriaId",
                        column: x => x.MateriaId,
                        principalTable: "Materia",
                        principalColumn: "MateriaId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MateriaProfessorTurma_Professor_ProfessorId",
                        column: x => x.ProfessorId,
                        principalTable: "Professor",
                        principalColumn: "ProfessorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_MateriaProfessorTurma_Turma_TurmaId",
                        column: x => x.TurmaId,
                        principalTable: "Turma",
                        principalColumn: "TurmaId",
                        onDelete: ReferentialAction.Cascade);
                });


            migrationBuilder.CreateTable(
                name: "Nota",
                columns: table => new
                {
                    NotaId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AlunoId = table.Column<int>(type: "int", nullable: false),
                    Bimestre1 = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Bimestre2 = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Bimestre3 = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Bimestre4 = table.Column<decimal>(type: "decimal(18,2)", nullable: false),
                    Ano = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Nota", x => x.NotaId);
                    table.ForeignKey(
                        name: "FK_Nota_Aluno_AlunoId",
                        column: x => x.AlunoId,
                        principalTable: "Aluno",
                        principalColumn: "AlunoId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "MateriaProfessorTurmaNota",
                columns: table => new
                {
                    MateriaProfessorTurmasMateriaProfessorTurmaId = table.Column<int>(type: "int", nullable: false),
                    NotasNotaId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_MateriaProfessorTurmaNota", x => new { x.MateriaProfessorTurmasMateriaProfessorTurmaId, x.NotasNotaId });
                    table.ForeignKey(
                        name: "FK_MateriaProfessorTurmaNota_MateriaProfessorTurma_MateriaProfessorTurmasMateriaProfessorTurmaId",
                        column: x => x.MateriaProfessorTurmasMateriaProfessorTurmaId,
                        principalTable: "MateriaProfessorTurma",
                        principalColumn: "MateriaProfessorTurmaId",
                        onDelete: ReferentialAction.NoAction);
                    table.ForeignKey(
                        name: "FK_MateriaProfessorTurmaNota_Nota_NotasNotaId",
                        column: x => x.NotasNotaId,
                        principalTable: "Nota",
                        principalColumn: "NotaId",
                        onDelete: ReferentialAction.NoAction);
                });

            migrationBuilder.CreateTable(
                name: "NotaDetalhe",
                columns: table => new
                {
                    NotaDetalheId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    MateriaProfessorTurmaId = table.Column<int>(type: "int", nullable: true),
                    NotaId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_NotaDetalhe", x => x.NotaDetalheId);
                    table.ForeignKey(
                        name: "FK_NotaDetalhe_MateriaProfessorTurma_MateriaProfessorTurmaId",
                        column: x => x.MateriaProfessorTurmaId,
                        principalTable: "MateriaProfessorTurma",
                        principalColumn: "MateriaProfessorTurmaId",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_NotaDetalhe_Nota_NotaId",
                        column: x => x.NotaId,
                        principalTable: "Nota",
                        principalColumn: "NotaId",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Aluno_TurmaId",
                table: "Aluno",
                column: "TurmaId");

            migrationBuilder.CreateIndex(
                name: "IX_MateriaProfessorTurma_MateriaId",
                table: "MateriaProfessorTurma",
                column: "MateriaId");

            migrationBuilder.CreateIndex(
                name: "IX_MateriaProfessorTurma_ProfessorId",
                table: "MateriaProfessorTurma",
                column: "ProfessorId");

            migrationBuilder.CreateIndex(
                name: "IX_MateriaProfessorTurma_TurmaId",
                table: "MateriaProfessorTurma",
                column: "TurmaId");

            migrationBuilder.CreateIndex(
                name: "IX_Nota_AlunoId",
                table: "Nota",
                column: "AlunoId");

            migrationBuilder.CreateIndex(
                name: "IX_NotaDetalhe_MateriaProfessorTurmaId",
                table: "NotaDetalhe",
                column: "MateriaProfessorTurmaId");

            migrationBuilder.CreateIndex(
                name: "IX_NotaDetalhe_NotaId",
                table: "NotaDetalhe",
                column: "NotaId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Adms");

            migrationBuilder.DropTable(
                name: "NotaDetalhe");

            migrationBuilder.DropTable(
                name: "MateriaProfessorTurma");

            migrationBuilder.DropTable(
                name: "Nota");

            migrationBuilder.DropTable(
                name: "Materia");

            migrationBuilder.DropTable(
                name: "Professor");

            migrationBuilder.DropTable(
                name: "Aluno");

            migrationBuilder.DropTable(
                name: "Turma");
        }
    }
}
