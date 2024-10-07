INSERT INTO clientes (nombre, apellido, email, telefono, direccion, ciudad, pais)
VALUES ('Carlos', 'Ramirez', 'carlos.ramirez@example.com', '5551234567', 'Calle Falsa 123', 'Ciudad de México', 'México');

INSERT INTO clientes (nombre, apellido, email, telefono, direccion, ciudad, pais)
VALUES ('Ana', 'López', 'ana.lopez@example.com', '5559876543', 'Avenida Central 45', 'Guadalajara', 'México');

INSERT INTO clientes (nombre, apellido, email, telefono, direccion, ciudad, pais)
VALUES ('Pedro', 'García', 'pedro.garcia@example.com', '5552468101', 'Boulevard Norte 789', 'Monterrey', 'México');


INSERT INTO usuarios (nombre_usuario, nombre_completo, email, telefono, rol, password_hash)
VALUES ('jlopez', 'Javier López', 'javier.lopez@example.com', '5551239876', 'Admin', 'hashedpassword1');

INSERT INTO usuarios (nombre_usuario, nombre_completo, email, telefono, rol, password_hash)
VALUES ('mmartinez', 'María Martínez', 'maria.martinez@example.com', '5556543219', 'Vendedor', 'hashedpassword2');

INSERT INTO usuarios (nombre_usuario, nombre_completo, email, telefono, rol, password_hash)
VALUES ('sperez', 'Sergio Pérez', 'sergio.perez@example.com', '5553219876', 'Soporte', 'hashedpassword3');


INSERT INTO empleados (id_usuario, nombre_empleado, apellido_empleado, email_empleado, telefono_empleado, puesto)
VALUES (1, 'Javier', 'López', 'javier.lopez@empresa.com', '5551239876', 'Gerente');

INSERT INTO empleados (id_usuario, nombre_empleado, apellido_empleado, email_empleado, telefono_empleado, puesto)
VALUES (2, 'María', 'Martínez', 'maria.martinez@empresa.com', '5556543219', 'Vendedor');

INSERT INTO empleados (id_usuario, nombre_empleado, apellido_empleado, email_empleado, telefono_empleado, puesto)
VALUES (3, 'Sergio', 'Pérez', 'sergio.perez@empresa.com', '5553219876', 'Soporte');


INSERT INTO productos (nombre_producto, descripcion_producto, precio, stock)
VALUES ('Reloj Inteligente X', 'Reloj inteligente con múltiples funcionalidades', 2500.00, 10);

INSERT INTO productos (nombre_producto, descripcion_producto, precio, stock)
VALUES ('Monitor Full HD', 'Monitor de 24 pulgadas con resolución Full HD', 3200.00, 5);

INSERT INTO productos (nombre_producto, descripcion_producto, precio, stock)
VALUES ('Teclado Mecánico', 'Teclado mecánico con retroiluminación RGB', 1200.00, 20);


INSERT INTO servicios (nombre_servicio, descripcion_servicio, precio, recurrente)
VALUES ('Mantenimiento Anual', 'Servicio de mantenimiento anual', 1200.00, 0);

INSERT INTO servicios (nombre_servicio, descripcion_servicio, precio, recurrente)
VALUES ('Suscripción Mensual', 'Acceso a plataforma de gestión mensual', 500.00, 1);

INSERT INTO servicios (nombre_servicio, descripcion_servicio, precio, recurrente)
VALUES ('Consultoría Especializada', 'Consultoría técnica y soporte avanzado', 3000.00, 0);


INSERT INTO precios_servicios_preestablecidos (id_servicio, precio, fecha_vigencia_inicio, fecha_vigencia_fin)
VALUES (1, 1000.00, '2024-01-01', '2024-12-31');

INSERT INTO precios_servicios_preestablecidos (id_servicio, precio, fecha_vigencia_inicio, fecha_vigencia_fin)
VALUES (2, 450.00, '2024-02-01', '2024-12-31');

INSERT INTO precios_servicios_preestablecidos (id_servicio, precio, fecha_vigencia_inicio, fecha_vigencia_fin)
VALUES (3, 2800.00, '2024-03-01', '2024-12-31');


