import { Link } from "react-router-dom";
import { useContext } from "react";
import { StatsContext } from "../context/StatsProvider";
import SingleToday from "./SingleToday";
import Navbar from "./Navbar";

const StatsToday = () => {
  const { todayStats } = useContext(StatsContext);

  return (
    <><Navbar /><div className="container mx-auto pb-20">
      <h2 className="mb-6 pl-5 text-2xl font-bold text-neutral-darkTheme-desaturatedBlue md:pl-0">
        Overview - Today
      </h2>
      <div className="stats-wrapper">
        {todayStats.map((stat) => {
          const { id } = stat;
          return <SingleToday key={id} stat={stat} />;
        })}
      </div>
    </div></>
  );
};

export default StatsToday;
