-- Creación de la base de datos adminSoftli
CREATE DATABASE adminSoftli;
GO

-- Uso de la base de datos recién creada
USE adminSoftli;
GO

-- Tabla: clientes
CREATE TABLE clientes (
    id_cliente INT PRIMARY KEY IDENTITY(1,1),
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    ciudad VARCHAR(100),
    pais VARCHAR(100),
    fecha_registro DATETIME DEFAULT GETDATE()
);

-- Tabla: usuarios
CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY IDENTITY(1,1),
    nombre_usuario VARCHAR(100) UNIQUE NOT NULL,
    nombre_completo VARCHAR(100),
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    rol VARCHAR(50),  -- Ejemplo: Admin, Vendedor, Soporte
    fecha_creacion DATETIME DEFAULT GETDATE(),
    password_hash VARCHAR(255) NOT NULL
);

-- Tabla: empleados
CREATE TABLE empleados (
    id_empleado INT PRIMARY KEY IDENTITY(1,1),
    id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario), -- Relación con tabla de usuarios
    nombre_empleado VARCHAR(100) NOT NULL,
    apellido_empleado VARCHAR(100),
    email_empleado VARCHAR(100) UNIQUE NOT NULL,
    telefono_empleado VARCHAR(20),
    puesto VARCHAR(100),  -- Ejemplo: Vendedor, Gerente
    fecha_contratacion DATETIME DEFAULT GETDATE()
);

-- Tabla: productos
CREATE TABLE productos (
    id_producto INT PRIMARY KEY IDENTITY(1,1),
    nombre_producto VARCHAR(100) NOT NULL,
    descripcion_producto TEXT,
    precio DECIMAL(10,2),
    stock INT DEFAULT 0,  -- Cantidad en inventario
    fecha_creacion DATETIME DEFAULT GETDATE()
);

-- Tabla: servicios
CREATE TABLE servicios (
    id_servicio INT PRIMARY KEY IDENTITY(1,1),
    nombre_servicio VARCHAR(100) NOT NULL,
    descripcion_servicio TEXT,
    precio DECIMAL(10,2),
    recurrente BIT DEFAULT 0,  -- 0 = Compra única, 1 = Mensual
    frecuencia_recurrencia VARCHAR(50) DEFAULT 'Mensual',
    fecha_creacion DATETIME DEFAULT GETDATE()
);

-- Tabla: precios_servicios_preestablecidos
CREATE TABLE precios_servicios_preestablecidos (
    id_precio INT PRIMARY KEY IDENTITY(1,1),
    id_servicio INT FOREIGN KEY REFERENCES servicios(id_servicio),
    precio DECIMAL(10, 2) NOT NULL,
    fecha_vigencia_inicio DATETIME,
    fecha_vigencia_fin DATETIME
);

-- Tabla: cotizaciones
CREATE TABLE cotizaciones (
    id_cotizacion INT PRIMARY KEY IDENTITY(1,1),
    id_cliente INT FOREIGN KEY REFERENCES clientes(id_cliente),
    id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario),
    fecha_cotizacion DATETIME DEFAULT GETDATE(),
    subtotal DECIMAL(10,2),
    impuestos DECIMAL(10,2),
    total DECIMAL(10,2),
    estado VARCHAR(50) DEFAULT 'Pendiente',  -- Ejemplo: Pendiente, Aprobada, Rechazada
    archivo_cotizacion VARCHAR(255)  -- Ruta del archivo subido
);

-- Tabla: detalle_cotizacion
CREATE TABLE detalle_cotizacion (
    id_detalle INT PRIMARY KEY IDENTITY(1,1),
    id_cotizacion INT FOREIGN KEY REFERENCES cotizaciones(id_cotizacion),
    id_producto INT FOREIGN KEY REFERENCES productos(id_producto), -- Relación con productos
    id_servicio INT FOREIGN KEY REFERENCES servicios(id_servicio), -- Relación con servicios
    descripcion_personalizada TEXT,  -- Descripción personalizada del servicio/producto
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2),
    total DECIMAL(10,2)
);

