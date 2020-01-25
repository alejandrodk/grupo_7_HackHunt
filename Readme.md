# HackHunt
Tu trabajo como desarrollador más cerca.

## Tablero del proyecto

[Trello](https://trello.com/b/Gkna0BJn/proyecto-digital-house)

## ¿Quienes somos?

Somos una plataforma enfocada en brindar soluciones para el reclutamiento de profesionales del desarrollo web y software.

Al ser una plataforma especializada, brindamos mejores soluciones a empleadores y usuarios para hacer su búsqueda lo más específica y satisfactoria posible poniendo a su disposición las herramientas necesarias para conseguir el canditato y el trabajo ideal.

## ¿Qué nos motiva? 

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
### Funciones Especiales

|Helpers            |Descripcion                    |Parametros                   |
|-------------------|-------------------------------|-----------------------------|
|getAllCompanies(), getAllUsers(), getAllAnuncios()  |`'devuelve un objeto literal con datos de las companias/usuarios y la ruta del archivo json'`            |            |
|getCompanyById(id), getUserById(id), getAnuncioById()             |`"Devuelve los datos de la compañia/usuario segun el id dado"`            |Recibe el id buscado            |
|getNewId(array)             |`devuelve el proximo id disponible para usar`|Recibe un objeto literal obtenido de las funciones getAllCompanies(), getAllUsers(), getAllAnuncios() |
|writeFile(newItem,db)             |`Inserta en el archivo JSON el nuevo item y guarda nuevamente los datos.`|Recibe (de tipo objeto literal) el nuevo item creado para insertar en la db JSON y el objeto literal obtenido de las funciones getAllCompanies(), getAllUsers(), getAllAnuncios()|
|modifyUser(id)             |`devuelve un objeto literal que contiene los datos del usuario y la ruta en sus propiedades .file y .ruta respectivamente`|Recibe como parametro el id a buscar|
|modifyCompany(id)             |`devuelve un objeto literal que contiene los datos de la empresa y la ruta en sus propiedades .file y .ruta respectivamente`|Recibe como parametro el id a buscar|
|modifyAnuncio(id)             |`devuelve un objeto literal que contiene los datos del anuncio y la ruta en sus propiedades .file y .ruta respectivamente`|Recibe como parametro el id a buscar|
|saveUpdates(array)             |`guarda datos modificados tanto para empresa, cliente o anuncio `|Esta función recibe un objeto literal con las propiedades .file y .ruta el cual tiene los datos modificados en .file|
|Dashes             |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|



License
----

MIT
