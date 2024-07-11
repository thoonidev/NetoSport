import React, { useState } from "react";
import qsImage01 from "../images/calidad.jpg";
import qsImage02 from "../images/mision.jpg";
import qsImage03 from "../images/vision.jpg";
import Menu from "../components/Menu/Menu";
import Promocion from "../components/Promocion/Promocion";
import Marcas from "../components/Marcas/Marcas";
import Galeria from "../components/Galeria/Galeria";
import Servicios from "../components/Servicios/Servicios";

export const Nosotros = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [countProducts, setCountProducts] = useState(0);
  return (
    <>
      <Menu
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />

      <Promocion
        imagenURL={qsImage01}
        titulo="Compromiso con la Calidad"
        texto="En Neto Sport, la calidad es nuestra prioridad número uno. Seleccionamos cuidadosamente cada producto que ofrecemos en nuestra tienda para asegurarnos de que cumple con los estándares más altos de durabilidad y rendimiento. Trabajamos con las principales marcas de la industria para garantizar que nuestros clientes tengan acceso a los últimos avances en tecnología y diseño en el mundo del fútbol."
        mostrarBoton={false}
      />

      <Marcas />

      <Promocion
        imagenURL={qsImage02}
        titulo="Nuestra Misión"
        texto="Queremos fomentar el amor por el fútbol y equipar a los futbolistas de todas las edades con productos de alta calidad que les ayuden a alcanzar su máximo potencial en el campo de juego. Ya sea que seas un jugador principiante que está dando sus primeros pasos en el mundo del fútbol o un profesional experimentado, estamos aquí para satisfacer todas tus necesidades futbolísticas."
        mostrarBoton={false}
      />

      <Galeria />

      <Promocion
        imagenURL={qsImage03}
        titulo="Nuestra Visión"
        texto="Queremos convertirnos en el destino definitivo para todos los amantes del fútbol, ofreciendo una amplia gama de productos innovadores y de tendencia que inspiren la pasión por el juego. Queremos ser reconocidos por la calidad, la autenticidad y el servicio excepcional que ofrecemos a nuestra comunidad de clientes, estableciendo NetoSport como un símbolo de excelencia en el futbol."
        mostrarBoton={false}
      />

      <Servicios />
    </>
  );
};

export default Nosotros;