-- Tabla: archivos
CREATE TABLE archivos (
    id_archivo INT PRIMARY KEY IDENTITY(1,1),
    id_cotizacion INT FOREIGN KEY REFERENCES cotizaciones(id_cotizacion),
    id_cliente INT FOREIGN KEY REFERENCES clientes(id_cliente),
    id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario),
    tipo_archivo VARCHAR(50),  -- Ejemplo: Cotización, Orden de Compra, Factura
    nombre_archivo VARCHAR(255),
    ruta_archivo VARCHAR(255),
    fecha_subida DATETIME DEFAULT GETDATE()
);

-- Tabla: ordenes_compra
CREATE TABLE ordenes_compra (
    id_orden_compra INT PRIMARY KEY IDENTITY(1,1),
    id_cotizacion INT FOREIGN KEY REFERENCES cotizaciones(id_cotizacion),
    id_cliente INT FOREIGN KEY REFERENCES clientes(id_cliente),
    id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario),
    fecha_generacion DATETIME DEFAULT GETDATE(),
    total DECIMAL(10, 2),
    estado VARCHAR(50) DEFAULT 'Pendiente',  -- Ejemplo: Pendiente, Aceptada, Rechazada, Completada
    archivo_orden_compra VARCHAR(255)  -- Ruta del archivo de la orden de compra
);

-- Tabla: aceptaciones_cotizacion
CREATE TABLE aceptaciones_cotizacion (
    id_aceptacion INT PRIMARY KEY IDENTITY(1,1),
    id_cotizacion INT FOREIGN KEY REFERENCES cotizaciones(id_cotizacion),
    id_cliente INT FOREIGN KEY REFERENCES clientes(id_cliente),
    fecha_aceptacion DATETIME,
    estado VARCHAR(50) DEFAULT 'Pendiente',  -- Ejemplo: Pendiente, Aceptada, Rechazada
    comentarios TEXT
);

-- Tabla: interacciones
CREATE TABLE interacciones (
    id_interaccion INT PRIMARY KEY IDENTITY(1,1),
    id_cliente INT FOREIGN KEY REFERENCES clientes(id_cliente),
    id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario),
    tipo_interaccion VARCHAR(50),  -- Ejemplo: Llamada, Email, Reunión
    descripcion TEXT,
    fecha_interaccion DATETIME DEFAULT GETDATE()
);

-- Tabla: clientes_actividad
CREATE TABLE clientes_actividad (
    id_actividad_cliente INT PRIMARY KEY IDENTITY(1,1),
    id_cliente INT FOREIGN KEY REFERENCES clientes(id_cliente),
    total_cotizaciones INT DEFAULT 0,
    total_ordenes_compra INT DEFAULT 0,
    total_gastado DECIMAL(10, 2) DEFAULT 0,
    fecha_ultima_interaccion DATETIME,
    estado_cliente VARCHAR(50)  -- Ejemplo: Proactivo, Inactivo, No Comprador
);

-- Tabla: quejas_sugerencias
CREATE TABLE quejas_sugerencias (
    id_queja_sugerencia INT PRIMARY KEY IDENTITY(1,1),
    id_cliente INT FOREIGN KEY REFERENCES clientes(id_cliente),  -- Relación con clientes
    id_usuario INT FOREIGN KEY REFERENCES usuarios(id_usuario),  -- Relación con usuarios (si aplica)
    tipo VARCHAR(50) NOT NULL,  -- Ejemplo: Queja, Sugerencia
    descripcion TEXT NOT NULL,  -- Descripción de la queja o sugerencia
    fecha_registro DATETIME DEFAULT GETDATE(),
    estado VARCHAR(50) DEFAULT 'Pendiente',  -- Ejemplo: Pendiente, Resuelta, Ignorada
    comentarios_respuesta TEXT  -- Comentarios de la respuesta (si la hay)
);


-- Procedimiento para actualizar existencias de productos
--CREATE PROCEDURE ActualizarExistenciasProducto
--    @id_producto INT,
--    @cantidad INT
--AS
--BEGIN
--    UPDATE productos
--    SET stock = stock + @cantidad
--    WHERE id_producto = @id_producto;
--END;
