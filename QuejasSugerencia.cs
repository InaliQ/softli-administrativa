using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace crm_admin.Models;

public partial class QuejasSugerencia
{
    public int IdQuejaSugerencia { get; set; }

    public int? IdCliente { get; set; }

    public int? IdUsuario { get; set; }

    public string Tipo { get; set; } = null!;

    public string Descripcion { get; set; } = null!;

    public DateTime? FechaRegistro { get; set; }

    public string? Estado { get; set; }

    public string? ComentariosRespuesta { get; set; }
    [JsonIgnore]
    public virtual Cliente? IdClienteNavigation { get; set; }
    [JsonIgnore]
    public virtual Usuario? IdUsuarioNavigation { get; set; }
}
