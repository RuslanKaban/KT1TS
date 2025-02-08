import HomeCategories from './components/Home/HomeCategories/HomeCategories';
import { HomeListProduct } from './components/Home/HomeListProducts/HomeListProducts';
import { AxiosInterceptor } from './core/http';
import HomeGrid from './components/Home/HomeGrid/HomeGrid';
import HomeHero from './components/Home/HomeHero/HomeHero';
import HomePreview from './components/Home/HomePreview/HomePreview';

export default function Home() {
  new AxiosInterceptor();

  return (
    <div>
      <HomeHero />
      <HomeGrid />
      <HomeCategories />
      <HomeListProduct />
      <HomePreview />
    </div>
  );
}
