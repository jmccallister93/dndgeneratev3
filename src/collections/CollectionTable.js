import { useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import { Card } from "primereact/card";
import CollectionItem from "./CollectionItem";

const CollectionTable = (props) => {
  const [isItemActive, setIsItemActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  //Show popup of details
  const showPopup = (item) => {
    setSelectedItem(item);
    setIsItemActive(true);
  };

  //Set Active Prop
  const setPropActive = () => {
    props.active(!props.active);
  };

  return (
    <>
      <Card >
        <h1 onClick={setPropActive} className={style.collectionTitle}>
          {props.collectionTitle} <i className="pi pi-chevron-down"></i>
        </h1>
        {props.data.map((item, index) => (
          <>
            <p
              className={style.collectionItem}
              key={index}
              onClick={() => showPopup(item)}
            >
              {item.name} <i className="pi pi-info-circle"></i>
            </p>
          </>
        ))}
      </Card>
      {isItemActive === true ? (
        <CollectionItem
          visible={isItemActive}
          setVisible={setIsItemActive}
          selectedItem={selectedItem}
        />
      ) : null}
    </>
  );
};

export default CollectionTable;
