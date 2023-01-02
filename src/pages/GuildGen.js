import Navbar from "../components/Navbar";
import style from "../stylesheets/PageStyle.module.scss";
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
import MultipleDisplay from "../components/MultipleDisplay";
import CustomDataTable from "../components/CustomDataTable";
import CustomDropdown from "../components/CustomDropDown";
import CustomInputText from "../components/CustomInputText";
import ExportButtons from "../components/ExportButtons";
import { Tooltip } from "primereact/tooltip";
import InfoModal from "../components/InfoModal";
import SectionRandom from "../components/SectionRandom";
import NameDisplay from "../components/NameDisplay";
import SingleDisplayText from "../components/SingleDisplayText";

const GuildGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isResourceActive, setIsResourceActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);
  const [isBuildingActive, setIsBuildingActive] = useState(false);
  const [isMemberActive, setIsMemberActive] = useState(false);
  const [isMembershipActive, setIsMembershipActive] = useState(false);
  const [isInfoActive, setIsInfoActive] = useState(false);

  const [guildName, setGuildName] = useState("");
  const [guildNames, setGuildNames] = useState("");
  const [guildNameOptions, setGuildNameOptions] = useState("");

  const [wealth, setWealth] = useState("");
  const [wealths, setWealths] = useState("");
  const [wealthOptions, setWealthOptions] = useState("");

  const [income, setIncome] = useState("");
  const [incomes, setIncomes] = useState("");
  const [incomeOptions, setIncomeOptions] = useState("");
  const [selectedIncome, setSelectedIncome] = useState([]);
  const [incomeList, setIncomeList] = useState([]);

  const [item, setItem] = useState("");
  const [items, setItems] = useState("");
  const [itemOptions, setItemOptions] = useState("");
  const [selectedItem, setSelectedItem] = useState([]);
  const [itemList, setItemList] = useState([]);

  const [influence, setInfluence] = useState("");
  const [influences, setInfluences] = useState("");
  const [influenceOptions, setInfluenceOptions] = useState("");

  const [influenceTactic, setInfluenceTactic] = useState("");
  const [influenceTactics, setInfluenceTactics] = useState("");
  const [influenceTacticOptions, setInfluenceTacticOptions] = useState("");
  const [selectedInfluenceTactic, setSelectedInfluenceTactic] = useState([]);
  const [influenceTacticList, setInfluenceTacticList] = useState([]);

  const [favored, setFavored] = useState("");
  const [favoreds, setFavoreds] = useState("");
  const [favoredOptions, setFavoredOptions] = useState("");
  const [selectedFavored, setSelectedFavored] = useState([]);
  const [favoredList, setFavoredList] = useState([]);

  const [positive, setPositive] = useState("");
  const [positives, setPositives] = useState("");
  const [positiveOptions, setPositiveOptions] = useState("");
  const [selectedPositive, setSelectedPositive] = useState([]);
  const [positiveList, setPositiveList] = useState([]);

  const [neutral, setNeutral] = useState("");
  const [neutrals, setNeutrals] = useState("");
  const [neutralOptions, setNeutralOptions] = useState("");
  const [selectedNeutral, setSelectedNeutral] = useState([]);
  const [neutralList, setNeutralList] = useState([]);

  const [unwelcome, setUnwelcome] = useState("");
  const [unwelcomes, setUnwelcomes] = useState("");
  const [unwelcomeOptions, setUnwelcomeOptions] = useState("");
  const [selectedUnwelcome, setSelectedUnwelcome] = useState([]);
  const [unwelcomeList, setUnwelcomeList] = useState([]);

  const [intolerant, setIntolerant] = useState("");
  const [intolerants, setIntolerants] = useState("");
  const [intolerantOptions, setIntolerantOptions] = useState("");
  const [selectedIntolerant, setSelectedIntolerant] = useState([]);
  const [intolerantList, setIntolerantList] = useState([]);

  const [service, setService] = useState("");
  const [services, setServices] = useState("");
  const [serviceOptions, setServiceOptions] = useState("");
  const [selectedService, setSelectedService] = useState([]);
  const [serviceList, setServiceList] = useState([]);

  const [structure, setStructure] = useState("");
  const [structures, setStructures] = useState("");
  const [structureOptions, setStructureOptions] = useState("");

  const [initiation, setInitiation] = useState("");
  const [initiations, setInitiations] = useState("");
  const [initiationOptions, setInitiationOptions] = useState("");
  const [selectedInitiation, setSelectedInitiation] = useState([]);
  const [initiationList, setInitiationList] = useState([]);

  const [lowRole, setLowRole] = useState("");
  const [lowRoles, setLowRoles] = useState("");
  const [lowRoleOptions, setLowRoleOptions] = useState("");
  const [selectedLowRole, setSelectedLowRole] = useState([]);
  const [lowRoleList, setLowRoleList] = useState([]);

  const [mediumRole, setMediumRole] = useState("");
  const [mediumRoles, setMediumRoles] = useState("");
  const [mediumRoleOptions, setMediumRoleOptions] = useState("");
  const [selectedMediumRole, setSelectedMediumRole] = useState([]);
  const [mediumRoleList, setMediumRoleList] = useState([]);

  const [highRole, setHighRole] = useState("");
  const [highRoles, setHighRoles] = useState("");
  const [highRoleOptions, setHighRoleOptions] = useState("");
  const [selectedHighRole, setSelectedHighRole] = useState([]);
  const [highRoleList, setHighRoleList] = useState([]);

  const [quest, setQuest] = useState("");
  const [quests, setQuests] = useState("");
  const [questOptions, setQuestOptions] = useState("");
  const [selectedQuest, setSelectedQuest] = useState([]);
  const [questList, setQuestList] = useState([]);

  const [advance, setAdvance] = useState("");
  const [advances, setAdvances] = useState("");
  const [advanceOptions, setAdvanceOptions] = useState("");
  const [selectedAdvance, setSelectedAdvance] = useState([]);
  const [advanceList, setAdvanceList] = useState([]);

  const [belief, setBelief] = useState("");
  const [beliefs, setBeliefs] = useState("");
  const [beliefOptions, setBeliefOptions] = useState("");
  const [selectedBelief, setSelectedBelief] = useState([]);
  const [beliefList, setBeliefList] = useState([]);

  const [orgType, setOrgType] = useState("");
  const [orgTypes, setOrgTypes] = useState("");
  const [orgTypeOptions, setOrgTypeOptions] = useState("");
  const [selectedOrgType, setSelectedOrgType] = useState([]);
  const [orgTypeList, setOrgTypeList] = useState([]);

  const [headquarter, setHeadquarter] = useState("");
  const [headquarters, setHeadquarters] = useState("");
  const [headquarterOptions, setHeadquarterOptions] = useState("");
  const [selectedHeadquarter, setSelectedHeadquarter] = useState([]);
  const [headquarterList, setHeadquarterList] = useState([]);

  const [building, setBuilding] = useState("");
  const [buildings, setBuildings] = useState("");
  const [buildingOptions, setBuildingOptions] = useState("");
  const [selectedBuilding, setSelectedBuilding] = useState([]);
  const [buildingList, setBuildingList] = useState([]);

  const [location, setLocation] = useState("");
  const [locations, setLocations] = useState("");
  const [locationOptions, setLocationOptions] = useState("");
  const [selectedLocation, setSelectedLocation] = useState([]);
  const [locationList, setLocationList] = useState([]);

  const [stronghold, setStronghold] = useState("");
  const [strongholds, setStrongholds] = useState("");
  const [strongholdOptions, setStrongholdOptions] = useState("");
  const [selectedStronghold, setSelectedStronghold] = useState([]);
  const [strongholdList, setStrongholdList] = useState([]);

  const [resource, setResource] = useState("");
  const [resources, setResources] = useState("");
  const [resourceOptions, setResourceOptions] = useState("");
  const [selectedResource, setSelectedResource] = useState([]);
  const [resourceList, setResourceList] = useState([]);

  const [defence, setDefence] = useState("");
  const [defences, setDefences] = useState("");
  const [defenceOptions, setDefenceOptions] = useState("");

  const [origin, setOrigin] = useState("");
  const [origins, setOrigins] = useState("");
  const [originOptions, setOriginOptions] = useState("");

  const [motive, setMotive] = useState("");
  const [motives, setMotives] = useState("");
  const [motiveOptions, setMotiveOptions] = useState("");
  const [selectedMotive, setSelectedMotive] = useState([]);
  const [motiveList, setMotiveList] = useState([]);

  const [power, setPower] = useState("");
  const [powers, setPowers] = useState("");
  const [powerOptions, setPowerOptions] = useState("");
  const [selectedPower, setSelectedPower] = useState([]);
  const [powerList, setPowerList] = useState([]);

  const [specialty, setSpecialty] = useState("");
  const [specialtys, setSpecialtys] = useState("");
  const [specialtyOptions, setSpecialtyOptions] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState([]);
  const [specialtyList, setSpecialtyList] = useState([]);

  const [weakness, setWeakness] = useState("");
  const [weaknesss, setWeaknesss] = useState("");
  const [weaknessOptions, setWeaknessOptions] = useState("");
  const [selectedWeakness, setSelectedWeakness] = useState([]);
  const [weaknessList, setWeaknessList] = useState([]);

  const [logo, setLogo] = useState("");
  const [logos, setLogos] = useState("");
  const [logoOptions, setLogoOptions] = useState("");

  const [leader, setLeader] = useState("");
  const [leaders, setLeaders] = useState("");
  const [leaderOptions, setLeaderOptions] = useState("");
  const divRef = useRef(null);

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showResources = (e) => {
    setIsResourceActive((current) => !current);
  };
  const showMembers = (e) => {
    setIsMemberActive((current) => !current);
  };
  const showMemberships = (e) => {
    setIsMembershipActive((current) => !current);
  };
  const showBuildings = (e) => {
    setIsBuildingActive((current) => !current);
  };
  const showFeature = (e) => {
    setIsFeatureActive((current) => !current);
  };
  const showInfo = (e) => {
    setIsInfoActive((current) => !current);
  };

  //Info content
  const infoContent = (
    <div className={style.infoContent}>
      <p>This is a tool to help you generate Guilds for your games.</p>
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
        <h1 className={style.mainHeader}>Guild Generator</h1>
        <div className={style.topWrapper}>
          <div className={style.btnWrapper}>
            <GenerateButton
              generateItems={[
                wealth,
                influence,
                structure,
                defence,
                origin,
                logo,
                leader,
              ]}
              itemOptions={[
                wealthOptions,
                incomeOptions,
                itemOptions,
                influenceOptions,
                influenceTacticOptions,
                favoredOptions,
                positiveOptions,
                neutralOptions,
                unwelcomeOptions,
                intolerantOptions,
                serviceOptions,
                structureOptions,
                initiationOptions,
                lowRoleOptions,
                mediumRoleOptions,
                highRoleOptions,
                questOptions,
                advanceOptions,
                beliefOptions,
                orgTypeOptions,
                headquarterOptions,
                buildingOptions,
                locationOptions,
                strongholdOptions,
                resourceOptions,
                defenceOptions,
                originOptions,
                motiveOptions,
                powerOptions,
                specialtyOptions,
                weaknessOptions,
                logoOptions,
                leaderOptions,
              ]}
              setItem={[
                setWealth,
                setInfluence,
                setStructure,
                setDefence,
                setOrigin,
                setLogo,
                setLeader,
              ]}
              selectedItems={[
                selectedIncome,
                selectedItem,
                selectedInfluenceTactic,
                selectedFavored,
                selectedPositive,
                selectedNeutral,
                selectedUnwelcome,
                selectedIntolerant,
                selectedService,
                selectedInitiation,
                selectedLowRole,
                selectedMediumRole,
                selectedHighRole,
                selectedQuest,
                selectedAdvance,
                selectedBelief,
                selectedOrgType,
                selectedHeadquarter,
                selectedBuilding,
                selectedLocation,
                selectedStronghold,
                selectedResource,
                selectedMotive,
                selectedPower,
                selectedSpecialty,
                selectedWeakness,
              ]}
              setSelectedItem={[
                setSelectedIncome,
                setSelectedItem,
                setSelectedInfluenceTactic,
                setSelectedFavored,
                setSelectedPositive,
                setSelectedNeutral,
                setSelectedUnwelcome,
                setSelectedIntolerant,
                setSelectedService,
                setSelectedInitiation,
                setSelectedLowRole,
                setSelectedMediumRole,
                setSelectedHighRole,
                setSelectedQuest,
                setSelectedAdvance,
                setSelectedBelief,
                setSelectedOrgType,
                setSelectedHeadquarter,
                setSelectedBuilding,
                setSelectedLocation,
                setSelectedStronghold,
                setSelectedResource,
                setSelectedMotive,
                setSelectedPower,
                setSelectedSpecialty,
                setSelectedWeakness,
              ]}
            />
            <ClearButton
              setStringState={[
                setWealth,
                setInfluence,
                setStructure,
                setDefence,
                setOrigin,
                setLogo,
                setLeader,
              ]}
              setArrayState={[
                setSelectedIncome,
                setSelectedItem,
                setSelectedInfluenceTactic,
                setSelectedFavored,
                setSelectedPositive,
                setSelectedNeutral,
                setSelectedUnwelcome,
                setSelectedIntolerant,
                setSelectedService,
                setSelectedInitiation,
                setSelectedLowRole,
                setSelectedMediumRole,
                setSelectedHighRole,
                setSelectedQuest,
                setSelectedAdvance,
                setSelectedBelief,
                setSelectedOrgType,
                setSelectedHeadquarter,
                setSelectedBuilding,
                setSelectedLocation,
                setSelectedStronghold,
                setSelectedResource,
                setSelectedMotive,
                setSelectedPower,
                setSelectedSpecialty,
                setSelectedWeakness,
              ]}
            />
            <h1>
              Export
              <div className={style.exportBtns}>
                <ExportButtons div={divRef} />
              </div>
            </h1>
            <div className={style.infoCircle}>
              <i className="pi pi-info-circle" onClick={showInfo}>
                <Tooltip
                  target=".pi-info-circle"
                  position="bottom"
                  content="How To Use Guide"
                />
                <InfoModal
                  header={"NPC Generator Info"}
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
          <h1>Guild Options</h1>
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
              value={[structure, origin, logo]}
              setValue={[setStructure, setOrigin, setLogo]}
              valueOptions={[structureOptions, originOptions, logoOptions]}
              selectedValue={[selectedOrgType, selectedMotive, selectedBelief]}
              setSelectedValue={[
                setSelectedOrgType,
                setSelectedMotive,
                setSelectedBelief,
              ]}
              selectedValueOptions={[
                orgTypeOptions,
                motiveOptions,
                beliefOptions,
              ]}
            />
          </div>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Guild Name"}
                input={guildName}
                setInput={setGuildName}
                placeholder={"Set Guild Name"}
              />
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setStructure}
                setPlural={setStructures}
                setOptions={setStructureOptions}
                options={structureOptions}
                h1Title={"Organization Structure"}
                placeholder={"Set Structure"}
                value={structure}
                valueOptions={structureOptions}
              />
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setOrigin}
                setPlural={setOrigins}
                setOptions={setOriginOptions}
                options={originOptions}
                h1Title={"Origin"}
                placeholder={"Set Origin"}
                value={origin}
                valueOptions={originOptions}
              />
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setLogo}
                setPlural={setLogos}
                setOptions={setLogoOptions}
                options={logoOptions}
                h1Title={"Logo"}
                placeholder={"Set Logo"}
                value={logo}
                valueOptions={logoOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setOrgType}
                setPlural={setOrgTypes}
                setOptions={setOrgTypeOptions}
                h1Title={"Organization Type"}
                dialogHeader={"Organization Type"}
                selectedItem={selectedOrgType}
                setSelectedItem={setSelectedOrgType}
                list={orgTypeList}
                setList={setOrgTypeList}
                valueOptions={orgTypeOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setMotive}
                setPlural={setMotives}
                setOptions={setMotiveOptions}
                h1Title={"Motives"}
                dialogHeader={"Motives"}
                selectedItem={selectedMotive}
                setSelectedItem={setSelectedMotive}
                list={motiveList}
                setList={setMotiveList}
                valueOptions={motiveOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setBelief}
                setPlural={setBeliefs}
                setOptions={setBeliefOptions}
                h1Title={"Beliefs"}
                dialogHeader={"Beliefs"}
                selectedItem={selectedBelief}
                setSelectedItem={setSelectedBelief}
                list={beliefList}
                setList={setBeliefList}
                valueOptions={beliefOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showResources}>
              Resources{" "}
              {isResourceActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[wealth]}
              setValue={[setWealth]}
              valueOptions={[wealthOptions]}
              selectedValue={[selectedIncome, selectedItem, selectedResource]}
              setSelectedValue={[
                setSelectedIncome,
                setSelectedItem,
                setSelectedResource,
              ]}
              selectedValueOptions={[
                incomeOptions,
                itemOptions,
                resourceOptions,
              ]}
            />
          </div>
          <div className={isResourceActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setWealth}
                setPlural={setWealths}
                setOptions={setWealthOptions}
                options={wealthOptions}
                h1Title={"Wealth"}
                placeholder={"Set Wealth"}
                value={wealth}
                valueOptions={wealthOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setIncome}
                setPlural={setIncomes}
                setOptions={setIncomeOptions}
                h1Title={"Income"}
                dialogHeader={"Income"}
                selectedItem={selectedIncome}
                setSelectedItem={setSelectedIncome}
                list={incomeList}
                setList={setIncomeList}
                valueOptions={incomeOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setItem}
                setPlural={setItems}
                setOptions={setItemOptions}
                h1Title={"Items"}
                dialogHeader={"Items"}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                list={itemList}
                setList={setItemList}
                valueOptions={itemOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setResource}
                setPlural={setResources}
                setOptions={setResourceOptions}
                h1Title={"Resources"}
                dialogHeader={"Resources"}
                selectedItem={selectedResource}
                setSelectedItem={setSelectedResource}
                list={resourceList}
                setList={setResourceList}
                valueOptions={resourceOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showMembers}>
              Members{" "}
              {isMemberActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              value={[leader]}
              setValue={[setLeader]}
              valueOptions={[leaderOptions]}
            />
          </div>
          <div className={isMemberActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setLeader}
                setPlural={setLeaders}
                setOptions={setLeaderOptions}
                options={leaderOptions}
                h1Title={"Leader"}
                placeholder={"Set Leader"}
                value={leader}
                valueOptions={leaderOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
            <h1 className={style.subHeader} onClick={showMemberships}>
              Membership{" "}
              {isMembershipActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
            </h1>
            <SectionRandom
              selectedValue={[
                selectedFavored,
                selectedPositive,
                selectedNeutral,
                selectedUnwelcome,
                selectedIntolerant,
                selectedInitiation,
                selectedLowRole,
                selectedMediumRole,
                selectedHighRole,
                selectedAdvance,
              ]}
              setSelectedValue={[
                setSelectedFavored,
                setSelectedPositive,
                setSelectedNeutral,
                setSelectedUnwelcome,
                setSelectedIntolerant,
                setSelectedInitiation,
                setSelectedLowRole,
                setSelectedMediumRole,
                setSelectedHighRole,
                setSelectedAdvance,
              ]}
              selectedValueOptions={[
                favoredOptions,
                positiveOptions,
                neutralOptions,
                unwelcomeOptions,
                intolerantOptions,
                initiationOptions,
                lowRoleOptions,
                mediumRoleOptions,
                highRoleOptions,
                advanceOptions,
              ]}
            />
          </div>
          <div className={isMembershipActive ? style.subsection : style.hidden}>
            <div>
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setFavored}
                setPlural={setFavoreds}
                setOptions={setFavoredOptions}
                h1Title={"Favored Members"}
                dialogHeader={"Favored Members"}
                selectedItem={selectedFavored}
                setSelectedItem={setSelectedFavored}
                list={favoredList}
                setList={setFavoredList}
                valueOptions={favoredOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setPositive}
                setPlural={setPositives}
                setOptions={setPositiveOptions}
                h1Title={"Positive Members"}
                dialogHeader={"Positive Members"}
                selectedItem={selectedPositive}
                setSelectedItem={setSelectedPositive}
                list={positiveList}
                setList={setPositiveList}
                valueOptions={positiveOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setNeutral}
                setPlural={setNeutrals}
                setOptions={setNeutralOptions}
                h1Title={"Neutral Members"}
                dialogHeader={"Neutral Members"}
                selectedItem={selectedNeutral}
                setSelectedItem={setSelectedNeutral}
                list={neutralList}
                setList={setNeutralList}
                valueOptions={neutralOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setUnwelcome}
                setPlural={setUnwelcomes}
                setOptions={setUnwelcomeOptions}
                h1Title={"Unwelcome Members"}
                dialogHeader={"Unwelcome Members"}
                selectedItem={selectedUnwelcome}
                setSelectedItem={setSelectedUnwelcome}
                list={unwelcomeList}
                setList={setUnwelcomeList}
                valueOptions={unwelcomeOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setIntolerant}
                setPlural={setIntolerants}
                setOptions={setIntolerantOptions}
                h1Title={"Intolerant Members"}
                dialogHeader={"Intolerant Members"}
                selectedItem={selectedIntolerant}
                setSelectedItem={setSelectedIntolerant}
                list={intolerantList}
                setList={setIntolerantList}
                valueOptions={intolerantOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setInitiation}
                setPlural={setInitiations}
                setOptions={setInitiationOptions}
                h1Title={"Initiation"}
                dialogHeader={"Initiation"}
                selectedItem={selectedInitiation}
                setSelectedItem={setSelectedInitiation}
                list={initiationList}
                setList={setInitiationList}
                valueOptions={initiationOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setLowRole}
                setPlural={setLowRoles}
                setOptions={setLowRoleOptions}
                h1Title={"Low Rank Roles"}
                dialogHeader={"Low Rank Roles"}
                selectedItem={selectedLowRole}
                setSelectedItem={setSelectedLowRole}
                list={lowRoleList}
                setList={setLowRoleList}
                valueOptions={lowRoleOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setMediumRole}
                setPlural={setMediumRoles}
                setOptions={setMediumRoleOptions}
                h1Title={"Medium Rank Roles"}
                dialogHeader={"Medium Rank Roles"}
                selectedItem={selectedMediumRole}
                setSelectedItem={setSelectedMediumRole}
                list={mediumRoleList}
                setList={setMediumRoleList}
                valueOptions={mediumRoleOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setHighRole}
                setPlural={setHighRoles}
                setOptions={setHighRoleOptions}
                h1Title={"High Rank Roles"}
                dialogHeader={"High Rank Roles"}
                selectedItem={selectedHighRole}
                setSelectedItem={setSelectedHighRole}
                list={highRoleList}
                setList={setHighRoleList}
                valueOptions={highRoleOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setAdvance}
                setPlural={setAdvances}
                setOptions={setAdvanceOptions}
                h1Title={"Advancement"}
                dialogHeader={"Advancement"}
                selectedItem={selectedAdvance}
                setSelectedItem={setSelectedAdvance}
                list={advanceList}
                setList={setAdvanceList}
                valueOptions={advanceOptions}
              />
            </div>
          </div>
            <div className={style.sectionOption}>
          <h1 className={style.subHeader} onClick={showFeature}>
            Features{" "}
            {isFeatureActive ? (
               <i className="pi pi-chevron-down"></i>
               ) : (
                 <i className="pi pi-chevron-right"></i>
               )}
          </h1>
          <SectionRandom 
            value={[influence,]}
            setValue={[setInfluence,]}
            valueOptions={[influenceOptions,]}
            selectedValue={[
              selectedInfluenceTactic,
              selectedService,
              selectedQuest,
              selectedPower,
              selectedSpecialty,
              selectedWeakness
            ]}
            setSelectedValue={[
              setSelectedInfluenceTactic,
              setSelectedService,
              setSelectedQuest,
              setSelectedPower,
              setSelectedSpecialty,
              setSelectedWeakness
            ]}
            selectedValueOptions={[
              influenceTacticOptions,
              serviceOptions,
              questOptions,
              powerOptions,
              specialtyOptions,
              weaknessOptions
            ]}
          />
          </div>
          <div className={isFeatureActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setInfluence}
                setPlural={setInfluences}
                setOptions={setInfluenceOptions}
                options={influenceOptions}
                h1Title={"Influence"}
                placeholder={"Set Influence"}
                value={influence}
                valueOptions={influenceOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setInfluenceTactic}
                setPlural={setInfluenceTactics}
                setOptions={setInfluenceTacticOptions}
                h1Title={"Influence Tactics"}
                dialogHeader={"Influence Tactics"}
                selectedItem={selectedInfluenceTactic}
                setSelectedItem={setSelectedInfluenceTactic}
                list={influenceTacticList}
                setList={setInfluenceTacticList}
                valueOptions={influenceTacticOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setService}
                setPlural={setServices}
                setOptions={setServiceOptions}
                h1Title={"Services"}
                dialogHeader={"Services"}
                selectedItem={selectedService}
                setSelectedItem={setSelectedService}
                list={serviceList}
                setList={setServiceList}
                valueOptions={serviceOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setQuest}
                setPlural={setQuests}
                setOptions={setQuestOptions}
                h1Title={"Quests"}
                dialogHeader={"Quests"}
                selectedItem={selectedQuest}
                setSelectedItem={setSelectedQuest}
                list={questList}
                setList={setQuestList}
                valueOptions={questOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setPower}
                setPlural={setPowers}
                setOptions={setPowerOptions}
                h1Title={"Power Sources"}
                dialogHeader={"Power Sources"}
                selectedItem={selectedPower}
                setSelectedItem={setSelectedPower}
                list={powerList}
                setList={setPowerList}
                valueOptions={powerOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setSpecialty}
                setPlural={setSpecialtys}
                setOptions={setSpecialtyOptions}
                h1Title={"Specialties"}
                dialogHeader={"Specialties"}
                selectedItem={selectedSpecialty}
                setSelectedItem={setSelectedSpecialty}
                list={specialtyList}
                setList={setSpecialtyList}
                valueOptions={specialtyOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setWeakness}
                setPlural={setWeaknesss}
                setOptions={setWeaknessOptions}
                h1Title={"Weakness"}
                dialogHeader={"Weakness"}
                selectedItem={selectedWeakness}
                setSelectedItem={setSelectedWeakness}
                list={weaknessList}
                setList={setWeaknessList}
                valueOptions={weaknessOptions}
              />
            </div>
          </div>
          <div className={style.sectionOption}>
          <h1 className={style.subHeader} onClick={showBuildings}>
            Buildings{" "}
            {isBuildingActive ? (
                <i className="pi pi-chevron-down"></i>
              ) : (
                <i className="pi pi-chevron-right"></i>
              )}
          </h1>
          <SectionRandom
            value={[defence,]}
            setValue={[setDefence,]}
            valueOptions={[defenceOptions,]}
            selectedValue={[
              selectedHeadquarter,
              selectedBuilding,
              selectedLocation,
              selectedStronghold,
            ]}
            setSelectedValue={[
              setSelectedHeadquarter,
              setSelectedBuilding,
              setSelectedLocation,
              setSelectedStronghold,
            ]}
            selectedValueOptions={[
              headquarterOptions,
              buildingOptions,
              locationOptions,
              strongholdOptions,
            ]}
          />
          </div>
          <div className={isBuildingActive ? style.subsection : style.hidden}>
            <div>
              <CustomDropdown
                tableName={"itemsTypes"}
                setSingular={setDefence}
                setPlural={setDefences}
                setOptions={setDefenceOptions}
                options={defenceOptions}
                h1Title={"Defence Level"}
                placeholder={"Set Defence"}
                value={defence}
                valueOptions={defenceOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setHeadquarter}
                setPlural={setHeadquarters}
                setOptions={setHeadquarterOptions}
                h1Title={"Headquarters"}
                dialogHeader={"Headquarters"}
                selectedItem={selectedHeadquarter}
                setSelectedItem={setSelectedHeadquarter}
                list={headquarterList}
                setList={setHeadquarterList}
                valueOptions={headquarterOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setBuilding}
                setPlural={setBuildings}
                setOptions={setBuildingOptions}
                h1Title={"Owned Buildings"}
                dialogHeader={"Owned Buildings"}
                selectedItem={selectedBuilding}
                setSelectedItem={setSelectedBuilding}
                list={buildingList}
                setList={setBuildingList}
                valueOptions={buildingOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setLocation}
                setPlural={setLocations}
                setOptions={setLocationOptions}
                h1Title={"Locations"}
                dialogHeader={"Locations"}
                selectedItem={selectedLocation}
                setSelectedItem={setSelectedLocation}
                list={locationList}
                setList={setLocationList}
                valueOptions={locationOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setStronghold}
                setPlural={setStrongholds}
                setOptions={setStrongholdOptions}
                h1Title={"Strongholds"}
                dialogHeader={"Strongholds"}
                selectedItem={selectedStronghold}
                setSelectedItem={setSelectedStronghold}
                list={strongholdList}
                setList={setStrongholdList}
                valueOptions={strongholdOptions}
              />
            </div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display} ref={divRef}>
        <NameDisplay value={guildName} setNewValue={setGuildName} />
          <h2>
            Org. Structure{" "}
            <SingleDisplayText
              value={structure}
              setNewValue={setStructure}
            />
          </h2>
          <h2>
            Origin{" "}
            <SingleDisplayText
              value={origin}
              setNewValue={setOrigin}
            />
          </h2>
          <h2>
            Logo{" "}
            <SingleDisplayText
              value={logo}
              setNewValue={setLogo}
            />
          </h2>
          <h2>
            Org. Type{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedOrgType}
                setList={setOrgTypeList}
              />
            </span>
          </h2>
          <h2>
            Motives{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMotive}
                setList={setMotiveList}
              />
            </span>
          </h2>
          <h2>
            Beliefs{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedBelief}
                setList={setBeliefList}
              />
            </span>
          </h2>
          <h1>Resources</h1>
          <hr className={style.lineBreak} />
          <h2>
            Wealth <span className={style.minorText2}>{wealth}</span>
          </h2>
          <h2>
            Income Source{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedIncome}
                setList={setIncomeList}
              />
            </span>
          </h2>
          <h2>
            Items{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedItem}
                setList={setItemList}
              />
            </span>
          </h2>
          <h2>
            Resources{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedResource}
                setList={setResourceList}
              />
            </span>
          </h2>
          <h1>Members</h1>
          <hr className={style.lineBreak} />
          <h2>
            Leader{" "}
            <SingleDisplayText
              value={leader}
              setNewValue={setLeader}
            />
          </h2>
          <h2>
            Important Members <span className={style.minorText2}></span>
          </h2>
          <h1>Membership</h1>
          <hr className={style.lineBreak} />
          <h2>
            Favored Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedFavored}
                setList={setFavoredList}
              />
            </span>
          </h2>
          <h2>
            Positive Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedPositive}
                setList={setPositiveList}
              />
            </span>
          </h2>
          <h2>
            Neutral Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedNeutral}
                setList={setNeutralList}
              />
            </span>
          </h2>
          <h2>
            Unwelcome Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedUnwelcome}
                setList={setUnwelcomeList}
              />
            </span>
          </h2>
          <h2>
            Intolerant Members{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedIntolerant}
                setList={setIntolerantList}
              />
            </span>
          </h2>
          <h2>
            Initiation{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedInitiation}
                setList={setInitiationList}
              />
            </span>
          </h2>
          <h2>
            Low Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedLowRole}
                setList={setLowRoleList}
              />
            </span>
          </h2>
          <h2>
            Medium Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedMediumRole}
                setList={setMediumRoleList}
              />
            </span>
          </h2>
          <h2>
            High Rank Roles{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedHighRole}
                setList={setHighRoleList}
              />
            </span>
          </h2>
          <h2>
            Advancement{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedAdvance}
                setList={setAdvanceList}
              />
            </span>
          </h2>
          <h1>Features</h1>
          <hr className={style.lineBreak} />
          <h2>
            Influence Level{" "}
            <SingleDisplayText
              value={influence}
              setNewValue={setInfluence}
            />
          </h2>
          <h2>
            Influence Tactics{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedInfluenceTactic}
                setList={setInfluenceTacticList}
              />
            </span>
          </h2>
          <h2>
            Services{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedService}
                setList={setServiceList}
              />
            </span>
          </h2>
          <h2>
            Quests{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedQuest}
                setList={setQuestList}
              />
            </span>
          </h2>
          <h2>
            Power Sources{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedPower}
                setList={setPowerList}
              />
            </span>
          </h2>
          <h2>
            Specialties{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedSpecialty}
                setList={setSpecialtyList}
              />
            </span>
          </h2>
          <h2>
            Weakness{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedWeakness}
                setList={setWeaknessList}
              />
            </span>
          </h2>
          <h1>Buildings</h1>
          <hr className={style.lineBreak} />
          <h2>
            Defence Level{" "}
            <SingleDisplayText
              value={defence}
              setNewValue={setDefence}
            />
          </h2>
          <h2>
            Headquarters{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedHeadquarter}
                setList={setHeadquarterList}
              />
            </span>
          </h2>
          <h2>
            Owned Buildings{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedBuilding}
                setList={setBuildingList}
              />
            </span>
          </h2>
          <h2>
            Locations{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedLocation}
                setList={setLocationList}
              />
            </span>
          </h2>
          <h2>
            Strongholds{" "}
            <span className={style.minorText2}>
              <MultipleDisplay
                selectedItem={selectedStronghold}
                setList={setStrongholdList}
              />
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default GuildGen;
