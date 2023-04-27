import { Dialog } from "primereact/dialog";
import style from "../stylesheets/PageStyle.module.scss";

const CollectionItem = (props) => {
  return (
    <Dialog
      className={style.infoModal}
      header={"Details"}
      visible={props.visible}
      modal={true}
      onHide={() => props.setVisible(false)}
      style={{ width: "50vw" }}
    >
      {Object.entries(props.selectedItem).map(([key, value]) => {
        if (
          key !== "uuid" &&
          key !== "selectedItem" &&
          key !== "notes" &&
          key !== "links" &&
          key !== "ability" &&
          key !== "action" &&
          key !== "legendary" &&
          key !== "lair" &&
          key !== "artifact"
        ) {
          return (
            <>
              <strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong>{" "}
              {value}
              <br />
            </>
          );
        }
        return null;
      })}
      {props.selectedItem.ability && (
        <>
          <strong>Abilities</strong>
          <br />
          {Object.entries(props.selectedItem).map(([key, value]) => {
            if (key === "ability") {
              const abilities = value.split("\n\n")
              return (
                <>
                  {abilities.map((ability, i) => (
                    <div key={i} className={style.ability}>
                      {ability}
                    </div>
                  ))}
                </>
              );
            }
            return null;
          })}
        </>
      )}
      {props.selectedItem.action && (
        <>
          <strong>Actions</strong>
          <br />
          {Object.entries(props.selectedItem).map(([key, value]) => {
            if (key === "action") {
              const abilities = value.split("\n\n")
              return (
                <>
                  {abilities.map((ability, i) => (
                    <div key={i} className={style.ability}>
                      {ability}
                    </div>
                  ))}
                </>
              );
            }
            return null;
          })}
        </>
      )}
      {props.selectedItem.legendary && (
        <>
          <strong>Legendary Actions</strong>
          <br />
          {Object.entries(props.selectedItem).map(([key, value]) => {
            if (key === "legendary") {
              const abilities = value.split("\n\n")
              return (
                <>
                  {abilities.map((ability, i) => (
                    <div key={i} className={style.ability}>
                      {ability}
                    </div>
                  ))}
                </>
              );
            }
            return null;
          })}
        </>
      )}
      {props.selectedItem.lair && (
        <>
          <strong>Lair Actions</strong>
          <br />
          {Object.entries(props.selectedItem).map(([key, value]) => {
            if (key === "lair") {
              const abilities = value.split("\n\n")
              return (
                <>
                  {abilities.map((ability, i) => (
                    <div key={i} className={style.ability}>
                      {ability}
                    </div>
                  ))}
                </>
              );
            }
            return null;
          })}
        </>
      )}
      {props.selectedItem.artifact && (
        <>
          <strong>Artifacts</strong>
          <br />
          {Object.entries(props.selectedItem).map(([key, value]) => {
            if (key === "artifact") {
              const abilities = value.split("\n\n")
              return (
                <>
                  {abilities.map((ability, i) => (
                    <div key={i} className={style.ability}>
                      {ability}
                    </div>
                  ))}
                </>
              );
            }
            return null;
          })}
        </>
      )}
    </Dialog>
  );
};

export default CollectionItem;
