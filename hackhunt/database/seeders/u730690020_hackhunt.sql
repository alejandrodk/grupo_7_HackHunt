-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-03-2020 a las 02:46:55
-- Versión del servidor: 10.2.30-MariaDB
-- Versión de PHP: 7.2.26

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
  `adv_salary` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `adv_advantage` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `anuncios`
--

INSERT INTO `anuncios` (`id`, `cmp_id`, `adv_publication`, `adv_title`, `adv_description`, `adv_date_contract`, `adv_area`, `adv_location`, `adv_position`, `adv_working_day`, `adv_salary`, `adv_advantage`, `created_at`, `updated_at`) VALUES
(82, 3, '12/2/2020', 'Diseñador Grafico', 'Nos encontramos en la busqueda de un diseñador grafico con al menos 3 años de experiencia en el puesto.', NULL, 'Diseño Grafico', 'Ciudad Autónoma de Buenos Aires', 'Diseñador', 'Full Time', '32500', 'Prepaga familiar, tarjeta 365, home office.', NULL, NULL),
(88, 4, '02/16/2020', 'Desarrollador Mobile SR/Jr', 'Nos encontramos en la busqueda de desarrolladores mobile tanto JR como SR que cuenten con conocimientos en React Native y Kotlin.', '2020-03-28', 'Desarrollo Mobile', 'Córdoba', 'Desarrollador', 'A distancia', '52000', '', NULL, NULL),
(89, 5, '05/10/2020', 'IT Project Manager - Importante empresa de Turismo', 'Para importante empresa nos encontramos en búsqueda de un IT Project Manager.\r\n\r\nResponsabilidades del puesto:\r\n\r\n    Gestionar varios proyectos en simultáneo\r\n    Responder por el cumplimiento de objetivos del proyecto\r\n    Gestionar el alcance del proyecto e identificar posibles desvíos\r\n    Integrar los esfuerzos de los recursos de las distintas áreas para alcanzar los objetivos del proyecto\r\n    Registrar issues, riesgos y las solicitudes de cambios\r\n    Gestionar asignación de recursos de proyectos\r\n    Seguimiento de los costos del proyecto\r\n    Seguimiento del uso de recursos del proyecto\r\n\r\n \r\n\r\nPara aplicar a la posición será necesario contar con los siguientes skills/conocimientos:\r\n\r\n    Experiencia de más de 3 años gestionando proyectos del rubro Telecomunicaciones / IT (excluyente).\r\n    Probada experiencia gestionando proyectos externos (clientes) e internos.\r\n    Haber gestionado 4 o más proyectos en simultaneo, siendo responsable de los mismos.\r\n    Estudiante avanzado o graduado de carrera de Sistemas o a fines\r\n    Certificación PMP (deseable)', NULL, 'IT', 'Ciudad Autónoma de Buenos Aires', 'PM', 'Full Time', '85000', 'Se ofrece remuneración acorde al puesto, OSDE grupo familiar, home-office, bono anual por performance y entrenamiento/certificaciones. ', NULL, NULL),
(90, 4, '16/2/2020', 'Desarrollador Mobile SR/Jr', 'Nos encontramos en la busqueda de desarrolladores mobile tanto JR como SR que cuenten con conocimientos en React Native y Kotlin.', '2020-03-29', 'Desarrollo Mobile', 'Córdoba', 'Desarrollador', 'A distancia', '52000', '', NULL, NULL),
(91, 6, '02/16/2020', 'Desarrollador/a Java Full Stack ', 'Vos podés hacer la diferencia, ¡dejanos tu cv!  \r\n\r\nEn Randstad nos moviliza ayudar a las personas y a las organizaciones a desarrollar todo su potencial. Ese es el compromiso que asumimos como compañía en todo el mundo, un compromiso que nos impulsa a ir más allá para lograr que nuestros clientes y candidatos alcancen el éxito. ¿Cómo lo hacemos?, combinando nuestra pasión por las personas con el poder de la tecnología, creando experiencias más humanas, que nos permitan ser una fuente de inspiración y apoyo para quienes nos eligen. Porque estamos convencidos de que mejores personas hacen mejores empresas. \r\n\r\nNuestro cliente, importante empresa de desarrollo de software, necesita incorporar un Desarrollador/a Java Full Stack:\r\n\r\nConocimientos requeridos:\r\n\r\n    programación a nivel full stack utilizando tecnologías del ecosistema java y programación funcional\r\n    experiencia sobre desarrollos java para sumarse a  proyecto internacional cuyo al área de negocio es alarmas y domótica\r\n    Java\r\n    Hibernate / JPA\r\n    Spring Framework\r\n    Javascript / Typescript\r\n    Algun framework front end web: AngularJS | ReactJs | ClojureScript)\r\n    Maven\r\n    GIT\r\n    Bases de datos relacionales: Postgresql, Oracle, MySql\r\n    POO (conocimientos sólidos) y patrones de diseño.\r\n\r\nEl candidato deberá\r\n\r\n    ser un profesional o estudiante avanzado con tenga sólidos conocimientos\r\n    contar con sentido del trabajo en equipo responsabilidad, y que conozca de\r\n    metodologías ágiles y tenga interés en la investigación y aprendizaje de nuevos lenguajes de programación / frameworks.', NULL, 'Desarrollo', 'Ciudad Autónoma de Buenos Aires', 'Desarrollador Full Stack', 'Part Time', '75000', '', NULL, NULL),
(95, 3, '1/3/2020', 'Desarrolladores C#.Net // Zona Belgrano // Urgente!!! ', 'En KaizenRH nos encontramos en búsqueda de Desarrolladores C#.Net para Importante empresa de soluciones de Software.\r\n\r\nRequisitos\r\n\r\nContar con experiencia comprobable no menor a cuatro años y en las siguientes tecnologias:\r\n\r\n.Net\r\n\r\nC#\r\n\r\nBases de datos SQL/MySQL\r\n\r\nBuscamos personas con buenas relaciones interpersonales, proactiva, flexible, con capacidad para el trabajo en equipo.\r\n\r\nTareas\r\n\r\nDesarrollar productos y procesos cumpliendo con las prácticas y valores de Scrum, XP y normas propias del área de investigación y Desarrollo.\r\n\r\nBeneficios\r\n\r\nTrabajo en relación directa, efectiva y con continuidad laboral.\r\n\r\nObra Social-Prepaga OSDE 210 incluye Grupo Familiar\r\n\r\nUn día de Home Working por semana.\r\n\r\nFlex Time en las puntas\r\n\r\nCapacitación continua.\r\n\r\nFrutas los lunes\r\n\r\nMedialunas los viernes.\r\n\r\nLugar y horario de trabajo: Belgrano, CABA. De Lunes a Viernes de 09 a 18 hs ', NULL, 'Desarrollo', 'Ciudad Autónoma de Buenos Aires', 'Programador', 'Full Time', '40000', 'Frutas los lunes, Medialunas los viernes.\r\nCapacitación continua.\r\nflex time en las puntas.\r\nUn día de home working por semana.\r\nObra social Osde 210. Incluye Grupo Familiar.', NULL, NULL),
(97, 4, '03/14/2020', 'DESARROLLADOR JAVA ', 'Para empresa de servicios IT, nos encontramos en la búsqueda de estudiantes avanzados o graduados de carreras afines a sistemas, con experiencia de 1 a 2 años en dicha posición. Participara en los procesos de programación e implementación, trabajando en proyectos de todos los tamaños, punta a punta, bajo metodologías ágiles y tecnologías abiertas.\r\n\r\n ', '2020-08-06', 'IT', 'Ciudad Autónoma de Buenos Aires', 'Desarrollador', 'Full time', '160000', 'Relación de Dependencia directa con la empresa. Prepaga Osde 210. Plan familiar\r\n\r\nPolítica Salarial: Dos aumentos anuales por inflación.\r\n\r\n➔ Horarios Flexibles ➔ Home Office una vez por semana ➔ Half Day una vez al mes (Jornada de 5 hrs) ➔ Flex Friday\'s una vez al mes (Jornada de 6 hrs) ➔ Espacio de Investigación - Programa I+D Nuevas Tecnologías ➔ Plan de Carrera - Desarrollo Profesional ➔ 5 Días Extras anuales por “Dia de Estudio” ➔ Regalo por Cumpleaños. Nacimientos. Casamiento ➔ Regalo por Título Universitario y Título Intermedio.', NULL, NULL),
(98, 5, '03/14/2020', 'Desarrollador React Senior ', 'somos una empresa multinacional de tecnología presente en más de 42 países, con más de 30 años en el mercado mundial. En el 2017, en plena transformación Digital, decidimos crear Nuestro Propósito Transformador Masivo, Co- Creando Soluciones para un Futuro Mejor, pues entendemos el valor de co- crear con nuestros clientes, colaboradores, partners y comunidad. Buscamos conectar nuestro Propósito con tu Talento\r\n\r\n \r\n\r\nDescripción del puesto *\r\n\r\nResponsabilidades:\r\n\r\n    Desarrollo de Funcionalidades Nuevas y Mejoras.\r\n\r\n    Correcciones de Bugs sobre aplicativo productivo\r\n\r\n    Despliegues de Pasajes entre ambientes', '2020-05-27', 'IT', 'Córdoba', 'Desarrollador React', 'Full-time', '85000', '', NULL, NULL),
(99, 4, '14/3/2020', 'kjlkjlkjlk', 'lkñlkñlk', '2020-03-28', 'kjhkjh', 'Jujuy', 'kjkjhkj', 'kjlkjl', 'jbmbmnb', '', NULL, NULL);

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
(134, 97, 22),
(135, 97, 14),
(136, 97, 12),
(137, 97, 10),
(138, 97, 8),
(139, 97, 18),
(140, 97, 47),
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
(156, 99, 2),
(157, 99, 2),
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
(168, 88, 32);

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
(22, 'alejandro', 'barrios', 'ale@dh.com', '$2b$10$rfw.Qnf2BFQujRxLrTVDCOquPGbywaUuDmscw11I///eYOTSvY76O', 'user_avatar_default.jpg'),
(26, 'fede', 'garcia', 'fede@dh.com', '$2b$10$GSOEB5Xxf6qh7YivKfL/ceH6vhIvSD23t8MX7UIhN6D8RWZWfmskO', 'user_avatar1581223201839.png'),
(33, 'gonzalo', 'garcia', 'gonzalo@dh.com', '$2b$10$x.vHx3hiPkJV2cFA9BD7dumZJt6BAtUVzojrv1C6tZcEFnvEbEzBy', 'user_avatar1584213256160.PNG'),
(61, 'terry', 'crews', 'terryyogurt@gmail.com', '$2b$10$Cqvqq.KDW1TSSO2hmmXA4OVoBLnJJT.Z20eTCb.tnIX5a.58yVS6G', 'user_avatar1584667062266.jpg');

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
(6, 22, 95677818, '1994-05-24', 'H', 'SOL', 1127508104, 'CABA', 'Desarrollador Web Full Stack', 'Jr', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'alejandrodk', 'www.alejandrodk.com', 'alejandrodk', 'Frances', '', 'employed', 'Desarrollador Front End', 'Desarrollo Web', '99999', 'CAP'),
(7, 61, 95678954, '2020-03-03', 'H', 'CAS', 1124563598, 'CO', 'Diseñador UX / UI', 'Sr', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ', 'terryyogurt', 'www.terry.com', 'terryyogurt', 'ingles', 'NAT', '', 'Diseñador Front End', 'Desarrollo Web', '9999999', 'CAP');

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
(10, 22, '', '', '', '', '', '');

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
(1, 22, 'Digital House', 'Desarrollador', '2019-10-17', '2020-03-20', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '),
(3, 61, 'Terry INC', 'Diseñador UX / UI', 'Sin Experiencia', 'Sin Experiencia', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. '),
(4, 22, '', '', 'Sin Experiencia', 'Sin Experiencia', ''),
(5, 22, '', '', 'Sin Experiencia', 'Sin Experiencia', '');

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
(4, 'Alejandro', 'Barrios', 'H', 12345678, '1991-02-20', 'ale@ml.com', '$2b$12$g4/Jq7XmlF6yBwS5lDgA4O0apA1wlc371Xjt3pIdIN29RfxQnnBzW', 45554601, 'CABA', 'Mercado Libre', 2147483647, 1127508104, 'E Commerce', 'www.mercadolibre.com', 'Mercadolibrelatam', 'mercadolibre', 'mercadolibre', 'cmp_avatar1581816184314.png', '   Ecommerce lider en latino américa en el sector de ventas.'),
(5, 'Pepito', 'Perez', NULL, NULL, NULL, 'pepe@trivago.com', '$2b$12$TuUUIxvr73kPdKJVQtb8lO7EDIBhQ2Pxib1VPsO1Vgcy7SGx9SCYq', NULL, NULL, 'Trivago', 2147483647, 1655165655, 'Viajes y Turismo', 'www.trivago.com', 'trivadoLkd', 'trivagolatam', 'trivagolatam', 'cmp_avatar1581823249260.png', 'Encuentra tu hotel más barato con trivago!'),
(6, 'Forrest', 'Gump', NULL, NULL, NULL, 'forest@despegar.com', '$2b$12$ou9Q6z3M24fRFPw9j.Wv4enyP3wOzmVX2i0JiHJ5uG.S4LnWCLefa', NULL, NULL, 'Despegar', 125452829, 1124509853, 'Viajes y Turismo', 'www.despegar.com', 'despegarlat', 'despegarlatam', 'despegar', 'cmp_avatar1581873771584.jpg', 'Empresa líder en latino américa en el sector de viajes y turismo');

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
(41, 82, 22),
(49, 89, 61);

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
(2, 88, 22, '1'),
(5, 82, 22, NULL),
(6, 82, 22, NULL),
(7, 90, 22, '1'),
(8, 88, 26, '1'),
(9, 97, 22, NULL);

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
(47, 'GIT', 'fab fa-git-alt');

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
(1, 22, 14),
(2, 22, 8),
(3, 22, 12),
(12, 22, 6),
(15, 22, 46),
(17, 22, 42),
(23, 22, 16),
(24, 22, 8),
(30, 22, 43),
(31, 61, 10),
(32, 61, 43),
(33, 61, 8),
(34, 61, 8);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `cmp_id` (`cmp_id`);

--
-- Indices de la tabla `anuncio_skill`
--
ALTER TABLE `anuncio_skill`
  ADD PRIMARY KEY (`id`),
  ADD KEY `anuncio_id` (`anuncio_id`),
  ADD KEY `skill_id` (`skill_id`);

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
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `clientes_education`
--
ALTER TABLE `clientes_education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indices de la tabla `clientes_experience`
--
ALTER TABLE `clientes_experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

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
  ADD KEY `adv_id` (`adv_id`),
  ADD KEY `cli_id` (`cli_id`);

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
  ADD KEY `user_id` (`user_id`),
  ADD KEY `skill_id` (`skill_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anuncios`
--
ALTER TABLE `anuncios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=100;

--
-- AUTO_INCREMENT de la tabla `anuncio_skill`
--
ALTER TABLE `anuncio_skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=169;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=62;

--
-- AUTO_INCREMENT de la tabla `clientes_cv`
--
ALTER TABLE `clientes_cv`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `clientes_education`
--
ALTER TABLE `clientes_education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `clientes_experience`
--
ALTER TABLE `clientes_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `empresas`
--
ALTER TABLE `empresas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT de la tabla `postulantes`
--
ALTER TABLE `postulantes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `skills`
--
ALTER TABLE `skills`
  MODIFY `skill_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;

--
-- AUTO_INCREMENT de la tabla `user_skill`
--
ALTER TABLE `user_skill`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `anuncios`
--
ALTER TABLE `anuncios`
  ADD CONSTRAINT `anuncios_ibfk_1` FOREIGN KEY (`cmp_id`) REFERENCES `empresas` (`id`);

--
-- Filtros para la tabla `anuncio_skill`
--
ALTER TABLE `anuncio_skill`
  ADD CONSTRAINT `anuncio_skill_ibfk_1` FOREIGN KEY (`anuncio_id`) REFERENCES `anuncios` (`id`),
  ADD CONSTRAINT `anuncio_skill_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`);

--
-- Filtros para la tabla `clientes_cv`
--
ALTER TABLE `clientes_cv`
  ADD CONSTRAINT `clientes_cv_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`);

--
-- Filtros para la tabla `clientes_education`
--
ALTER TABLE `clientes_education`
  ADD CONSTRAINT `clientes_education_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`);

--
-- Filtros para la tabla `clientes_experience`
--
ALTER TABLE `clientes_experience`
  ADD CONSTRAINT `clientes_experience_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`);

--
-- Filtros para la tabla `postulantes`
--
ALTER TABLE `postulantes`
  ADD CONSTRAINT `postulantes_ibfk_1` FOREIGN KEY (`adv_id`) REFERENCES `anuncios` (`id`),
  ADD CONSTRAINT `postulantes_ibfk_2` FOREIGN KEY (`cli_id`) REFERENCES `clientes` (`user_id`);

--
-- Filtros para la tabla `user_skill`
--
ALTER TABLE `user_skill`
  ADD CONSTRAINT `user_skill_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `clientes` (`user_id`),
  ADD CONSTRAINT `user_skill_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
