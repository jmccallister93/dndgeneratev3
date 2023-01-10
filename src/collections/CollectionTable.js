import { useEffect, useState } from "react";
import style from "../stylesheets/PageStyle.module.scss";
import supabase from "../config/supabaseClient";
import { Card } from "primereact/card";

const CollectionTable = (props) => {
  const [fetchError, setFetchError] = useState(null);
  const [object, setObject] = useState([]);
  const [display, setDisplay] = useState([]);
  const [multipleDisplay, setMultipleDisplay] = useState([]);

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

  const piInfo = <i className="pi pi-info-circle"></i>

  useEffect(() => {
    setDisplay(
      object.map((item) => {
        return (
          <span
            className="editText"
            contentEditable="false"
            suppressContentEditableWarning={true}
          >
            <span className={style.minorText3}>
              {item === undefined ? null : `${item} ` }
              {piInfo}
              <br></br>
            </span>
          </span>
        );
      })
    );
  }, [object]);

  return (
    <>
      <Card>
        <h1>NPC Collection</h1>
        <h3>{display}</h3>
      </Card>
    </>
  );
};

export default CollectionTable;
