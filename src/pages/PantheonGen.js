import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useRef, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
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
import GenerateButton from "../components/GenerateButton";
import ClearButton from "../components/ClearButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropDown from "../components/CustomDropDown";
import CustomDataTable from "../components/CustomDataTable";
import MultipleDisplay from "../components/MultipleDisplay";
import InfoModal from "../components/InfoModal";
import { Tooltip } from "primereact/tooltip";
import ExportButtons from "../components/ExportButtons";
import SectionRandom from "../components/SectionRandom";

const PantheonGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);

  const [pantheonName, setPantheonName] = useState("");
  const [pantheonNames, setPantheonNames] = useState("");
  const [pantheonNameOptions, setPantheonNameOptions] = useState("");

  const [deityType, setDeityType] = useState("");
  const [deityTypes, setDeityTypes] = useState("");
  const [deityTypeOptions, setDeityTypeOptions] = useState("");

  const [alignment, setAlignment] = useState("");
  const [alignments, setAlignments] = useState("");
  const [alignmentOptions, setAlignmentOptions] = useState("");

  const [size, setSize] = useState("");
  const [sizes, setSizes] = useState("");
  const [sizeOptions, setSizeOptions] = useState("");

  const [attribute, setAttribute] = useState("");
  const [attributes, setAttributes] = useState("");
  const [attributeOptions, setAttributeOptions] = useState("");

  const [plane, setPlane] = useState("");
  const [planes, setPlanes] = useState("");
  const [planeOptions, setPlaneOptions] = useState("");

  const [domain, setDomain] = useState("");
  const [domains, setDomains] = useState("");
  const [domainOptions, setDomainOptions] = useState("");

  const [symbol, setSymbol] = useState("");
  const [symbols, setSymbols] = useState("");
  const [symbolOptions, setSymbolOptions] = useState("");

  const [history, setHistory] = useState("");
  const [historys, setHistorys] = useState("");
  const [historyOptions, setHistoryOptions] = useState("");

  const [motive, setMotive] = useState("");
  const [motives, setMotives] = useState("");
  const [motiveOptions, setMotiveOptions] = useState("");
  const [motiveList, setMotiveList] = useState([]);
  const [selectedMotive, setSelectedMotive] = useState([]);

  const [provide, setProvide] = useState("");
  const [provides, setProvides] = useState("");
  const [provideOptions, setProvideOptions] = useState("");
  const [provideList, setProvideList] = useState([]);
  const [selectedProvide, setSelectedProvide] = useState([]);

  const [artifact, setArtifact] = useState("");
  const [artifacts, setArtifacts] = useState("");
  const [artifactOptions, setArtifactOptions] = useState("");
  const [artifactList, setArtifactList] = useState([]);
  const [selectedArtifact, setSelectedArtifact] = useState([]);

  const [shrine, setShrine] = useState("");
  const [shrines, setShrines] = useState("");
  const [shrineOptions, setShrineOptions] = useState("");
  const [shrineList, setShrineList] = useState([]);
  const [selectedShrine, setSelectedShrine] = useState([]);

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
  const genItem = "";
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
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Pantheon Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            {/* <GenerateButton /> */}
            <GenerateButton
              generateItems={[
                deityType,
                alignment,
                size,
                attribute,
                plane,
                domain,
                symbol,
                history,
              ]}
              itemOptions={[
                deityTypeOptions,
                alignmentOptions,
                sizeOptions,
                attributeOptions,
                planeOptions,
                domainOptions,
                symbolOptions,
                historyOptions,
              ]}
              setItem={[
                setDeityType,
                setAlignment,
                setSize,
                setAttribute,
                setPlane,
                setDomain,
                setSymbol,
                setHistory,
              ]}
              selectedItemOptions={[
                motiveOptions,
                provideOptions,
                artifactOptions,
                shrineOptions,
              ]}
              selectedItems={[
                selectedMotive,
                selectedProvide,
                selectedArtifact,
                selectedShrine,
              ]}
              setSelectedItem={[
                setSelectedMotive,
                setSelectedProvide,
                setSelectedArtifact,
                setSelectedShrine,
              ]}
            />
            <ClearButton
              setStringState={[
                setDeityType,
                setAlignment,
                setSize,
                setAttribute,
                setPlane,
                setDomain,
                setSymbol,
                setHistory,
              ]}
              setArrayState={[
                setSelectedMotive,
                setSelectedProvide,
                setSelectedArtifact,
                setSelectedShrine,
              ]}
            />
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} data={genItem} />
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
              value={[deityType, alignment, size, attribute]}
              setValue={[setDeityType, setAlignment, setSize, setAttribute]}
              valueOptions={[
                deityTypeOptions,
                alignmentOptions,
                sizeOptions,
                attributeOptions,
              ]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Pantheon Name"}
                input={pantheonName}
                setInput={setPantheonName}
                placeholder={"Set Pantheon Name"}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setDeityType}
                setPlural={setDeityTypes}
                setOptions={setDeityTypeOptions}
                h1Title={"Deity Type"}
                placeholder={"Set Type"}
                value={deityType}
                valueOptions={deityTypeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setAlignment}
                setPlural={setAlignments}
                setOptions={setAlignmentOptions}
                h1Title={"Alignment"}
                placeholder={"Set Alignment"}
                value={alignment}
                valueOptions={alignmentOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setSize}
                setPlural={setSizes}
                setOptions={setSizeOptions}
                h1Title={"Size"}
                placeholder={"Set Size"}
                value={size}
                valueOptions={sizeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setAttribute}
                setPlural={setAttributes}
                setOptions={setAttributeOptions}
                h1Title={"Attribute"}
                placeholder={"Set Attribute"}
                value={attribute}
                valueOptions={attributeOptions}
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
              value={[plane, domain, symbol, history]}
              setValue={[setPlane, setDomain, setSymbol, setHistory]}
              valueOptions={[
                planeOptions,
                domainOptions,
                symbolOptions,
                historyOptions,
              ]}
              selectedValue={[
                selectedMotive,
                selectedProvide,
                selectedArtifact,
                selectedShrine,
              ]}
              setSelectedValue={[
                setSelectedMotive,
                setSelectedProvide,
                setSelectedArtifact,
                setSelectedShrine,
              ]}
              selectedValueOptions={[
                motiveOptions,
                provideOptions,
                artifactOptions,
                shrineOptions,
              ]}
            />
          </div>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setPlane}
                setPlural={setPlanes}
                setOptions={setPlaneOptions}
                h1Title={"Plane"}
                placeholder={"Set Plane"}
                value={plane}
                valueOptions={planeOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setDomain}
                setPlural={setDomains}
                setOptions={setDomainOptions}
                h1Title={"Domain"}
                placeholder={"Set Domain"}
                value={domain}
                valueOptions={domainOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setSymbol}
                setPlural={setSymbols}
                setOptions={setSymbolOptions}
                h1Title={"Symbol"}
                placeholder={"Set Symbol"}
                value={symbol}
                valueOptions={symbolOptions}
              />
              <CustomDropDown
                tableName={"itemsTypes"}
                setSingular={setHistory}
                setPlural={setHistorys}
                setOptions={setHistoryOptions}
                h1Title={"History"}
                placeholder={"Set History"}
                value={history}
                valueOptions={historyOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
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
                tableName={"itemsTypes"}
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
                tableName={"itemsTypes"}
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
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setShrine}
                setPlural={setShrines}
                setOptions={setShrineOptions}
                h1Title={"Shrines"}
                dialogHeader={"Shrines"}
                placeholder={"Set Shrine"}
                valueOptions={shrineOptions}
                list={shrineList}
                setList={setShrineList}
                selectedItem={selectedShrine}
                setSelectedItem={setSelectedShrine}
                options={shrineOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{pantheonName}</h1>
          <h2>
            Deity Type <span className={style.minorText2}>{deityType}</span>
          </h2>
          <h2>
            Alignment <span className={style.minorText2}>{alignment}</span>
          </h2>
          <h2>
            Size <span className={style.minorText2}>{size}</span>
          </h2>
          <h2>
            Attribute <span className={style.minorText2}>{attribute}</span>
          </h2>
          <h2>
            Plane <span className={style.minorText2}>{plane}</span>
          </h2>
          <h2>
            Domain <span className={style.minorText2}>{domain}</span>
          </h2>
          <h2>
            Symbol <span className={style.minorText2}>{symbol}</span>
          </h2>
          <h2>
            History <span className={style.minorText2}>{history}</span>
          </h2>
          <h2>
            Motives{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedMotive} />
            </span>
          </h2>
          <h2>
            Provides{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedProvide} />
            </span>
          </h2>
          <h2>
            Artifacts{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedArtifact} />
            </span>
          </h2>
          <h2>
            Shrines{" "}
            <span className={style.minorText2}>
              <MultipleDisplay selectedItem={selectedShrine} />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default PantheonGen;
