import Banner from "../Banner/Banner";
import RecommendedProduct from "../RecommendedProduct/RecommendedProduct";
import NewArrival from "../NewArrival/NewArrival";
import Review from "../Review/Review";
const Home = () => {
  return (
    <>
      <Banner></Banner>
      <NewArrival></NewArrival>
      <RecommendedProduct></RecommendedProduct>
      <Review></Review>
    </>
  );
};
export default Home;
