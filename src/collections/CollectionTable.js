import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import supabase from "../config/supabaseClient";
import { Card } from "primereact/card";
import CollectionItem from "./CollectionItem";
import InfoModal from "../components/InfoModal";
import { Dialog } from "primereact/dialog";

const CollectionTable = (props) => {
  const [fetchError, setFetchError] = useState(null);
  const [object, setObject] = useState([]);
  const [display, setDisplay] = useState([]);
  const [multipleDisplay, setMultipleDisplay] = useState([]);
  const [isItemActive, setIsItemActive] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(props.tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setObject(null);
      }
      if (dataName) {
        // console.log(dataName.map((r) => [r.name, r.age]));
        setFetchError(null);
        setObject(dataName.map((r) => r.name));
      }
    };
    fetchData();
  }, []);

  const showPopup = () => {
    setIsItemActive((current) => !current);
  };

  useEffect(() => {
    setDisplay(
      object.map((item) => {
        return (
          <span
            className="editText"
            contentEditable="false"
            suppressContentEditableWarning={true}
            onClick={() => setSelectedItem(item)}
          >
            <span className={style.minorText3} onClick={showPopup}>
              {item === undefined ? null : `${item}`}
              <i className="pi pi-info-circle"></i>
              <br></br>
            </span>
          </span>
        );
      })
    );
  }, [object]);

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
      {/* <Dialog
        className={style.infoModal}
        header={"NPC Info"}
        visible={isItemActive}
        modal={true}
        onHide={() => setIsItemActive(false)}
        style={{ width: "50vw"}}
      >
        {selectedItem}
      </Dialog> */}
      <CollectionItem
      visible={isItemActive}
      setVisible={setIsItemActive}
      selectedItem={selectedItem}
      />
    </>
  );
};

export default CollectionTable;
