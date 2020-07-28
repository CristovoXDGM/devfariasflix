import React from 'react';
import Menu from './components/Menu';
import BannerMain from "./components/BannerMain"
import dadosIniciais from "./components/data/dados_iniciais.json"
import Carousel from "./components/Carousel"
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
      <Menu />

      <BannerMain url={dadosIniciais.categorias[0].videos[0].url} videoTitle={dadosIniciais.categorias[0].videos[0].titulo}   ></BannerMain>
      <Carousel category={dadosIniciais.categorias[0]} ></Carousel>
      <Carousel category={dadosIniciais.categorias[1]} ></Carousel>
      <Carousel category={dadosIniciais.categorias[2]} ></Carousel>
      <Carousel category={dadosIniciais.categorias[3]} ></Carousel>
      <Carousel category={dadosIniciais.categorias[4]} ></Carousel>
      <Carousel category={dadosIniciais.categorias[5]} ></Carousel>
      <Footer />

    </div>
  );
}

export default App;
