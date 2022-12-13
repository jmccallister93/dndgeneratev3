import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import { e, i } from "mathjs";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputNumber } from "primereact/inputnumber";
import Items from "../components/Items";
import { Toast } from "primereact/toast";
import Npcs from "../components/Npcs";
import ClearButton from "../components/ClearButton";
import GenerateButton from "../components/GenerateButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropDown from "../components/CustomDropDown";
import CustomInputNumber from "../components/CustomInputNumber";
import CustomDataTable from "../components/CustomDataTable";
import MultipleDisplay from "../components/MultipleDisplay";

const QuestGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);

  const [questName, setQuestName] = useState("");
  const [questNames, setQuestNames] = useState("");
  const [questNameOptions, setQuestNameOptions] = useState("");

  const [questType, setQuestType] = useState("");
  const [questTypes, setQuestTypes] = useState("");
  const [questTypeOptions, setQuestTypeOptions] = useState("");

  const [quest, setQuest] = useState("");
  const [quests, setQuests] = useState([]);
  const [questOptions, setQuestOptions] = useState([])
  const [questList, setQuestList] = useState([]);
  const [selectedQuest, setSelectedQuest] = useState([]);
  

  const [bounty, setBounty] = useState("");
  const [bounties, setBounties] = useState("");
  const [bountyOptions, setBountyOptions] = useState("");

  const [capture, setCapture] = useState("");
  const [captures, setCaptures] = useState("");
  const [captureOptions, setCaptureOptions] = useState("");

  const [delivery, setDelivery] = useState("");
  const [deliverys, setDeliverys] = useState("");
  const [deliveryOptions, setDeliveryOptions] = useState("");

  const [escort, setEscort] = useState("");
  const [escorts, setEscorts] = useState("");
  const [escortOptions, setEscortOptions] = useState("");

  const [exploration, setExploration] = useState("");
  const [explorations, setExplorations] = useState("");
  const [explorationOptions, setExplorationOptions] = useState("");

  const [gather, setGather] = useState("");
  const [gathers, setGathers] = useState("");
  const [gatherOptions, setGatherOptions] = useState("");

  const [investigate, setInvestigate] = useState("");
  const [investigates, setInvestigates] = useState("");
  const [investigateOptions, setInvestigateOptions] = useState("");

  const [kill, setKill] = useState("");
  const [kills, setKills] = useState("");
  const [killOptions, setKillOptions] = useState("");

  const [negotiate, setNegotiate] = useState("");
  const [negotiates, setNegotiates] = useState("");
  const [negotiateOptions, setNegotiateOptions] = useState("");

  const [protect, setProtect] = useState("");
  const [protects, setProtects] = useState("");
  const [protectOptions, setProtectOptions] = useState("");

  const [rescue, setRescue] = useState("");
  const [rescues, setRescues] = useState("");
  const [rescueOptions, setRescueOptions] = useState("");

  const [motive, setMotive] = useState("");
  const [motives, setMotives] = useState("");
  const [motiveOptions, setMotiveOptions] = useState("");

  const [twist, setTwist] = useState("");
  const [twists, setTwists] = useState("");
  const [twistOptions, setTwistOptions] = useState("");

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState("");
  const [locationOptions, setLocationOptions] = useState("");

  const [reward, setReward] = useState("");
  const [rewards, setRewards] = useState("");
  const [rewardOptions, setRewardOptions] = useState("");

  //useeffect to set the values for datatable based on questype state
  useEffect(() => {
    if (questType === "Bounty") {
      setQuestOptions(bountyOptions);
    } else if (questType === "Capture") {
      setQuestOptions(captureOptions);
    } else if (questType === "Delivery") {
      setQuestOptions(deliveryOptions);
    } else if (questType === "Escort") {
      setQuestOptions(escortOptions);
    } else if (questType === "Exploration") {
      setQuestOptions(explorationOptions);
    } else if (questType === "Gather") {
      setQuestOptions(gatherOptions);
    } else if (questType === "Investigate") {
      setQuestOptions(investigateOptions);
    } else if (questType === "Kill") {
      setQuestOptions(killOptions);
    } else if (questType === "Negotiate") {
      setQuestOptions(negotiateOptions);
    } else if (questType === "Protect") {
      setQuestOptions(protectOptions);
    } else if (questType === "Rescue") {
      setQuestOptions(rescueOptions);
    } else {
      setQuestOptions([]);
    }
  }, [questType]);



  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Quest Generator</h1>
        <div>
          <div className={style.btnWrapper}>
            <GenerateButton />
            <ClearButton
              setSingluar={[
                setQuestName,
                setQuestType,
                setBounty,
                setCapture,
                setDelivery,
                setEscort,
                setExploration,
                setGather,
                setInvestigate,
                setKill,
                setNegotiate,
                setProtect,
                setRescue,
                setMotive,
                setTwist,
                setLocation,
                setReward,
              ]}
            />
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Quest Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Quest Name"}
                input={questName}
                setInput={setQuestName}
                placeholder={"Set Quest Name"}
              />
              <CustomDropDown
                tableName={"questTypes"}
                setSingular={setQuestType}
                setPlural={setQuestTypes}
                setOptions={setQuestTypeOptions}
                h1Title={"Quest Type"}
                placeholder={"Set Type"}
                value={questType}
                valueOptions={questTypeOptions}
              />
               <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setReward}
                setPlural={setRewards}
                setOptions={setRewardOptions}
                h1Title={"Reward"}
                placeholder={"Set Reward"}
                value={reward}
                valueOptions={rewardOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setQuest}
                setPlural={setQuests}
                setOptions={setQuestOptions}
                h1Title={"Quest"}
                dialogHeader={"Set Quest"}
                placeholder={"Set Quest"}
                valueOptions={questOptions}
                list={questList}
                setList={setQuestList}
                selectedItem={selectedQuest}
                setSelectedItem={setSelectedQuest}
                options={questOptions}
              />
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showDetails}>
            Quest Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
             
              
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{questName}</h1>
          <h2>
            Quest Type <span className={style.minorText2}>{questType}</span>
          </h2>
          <h2>
            Reward <span className={style.minorText2}>{reward}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default QuestGen;
