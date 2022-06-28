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
    public class NotaDetalhesController : ControllerBase
    {
        private readonly DataContext _context;

        public NotaDetalhesController(DataContext context)
        {
            _context = context;
        }

        // GET: api/NotaDetalhes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<NotaDetalhe>>> GetNotaDetalhe()
        {
            return await _context.NotaDetalhe.ToListAsync();
        }

        // GET: api/NotaDetalhes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<NotaDetalhe>> GetNotaDetalhe(int id)
        {
            var notaDetalhe = await _context.NotaDetalhe.FindAsync(id);

            if (notaDetalhe == null)
            {
                return NotFound();
            }

            return notaDetalhe;
        }

        // PUT: api/NotaDetalhes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut]
        public async Task<IActionResult> PutNotaDetalhe(NotaDetalhe notaDetalhe)
        {
            _context.NotaDetalhe.Update(notaDetalhe);
            await _context.SaveChangesAsync();

            return Ok();
        }

        // POST: api/NotaDetalhes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<NotaDetalhe>> PostNotaDetalhe(NotaDetalhe notaDetalhe)
        {
            _context.NotaDetalhe.Add(notaDetalhe);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetNotaDetalhe", new { id = notaDetalhe.NotaDetalheId }, notaDetalhe);
        }

        // DELETE: api/NotaDetalhes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteNotaDetalhe(int id)
        {
            var notaDetalhe = await _context.NotaDetalhe.FindAsync(id);
            if (notaDetalhe == null)
            {
                return NotFound();
            }

            _context.NotaDetalhe.Remove(notaDetalhe);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool NotaDetalheExists(int id)
        {
            return _context.NotaDetalhe.Any(e => e.NotaDetalheId == id);
        }
    }
}
