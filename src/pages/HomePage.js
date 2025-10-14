import React from "react";
import Layout from "../layouts/Layout";
import MainSection from "../component/MainSection";
import CandleCollections from "../component/collections/CandleCollections";
import Recommendation from "../component/recommendation/Recommendations";
import WhyChooseUs from "../component/WhyChooseUs";
// import Newsletter from "../component/Newsletter";

const HomePage = () => {
  return (
    <Layout>
      <MainSection />
      <CandleCollections />
      <Recommendation />
      <WhyChooseUs />
      {/* <Newsletter /> */}
    </Layout>
  );
};

export default HomePage;
