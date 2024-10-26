using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using crm_admin.Models;

namespace crm_admin.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DetalleCotizacionController : ControllerBase
    {
        private readonly AdminSoftliContext _context;

        public DetalleCotizacionController(AdminSoftliContext context)
        {
            _context = context;
        }

        // GET: api/DetalleCotizacion
        [HttpGet]
        public async Task<ActionResult<IEnumerable<DetalleCotizacion>>> GetDetalleCotizacions()
        {
            return await _context.DetalleCotizacions
                .Include(d => d.IdCotizacionNavigation)
                .Include(d => d.IdProductoNavigation)
                .Include(d => d.IdServicioNavigation)
                .ToListAsync();
        }

        // GET: api/DetalleCotizacion/5
        [HttpGet("{id}")]
        public async Task<ActionResult<DetalleCotizacion>> GetDetalleCotizacion(int id)
        {
            var detalleCotizacion = await _context.DetalleCotizacions
                .Include(d => d.IdCotizacionNavigation)
                .Include(d => d.IdProductoNavigation)
                .Include(d => d.IdServicioNavigation)
                .FirstOrDefaultAsync(d => d.IdDetalle == id);

            if (detalleCotizacion == null)
            {
                return NotFound();
            }

            return detalleCotizacion;
        }

        // PUT: api/DetalleCotizacion/5
        // To protect from overposting attacks, enable the specific properties you want to bind to.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDetalleCotizacion(int id, DetalleCotizacion detalleCotizacion)
        {
            if (id != detalleCotizacion.IdDetalle)
            {
                return BadRequest();
            }

            _context.Entry(detalleCotizacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DetalleCotizacionExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/DetalleCotizacion
        [HttpPost]
        public async Task<ActionResult<DetalleCotizacion>> PostDetalleCotizacion(DetalleCotizacion detalleCotizacion)
        {
            _context.DetalleCotizacions.Add(detalleCotizacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetDetalleCotizacion", new { id = detalleCotizacion.IdDetalle }, detalleCotizacion);
        }

        // DELETE: api/DetalleCotizacion/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDetalleCotizacion(int id)
        {
            var detalleCotizacion = await _context.DetalleCotizacions.FindAsync(id);
            if (detalleCotizacion == null)
            {
                return NotFound();
            }

            _context.DetalleCotizacions.Remove(detalleCotizacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DetalleCotizacionExists(int id)
        {
            return _context.DetalleCotizacions.Any(e => e.IdDetalle == id);
        }
    }
}
