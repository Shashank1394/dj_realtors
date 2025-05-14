import Header from "./components/header";
import About from "./components/home/about";
import Clients from "./components/home/clients";
import HomePage from "./components/home/home";
import Verticals from "./components/home/verticals";

const Home = () => {
  return (
    <>
      <HomePage />
      <Verticals />
      <About />
      <Clients />
    </>
  );
};

export default Home;
