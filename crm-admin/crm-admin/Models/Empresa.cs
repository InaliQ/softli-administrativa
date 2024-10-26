using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace crm_admin.Models;

public partial class Empresa
{
    public int IdEmpresa { get; set; }

    public string NombreEmpresa { get; set; } = null!;

    public string? DireccionEmpresa { get; set; }

    public string? TelefonoEmpresa { get; set; }

    public string? EmailEmpresa { get; set; }

    public DateTime? FechaCreacion { get; set; }

    public int? IdCliente { get; set; }
    [JsonIgnore]
    public virtual Cliente? IdClienteNavigation { get; set; }
}
