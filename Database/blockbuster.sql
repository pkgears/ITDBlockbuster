-- phpMyAdmin SQL Dump
-- version 4.1.12
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 11-12-2015 a las 20:22:17
-- Versión del servidor: 5.6.16
-- Versión de PHP: 5.5.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de datos: `blockbuster`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE IF NOT EXISTS `clientes` (
  `id_cliente` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(30) NOT NULL,
  `apellido` varchar(30) NOT NULL,
  `direccion` text NOT NULL,
  `email` varchar(30) NOT NULL,
  `telefono` varchar(15) NOT NULL,
  PRIMARY KEY (`id_cliente`),
  UNIQUE KEY `telefono` (`telefono`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id_cliente`, `nombre`, `apellido`, `direccion`, `email`, `telefono`) VALUES
(1, 'César Eduardo', 'Ortíz Salazar', 'Mi casa', 'micorre@email', '123456789');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `generos`
--

CREATE TABLE IF NOT EXISTS `generos` (
  `id_genero` int(11) NOT NULL AUTO_INCREMENT,
  `genero` varchar(30) NOT NULL,
  PRIMARY KEY (`id_genero`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=16 ;

--
-- Volcado de datos para la tabla `generos`
--

INSERT INTO `generos` (`id_genero`, `genero`) VALUES
(1, 'Accion'),
(2, 'Deportes'),
(3, 'Animada'),
(4, 'Pelea'),
(5, 'Comedia'),
(6, 'Romance'),
(7, 'Terror'),
(8, 'Suspenso'),
(9, 'Infantil'),
(10, 'Series'),
(11, 'Fantasia'),
(12, 'Fantasia'),
(13, 'Aventura'),
(14, 'Ficcion'),
(15, 'Documental');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `peliculas`
--

CREATE TABLE IF NOT EXISTS `peliculas` (
  `id_pelicula` int(5) NOT NULL AUTO_INCREMENT,
  `titulo` varchar(30) NOT NULL,
  `sinopsis` text NOT NULL,
  `genero` varchar(20) NOT NULL,
  `duracion` varchar(5) NOT NULL,
  `company` varchar(20) NOT NULL,
  `director` varchar(30) NOT NULL,
  `actores` text NOT NULL,
  `ubicacion` varchar(2) NOT NULL,
  `existencia` int(2) NOT NULL,
  `disponibles` int(2) NOT NULL,
  PRIMARY KEY (`id_pelicula`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=12 ;

--
-- Volcado de datos para la tabla `peliculas`
--

INSERT INTO `peliculas` (`id_pelicula`, `titulo`, `sinopsis`, `genero`, `duracion`, `company`, `director`, `actores`, `ubicacion`, `existencia`, `disponibles`) VALUES
(1, 'Harry Potter and the Philosoph', 'El día de su 11º cumpleaños, Harry Potter (Daniel Radcliffe) descubre que es un mago y que tiene la oportunidad de estudiar en el Colegio Hogwarts de Magia y Hechicería. Una vez allí descubrirá que es una persona muy especial conocida como el niño que sobrevivió: con tan sólo un año de vida salió con vida de un ataque del tenebroso mago conocido como Lord Voldemort, el cual se debilitó. Ahora, irá descubriendo más secretos de su pasado y el de su familia junto a sus amigos Ron Weasley (Rupert Grint) y Hermione Granger (Emma Watson).', 'fantasia', '160', 'Heyday Films', 'Chris Columbus', 'Daniel Radcliffe\r\nRupert Grint\r\nEmma Watson\r\nRichard Harris\r\nMaggie Smith', 'A1', 5, 5),
(2, 'Iron Man 2', 'En Rusia, Ivan Vanko mantiene su última conversación con su padre, mientras ven como el multimillonario Tony Stark confiesa públicamente su identidad secreta como Iron Man. Ivan completamente perturbado por este suceso, crea una especie de reactor Arc similar al de Iron Man con el cual planea vengarse de Stark, ya que usa uno de los bocetos de trabajo de Stark Industries.', 'Accion', '160', 'Estudios Marvel', 'Jon Favreau', 'Robert Downey Jr.\r\nGwyneth Paltrow\r\nDon Cheadle\r\nScarlett Johansson\r\nSam Rockwell', 'C2', 5, 5),
(3, 'Capitán América: el primer ven', 'En la actualidad, unos científicos en el Ártico descubren un objeto circular congelado con un adorno rojo, blanco y azul parecido a un escudo, los científicos descubren que ahí se encontraba congelado Steve Rogers, mejor conocido como el Capitán América.', 'Accion', '134', 'Estudios Marvel', 'Joe Johnston', 'Chris Evans\r\nHugo Weaving\r\nTommy Lee Jones\r\nHayley Atwell\r\nSebastian Stan', 'A1', 3, 3),
(4, 'The Dark Knight', 'Una banda de ladrones disfrazados como payasos llevan a cabo un violento robo en uno de los bancos de la mafia de Gotham City, pero los asaltantes desconocen que entre ellos se encuentra el Joker (Heath Ledger), quien les había ordenado traicionarse y asesinarse unos a otros, con la finalidad de repartir entre menos el botín. ', 'Accion', '152', 'Legendary Pictures', 'Christopher Nolan', 'Christian Bale\r\nHeath Ledger\r\nAaron Eckhart\r\nGary Oldman', 'A1', 4, 4),
(5, 'The Conjuring', 'En 1971, Roger y Carolyn Perron (Ron Livingston y Lili Taylor) son un matrimonio que se traslada con sus cinco hijas a una granja en Harrisville. El primer día como propietarios resulta ser idílico a excepción del extraño comportamiento de su perro Sadie, el cual se niega a entrar y empieza a ladrar, por otro lado, una de las hijas rompe sin querer un tablón de la pared y descubren un sótano.', 'Terror', '112', 'The Safran Company', 'James Wan', 'Vera Farmiga\r\nPatrick Wilson\r\nRon Livingston', 'B2', 6, 6),
(6, 'El rey león', 'Simba (Matthew Broderick) es un cachorro de león y sucesor al trono de la selva, algo que no le gusta a su tío Scar y por lo que prepara un plan para ocupar el trono. Con la ayuda de tres malvadas hienas, Scar (Jeremy Irons)urde una treta en la que su hermano y rey Mufasa (James Earl Jones) muere y que provoca que Simba crea que ha sido por su culpa y decida huir a la selva, después de que las tres hienas quisieran matarlo también', 'Animada', '88', 'Walt Disney Pictures', 'Rob Minkoff', 'Matthew Broderick\r\nJeremy Irons\r\nErnie Sabella\r\nNathan Lane', 'C2', 5, 5),
(7, 'El Hobbit 3', 'La última película cerrará la épica aventura de Bilbo Bolsón, Thorin Escudo de Roble y la compañía de Enanos. Después de haber recuperado su reino del Dragón Smaug, la Compañía ha desencadenado sin quererlo una fuerza inimaginable en el mundo', 'Terror', '160', 'New Line Cinema', 'Peter Jackson', 'Ian McKellen\r\nMartin Freeman\r\nRichard Armitage\r\nKen Stott\r\nJames Nesbitt', 'E4', 5, 5),
(8, 'Los juegos del hambre: Sinsajo', 'Katniss Everdeen (Jennifer Lawrence) se encuentra en el Distrito 13, el foco de resistencia contra el Capitolio, después de acabar con los Juegos del Hambre. Bajo el liderazgo de la presidenta Coin (Julianne Moore) y con el consejo de sus amigos más leales, Katniss extiende sus alas mientras lucha por salvar a Peeta Mellark', 'Ficcion', '120', 'Lionsgate', 'Francis Lawrence', 'Jennifer Lawrence\r\nJulianne Moore\r\nJosh Hutcherson\r\nLiam Hemsworth', 'D3', 5, 5),
(9, 'Como perros y gatos', 'Sr. Tinkles es un gato persa ansioso de poder y decide encabezar un masivo movimiento felino contra el mejor amigo del hombre, el perro. Los agentes caninos de primera, que han estado protegiendo a toda la raza humana, están en apuros. Uno de sus principales perros de campo ha sido retirado del servicio y se han visto obligados a utilizar a un agente novato, un cachorro de beagle llamado Lou que tendrá que demostrar su valía en el combate contra Sr. Tinkles y su ejército de soldados bien entrenados.', 'Comedia', '87', 'Warner Bros. Picture', 'Lawrence Guterman', 'Jeff Goldblum\r\nElizabeth Perkins\r\nAlexander Pollock\r\nTobey Maguire\r\nAlec Baldwin', 'C2', 4, 4),
(10, 'Furia de titanes ', 'Perseo (Sam Worthington) es hijo de un Dios Zeus (Liam Neeson) y la esposa humana de Acrisio (Jason Flemyng), el antiguo rey de Argos. En otras palabras: Perseo es un héroe. Al enterarse de lo sucedido, Acrisio asesina a su mujer y encierra el cadáver junto al bebé recién nacido en un ataúd que arroja al mar. Por esta acción de maldad, el hombre es convertido en una bestia por los dioses. Mientras tanto, el pescador Dictis (Pete Postlethwaite) encuentra el ataúd y adopta al niño.', 'Ficcion', '135', 'Legendary Pictures', 'Louis Leterrier', 'Sam Worthington\r\nGemma Arterton\r\nMads Mikkelsen\r\nAlexa Davalos\r\nJason Flemyng', 'D1', 6, 6),
(11, 'Big Hero 6 ', 'iro Hamada es un prodigio de 14 años que vive con su hermano y tía en la ciudad ficticia de San Fransokyo (una mezcla entre San Francisco y Tokyo) que se graduó a los 13 años de la preparatoria y actualmente solo le interesan la peleas de robots en las que aunque gane, son ilegales y termina siempre en problemas. Un día, su hermano mayor, Tadashi, le muestra su mayor invento: Baymax, un robot enfermero de aspecto adorable (con la forma de un globo) programado para ayudar a las personas, tal como él queria. Hiro conoce a los amigos de su hermano: la genia de la química Honey Lemon, la ruda y veloz GoGo ', 'Animada', '100', 'Walt Disney Animatio', 'Don Hall', 'Ryan Potter\r\nScott Adsit\r\nT.J. Miller', 'C1', 3, 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rentas`
--

CREATE TABLE IF NOT EXISTS `rentas` (
  `id_renta` int(5) NOT NULL AUTO_INCREMENT,
  `id_cliente` int(5) NOT NULL,
  `id_pelicula` int(5) NOT NULL,
  `fecha_renta` varchar(10) NOT NULL,
  `fecha_entrega` varchar(15) NOT NULL,
  `entregada` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id_renta`),
  KEY `id_cliente` (`id_cliente`,`id_pelicula`),
  KEY `id_pelicula` (`id_pelicula`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `rentas`
--

INSERT INTO `rentas` (`id_renta`, `id_cliente`, `id_pelicula`, `fecha_renta`, `fecha_entrega`, `entregada`) VALUES
(1, 1, 1, '11-12-14', '2014-12-11', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ubicacion`
--

CREATE TABLE IF NOT EXISTS `ubicacion` (
  `id_ubicacion` int(11) NOT NULL AUTO_INCREMENT,
  `ubicacion` varchar(2) NOT NULL,
  PRIMARY KEY (`id_ubicacion`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=11 ;

--
-- Volcado de datos para la tabla `ubicacion`
--

INSERT INTO `ubicacion` (`id_ubicacion`, `ubicacion`) VALUES
(1, 'A1'),
(2, 'A2'),
(3, 'B1'),
(4, 'B2'),
(5, 'C1'),
(6, 'C2'),
(7, 'D1'),
(8, 'D2'),
(9, 'D3'),
(10, 'E4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE IF NOT EXISTS `usuarios` (
  `id_user` int(2) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(40) NOT NULL,
  `password` varchar(40) NOT NULL,
  PRIMARY KEY (`id_user`),
  UNIQUE KEY `usuario` (`usuario`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id_user`, `usuario`, `password`) VALUES
(1, 'cesar', 'tapw2014');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
