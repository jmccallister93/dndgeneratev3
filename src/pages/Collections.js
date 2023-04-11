import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import style from "../stylesheets/Collection.module.scss";

const Collections = () => {
  const cardItemCollection = (
    <Card className={style.collectionCard}>
      <h3>Item Collection</h3>
      <p>Collection of all Items!</p>
    </Card>
  );

  return (
    <div className={style.collectionWrapper}>
      {/* <Navbar /> */}
      <h1 className={style.collectionHeader}>Collections</h1>
      <div className={style.collectionCardWrapper}>
        <Link className={style.collectionLink} to="/itemcollection">
          {cardItemCollection}
        </Link>
      </div>
    </div>
  );
};

export default Collections;
