using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace crm_admin.Models;

public partial class Cotizacione
{
    public int IdCotizacion { get; set; }

    public int? IdCliente { get; set; }

    public int? IdUsuario { get; set; }

    public DateTime? FechaCotizacion { get; set; }

    public decimal? Subtotal { get; set; }

    public decimal? Impuestos { get; set; }

    public decimal? Total { get; set; }

    public string? Estado { get; set; }

    public string? ArchivoCotizacion { get; set; }
    [JsonIgnore]
    public virtual ICollection<AceptacionesCotizacion> AceptacionesCotizacions { get; set; } = new List<AceptacionesCotizacion>();
    [JsonIgnore]
    public virtual ICollection<Archivo> Archivos { get; set; } = new List<Archivo>();
    [JsonIgnore]
    public virtual ICollection<DetalleCotizacion> DetalleCotizacions { get; set; } = new List<DetalleCotizacion>();
    [JsonIgnore]
    public virtual Cliente? IdClienteNavigation { get; set; }
    [JsonIgnore]
    public virtual Usuario? IdUsuarioNavigation { get; set; }
    [JsonIgnore]
    public virtual ICollection<OrdenesCompra> OrdenesCompras { get; set; } = new List<OrdenesCompra>();
}
