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
        setObjectDetails(
          dataName.map((r) => ({
            name: r.name,
            race: r.race,
            sex: r.sex,
            align: r.align,
            prof: r.prof,
            feature: r.feature,
            talent: r.talent,
            mannerism: r.mannerism,
            interaction: r.interaction,
            bond: r.bond,
            questType: r.questType,
            hook: r.hook,
            str: r.str,
            dex: r.dex,
            con: r.con,
            int: r.int,
            wis: r.wis,
            cha: r.cha,
            action: r.action,
            weaponBonus: r.weaponBonus,
            weaponDamage: r.weaponDamage,
            weaponProperties: r.weaponProperties,
            selectedItem: r.selectedItem,
            ac: r.ac,
            hp: r.hp,
            speed: r.speed,
          }))
        );
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
          <>
            <span
              className="editText"
              contentEditable="false"
              suppressContentEditableWarning={true}
              onClick={() => setSelectedItem(Object.entries(item))}
            >
              <span className={style.minorText3} onClick={showPopup}>
                {item === undefined ? null : `${item.name} `}
                <i className="pi pi-info-circle"></i>
                <br></br>
              </span>
            </span>
          </>
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
          {props.collectionTitle} Collection<i className="pi pi-chevron-down"></i>
        </h1>
        <h3>{display}</h3>
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
