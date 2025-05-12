import Header from "./components/header";
import About from "./components/home/about";
import HomePage from "./components/home/home";
import Verticals from "./components/home/verticals";

const Home = () => {
  return (
    <>
      <Header />
      <HomePage />
      <Verticals />
      <About />
    </>
  );
};

export default Home;
