//CONSULTA EN SQL DE LAS TABLAS ESPECIOFICADAS, DEVUELVE EL NOMBRE DEL LIBRO
SELECT l.Nombre AS libro
FROM PRESTAMO p
JOIN ALUMNO a ON p.id_alumno = a.id
JOIN LIBRO l ON p.id_libro = l.id
WHERE a.Nombres = 'Sonis'
AND p.Entregado = false
AND DATE(p.Fecha_prestamo, '+' || l.Dias_limite_prestamo || ' days') < '2021-07-30'
