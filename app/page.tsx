import Header from "./components/header";
import About from "./components/home/about";
import Ciril from "./components/home/ciril";
import Clients from "./components/home/clients";
import HomePage from "./components/home/home";
import Verticals from "./components/home/verticals";

const Home = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Verticals />
      <About />
      <Clients />
      <Ciril />
    </>
  );
};

export default Home;
