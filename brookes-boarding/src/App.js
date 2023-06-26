import "./App.css";
import Content from "./Components/Content/Content";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import PicCarousel from "./Components/PicCarousel/PicCarousel";

function App() {
  return (
    <div className="">
      <Header></Header>
      <Hero></Hero>
      <Content></Content>
      <PicCarousel></PicCarousel>
    </div>
  );
}

export default App;
