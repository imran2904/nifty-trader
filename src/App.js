import "./App.css";
import Header from "./component/Header";
import ScrollImage from "./component/ScrollImage";
import Screener from "./component/Screener";
import Banner from "./component/Banner";
import Testimonial from "./component/Testimonial";
import Pricing from "./component/Pricing";
import FAQ from "./component/FAQ";
import Trial from "./component/Trial";
import Footer from "./component/Footer";
import Explore from "./component/Explore";

function App() {
  return (
    <div className="mx-auto">
      <Header></Header>
      <Explore></Explore>
      <ScrollImage></ScrollImage>
      <Screener></Screener>
      <Banner></Banner>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <FAQ></FAQ>
      <Trial></Trial>
      <Footer></Footer>
    </div>
  );
}

export default App;
