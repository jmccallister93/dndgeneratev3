import { useState } from "react";
import InfoModal from "../components/InfoModal";

const CollectionItem = (props) => {
  const { selectedItem } = props;

  const [isInfoActive, setIsInfoActive] = useState(false);

  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };

  const infoContent = selectedItem;

  return (
    <>
    {console.log(selectedItem)}
      <InfoModal
        header={"NPC Generator Info"}
        content={infoContent}
        visible={isInfoActive}
        setVisible={setIsInfoActive}
      />
    </>
  );
};

export default CollectionItem;
