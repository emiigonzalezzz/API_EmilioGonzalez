-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 21-08-2024 a las 21:05:12
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `market`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `articulos`
--

CREATE TABLE `articulos` (
  `id` varchar(30) NOT NULL,
  `titulo` varchar(30) NOT NULL,
  `link` varchar(255) NOT NULL,
  `foto` varchar(255) NOT NULL,
  `precio` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;

--
-- Volcado de datos para la tabla `articulos`
--

INSERT INTO `articulos` (`id`, `titulo`, `link`, `foto`, `precio`) VALUES
('MLU480879993', 'Consola Xbox Series X Xbox Ser', 'https://www.mercadolibre.com.uy/consola-xbox-series-x-xbox-series-x-1tb-standard-color-negro-2020/p/MLU16160759', 'http://http2.mlstatic.com/D_942133-MLA74651936102_022024-I.jpg', '850'),
('MLU610331588', 'Joystick Jedel Gp2 Usb Pc Negr', 'https://www.mercadolibre.com.uy/joystick-jedel-gp2-usb-pc-negro/p/MLU18711284', 'http://http2.mlstatic.com/D_903142-MLA48763613534_012022-I.jpg', '260'),
('MLU646947838', 'Volante Pedalera Logitech G29 ', 'https://www.mercadolibre.com.uy/volante-pedalera-logitech-g29-ps4-ps3-y-pc-cover-co-color-negro/p/MLU22307702', 'http://http2.mlstatic.com/D_892942-MLU72932991149_112023-I.jpg', '367'),
('MLU667663728', 'Sony Playstation 5 Slim 1tb Di', 'https://www.mercadolibre.com.uy/sony-playstation-5-slim-1tb-digital-color-blanco/p/MLU29001054', 'http://http2.mlstatic.com/D_970771-MLA73347645092_122023-I.jpg', '749'),
('MLU670260654', 'Auriculares Jbl Wave Buds Blac', 'https://www.mercadolibre.com.uy/auriculares-jbl-wave-buds-black/p/MLU24541134', 'http://http2.mlstatic.com/D_651387-MLU73885145681_012024-I.jpg', '60'),
('MLU677331428', 'Sony Slim Ps5 Con Disco + 2 Ju', 'https://www.mercadolibre.com.uy/sony-slim-ps5-con-disco-2-juegos-1tb-standard-color-blanco-2024/p/MLU35331232', 'http://http2.mlstatic.com/D_916506-MLA75435180612_042024-I.jpg', '859'),
('MLU683864252', 'Joystick Cableado Compatible X', 'https://www.mercadolibre.com.uy/joystick-cableado-compatible-xbox-one-x-xs-pc-windows-10-11/p/MLU37826751', 'http://http2.mlstatic.com/D_707394-MLU77148107801_062024-I.jpg', '2599');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `articulos`
--
ALTER TABLE `articulos`
  ADD PRIMARY KEY (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
