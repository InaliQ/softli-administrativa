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
    public class CotizacionesController : ControllerBase
    {
        private readonly AdminSoftliContext _context;

        public CotizacionesController(AdminSoftliContext context)
        {
            _context = context;
        }

        // GET: api/cotizaciones
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cotizacione>>> GetCotizaciones()
        {
            return await _context.Cotizaciones
                .Include(c => c.AceptacionesCotizacions)
                .Include(c => c.Archivos)
                .Include(c => c.DetalleCotizacions)
                .Include(c => c.OrdenesCompras)
                .Include(c => c.IdClienteNavigation)
                .Include(c => c.IdUsuarioNavigation)
                .ToListAsync();
        }

        // GET: api/cotizaciones/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Cotizacione>> GetCotizacion(int id)
        {
            var cotizacion = await _context.Cotizaciones
                .Include(c => c.AceptacionesCotizacions)
                .Include(c => c.Archivos)
                .Include(c => c.DetalleCotizacions)
                .Include(c => c.OrdenesCompras)
                .Include(c => c.IdClienteNavigation)
                .Include(c => c.IdUsuarioNavigation)
                .FirstOrDefaultAsync(c => c.IdCotizacion == id);

            if (cotizacion == null)
            {
                return NotFound();
            }

            return cotizacion;
        }

        // POST: api/cotizaciones
        [HttpPost]
        public async Task<ActionResult<Cotizacione>> PostCotizacion(Cotizacione cotizacion)
        {
            _context.Cotizaciones.Add(cotizacion);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCotizacion), new { id = cotizacion.IdCotizacion }, cotizacion);
        }

        // PUT: api/cotizaciones/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCotizacion(int id, Cotizacione cotizacion)
        {
            if (id != cotizacion.IdCotizacion)
            {
                return BadRequest();
            }

            _context.Entry(cotizacion).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CotizacionExists(id))
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

        // DELETE: api/cotizaciones/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCotizacion(int id)
        {
            var cotizacion = await _context.Cotizaciones.FindAsync(id);
            if (cotizacion == null)
            {
                return NotFound();
            }

            _context.Cotizaciones.Remove(cotizacion);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool CotizacionExists(int id)
        {
            return _context.Cotizaciones.Any(e => e.IdCotizacion == id);
        }
    }
}
