using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace crm_admin.Models;

public partial class DetalleCotizacion
{
    public int IdDetalle { get; set; }

    public int? IdCotizacion { get; set; }

    public int? IdProducto { get; set; }

    public int? IdServicio { get; set; }

    public string? DescripcionPersonalizada { get; set; }

    public int Cantidad { get; set; }

    public decimal? PrecioUnitario { get; set; }

    public decimal? Total { get; set; }
    [JsonIgnore]
    public virtual Cotizacione? IdCotizacionNavigation { get; set; }
    [JsonIgnore]
    public virtual Producto? IdProductoNavigation { get; set; }
    [JsonIgnore]
    public virtual Servicio? IdServicioNavigation { get; set; }
}
