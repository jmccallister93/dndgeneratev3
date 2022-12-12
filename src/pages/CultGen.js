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
import GenerateButton from "../components/GenerateButton";
import ClearButton from "../components/ClearButton";
import CustomInputText from "../components/CustomInputText";
import CustomDropdown from "../components/CustomDropDown";
import CustomDataTable from "../components/CustomDataTable";

const CultGen = () => {
  const [isBasicActive, setIsBasicActive] = useState(false);
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [isFeatureActive, setIsFeatureActive] = useState(false);

  const [cultName, setCultName] = useState("");
  const [cultNames, setCultNames] = useState("");
  const [cultNameOptions, setCultNameOptions] = useState("");

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

  const [headquater, setHeadquater] = useState("");
  const [headquaters, setHeadquaters] = useState("");
  const [headquaterOptions, setHeadquaterOptions] = useState("");
  const [selectedHeadquater, setSelectedHeadquater] = useState([]);
  const [headquaterList, setHeadquaterList] = useState([]);

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
  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  const showDetails = (e) => {
    setIsDetailActive((current) => !current);
  };
  const showFeature = (e) => {
    setIsFeatureActive((current) => !current);
  };
  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Cult Generator</h1>
        <div>
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
                headquaterOptions,
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
                selectedHeadquater,
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
                setSelectedHeadquater,
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
                setSelectedHeadquater,
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
          </div>
        </div>
      </div>

      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Cult Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            <div>
              <CustomInputText
                title={"Cult Name"}
                input={cultName}
                setInput={setCultName}
                placeholder={"Set Cult Name"}
              />
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
                setSingular={setDefence}
                setPlural={setDefences}
                setOptions={setDefenceOptions}
                options={defenceOptions}
                h1Title={"Defence Level"}
                placeholder={"Set Defence"}
                value={defence}
                valueOptions={defenceOptions}
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
          <h1 className={style.subHeader} onClick={showDetails}>
            Cult Details
          </h1>
          <div className={isDetailActive ? style.subsection : style.hidden}>
            <div>
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
                h1Title={"Item"}
                dialogHeader={"Item"}
                selectedItem={selectedItem}
                setSelectedItem={setSelectedItem}
                list={itemList}
                setList={setItemList}
                valueOptions={itemOptions}
              />
              <CustomDataTable
                tableName={"itemsTypes"}
                setSingular={setInfluenceTactic}
                setPlural={setInfluenceTactics}
                setOptions={setInfluenceTacticOptions}
                h1Title={"Influence Tactics"}
                dialogHeader={"Influence Tactics"}
                selectedInfluenceTactic={selectedInfluenceTactic}
                setSelectedInfluenceTactic={setSelectedInfluenceTactic}
                list={influenceTacticList}
                setList={setInfluenceTacticList}
                valueOptions={influenceTacticOptions}
              />
              <CustomDataTable
                tableName={"itemTypes"}
                setSingular={setFavored}
                setPlural={setFavoreds}
                setOptions={setFavoredOptions}
                h1Title={"Favored Members"}
                dialogHeader={"Favored Members"}
                selectedFavored={selectedFavored}
                setSelectedFavored={setSelectedFavored}
                list={favoredList}
                setList={setFavoredList}
                valueOptions={favoredOptions}
              />
              <CustomDataTable
                tableName={"itemTypes"}
                setSingular={setPositive}
                setPlural={setPositives}
                setOptions={setPositiveOptions}
                h1Title={"Positive Members"}
                dialogHeader={"Positive Members"}
                selectedPositive={selectedPositive}
                setSelectedPositive={setSelectedPositive}
                list={positiveList}
                setList={setPositiveList}
                valueOptions={positiveOptions}
              />
              <CustomDataTable
                tableName={"itemTypes"}
                setSingular={setNeutral}
                setPlural={setNeutrals}
                setOptions={setNeutralOptions}
                h1Title={"Neutral Members"}
                dialogHeader={"Neutral Members"}
                selectedNeutral={selectedNeutral}
                setSelectedNeutral={setSelectedNeutral}
                list={neutralList}
                setList={setNeutralList}
                valueOptions={neutralOptions}
              />
              
            </div>
          </div>
          <h1 className={style.subHeader} onClick={showFeature}>
            Cult Features
          </h1>
          <div className={isFeatureActive ? style.subsection : style.hidden}>
            <div></div>
          </div>
        </div>

        {/* Main Display */}
        <div className={style.display}>
          <h1>{cultName}</h1>
          <h2>First thing</h2>
          <span className={style.minorText2}>display selected thing</span>
        </div>
      </div>
    </div>
  );
};

export default CultGen;