INSERT INTO cotizaciones (id_cliente, id_usuario, subtotal, impuestos, total)
VALUES (1, 1, 1000.00, 160.00, 1160.00);

INSERT INTO cotizaciones (id_cliente, id_usuario, subtotal, impuestos, total)
VALUES (2, 2, 500.00, 80.00, 580.00);

INSERT INTO cotizaciones (id_cliente, id_usuario, subtotal, impuestos, total)
VALUES (3, 3, 3000.00, 480.00, 3480.00);


INSERT INTO detalle_cotizacion (id_cotizacion, id_producto, id_servicio, descripcion_personalizada, cantidad, precio_unitario, total)
VALUES (1, 1, NULL, 'Reloj Inteligente con funciones avanzadas', 2, 2500.00, 5000.00);

INSERT INTO detalle_cotizacion (id_cotizacion, id_producto, id_servicio, descripcion_personalizada, cantidad, precio_unitario, total)
VALUES (2, 2, NULL, 'Monitor Full HD de alta resolución', 1, 3200.00, 3200.00);



INSERT INTO archivos (id_cotizacion, id_cliente, id_usuario, tipo_archivo, nombre_archivo, ruta_archivo)
VALUES (1, 1, 1, 'Cotización', 'cotizacion1.pdf', '/archivos/cotizacion1.pdf');

INSERT INTO archivos (id_cotizacion, id_cliente, id_usuario, tipo_archivo, nombre_archivo, ruta_archivo)
VALUES (2, 2, 2, 'Orden de Compra', 'orden_compra1.pdf', '/archivos/orden_compra1.pdf');

INSERT INTO archivos (id_cotizacion, id_cliente, id_usuario, tipo_archivo, nombre_archivo, ruta_archivo)
VALUES (3, 3, 3, 'Factura', 'factura1.pdf', '/archivos/factura1.pdf');


INSERT INTO ordenes_compra (id_cotizacion, id_cliente, id_usuario, total)
VALUES (1, 1, 1, 1160.00);

INSERT INTO ordenes_compra (id_cotizacion, id_cliente, id_usuario, total)
VALUES (2, 2, 2, 580.00);

INSERT INTO ordenes_compra (id_cotizacion, id_cliente, id_usuario, total)
VALUES (3, 3, 3, 3480.00);

INSERT INTO aceptaciones_cotizacion (id_cotizacion, id_cliente, fecha_aceptacion, estado, comentarios)
VALUES (1, 1, GETDATE(), 'Aceptada', 'Cliente satisfecho con la propuesta');

INSERT INTO aceptaciones_cotizacion (id_cotizacion, id_cliente, fecha_aceptacion, estado, comentarios)
VALUES (2, 2, GETDATE(), 'Rechazada', 'Precio muy elevado');

INSERT INTO aceptaciones_cotizacion (id_cotizacion, id_cliente, fecha_aceptacion, estado, comentarios)
VALUES (3, 3, GETDATE(), 'Pendiente', 'En proceso de evaluación');


INSERT INTO interacciones (id_cliente, id_usuario, tipo_interaccion, descripcion)
VALUES (1, 1, 'Llamada', 'Llamada para seguimiento de cotización');

INSERT INTO interacciones (id_cliente, id_usuario, tipo_interaccion, descripcion)
VALUES (2, 2, 'Email', 'Envío de cotización por correo');

INSERT INTO interacciones (id_cliente, id_usuario, tipo_interaccion, descripcion)
VALUES (3, 3, 'Reunión', 'Reunión para discutir términos de la orden de compra');


INSERT INTO clientes_actividad (id_cliente, total_cotizaciones, total_ordenes_compra, total_gastado, fecha_ultima_interaccion, estado_cliente)
VALUES (1, 2, 1, 1160.00, GETDATE(), 'Proactivo');

INSERT INTO clientes_actividad (id_cliente, total_cotizaciones, total_ordenes_compra, total_gastado, fecha_ultima_interaccion, estado_cliente)
VALUES (2, 1, 1, 580.00, GETDATE(), 'Proactivo');

INSERT INTO clientes_actividad (id_cliente, total_cotizaciones, total_ordenes_compra, total_gastado, fecha_ultima_interaccion, estado_cliente)
VALUES (3, 1, 1, 3480.00, GETDATE(), 'Pendiente');
