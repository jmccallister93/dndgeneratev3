import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { useEffect, useRef, useState, useContext } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ClearButton from "../components/ClearButton";
import GenerateButton from "../components/GenerateButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropDown from "../components/CustomDropDown";
import InfoModal from "../components/InfoModal";
import SectionRandom from "../components/SectionRandom";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";
import RandomHooks from "../components/RandomHooks";
import ExportButtons from "../components/ExportButtons";
import { Tooltip } from "primereact/tooltip";
import { SessionContext } from "../config/SessionContext";

const QuestGen = () => {
  const session = useContext(SessionContext);
  sessionStorage.setItem("lastUrl", window.location.href);
  const lastUrl = localStorage.getItem("lastUrl");
if (lastUrl) {
  window.location.href = lastUrl;
}

  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);

  const [questName, setQuestName] = useState("");
  const [questNames, setQuestNames] = useState("");
  const [questNameOptions, setQuestNameOptions] = useState("");

  const [questType, setQuestType] = useState("");
  const [questTypes, setQuestTypes] = useState("");
  const [questTypeOptions, setQuestTypeOptions] = useState("");

  const [quests, setQuests] = useState([]);
  const [questOptions, setQuestOptions] = useState([]);
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

  const [quest, setQuest] = useState("");

  const [questData, setQuestData] = useState({});

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
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };

  //Creating the quest object
  const divRef = useRef();
  useEffect(() => {
    const quest = {
      name: questName,
      questType: questType,
      reward: reward,
      location: location,
      motive: motive,
      twist: twist,
      email: session?.user?.email,
    };
    setQuestData(quest);
  }, [questName, questType, reward, location, motive, twist, session]);

  //Info content
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate Monsters for your games.</p>
      <p>
        You can use the Generate button in the top left to randomly set all
        fields to random values.
      </p>
      <p>
        You can also use the Generate button in each section to randomly set the
        fields in that section.
      </p>
      <p>You can also manually set the fields to whatever you want.</p>
      <p>
        Once a value has been set you can click on the field in the display to
        edit it.
      </p>
      <p>
        Once you have set all the fields to your liking, you can click the
        Export button to export the NPC to file of your choice.
      </p>
    </div>
  );

  return (
    <div className={style.mainWrapper}>
      <div className={style.topHeader}>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            {/* <GenerateButton /> */}
            <GenerateButton
              generateItems={[questType, reward, motive, twist]}
              itemOptions={[
                questTypeOptions,
                rewardOptions,
                motiveOptions,
                twistOptions,
              ]}
              setItem={[setQuestType, setReward, setMotive, setTwist]}
            />
            <ClearButton
              setStringState={[
                setQuestType,
                setQuest,
                setMotive,
                setTwist,
                setReward,
              ]}
            />
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons
                  div={divRef}
                  data={questData}
                  tableName={"DBquest"}
                />
              </div>
            </h1>
            {/* ToolTip */}
            <div className={style.infoCircle}>
              <i className="pi pi-info-circle" onClick={showInfo}>
                <Tooltip
                  target=".pi-info-circle"
                  position="bottom"
                  content="How To Use Guide"
                />
                <InfoModal
                  header={"Monster Generator Info"}
                  content={infoContent}
                  visible={isInfoActive}
                  setVisible={setIsInfoActive}
                />
              </i>
            </div>
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Quest Options</h1>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showBasics}>
              Basic Info{" "}
              {isBasicActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[questType]}
              valueOptions={[questTypeOptions]}
              setValue={[setQuestType]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
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
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showDetails}>
              Quest Details{" "}
              {isDetailActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[reward, motive, twist]}
              valueOptions={[rewardOptions, motiveOptions, twistOptions]}
              setValue={[setReward, setLocation, setMotive, setTwist]}
            />
          </div>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"questReward"}
                setSingular={setReward}
                setPlural={setRewards}
                setOptions={setRewardOptions}
                h1Title={"Reward"}
                placeholder={"Set Reward"}
                value={reward}
                valueOptions={rewardOptions}
              />
              <CustomDropDown
                tableName={"questMotive"}
                setSingular={setMotive}
                setPlural={setMotives}
                setOptions={setMotiveOptions}
                h1Title={"Motive"}
                placeholder={"Set Motive"}
                value={motive}
                valueOptions={motiveOptions}
              />
              <CustomDropDown
                tableName={"questTwist"}
                setSingular={setTwist}
                setPlural={setTwists}
                setOptions={setTwistOptions}
                h1Title={"Twist"}
                placeholder={"Set Twist"}
                value={twist}
                valueOptions={twistOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display} ref={divRef}>
          {/* <NameDisplay value={questName} setNewValue={setQuestName} /> */}

          <RandomHooks
            type={questType}
            value={quest}
            setValue={setQuest}
            setNameValue={setQuestName}
          />

          <h2>
            Quest Type{" "}
            <SingleDisplayText value={questType} setNewValue={setQuestType} />
          </h2>
          <h2>
            Reward <SingleDisplayText value={reward} setNewValue={setReward} />
          </h2>

          <h2>
            Motive <SingleDisplayText value={motive} setNewValue={setMotive} />
          </h2>
          <h2>
            Twist <SingleDisplayText value={twist} setNewValue={setTwist} />
          </h2>
        </div>
      </div>
    </div>
  );
};

export default QuestGen;
