-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 08-05-2020 a las 00:12:41
-- Versión del servidor: 10.2.31-MariaDB
-- Versión de PHP: 7.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u730690020_hackhunt`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anuncios`
--

CREATE TABLE `anuncios` (
  `id` int(11) NOT NULL,
  `cmp_id` int(11) DEFAULT NULL,
  `adv_publication` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adv_title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adv_description` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `adv_date_contract` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adv_area` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adv_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adv_position` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `adv_working_day` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adv_salary` mediumint(11) UNSIGNED DEFAULT NULL,
  `adv_advantage` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `anuncios`
--

INSERT INTO `anuncios` (`id`, `cmp_id`, `adv_publication`, `adv_title`, `adv_description`, `adv_date_contract`, `adv_area`, `adv_location`, `adv_position`, `adv_working_day`, `adv_salary`, `adv_advantage`, `created_at`, `updated_at`) VALUES
(82, 3, '12/2/2020', 'Diseñador Grafico', 'Nos encontramos en la busqueda de un diseñador grafico con al menos 3 años de experiencia en el puesto.', '2020-01-02', 'Diseño Grafico', 'Ciudad Autónoma de Buenos Aires', 'Diseñador', 'Full Time', 32500, 'Prepaga familiar, tarjeta 365, home office.', NULL, NULL),
(88, 4, '02/16/2020', 'Desarrollador Mobile SR/Jr', 'Nos encontramos en la busqueda de desarrolladores mobile tanto JR como SR que cuenten con conocimientos en React Native y Kotlin.', '2020-03-01', 'Desarrollo Mobile', 'Córdoba', 'Desarrollador', 'A distancia', 52000, '', NULL, NULL),
(89, 5, '05/10/2020', 'IT Project Manager - Importante empresa de Turismo', 'Para importante empresa nos encontramos en búsqueda de un IT Project Manager.\r\n\r\nResponsabilidades del puesto:\r\n\r\n    Gestionar varios proyectos en simultáneo\r\n    Responder por el cumplimiento de objetivos del proyecto\r\n    Gestionar el alcance del proyecto e identificar posibles desvíos\r\n    Integrar los esfuerzos de los recursos de las distintas áreas para alcanzar los objetivos del proyecto\r\n    Registrar issues, riesgos y las solicitudes de cambios\r\n    Gestionar asignación de recursos de proyectos\r\n    Seguimiento de los costos del proyecto\r\n    Seguimiento del uso de recursos del proyecto\r\n\r\n \r\n\r\nPara aplicar a la posición será necesario contar con los siguientes skills/conocimientos:\r\n\r\n    Experiencia de más de 3 años gestionando proyectos del rubro Telecomunicaciones / IT (excluyente).\r\n    Probada experiencia gestionando proyectos externos (clientes) e internos.\r\n    Haber gestionado 4 o más proyectos en simultaneo, siendo responsable de los mismos.\r\n    Estudiante avanzado o graduado de carrera de Sistemas o a fines\r\n    Certificación PMP (deseable)', '2020-04-15', 'IT', 'Ciudad Autónoma de Buenos Aires', 'PM', 'Full Time', 85000, 'Se ofrece remuneración acorde al puesto, OSDE grupo familiar, home-office, bono anual por performance y entrenamiento/certificaciones. ', NULL, NULL),
(90, 4, '16/2/2020', 'Desarrollador Mobile SR/Jr', 'Nos encontramos en la busqueda de desarrolladores mobile tanto JR como SR que cuenten con conocimientos en React Native y Kotlin.', '2020-03-13', 'Desarrollo Mobile', 'Córdoba', 'Desarrollador', 'A distancia', 52000, '', NULL, NULL),
(91, 6, '02/16/2020', 'Desarrollador/a Java Full Stack ', 'Vos podés hacer la diferencia, ¡dejanos tu cv!  \r\n\r\nEn Randstad nos moviliza ayudar a las personas y a las organizaciones a desarrollar todo su potencial. Ese es el compromiso que asumimos como compañía en todo el mundo, un compromiso que nos impulsa a ir más allá para lograr que nuestros clientes y candidatos alcancen el éxito. ¿Cómo lo hacemos?, combinando nuestra pasión por las personas con el poder de la tecnología, creando experiencias más humanas, que nos permitan ser una fuente de inspiración y apoyo para quienes nos eligen. Porque estamos convencidos de que mejores personas hacen mejores empresas. \r\n\r\nNuestro cliente, importante empresa de desarrollo de software, necesita incorporar un Desarrollador/a Java Full Stack:\r\n\r\nConocimientos requeridos:\r\n\r\n    programación a nivel full stack utilizando tecnologías del ecosistema java y programación funcional\r\n    experiencia sobre desarrollos java para sumarse a  proyecto internacional cuyo al área de negocio es alarmas y domótica\r\n    Java\r\n    Hibernate / JPA\r\n    Spring Framework\r\n    Javascript / Typescript\r\n    Algun framework front end web: AngularJS | ReactJs | ClojureScript)\r\n    Maven\r\n    GIT\r\n    Bases de datos relacionales: Postgresql, Oracle, MySql\r\n    POO (conocimientos sólidos) y patrones de diseño.\r\n\r\nEl candidato deberá\r\n\r\n    ser un profesional o estudiante avanzado con tenga sólidos conocimientos\r\n    contar con sentido del trabajo en equipo responsabilidad, y que conozca de\r\n    metodologías ágiles y tenga interés en la investigación y aprendizaje de nuevos lenguajes de programación / frameworks.', '2020-07-25', 'Desarrollo', 'Ciudad Autónoma de Buenos Aires', 'Desarrollador Full Stack', 'Part Time', 75000, '', NULL, NULL),
(95, 3, '1/3/2020', 'Desarrolladores C#.Net // Zona Belgrano // Urgente!!! ', 'En KaizenRH nos encontramos en búsqueda de Desarrolladores C#.Net para Importante empresa de soluciones de Software.\r\n\r\nRequisitos\r\n\r\nContar con experiencia comprobable no menor a cuatro años y en las siguientes tecnologias:\r\n\r\n.Net\r\n\r\nC#\r\n\r\nBases de datos SQL/MySQL\r\n\r\nBuscamos personas con buenas relaciones interpersonales, proactiva, flexible, con capacidad para el trabajo en equipo.\r\n\r\nTareas\r\n\r\nDesarrollar productos y procesos cumpliendo con las prácticas y valores de Scrum, XP y normas propias del área de investigación y Desarrollo.\r\n\r\nBeneficios\r\n\r\nTrabajo en relación directa, efectiva y con continuidad laboral.\r\n\r\nObra Social-Prepaga OSDE 210 incluye Grupo Familiar\r\n\r\nUn día de Home Working por semana.\r\n\r\nFlex Time en las puntas\r\n\r\nCapacitación continua.\r\n\r\nFrutas los lunes\r\n\r\nMedialunas los viernes.\r\n\r\nLugar y horario de trabajo: Belgrano, CABA. De Lunes a Viernes de 09 a 18 hs ', '2020-03-30', 'Desarrollo', 'Ciudad Autónoma de Buenos Aires', 'Programador', 'Full Time', 40000, 'Frutas los lunes, Medialunas los viernes.\r\nCapacitación continua.\r\nflex time en las puntas.\r\nUn día de home working por semana.\r\nObra social Osde 210. Incluye Grupo Familiar.', NULL, NULL),
(98, 5, '03/14/2020', 'Desarrollador React Senior ', 'somos una empresa multinacional de tecnología presente en más de 42 países, con más de 30 años en el mercado mundial. En el 2017, en plena transformación Digital, decidimos crear Nuestro Propósito Transformador Masivo, Co- Creando Soluciones para un Futuro Mejor, pues entendemos el valor de co- crear con nuestros clientes, colaboradores, partners y comunidad. Buscamos conectar nuestro Propósito con tu Talento\r\n\r\n \r\n\r\nDescripción del puesto *\r\n\r\nResponsabilidades:\r\n\r\n    Desarrollo de Funcionalidades Nuevas y Mejoras.\r\n\r\n    Correcciones de Bugs sobre aplicativo productivo\r\n\r\n    Despliegues de Pasajes entre ambientes', '2020-05-27', 'IT', 'Córdoba', 'Desarrollador React', 'Full-time', 85000, '', NULL, NULL),
(100, 7, 'undefined/undefined/3/21/2020', 'Sr. Analyst, Sales Operations Business Inteligence', 'Esta posición reportará al Gerente de Sales Operations. La estructura impllica dos Jefes de Sales Operations y un Analista para Desarrollo de Categorías; dos Analistas para Planes de Distribución y un Asistente de Administración de Ventas.\r\n\r\nEl rol se encargará de brindar apoyo al canal de Distribuidores y garantizar la ejecución del plan integral anual con clientes para accionar sobre oportunidades y lograr los objetivos propuestos. ', '2020-05-22', 'Business Inteligence', 'Buenos Aires', 'Sr. Analyst', 'Full Time', 120000, '', NULL, NULL),
(101, 8, 'undefined/undefined/3/21/2020', 'PHP Backend Developer ', 'Buscamos sumar a nuestro equipo un PHP Ssr/Sr Developer que pueda impulsar nuestros proyectos actuales. Podes pensar, analizar y construir tu propio producto. Nuestro candidato ideal tiene que ser apasionado por el desarrollo en lenguaje PHP, orientado a hacer código reusable, limpio y mantenible, orientado al detalle (nos gusta dejar las cosas mejor de lo que las encontramos), además de contar con no menos de 5 años de experiencia en el rubro para desarrollar APIs REST, herramientas backend y aplicaciones web utilizando HTML 5 y Ajax.\r\n\r\nRequisitos:\r\n\r\nDemostrar tu conocimiento y manejo en:\r\n\r\nPHP 5.x y 7\r\nMySQL\r\nHTML5\r\nPatrones de diseño\r\nUnit testing\r\nPrácticas de clean code', '2020-06-04', 'IT', 'Córdoba', 'Backend Developer ', 'Full Time', 75000, 'Obra social\r\nHorarios flexibles\r\n3 Semanas de vacaciones\r\nTarjeta de beneficios Club La Nacion\r\nDescuento en gimnasio\r\nCapacitación', NULL, NULL),
(102, 9, 'undefined/undefined/3/21/2020', 'Data Scientist y Desarrollador para Inteligencia Artificial ', 'Importante empresa de tecnología nacional se encuentra en el desarrollo de nuevas áreas de negocios. Para este nuevo desafío es que se encuentra en la búsqueda de profesionales innovativos, con habilidad analítica, creativos y que trabajen en equipo, en un clima laboral distendido. Aquellos profesionales con experiencia laboral previa en el diseño, desarrollo e implementación de modelos de Inteligencia Artificial; diseño y desarrollo de proyectos de análisis estadísticos de datos.\r\n·         DESARROLLADOR PARA INTELIGENCIA ARTIFICIAL (Ing. en Sist. Informáticos)\r\n·         DATA SCIENTIST (Lic. En Matemática, Estadística, Lic. en Física o Cs. De la Computación)\r\nValoramos ampliamente el conocimiento avanzado del lenguaje Python/R o R, SQL; el uso avanzado de frameworks: Tensorflow/ Keras/ PyTorch/ Scklearn o similar; y el uso avanzado de infraestructura de nube: AWS preferentemente.', '2020-04-15', 'IA', 'Corrientes', 'Data Scientist', 'Full Time', 25000, '', NULL, NULL),
(103, 10, 'undefined/undefined/3/21/2020', 'Analista Programador Jr ', 'Perfil: Estamos en la busqueda para una importante compañia de Seguros ubicada en Puerto Madero.\r\n\r\nEs tu oportunidad! Requisito excluyente:- T-SQL- JavaScriptEntre sus principales tareas se encuentran:   • Atención de incidentes de usuarios.   • Relevamiento y análisis de requerimientos.   • Diseño y programación de la solución.   • Documentar las soluciones, tanto en lo referente a manual del usuario como en lo relativo al diseño.   • Configurar y programar sobre la plataforma del CRM de Telemarketing   • Administración de base de datos, creación de procesos y reportes en SQL.   • Armado de CRM mediante la interfaz de la plataforma, SQL y JavaScript.   • Realización de pruebas unitarias y funcionales   • Participación en proyectos donde intervenga el CRM de Telemarketing   • Identificar posibles puntos de mejora y proponer soluciones.   • Mantener documentación actualizada.Nos orientamos a estudiante de carreras afines a sistemas. Con intenciones de adoptar nuevos conocimientos en especial de nuestro CRM de Telemarketing (Neotel). ', '2020-05-04', 'Software', 'Corrientes', 'Analista Programador Jr ', 'Part Time', 45000, '', NULL, NULL),
(104, 10, 'undefined/undefined/3/21/2020', 'Analista Programador Semi Sr. ', 'Nos encontramos en la búsqueda de un \"Analista Programador Semi Sr.\"\r\nFunciones y Responsabilidades:\r\n    Diseñar y desarrollar aplicaciones en entorno Web y Desktop.\r\n    Realizar relevamiento, analisis y generar especificaciones ante nuevos requerimientos.\r\n    Mantener aplicaciones en entorno Web y Desktop.Implementar e Integrar aplicaciones o subsistemas al sistema ERP principal.\r\n    Diseñar y crear reportes en plataforma Web, Reporting Services y consultas en lenguaje T-SQL\r\nLos candidatos deberán contar con experiencia comprobable y sólidos conocimientos (excluyente) en:\r\n    Conocimiento avanzado de SQL Server 2008 en adelante\r\n    Conocimiento avanzado de Visual Studio (.Net, C#)\r\nRequisitos:\r\nJoven profesional o estudiante carrera de sistema proximo a graduarse.', '2020-06-10', 'Software', 'Buenos Aires', 'Analista Programador Semi Sr', 'Part time', 110000, '', NULL, NULL),
(105, 11, 'undefined/undefined/3/21/2020', 'Desarrollador full stack java', 'IT Patagonia es una compañía de servicios en el área de tecnología de la información con más de treinta años de experiencia en la industria de software y servicios informáticos.\r\n\r\nSomos un equipo apasionado que trabaja comprometidos para crear valor al negocio del cliente, brindando soluciones tecnológicas personalizadas de acuerdo a sus necesidades.\r\n\r\nComo la evolución es parte de nuestro ADN, estamos redefiniendo nuestro propósito. Es por esto que decidimos crear un área de sustentabilidad que centralice todas las acciones de inclusión social, la gestión del impacto ambiental y el fomento económico a través de la innovación.\r\n\r\n¡Estamos desafiándonos constantemente y queremos que seas parte de nuestra transformación!\r\n\r\nGeneramos esta oportunidad para quienes:\r\n·         Busquen sentirse parte de una compañía con valores humanos y solidarios.\r\n·         Sean inquietos por aprender y se adapten a los cambios en un contexto dinámico.\r\n·         Están dispuestos a dar el máximo y tienen la capacidad de aprender a partir de sus errores.\r\n·         Trabajan en equipo, les importan las personas y generan lazos perdurables en el tiempo.\r\n ·         Sienten que el apoyo a la comunidad y el cuidado del medioambiente son causas realmente importantes.\r\n\r\nRequisitos:\r\n\r\n    Experiencia laboral de al menos 2 años de experiencia en puestos de Analista desarrollador Java full stack.\r\n    Se considera un plus haber trabajado para entidades financieras\" \r\n    Conocimientos técnicos: Java, pl/sql, jsp, Struts, Spring (Spring boot, Spring Batch), Hibernate,xml, json, swagger. Conocimiento en desarrollo de aplicaciones web, desarrollo de servicios. CVS, GIT. Comandos básicos de linux.\r\n\r\nSe considera un plus:\r\n    Haber trabajado con Websphere App Server, Base de datos Oracle, Jenkins, HPQC, DevTest (LISA)\r\n    Conocimientos de Angular, javascript.\r\n\r\nPrincipales tareas:\r\n    Participación de proyectos en impliquen desarrollos en aplicaciones relacionadas a de banca electrónica de canales corporativos.\r\n    Mantenimiento de las aplicaciones y soporte a la producción de 2do nivel para análisis y resolución de incidentes productivos.\r\n    Participación de reuniones de definiciones técnicas/funcionales\r\n\r\n Horario de trabajo: Lunes a Viernes de 09 a 18 hs.\r\nLa relación de dependencia es con IT Patagonia.\r\n\r\nNuestro propósito es ser una empresa sostenible a través del tiempo, aportando soluciones y servicios tecnológicos confiables a nuestros clientes, otorgando beneficios a los colaboradores que mejoren su calidad de vida, favoreciendo un entorno diverso y equitativo, siendo una mejor empresa para el mundo.\r\n¡Sumate a nuestro equipo!', '2020-07-18', 'Programación', 'Ciudad Autónoma de Buenos Aires', 'Programador', 'Tiempo completo', 80000, '3 semanas de vacaciones\r\nHome office\r\nPrepaga de primer nivel', NULL, NULL),
(110, 4, '15/4/2020', 'desarrollador javascript', '<p>Buscamos desarrollador Javascript</p>', '2020-04-24', 'Desarrollo', 'Ciudad Autónoma de Buenos Aires', 'Programador', 'Full Time', 50000, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anuncio_skill`
--

CREATE TABLE `anuncio_skill` (
  `id` int(11) NOT NULL,
  `anuncio_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `anuncio_skill`
--

INSERT INTO `anuncio_skill` (`id`, `anuncio_id`, `skill_id`) VALUES
(3, 82, 10),
(12, 89, 2),
(13, 89, 6),
(14, 89, 8),
(15, 89, 10),
(16, 89, 14),
(17, 89, 16),
(18, 89, 12),
(19, 89, 18),
(20, 89, 20),
(21, 89, 22),
(22, 90, 28),
(23, 90, 32),
(24, 91, 2),
(25, 91, 12),
(26, 91, 22),
(27, 91, 14),
(28, 91, 28),
(29, 82, 22),
(30, 82, 10),
(31, 82, 10),
(32, 82, 20),
(33, 82, 22),
(34, 82, 10),
(35, 82, 22),
(36, 82, 20),
(37, 82, 2),
(38, 82, 10),
(39, 82, 22),
(40, 82, 20),
(41, 95, 18),
(42, 95, 42),
(43, 95, 16),
(44, 82, 10),
(45, 82, 22),
(46, 82, 20),
(47, 82, 2),
(48, 82, 10),
(49, 82, 22),
(50, 82, 20),
(51, 82, 2),
(52, 82, 10),
(53, 82, 22),
(54, 82, 20),
(55, 82, 2),
(56, 82, 42),
(57, 82, 10),
(58, 82, 22),
(59, 82, 20),
(60, 82, 2),
(61, 88, 2),
(62, 88, 6),
(63, 88, 10),
(64, 88, 2),
(65, 88, 10),
(66, 88, 6),
(67, 88, 2),
(68, 88, 6),
(69, 88, 10),
(70, 88, 2),
(71, 88, 6),
(72, 88, 10),
(73, 88, 28),
(74, 88, 32),
(75, 88, 28),
(76, 88, 32),
(77, 88, 2),
(78, 88, 6),
(79, 88, 10),
(80, 88, 28),
(81, 88, 32),
(82, 88, 6),
(83, 88, 2),
(84, 88, 10),
(85, 88, 32),
(86, 88, 28),
(87, 88, 2),
(88, 88, 6),
(89, 88, 10),
(90, 88, 28),
(91, 88, 32),
(92, 90, 28),
(93, 90, 32),
(94, 88, 2),
(95, 88, 6),
(96, 88, 10),
(97, 88, 28),
(98, 88, 32),
(99, 88, 2),
(100, 88, 6),
(101, 88, 10),
(102, 88, 28),
(103, 88, 32),
(104, 88, 2),
(105, 88, 6),
(106, 88, 10),
(107, 88, 28),
(108, 88, 32),
(109, 88, 6),
(110, 88, 2),
(111, 88, 10),
(112, 88, 28),
(113, 88, 32),
(114, 88, 2),
(115, 88, 6),
(116, 88, 10),
(117, 88, 28),
(118, 88, 32),
(119, 88, 2),
(120, 88, 6),
(121, 88, 10),
(122, 88, 28),
(123, 88, 32),
(124, 88, 2),
(125, 88, 6),
(126, 88, 10),
(127, 88, 32),
(128, 88, 28),
(129, 88, 2),
(130, 88, 6),
(131, 88, 10),
(132, 88, 28),
(133, 88, 32),
(141, 98, 2),
(142, 98, 12),
(143, 98, 22),
(144, 98, 8),
(145, 98, 42),
(146, 98, 10),
(147, 90, 28),
(148, 90, 32),
(149, 88, 2),
(150, 88, 6),
(151, 88, 10),
(152, 88, 28),
(153, 88, 32),
(154, 90, 28),
(155, 90, 32),
(158, 90, 28),
(159, 90, 32),
(160, 90, 42),
(161, 90, 28),
(162, 90, 32),
(163, 88, 12),
(164, 88, 2),
(165, 88, 6),
(166, 88, 10),
(167, 88, 28),
(168, 88, 32),
(169, 100, 24),
(170, 100, 26),
(171, 100, 50),
(172, 101, 36),
(173, 101, 14),
(174, 101, 8),
(175, 102, 51),
(176, 102, 52),
(177, 102, 50),
(178, 102, 16),
(179, 103, 14),
(180, 103, 12),
(181, 103, 16),
(182, 103, 53),
(183, 104, 16),
(184, 104, 14),
(185, 104, 24),
(186, 104, 18),
(187, 105, 22),
(188, 105, 53),
(189, 105, 47),
(190, 105, 30),
(191, 105, 12),
(192, 88, 2),
(193, 88, 6),
(194, 88, 10),
(195, 88, 28),
(196, 88, 12),
(197, 88, 32),
(198, 90, 28),
(199, 90, 32),
(200, 90, 42),
(203, 88, 10),
(204, 88, 28),
(205, 88, 12),
(206, 88, 32),
(210, 110, 2),
(211, 110, 12);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `user_id` int(11) NOT NULL,
  `user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_passwd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`user_id`, `user_name`, `user_lastname`, `user_email`, `user_passwd`, `user_avatar`) VALUES
(22, 'alejandro', 'barrios', 'ale@dh.com', '$2b$10$rfw.Qnf2BFQujRxLrTVDCOquPGbywaUuDmscw11I///eYOTSvY76O', 'avatar1586718790623.jpg'),
(33, 'gonzalo', 'garcia', 'gonzalo@dh.com', '$2b$10$x.vHx3hiPkJV2cFA9BD7dumZJt6BAtUVzojrv1C6tZcEFnvEbEzBy', 'user_avatar1584213256160.PNG'),
(61, 'terry', 'crews', 'terryyogurt@gmail.com', '$2b$10$Cqvqq.KDW1TSSO2hmmXA4OVoBLnJJT.Z20eTCb.tnIX5a.58yVS6G', 'user_avatar1584667062266.jpg'),
(62, 'Noelia', 'Sempiti', 'noe@gmail.com', '$2b$10$O.E167411OfBkn0Ebin86OhlwdpQCGEnY7aW/tOr34WETSK.NCA/S', 'user_avatar1584809861460.PNG'),
(63, 'ale', 'barrios', 'ale@prueba.com', '$2b$10$IkuRmHauJ14nSbiAi5JzXu7jdf0WFCU7ZmswXjQ9p3A9Y4m6jE5DW', 'user_avatar1586996681262.jpg');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_cv`
--

CREATE TABLE `clientes_cv` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_dni` int(11) DEFAULT NULL,
  `user_datebirth` date DEFAULT NULL,
  `user_gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_civilstate` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_phone` int(11) DEFAULT NULL,
  `user_city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_position_level` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_position_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_git` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_stack` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_lang` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_lang_level` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_work_sit` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_work_wish` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_wish_area` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_salary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_work_location` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes_cv`
--

INSERT INTO `clientes_cv` (`id`, `user_id`, `user_dni`, `user_datebirth`, `user_gender`, `user_civilstate`, `user_phone`, `user_city`, `user_position`, `user_position_level`, `user_position_description`, `user_git`, `user_website`, `user_stack`, `user_lang`, `user_lang_level`, `user_work_sit`, `user_work_wish`, `user_wish_area`, `user_salary`, `user_work_location`) VALUES
(6, 22, 95677818, '1994-05-24', 'H', 'SOL', 1127508104, 'CABA', 'Programador', 'Jr', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'alejandrodk', 'www.alejandrodk.com', 'alejandrodk', 'Frances', '', 'employed', 'Desarrollador Front End', 'Desarrollo Web', '99999', 'CAP'),
(7, 61, 95678954, '2020-03-03', 'H', 'CAS', 1124563598, 'CO', 'Diseñador UX / UI', 'Sr', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'terryyogurt', 'www.terry.com', 'terryyogurt', 'ingles', 'NAT', '', 'Diseñador Front End', 'Desarrollo Web', '9999999', 'CAP'),
(8, 62, 35361111, NULL, 'Mujer', 'Soltero', 45554601, 'Ciudad Autónoma de Buenos Aires', 'Profesora de Programación', 'Sr', 'Profesora de informatica. Enseñanza de visual basic en colegios secundarios.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_education`
--

CREATE TABLE `clientes_education` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_career` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_institution` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_career_title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_career_since` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_career_to` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_career_description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes_education`
--

INSERT INTO `clientes_education` (`id`, `user_id`, `user_career`, `user_institution`, `user_career_title`, `user_career_since`, `user_career_to`, `user_career_description`) VALUES
(6, 22, '', 'Digital House', 'Desarrollador web Full Stack', '2020-01-28', '2020-04-29', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su'),
(8, 61, 'universitario', 'MIT', 'Ingeniero en sistemas', '2020-03-03', '2020-03-29', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has su'),
(9, 22, '', '', '', '', '', ''),
(10, 22, '', '', '', '', '', ''),
(11, 22, '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes_experience`
--

CREATE TABLE `clientes_experience` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `user_cmp_experience` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_cmp_position` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `user_cmp_experience_since` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT 'Sin Experiencia',
  `user_cmp_experience_to` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_spanish_ci DEFAULT 'Sin Experiencia',
  `user_experience_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes_experience`
--

INSERT INTO `clientes_experience` (`id`, `user_id`, `user_cmp_experience`, `user_cmp_position`, `user_cmp_experience_since`, `user_cmp_experience_to`, `user_experience_description`) VALUES
(1, 22, 'ML', 'Desarrollador', '2019-10-17', '2020-03-20', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '),
(3, 61, 'Terry INC', 'Diseñador UX / UI', 'Sin Experiencia', 'Sin Experiencia', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '),
(4, 22, 'ML', 'Desarrollador', '2019-10-17', '2020-03-20', ''),
(5, 22, 'ML', 'Desarrollador', '2019-10-17', '2020-03-20', ''),
(6, 22, 'ML', 'Desarrollador', '2019-10-17', '2020-03-20', ''),
(7, 62, 'Colegio Mater', 'Docente', '2015-01-01', '2020-12-31', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cli_notificaciones`
--

CREATE TABLE `cli_notificaciones` (
  `id` int(10) UNSIGNED NOT NULL,
  `cli_id` int(11) NOT NULL,
  `notification_name` enum('novedades','recomendados','destacados','resumen') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cli_notificaciones`
--

INSERT INTO `cli_notificaciones` (`id`, `cli_id`, `notification_name`) VALUES
(14, 22, 'resumen'),
(16, 22, 'novedades');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cmpFavoritos`
--

CREATE TABLE `cmpFavoritos` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) NOT NULL,
  `cmp_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `cmpFavoritos`
--

INSERT INTO `cmpFavoritos` (`id`, `user_id`, `cmp_id`) VALUES
(7, 22, 3),
(8, 22, 4),
(9, 22, 7),
(11, 33, 3),
(12, 33, 5),
(13, 62, 3),
(14, 62, 5),
(15, 62, 8),
(16, 61, 3),
(17, 61, 8),
(18, 22, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cmp_notificaciones`
--

CREATE TABLE `cmp_notificaciones` (
  `id` int(11) NOT NULL,
  `cmp_id` int(11) NOT NULL,
  `notification_name` enum('recomendados','destacados','resumen','novedades') COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `empresas`
--

CREATE TABLE `empresas` (
  `id` int(11) NOT NULL,
  `cmp_user_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmp_user_lastname` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmp_user_gender` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_user_dni` int(11) DEFAULT NULL,
  `cmp_user_datebirth` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_user_email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmp_user_passwd` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmp_user_phone` int(11) DEFAULT NULL,
  `cmp_user_city` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmp_cuit` int(11) NOT NULL,
  `cmp_tel` int(11) DEFAULT NULL,
  `cmp_sector` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cmp_website` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_linkedin` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_facebook` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_instagram` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_avatar` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cmp_description` text COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `empresas`
--

INSERT INTO `empresas` (`id`, `cmp_user_name`, `cmp_user_lastname`, `cmp_user_gender`, `cmp_user_dni`, `cmp_user_datebirth`, `cmp_user_email`, `cmp_user_passwd`, `cmp_user_phone`, `cmp_user_city`, `cmp_name`, `cmp_cuit`, `cmp_tel`, `cmp_sector`, `cmp_website`, `cmp_linkedin`, `cmp_facebook`, `cmp_instagram`, `cmp_avatar`, `cmp_description`) VALUES
(3, 'Federico', 'Garcia', 'H', 35362016, '1991-02-20', 'fede@dh.com.ar', '$2b$12$tBzkREtmm3RWb1kjgUyQHeAb4yGZoYrW08APRoaN9X.IGV1Li7MzS', 45554601, 'CABA', 'Digital House', 2147483647, 45554601, 'Tecnología', 'www.digitalhouse.com.ar', 'in/digitalhouse', 'digital-house', '@digitalhouse', 'cmp_avatar1583194603128.png', '   Empresa dedicada a enseñar programación'),
(4, 'Alejandro', 'Barrios', 'H', 12345678, '1991-02-20', 'ale@ml.com', '$2b$12$g4/Jq7XmlF6yBwS5lDgA4O0apA1wlc371Xjt3pIdIN29RfxQnnBzW', 45554601, 'CABA', 'Mercado Liebre', 2147483647, 1127508104, 'E Commerce', 'www.mercadoliebre.com', 'Mercadoliebrelatam', 'mercadoliebre', 'mercadoliebre', 'avatar1586997022148.png', '   Ecommerce lider en latino américa en el sector de ventas.'),
(5, 'Pepito', 'Perez', NULL, NULL, NULL, 'pepe@trivago.com', '$2b$12$TuUUIxvr73kPdKJVQtb8lO7EDIBhQ2Pxib1VPsO1Vgcy7SGx9SCYq', NULL, NULL, 'Trivago', 2147483647, 1655165655, 'Viajes y Turismo', 'www.trivago.com', 'trivadoLkd', 'trivagolatam', 'trivagolatam', 'cmp_avatar1581823249260.png', 'Encuentra tu hotel más barato con trivago!'),
(6, 'Forrest', 'Gump', NULL, NULL, NULL, 'forest@despegar.com', '$2b$12$ou9Q6z3M24fRFPw9j.Wv4enyP3wOzmVX2i0JiHJ5uG.S4LnWCLefa', NULL, NULL, 'Despegar', 125452829, 1124509853, 'Viajes y Turismo', 'www.despegar.com', 'despegarlat', 'despegarlatam', 'despegar', 'cmp_avatar1581873771584.jpg', 'Empresa líder en latino américa en el sector de viajes y turismo'),
(7, 'alejandro', 'barrios', NULL, NULL, NULL, 'ale@fb.com', '$2b$12$DOxwy2qkF4rR2xBHC3S9QOvRwKcy.gvz1XdBLtZneODEd8Es9sJAu', NULL, NULL, 'Facebook', 2147483647, 1123458701, 'Tecnología', 'www.facebook.com', NULL, NULL, NULL, 'cmp_avatar1584825903008.png', 'Red social'),
(8, 'Alejandro', 'Barrios', NULL, NULL, NULL, 'ale@falabella.com', '$2b$12$uK.hDYufVc.Cr9ku3.Jt5eBfIqRflny9mLl/JdDhk7yXRDJCNkRNC', NULL, NULL, 'Falabella', 51525289, 1124569852, 'Retail', 'www.falabella.com', NULL, NULL, NULL, 'cmp_avatar1584826213134.jpg', 'Falabella es una tienda por departamentos chilena fundada en 1889'),
(9, 'Alejandro', 'Barrios', NULL, NULL, NULL, 'ale@oracle.com', '$2b$12$Cqm2eV3Lwva4uIB5FepBk.My/ofES2knY1iyOkYUo7t1.QufpGlwi', NULL, NULL, 'Oracle LATAM', 255561516, 1135687425, 'Software', 'www.oracle.com', NULL, NULL, NULL, 'cmp_avatar1584826730949.jpg', 'compañía especializada en el desarrollo de soluciones de nube y locales.'),
(10, 'Alejandro', 'Barrios', NULL, NULL, NULL, 'ale@garbarino.com', '$2b$12$ENYaM3FbVbPNWoXIBRiV9.2hPfHlJhGoTCM2D7L6mgwZv.JtL3jHa', NULL, NULL, 'Garbarino', 123456789, 1135687425, 'Retail', 'www.garbarino.com.ar', NULL, NULL, NULL, 'cmp_avatar1584827070966.png', 'compañía argentina dedicada principalmente al comercio.'),
(11, 'alejandro', 'barrios', NULL, NULL, NULL, 'ale@tripadvisor.com', '$2b$12$xAjNS9TBxddUgQ.iSzAa5eaFZowMgXpxfAnu5KoJ9gdVnSazx.N5e', NULL, NULL, 'Trip Advisor LATAM', 12365489, 1154875236, 'Turismo', 'www.tripadvisor.com', NULL, NULL, NULL, 'cmp_avatar1584827626303.png', 'Empresa lider en turismo a nivel mundial.'),
(12, 'kasdlkasjlk', 'lkasjdlkajldk', NULL, NULL, NULL, 'asdalsqklas@lkasjdl.com', '$2b$12$pP4PUw4Xhw7aimxHcgb1KOd2WWXYFNt4MV8du8bm68uaLxbKJpxyi', NULL, NULL, 'aksjdlaksj', 0, 2147483647, 'kajsldkaj', 'aksjdlka', NULL, NULL, NULL, 'cmp_avatar1584855150875.PNG', 'asdas'),
(13, 'kmsdlkajslkdj', 'lkasjldkajsl', NULL, NULL, NULL, 'lkalksdjlaq@alksdj.com', '$2b$12$qNXcldmslEIg159WKRy/NeNV84kfB/hZPYmWJrDFIvl58qV88La36', NULL, NULL, 'lkajsdlkajs', 654654, 6546546, 'akdalsk', 'kasdlkaj', NULL, NULL, NULL, 'cmp_avatar1584855220507.png', ''),
(14, 'kdjlsdkjlfksj', 'ksjlfksjdlfksj', NULL, NULL, NULL, 'lksjdflksjdlf@jdsfjlks.com', '$2b$12$Raf3ghNqx5Q9Zu2RQAP0busoQi8yNdIx8aU6LoB.yr9DfpwYCsVuC', NULL, NULL, 'slkdjflskdj', 53135456, 6546546, '6546546', 'ksdfjldksjfl', NULL, NULL, NULL, 'cmp_avatar1584855491001.png', 'lskdjfldsk');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int(11) NOT NULL,
  `adv_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `favoritos`
--

INSERT INTO `favoritos` (`id`, `adv_id`, `user_id`) VALUES
(49, 89, 61),
(61, 95, 22),
(63, 98, 33),
(64, 98, 33),
(65, 88, 33),
(66, 82, 33),
(67, 101, 22);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `postulantes`
--

CREATE TABLE `postulantes` (
  `id` int(11) NOT NULL,
  `adv_id` int(11) NOT NULL,
  `cli_id` int(11) NOT NULL,
  `visto` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `postulantes`
--

INSERT INTO `postulantes` (`id`, `adv_id`, `cli_id`, `visto`) VALUES
(21, 88, 61, '1'),
(22, 90, 22, '1'),
(23, 91, 22, NULL),
(24, 89, 62, NULL),
(25, 88, 62, '1'),
(29, 82, 22, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `SequelizeMeta`
--

CREATE TABLE `SequelizeMeta` (
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `SequelizeMeta`
--

INSERT INTO `SequelizeMeta` (`name`) VALUES
('20200131183834-Empresa-migration.js'),
('20200203034603-Anuncio-migration.js'),
('20200203040020-skills-migration.js'),
('20200203040021-anuncio_skill-migration.js'),
('20200203040915-cliente-migration.js'),
('20200203040916-favorito_user-migration.js'),
('20200203041114-postulante-migration.js'),
('20200203041650-user_skill-migration.js'),
('20200203042023-clientes_educ-migration.js'),
('20200203042319-clientes_cv-migration.js'),
('20200203042846-clientes_exp-migration.js');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `skills`
--

CREATE TABLE `skills` (
  `skill_id` int(11) NOT NULL,
  `skill_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `skill_icon` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `skills`
--

INSERT INTO `skills` (`skill_id`, `skill_name`, `skill_icon`) VALUES
(2, 'ReactJs', 'fab fa-react'),
(6, 'NodeJs', 'fab fa-node'),
(8, 'HTML', 'fab fa-html5'),
(10, 'CSS', 'fab fa-css3-alt'),
(12, 'Javascript', 'fab fa-js-square'),
(14, 'MySQL', NULL),
(16, 'Microsoft SQL', NULL),
(18, '.NET', NULL),
(20, 'Mongo', NULL),
(22, 'JAVA', NULL),
(24, 'C', NULL),
(26, 'C++', NULL),
(28, 'React Native', NULL),
(30, 'Angular', NULL),
(32, 'Angular Native', NULL),
(34, 'SASS', NULL),
(36, 'PHP', NULL),
(38, 'Laravel', NULL),
(40, 'Swift', NULL),
(41, 'Desarrollo Web', NULL),
(42, 'ORM', NULL),
(43, 'UX / UI', NULL),
(44, 'Full Stack', NULL),
(45, 'Web App', NULL),
(46, 'Express', 'fas fa-code'),
(47, 'GIT', 'fab fa-git-alt'),
(49, 'Vue.js', NULL),
(50, 'AWS', NULL),
(51, 'Python', NULL),
(52, 'I.A.', NULL),
(53, 'SQL', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user_skill`
--

CREATE TABLE `user_skill` (
  `id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `skill_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `user_skill`
--

INSERT INTO `user_skill` (`id`, `user_id`, `skill_id`) VALUES
(31, 61, 10),
(32, 61, 43),
(33, 61, 8),
(34, 61, 8),
(76, 22, 6),
(77, 22, 8),
(78, 62, 18),
(83, 22, 47),
(86, 22, 12),
(89, 22, 14),
(93, 63, 6),
(94, 63, 12);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `anuncios_ibfk_1` (`cmp_id`);

--
-- Indices de la tabla `anuncio_skill`
--
ALTER TABLE `anuncio_skill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `anuncio_skill_ibfk_1` (`anuncio_id`),
  ADD KEY `anuncio_skill_ibfk_2` (`skill_id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- Indices de la tabla `clientes_cv`
--
ALTER TABLE `clientes_cv`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clientes_cv_ibfk_1` (`user_id`);

--
-- Indices de la tabla `clientes_education`
--
ALTER TABLE `clientes_education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clientes_education_ibfk_1` (`user_id`);

--
-- Indices de la tabla `clientes_experience`
--
ALTER TABLE `clientes_experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clientes_experience_ibfk_1` (`user_id`);

--
-- Indices de la tabla `cli_notificaciones`
--
ALTER TABLE `cli_notificaciones`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cliNotificaciones` (`cli_id`);

--
-- Indices de la tabla `cmpFavoritos`
--
ALTER TABLE `cmpFavoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cmpFavoritos_ibfk1` (`cmp_id`),
  ADD KEY `cmpFavoritos_ibfk2` (`user_id`);

--
-- Indices de la tabla `cmp_notificaciones`
--
ALTER TABLE `cmp_notificaciones`
  ADD KEY `cmpNofiicaciones` (`cmp_id`);

--
-- Indices de la tabla `empresas`
--
ALTER TABLE `empresas`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cmp_user_email` (`cmp_user_email`);

--
-- Indices de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `postulantes`
--
ALTER TABLE `postulantes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `postulantes_ibfk_1` (`adv_id`),
  ADD KEY `postulantes_ibfk_2` (`cli_id`);

--
-- Indices de la tabla `SequelizeMeta`
--
ALTER TABLE `SequelizeMeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`skill_id`);

--
-- Indices de la tabla `user_skill`
--
ALTER TABLE `user_skill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_skill_ibfk_1` (`user_id`),
  ADD KEY `user_skill_ibfk_2` (`skill_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=111;

--
-- AUTO_INCREMENT de la tabla `anuncio_skill`
--
ALTER TABLE `anuncio_skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=212;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;

--
-- AUTO_INCREMENT de la tabla `clientes_cv`
--
ALTER TABLE `clientes_cv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `clientes_education`
--
ALTER TABLE `clientes_education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `clientes_experience`
--
ALTER TABLE `clientes_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `cli_notificaciones`
--
ALTER TABLE `cli_notificaciones`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT de la tabla `cmpFavoritos`
--
ALTER TABLE `cmpFavoritos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=68;

--
-- AUTO_INCREMENT de la tabla `postulantes`
--
ALTER TABLE `postulantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `skills`
--
ALTER TABLE `skills`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `user_skill`
--
ALTER TABLE `user_skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=95;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD CONSTRAINT `anuncios_ibfk_1` FOREIGN KEY (`cmp_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `anuncio_skill`
--
ALTER TABLE `anuncio_skill`
  ADD CONSTRAINT `anuncio_skill_ibfk_1` FOREIGN KEY (`anuncio_id`) REFERENCES `anuncios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `anuncio_skill_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `clientes_cv`
--
ALTER TABLE `clientes_cv`
  ADD CONSTRAINT `clientes_cv_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `clientes_education`
--
ALTER TABLE `clientes_education`
  ADD CONSTRAINT `clientes_education_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `clientes_experience`
--
ALTER TABLE `clientes_experience`
  ADD CONSTRAINT `clientes_experience_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `cli_notificaciones`
--
ALTER TABLE `cli_notificaciones`
  ADD CONSTRAINT `cliNotificaciones` FOREIGN KEY (`cli_id`) REFERENCES `clientes` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `cmpFavoritos`
--
ALTER TABLE `cmpFavoritos`
  ADD CONSTRAINT `cmpFavoritos_ibfk1` FOREIGN KEY (`cmp_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `cmpFavoritos_ibfk2` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `cmp_notificaciones`
--
ALTER TABLE `cmp_notificaciones`
  ADD CONSTRAINT `cmpNofiicaciones` FOREIGN KEY (`cmp_id`) REFERENCES `empresas` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `postulantes`
--
ALTER TABLE `postulantes`
  ADD CONSTRAINT `postulantes_ibfk_1` FOREIGN KEY (`adv_id`) REFERENCES `anuncios` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `postulantes_ibfk_2` FOREIGN KEY (`cli_id`) REFERENCES `clientes` (`user_id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `user_skill`
--
ALTER TABLE `user_skill`
  ADD CONSTRAINT `user_skill_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `user_skill_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
