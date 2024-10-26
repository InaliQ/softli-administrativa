using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace crm_admin.Models;

public partial class Cliente
{
    public int IdCliente { get; set; }

    public string Nombre { get; set; } = null!;

    public string? Apellido { get; set; }

    public string Email { get; set; } = null!;

    public string? Telefono { get; set; }

    public string? Direccion { get; set; }

    public string? Ciudad { get; set; }

    public string? Pais { get; set; }

    public DateTime? FechaRegistro { get; set; }
    [JsonIgnore]
    public virtual ICollection<AceptacionesCotizacion> AceptacionesCotizacions { get; set; } = new List<AceptacionesCotizacion>();
    [JsonIgnore]
    public virtual ICollection<Archivo> Archivos { get; set; } = new List<Archivo>();
    [JsonIgnore]
    public virtual ICollection<ClientesActividad> ClientesActividads { get; set; } = new List<ClientesActividad>();
    [JsonIgnore]
    public virtual ICollection<Cotizacione> Cotizaciones { get; set; } = new List<Cotizacione>();
    [JsonIgnore]
    public virtual ICollection<Empresa> Empresas { get; set; } = new List<Empresa>();
    [JsonIgnore]
    public virtual ICollection<Interaccione> Interacciones { get; set; } = new List<Interaccione>();
    [JsonIgnore]
    public virtual ICollection<OrdenesCompra> OrdenesCompras { get; set; } = new List<OrdenesCompra>();
    [JsonIgnore]
    public virtual ICollection<QuejasSugerencia> QuejasSugerencia { get; set; } = new List<QuejasSugerencia>();
}
