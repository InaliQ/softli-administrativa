using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace crm_admin.Models;

public partial class Usuario
{
    public int IdUsuario { get; set; }

    public string NombreUsuario { get; set; } = null!;

    public string? NombreCompleto { get; set; }

    public string Email { get; set; } = null!;

    public string? Telefono { get; set; }

    public string? Rol { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public string PasswordHash { get; set; } = null!;
    [JsonIgnore]
    public virtual ICollection<Archivo> Archivos { get; set; } = new List<Archivo>();
    [JsonIgnore]
    public virtual ICollection<Cotizacione> Cotizaciones { get; set; } = new List<Cotizacione>();
    [JsonIgnore]
    public virtual ICollection<Empleado> Empleados { get; set; } = new List<Empleado>();
    [JsonIgnore]
    public virtual ICollection<Interaccione> Interacciones { get; set; } = new List<Interaccione>();
    [JsonIgnore]
    public virtual ICollection<OrdenesCompra> OrdenesCompras { get; set; } = new List<OrdenesCompra>();
    [JsonIgnore]
    public virtual ICollection<QuejasSugerencia> QuejasSugerencia { get; set; } = new List<QuejasSugerencia>();
}
