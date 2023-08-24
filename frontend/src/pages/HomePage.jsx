import React from 'react'
import Header from "../components/Layout/Header";
import Header2 from "../components/Layout/Header2";
import Hero from "../components/Route/Hero/Hero";
import BestDeals from "../components/Route/BestDeals/BestDeals";
import FeaturedProduct from "../components/Route/FeaturedProduct/FeaturedProduct";
import Sponsored from "../components/Route/Sponsored";
import Footer from "../components/Layout/Footer";
import Categories from "../components/Route/Categories/Categories";
const HomePage = () => {
  return (
    <div>
        <Header activeHeading={1} />
        <Header2 activeHeading={2}/>
        <Hero />
        <Categories />
        <BestDeals />
        <FeaturedProduct />
        <Sponsored />
        <Footer />
    </div>
  )
}

export default HomePage