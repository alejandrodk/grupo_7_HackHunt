# HackHunt
Tu trabajo como desarrollador más cerca.

## Tablero del proyecto

[Trello](https://trello.com/b/Gkna0BJn/proyecto-digital-house)

## Dashboard

[Dashboard](http://localhost:3001)

## Descripción

Proyecto Integrador para la cursada de Desarrollo Web Full Stack de Digital House.
En el mismo, aplicamos los conocimientos adquiridos durante el curso, aplicando las metodologías ágiles y SCRUM

## Enfoque

Con el equipo de HackHunt decidimos crear un único sitio especializado en busqueda de trabajo para desarrolladores manteniendo las practicidades de un cv dinámico online pero agregando caracteristicas únicas que otros sitios con propositos mas genericos no pueden.

Esto ayuda a nuestros candidatos a conseguir oportunidades laborales enfocadas en sus propios conocimientos y aumenta las posibilidades de conseguir un trabajo adecuado a su perfil, además de ayudar a las empresas a encontrar al profesional ideal para el puesto vacante.

### Beneficios para usuarios

  - Encontrar ofertas laborales según tus conocimientos específicos

  - Encontrar ofertas laborales en una plataforma especializada en tu área

  - Filtrar ofertas laborales por la cantidad de coincidencias entre los conocimientos requeridos y tus Skills

  - Posibilidad de seguir empresas de interés para ver sus anuncios primero

  - Posibilidad de compartir tus repositorios para que tu futuro empleador pueda ver tus proyectos

  - Establecer alertas con palabras clave de ciertos anuncios 

  - Posibilidad de recibir mensajes directos de empresas.

### Beneficios para Empresas y/o Reclutiers

  - Evitar postulaciones innecesarias de candidatos de otras profesiones al ser una plataforma especializada

  - Posibilidad de ver el portafolios (Repositorios) de tus candidatos para conocer su trabajo y experiencia.

  - Encontrar candidatos con conocimientos específicos en determinados lenguajes o áreas de desempeño

  - Posibilidad de establecer contacto con los candidatos dentro de la plataforma

  - Publicar anuncios con los lenguajes específicos que debe manejar tu candidato ideal

  - Posibilidad de solo recibir candidaturas de personas que cumplan cierto número de skills


-----------------------------------------------------------------------------------
### Sitios de referencia 

[ZonaJobs](https://www.zonajobs.com.ar/)

[Bumeran](https://www.bumeran.com.ar/)

[Computrabajo](https://www.computrabajo.com.ar/)

-----------------------------------------------------------------------------------
### Librerias

|Nombre            |Descripcion                    |Enlace                    |
|-------------------|-------------------------------|-------------------------------|
|currently  |`'Inicio de aplicación'`|[npm currently](https://www.npmjs.com/package/currently)|
|Nodemon  |`'Refrescar servidor'`|[npm React](https://www.npmjs.com/package/react)|
|React Js  |`'Cliente'`|[npm React](https://www.npmjs.com/package/react)|
|Node Js  |`'Servidor'`|[Node Js](https://nodejs.org/es/)|
|Express Js  |`'Peticiones HTTP'`|[npm Express](https://www.npmjs.com/package/express)|
|method-override  |`'Métodos HTTP'`|[npm React](https://www.npmjs.com/package/method-override)|
|Express-validator  |`'Validacion'`|[npm Express-Validator](https://www.npmjs.com/package/express-validator)|
|Sequelize  |`'ORM Manejo de consultas a la base de datos '`|[npm Sequelize](https://www.npmjs.com/package/sequelize)|
|Sequelize-cli  |`' Command Line Interface para Sequelize '`| [npm Sequelize-cli](https://www.npmjs.com/package/sequelize-cli)|
|mysql2  |`'Cliente MySQL para Node'`| [npm mysql2](https://www.npmjs.com/package/mysql2)|
|Axios  |`'Peticiones API'`|[npm Axios](https://www.npmjs.com/package/axios)|
|Bcrypt  |`'Hashing'`|[npm bcrypt](https://www.npmjs.com/package/bcrypt)|
|Chart Js  |`'Gráficos'`|[npm chart.js](https://www.npmjs.com/package/chart.js)|
|express-favicon |`'Favicon'`|[npm Express-favicon](https://www.npmjs.com/package/express-favicon)|
|Multer  |`'Carga de imagenes'`|[npm multer](https://www.npmjs.com/package/multer)|

### API
|Coleccion            |Método                    |Descripción                    |Endpoint                    |
|-------------------|-------------------------------|-------------------------------|-------------------------------|
|Anuncios           |GET                |Total de anuncios                 |localhost:3000/api/anuncios/     |
|Anuncios           |GET                 |Anuncios activos                |localhost:3000/api/anuncios/activos     |
|Anuncios           |GET                 |Anuncios Expirados                |localhost:3000/api/anuncios/expirados     |
|Anuncios           |GET                 |Anuncios Favoritos                |localhost:3000/api/anuncios/favoritos    |
|Anuncios           |GET                 |Postulantes               |localhost:3000/api/anuncios/postulaciones    |
|Postulaciones      |GET                 |Total postulaciones               |localhost:3000/api/anuncios/postulaciones/    |
|Postulaciones      |GET                 |Detalle de postulacion              |localhost:3000/api/anuncios/postulaciones/{id cliente}/{id anuncio}    |
|Postulaciones      |GET                 |Postulaciones de un cliente             |localhost:3000/api/anuncios/postulaciones/{id cliente}   |
|skills             |GET                 |Total de skills           |localhost:3000/api/skills  |
|skills             |POST                |Crear skill          |localhost:3000/api/skills  |
|skills             |DELETE              |Eliminar skill         |localhost:3000/api/skills/{skill id}  |
|Clientes           |GET                 |Total de clientes         |localhost:3000/api/clientes/  |
|Clientes           |GET                 |Skills de cliente        |localhost:3000/api/clientes/skills/{id cliente}  |
|Clientes           |POST                 |Agregar skill a cliente        |localhost:3000/api/clientes/skills/ |
|Clientes           |DELETE                 |Eliminar skill de cliente        |localhost:3000/api/clientes/skills/ |

License
----

MIT
