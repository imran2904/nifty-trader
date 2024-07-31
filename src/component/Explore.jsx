import arrow from "../assets/arrow_right_alt.png";
import "./Custome.css";
const Explore = () => {
  return (
    <div className="justify-center mx-7 text-center mt-7">
      <h1 className="text-2xl font-bold mb-3">
        THE ALTIMATE DESTINATION FOR STOCK MARKET INSIGHT
      </h1>
      <p>
        Join 1 million Traders& Investors Who Trust Nifty Trader For Smart
        Trading & Real Time Stock Insights.
      </p>
      <div className="inline-block mt-7">
        <button className="group w-56 border border-slate-400 flex justify-between items-center py-2 px-4">
          Explore Features
          <img className="ml-2 rotate-arrow" src={arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  );
};

export default Explore;
