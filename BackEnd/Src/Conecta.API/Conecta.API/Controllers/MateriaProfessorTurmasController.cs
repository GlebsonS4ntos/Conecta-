using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Conecta.API.Data;
using Conecta.API.Models;

namespace Conecta.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MateriaProfessorTurmasController : ControllerBase
    {
        private readonly DataContext _context;

        public MateriaProfessorTurmasController(DataContext context)
        {
            _context = context;
        }

        // GET: api/MateriaProfessorTurmas
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MateriaProfessorTurma>>> GetMateriaProfessorTurma()
        {
            return await _context.MateriaProfessorTurma.ToListAsync();
        }

        // GET: api/MateriaProfessorTurmas/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MateriaProfessorTurma>> GetMateriaProfessorTurma(int id)
        {
            var materiaProfessorTurma = await _context.MateriaProfessorTurma.FindAsync(id);

            if (materiaProfessorTurma == null)
            {
                return NotFound();
            }

            return materiaProfessorTurma;
        }

        // PUT: api/MateriaProfessorTurmas/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutMateriaProfessorTurma(MateriaProfessorTurma materiaProfessorTurma)
        {
            _context.MateriaProfessorTurma.Update(materiaProfessorTurma);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: api/MateriaProfessorTurmas
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<MateriaProfessorTurma>> PostMateriaProfessorTurma(MateriaProfessorTurma materiaProfessorTurma)
        {
            _context.MateriaProfessorTurma.Add(materiaProfessorTurma);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetMateriaProfessorTurma", new { id = materiaProfessorTurma.MateriaProfessorTurmaId }, materiaProfessorTurma);
        }

        // DELETE: api/MateriaProfessorTurmas/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMateriaProfessorTurma(int id)
        {
            var materiaProfessorTurma = await _context.MateriaProfessorTurma.FindAsync(id);
            if (materiaProfessorTurma == null)
            {
                return NotFound();
            }

            _context.MateriaProfessorTurma.Remove(materiaProfessorTurma);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool MateriaProfessorTurmaExists(int id)
        {
            return _context.MateriaProfessorTurma.Any(e => e.MateriaProfessorTurmaId == id);
        }
    }
}
