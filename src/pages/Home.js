import Navbar from "../components/Navbar";
import style from "../stylesheets/Home.module.scss";
import { Card } from "primereact/card";
import BasicCard from "../components/BasicCard";
import supabase from "../config/supabaseClient";
import { useEffect } from "react";

const Home = () => {
  

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from('test')
        .select()
        

           
      if (error) {
        console.log(error)
      }
      if (data) {
        console.log(data)
      }
    }
  
    fetchData()
  }, [])
  
  return (
    <div className={style.homeWrapper}>
    <Navbar />
      <div className={style.homeHeader}>DnD Generate Logo</div>
      <div className={style.homeCardWrapper}>
        <BasicCard />
        </div>
    </div>
  );
};

export default Home;
