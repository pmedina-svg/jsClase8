# jsClase8

Actividad

Pre-entrega 8: Sincronización de estado entre DOM y Storage
Objetivo de aprendizaje
Consolidar el flujo de lectura, actualización y persistencia. El objetivo es que logres que el estado de tu aplicación sea independiente de la sesión actual, utilizando operadores modernos (??, ?.) para manejar datos que podrían no existir aún en el almacenamiento.

Qué construir
Debes ajustar tu proyecto actual para que realice las siguientes tareas:

Persistencia de datos: El proyecto no debe perder los datos al refrescar la pagina (ej. los productos en un carrito, usuarios guardados, stock actualizado).


Sincronización en Tiempo Real: Cada vez que el usuario agregue o elimine un elemento (un evento que ya programaste antes), la aplicación debe:
- Actualizar el array de datos en JavaScript.
- Guardar la versión actualizada en el localStorage (usando JSON.stringify).
- Volver a renderizar la vista para reflejar el cambio.
- Operadores avanzados: El proyecto se debe optimizar utilizando operadores avanzados para mejorar la estructura (ternarios, or, etc.).
- Destructuring: El proyecto debe contar con algún objeto desestructurado para acceder y manipular sus propiedades mas fácilmente.


Criterios de aceptación
- Al recargar la página (F5), los elementos que el usuario agregó previamente siguen apareciendo en pantalla.
- Al eliminar un elemento, este desaparece tanto de la pantalla como del localStorage.
- El código utiliza JSON.parse() y JSON.stringify() correctamente para manejar arrays de objetos.
- Se utiliza el operador ? (ternario) para reemplazar estructuras if-else simples.
- Se aplica destructuring para manipular con precision propiedades de objetos.


Método de entrega
Se deberá enviar el link del repositorio de github en modo público.