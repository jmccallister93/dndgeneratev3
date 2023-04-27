import style from "../../stylesheets/PageStyle.module.scss";
import { useEffect, useState, useContext } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ClearButton from "../../components/ClearButton";
import GenerateButton from "../../components/GenerateButton";
import CustomDropDown from "../../components/CustomDropDown";
import CustomDataTable from "../../components/CustomDataTable";
import MultipleDisplay from "../../components/MultipleDisplay";
import CustomName from "../../components/CustomName";
import NameDisplay from "../../components/NameDisplay";
import SingleDisplayText from "../../components/SingleDisplayText";
import ExportButtons from "../../components/ExportButtons";
import { useRef } from "react";
import { Tooltip } from "primereact/tooltip";
import InfoModal from "../../components/InfoModal";
import SectionRandom from "../../components/SectionRandom";
import ns from "../../stylesheets/Note.module.scss";
import { SessionContext } from "../../config/SessionContext";
import MultipleDisplayChunks from "../../components/MultipleDisplayChunks";

const PantheonCreate = () => {
    const session = useContext(SessionContext);
  
    const [isBasicActive, setIsBasicActive] = useState(false);
    const [isDetailActive, setIsDetailActive] = useState(false);
    const [isInfoActive, setIsInfoActive] = useState(false);
  
    const [pantheonName, setPantheonName] = useState("");
    const [, setPantheonNames] = useState("");
    const [pantheonNameOptions, setPantheonNameOptions] = useState("");
  
    const [deityType, setDeityType] = useState("");
    const [, setDeityTypes] = useState("");
    const [deityTypeOptions, setDeityTypeOptions] = useState("");
  
    const [alignment, setAlignment] = useState("");
    const [, setAlignments] = useState("");
    const [alignmentOptions, setAlignmentOptions] = useState("");
  
    const [size, setSize] = useState("");
    const [, setSizes] = useState("");
    const [sizeOptions, setSizeOptions] = useState("");
  
    const [plane, setPlane] = useState("");
    const [, setPlanes] = useState("");
    const [planeOptions, setPlaneOptions] = useState("");
  
    const [domain, setDomain] = useState("");
    const [, setDomains] = useState("");
    const [domainOptions, setDomainOptions] = useState("");
  
    const [, setMotive] = useState("");
    const [, setMotives] = useState("");
    const [motiveOptions, setMotiveOptions] = useState("");
    const [motiveList, setMotiveList] = useState([]);
    const [selectedMotive, setSelectedMotive] = useState([]);
  
    const [, setProvide] = useState("");
    const [, setProvides] = useState("");
    const [provideOptions, setProvideOptions] = useState("");
    const [provideList, setProvideList] = useState([]);
    const [selectedProvide, setSelectedProvide] = useState([]);
  
    const [, setArtifact] = useState("");
    const [, setArtifacts] = useState("");
    const [artifactOptions, setArtifactOptions] = useState("");
    const [artifactList, setArtifactList] = useState([]);
    const [selectedArtifact, setSelectedArtifact] = useState([]);
  
  
    const [pantheon, setPantheon] = useState({});
  
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
    //*****Added new stuff
    const divRef = useRef();
    useEffect(() => {
      
      const provideNames = selectedProvide.map((item) => item.name);
      const provideString = provideNames.join(", ");
      const artifactNames = selectedArtifact.map((item) => item.name);
      const artifactString = artifactNames.join(", ");
      const motiveNames = selectedMotive.map((item) => item.name);
      const motiveString = motiveNames.join(", ");
     
  
      const pantheon = {
        name: pantheonName,
        type: deityType,
        alignment: alignment,
        size: size,
        plane: plane,
        domain: domain,
        motive: motiveString,
        provide: provideString,
        artifact: artifactString,
        folder: "Pantheon",
        email: session.user.email,
      };
      setPantheon(pantheon);
    }, [
      pantheonName,
      size,
      deityType,
      alignment,
      plane,
      domain,
      selectedMotive,
      selectedProvide,
      selectedArtifact,
      session
    ]);
    //Info content
    const infoContent = (
      <div className={style.infoContent}>
        <p>This is a tool to help you generate Pantheons for your games.</p>
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
      <div className={ns.mainWrapper}>
        <div className={style.topHeader}>
          <h1 className={style.mainHeader}>Pantheon Generator</h1>
          <div className={style.topWrapper}>
            <div className={style.btnWrapper}>
              {/* <GenerateButton /> */}
              <GenerateButton
              pantheonName={[pantheonName]}
              pantheonNameOptions={[pantheonNameOptions]}
              setPantheonName={[setPantheonName]}
                generateItems={[deityType, alignment, size, plane, domain]}
                itemOptions={[
                  deityTypeOptions,
                  alignmentOptions,
                  sizeOptions,
                  planeOptions,
                  domainOptions,
                ]}
                setItem={[
                  setDeityType,
                  setAlignment,
                  setSize,
                  setPlane,
                  setDomain,
                ]}
                selectedItemOptions={[
                  motiveOptions,
                  provideOptions,
                  artifactOptions,
                ]}
                selectedItems={[
                  selectedMotive,
                  selectedProvide,
                  selectedArtifact,
                ]}
                setSelectedItem={[
                  setSelectedMotive,
                  setSelectedProvide,
                  setSelectedArtifact,
                ]}
              />
              <ClearButton
                setStringState={[
                  setPantheonName,
                  setDeityType,
                  setAlignment,
                  setSize,
                  setPlane,
                  setDomain,
                ]}
                setArrayState={[
                  setSelectedMotive,
                  setSelectedProvide,
                  setSelectedArtifact,
                ]}
              />
              <h1>
                Export
                <div className={style.exportBtns}>
                  <ExportButtons div={divRef}
                  data={pantheon}
                  tableName={"DBpantheon"} />
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
            <h1>Pantheon Options</h1>
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
               pantheonName={[pantheonName]}
               pantheonNameOptions={[pantheonNameOptions]}
               setPantheonName={[setPantheonName]}
                value={[deityType, alignment, size, ]}
                setValue={[setDeityType, setAlignment, setSize, ]}
                valueOptions={[
                  deityTypeOptions,
                  alignmentOptions,
                  sizeOptions,
                  
                ]}
              />
            </div>
            <div className={isBasicActive ? style.subsection : style.hidden}>
              <div>
              <CustomName
                  tableName={"pantheonNames"}
                  name={pantheonName}
                  setName={setPantheonName}
                  setNames={setPantheonNames}
                  setNameOptions={setPantheonNameOptions}
                  nameOptions={pantheonNameOptions}
                  title={"Name"}
                  placeholder={"Set Name"}
                />
                <CustomDropDown
                  tableName={"pantheonDeity"}
                  setSingular={setDeityType}
                  setPlural={setDeityTypes}
                  setOptions={setDeityTypeOptions}
                  h1Title={"Deity Type"}
                  placeholder={"Set Type"}
                  value={deityType}
                  valueOptions={deityTypeOptions}
                />
                <CustomDropDown
                  tableName={"aligns"}
                  setSingular={setAlignment}
                  setPlural={setAlignments}
                  setOptions={setAlignmentOptions}
                  h1Title={"Alignment"}
                  placeholder={"Set Alignment"}
                  value={alignment}
                  valueOptions={alignmentOptions}
                />
                <CustomDropDown
                  tableName={"sizes"}
                  setSingular={setSize}
                  setPlural={setSizes}
                  setOptions={setSizeOptions}
                  h1Title={"Size"}
                  placeholder={"Set Size"}
                  value={size}
                  valueOptions={sizeOptions}
                />
              </div>
            </div>
            <div className={style.sectionOption}>
              <h1 className={style.subHeader} onClick={showDetails}>
                Details{" "}
                {isDetailActive ? (
                  <i className="pi pi-chevron-down"></i>
                ) : (
                  <i className="pi pi-chevron-right"></i>
                )}
              </h1>
              <SectionRandom
                value={[plane, domain]}
                setValue={[setPlane, setDomain]}
                valueOptions={[planeOptions, domainOptions]}
                selectedValue={[
                  selectedMotive,
                  selectedProvide,
                  selectedArtifact,
                ]}
                setSelectedValue={[
                  setSelectedMotive,
                  setSelectedProvide,
                  setSelectedArtifact,
                ]}
                selectedValueOptions={[
                  motiveOptions,
                  provideOptions,
                  artifactOptions,
                ]}
              />
            </div>
            <div className={isDetailActive ? style.subsection : style.hidden}>
              <div>
                <CustomDropDown
                  tableName={"pantheonPlane"}
                  setSingular={setPlane}
                  setPlural={setPlanes}
                  setOptions={setPlaneOptions}
                  h1Title={"Plane"}
                  placeholder={"Set Plane"}
                  value={plane}
                  valueOptions={planeOptions}
                />
                <CustomDropDown
                  tableName={"pantheonDomain"}
                  setSingular={setDomain}
                  setPlural={setDomains}
                  setOptions={setDomainOptions}
                  h1Title={"Domain"}
                  placeholder={"Set Domain"}
                  value={domain}
                  valueOptions={domainOptions}
                />
                <CustomDataTable
                  tableName={"pantheonMotives"}
                  setSingular={setMotive}
                  setPlural={setMotives}
                  setOptions={setMotiveOptions}
                  h1Title={"Motives"}
                  dialogHeader={"Motives"}
                  placeholder={"Set Motive"}
                  valueOptions={motiveOptions}
                  list={motiveList}
                  setList={setMotiveList}
                  selectedItem={selectedMotive}
                  setSelectedItem={setSelectedMotive}
                  options={motiveOptions}
                />
                <CustomDataTable
                  tableName={"pantheonProvides"}
                  setSingular={setProvide}
                  setPlural={setProvides}
                  setOptions={setProvideOptions}
                  h1Title={"Provides"}
                  dialogHeader={"Provides"}
                  placeholder={"Set Provide"}
                  valueOptions={provideOptions}
                  list={provideList}
                  setList={setProvideList}
                  selectedItem={selectedProvide}
                  setSelectedItem={setSelectedProvide}
                  options={provideOptions}
                />
                <CustomDataTable
                  tableName={"pantheonArtifacts"}
                  setSingular={setArtifact}
                  setPlural={setArtifacts}
                  setOptions={setArtifactOptions}
                  h1Title={"Artifacts"}
                  dialogHeader={"Artifacts"}
                  placeholder={"Set Artifact"}
                  valueOptions={artifactOptions}
                  list={artifactList}
                  setList={setArtifactList}
                  selectedItem={selectedArtifact}
                  setSelectedItem={setSelectedArtifact}
                  options={artifactOptions}
                />
              </div>
            </div>
          </div>
  
          {/* Main Display */}
          <div className={style.display}>
            <NameDisplay value={pantheonName} setNewValue={setPantheonName}/>
            <h2>
            Deity Type{" "}
              <SingleDisplayText
                value={deityType}
                setNewValue={setDeityType}
              />
            </h2>
            <h2>
              Alignment{" "}
              <SingleDisplayText
                value={alignment}
                setNewValue={setAlignment}
              />
            </h2>
            <h2>
              Size{" "}
              <SingleDisplayText
                value={size}
                setNewValue={setSize}
              />
            </h2>
            <h2>
              Plane{" "}
              <SingleDisplayText
                value={plane}
                setNewValue={setPlane}
              />
            </h2>
            <h2>
              Domain{" "}
              <SingleDisplayText
                value={domain}
                setNewValue={setDomain}
              />
            </h2>
            <h2>
              Motives{" "}
              <span className={style.minorText2}>
                <MultipleDisplayChunks selectedItem={selectedMotive} setNewValue={setSelectedMotive}/>
              </span>
            </h2>
            <h2>
              Provides{" "}
              <span className={style.minorText2}>
                <MultipleDisplayChunks selectedItem={selectedProvide} setNewValue={setSelectedProvide}/>
              </span>
            </h2>
            <h2>
              Artifacts{" "}
              <span className={style.minorText2}>
                <MultipleDisplay selectedItem={selectedArtifact} setNewValue={setSelectedArtifact}/>
              </span>
            </h2>
          </div>
        </div>
      </div>
    );
  };
  
  export default PantheonCreate;
  