import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import supabase from "../config/supabaseClient";
import { Card } from "primereact/card";
import CollectionItem from "./CollectionItem";
import InfoModal from "../components/InfoModal";
import { Dialog } from "primereact/dialog";

const CollectionTable = (props) => {
  const [fetchError, setFetchError] = useState(null);
  const [objectDetails, setObjectDetails] = useState([]);
  const [display, setDisplay] = useState([]);
  const [isItemActive, setIsItemActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  //Get Details
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(props.tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setObjectDetails(null);
      }
      if (dataName) {
        setFetchError(null);
        setObjectDetails(dataName.map((r) => [
          r.name, 
          r.race,
          r.sex,
          r.align,
          r.prof,
          r.feature,
          r.talent,
          r.mannerism,
          r.interaction,
          r.bond,
          r.questType,
          r.hook,
          r.str,
          r.dex,
          r.con,
          r.int,
          r.wis,
          r.cha,
          r.action,
          r.weaponBonus,
          r.weaponDamage,
          r.weaponProperties,
          r.selectedItem,
          r.ac,
          r.hp,
          r.speed,
        ]));
      }
    };
    fetchData();
  }, []);

  const showPopup = () => {
    setIsItemActive((current) => !current);
  };

  useEffect(() => {
    setDisplay(
      objectDetails.map((item) => {
        return (
          <span
            className="editText"
            contentEditable="false"
            suppressContentEditableWarning={true}
            onClick={() => setSelectedItem(item)}
          >
            <span className={style.minorText3} onClick={showPopup}>
              {item === undefined ? null : `${item[0]}`}
              <i className="pi pi-info-circle"></i>
              <br></br>
            </span>
          </span>
        );
      })
    );
  }, [objectDetails]);

  const setPropActive = () => {
    props.active(!props.active);
  };

  return (
    <>
      <Card>
        <h1 onClick={setPropActive}>
          NPC Collection<i className="pi pi-chevron-down"></i>
        </h1>
        <h3>{display}</h3>
      </Card>
      <CollectionItem
        visible={isItemActive}
        setVisible={setIsItemActive}
        selectedItem={selectedItem}
      />
    </>
  );
};

export default CollectionTable;
