import Designer from '@/components/ui/Designer';
import Hero from '@/components/ui/Hero';;
import ProductSection from '@/components/ui/ProductSection';
import PromotionsSection from '@/components/ui/PromotionsSection'
import Subscribe from '@/components/ui/Subscribe';

export default function Home() {
  return (
    <>
      <Hero />
      <PromotionsSection />
      <ProductSection />
      <Designer />
      <Subscribe />
    </>
  )
}

