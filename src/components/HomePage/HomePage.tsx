
import AboutSection from "./AboutSection";
import AdvertisingSpan from "./AdvertisingSpan";
import MainSection from "./MainSection";
import SaleSection from "./SaleSection";

const HomePage: React.FC = () => {
  return (
    <main>
      <AdvertisingSpan/>
      <MainSection/>
      <AboutSection/>
      <SaleSection/>
    </main>
  )
}

export default HomePage;