import React, { useState } from "react";
import Menu from "../components/Menu/Menu";
import Ofertas from "../components/Ofertas/Ofertas";
import Destacados from "../components/Destacados/Destacados";
import Promocion from "../components/Promocion/Promocion";
import Slider from "../components/Slider/Slider";
import Vendidos from "../components/Vendidos/Vendidos";
import Novedades from "../components/Novedades/Novedades";
import { data } from "../components/Productos/data";
import qsImage from "../images/qs.png";
import image1 from "../images/promocion01.png";
import image2 from "../images/promocion02.jpg";
import image3 from "../images/promocion03.jpg";
import image4 from "../images/promocion04.jpg";

const images = [image1, image2, image3, image4];

export const Inicio = () => {
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

      <Ofertas />

      <Destacados
        /*productList={data}*/
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />

      <Promocion
        imagenURL={qsImage}
        titulo="Neto Sport"
        texto="Somos apasionados por el fútbol y estamos comprometidos en proporcionar a los aficionados y jugadores de fútbol de todas las edades la mejor experiencia posible. Nuestro equipo de expertos en fútbol está dispuesto a ofrecer asesoramiento y recomendaciones para garantizar que encuentres exactamente lo que necesitas. "
      />

      <Slider images={images} />

      <Vendidos
        title="Lo más vendido"
        description="Productos con mayor preferencia"
        productList={data}
        allProducts={allProducts}
        setAllProducts={setAllProducts}
        total={total}
        countProducts={countProducts}
        setCountProducts={setCountProducts}
        setTotal={setTotal}
      />

      <Novedades />
    </>
  );
};

export default Inicio;
