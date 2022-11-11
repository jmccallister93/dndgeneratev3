import Navbar from "../components/Navbar";
import style from "../stylesheets/NpcGen.module.scss"

const NpcGen = () => {
  return (
    <div className={style.npcgenWrapper}>
      <Navbar />
      NPC GEN
    </div>
  );
};

export default NpcGen;
