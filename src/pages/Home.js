import Navbar from "../components/Navbar";
import style from "../stylesheets/Home.module.scss";
import { Card } from "primereact/card";
import BasicCard from "../components/BasicCard";

const Home = () => {
  return (
    <div className={style.homeWrapper}>
    <Navbar />
      <div className={style.homeHeader}>DnD Generate Logo</div>
      <div className={style.homeCardWrapper}>
        <BasicCard />
        {/* <BasicCard />
        <BasicCard /> */}
        </div>
    </div>
  );
};

export default Home;
