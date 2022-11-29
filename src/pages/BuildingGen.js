import Navbar from "../components/Navbar";
import style from "../stylesheets/BuildingGen.module.scss";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import supabase from "../config/supabaseClient";
import { Button } from "primereact/button";
import { e } from "mathjs";
import { DataTable } from "primereact/datatable";
import { Column } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { FilterMatchMode, FilterOperator } from "primereact/api";

const BuildingGen = () => {
  const [fetchError, setFetchError] = useState(null);
  const [isBasicActive, setIsBasicActive] = useState(false);

  const [buildingName, setBuildingName] = useState("");
  const [buildingNames, setBuildingNames] = useState("");
  const [buildingNameOptions, setBuildingNameOptions] = useState("");

  const [buildingCategory, setBuildingCategory] = useState("");
  const [buildingCategorys, setBuildingCategorys] = useState("");
  const [buildingCategoryOptions, setBuildingCategoryOptions] = useState("");

  const [buildingType, setBuildingType] = useState("");
  const [buildingTypes, setBuildingTypes] = useState("");
  const [buildingTypeOptions, setBuildingTypeOptions] = useState("");
  const [buildingTypeCategory, setBuildingTypeCategory] = useState();
  const [buildingList, setBuildingList] = useState("");
  const [selectedBuildingType, setSelectedBuildingType] = useState(null);
  const [dialogVisibleBuildingType, setDialogVisibleBuildingType] =
    useState(false);

  const [buildingRoom, setBuildingRoom] = useState("");
  const [buildingRooms, setBuildingRooms] = useState("");
  const [buildingRoomOptions, setBuildingRoomOptions] = useState("");

  const [buildingColor, setBuildingColor] = useState("");
  const [buildingColors, setBuildingColors] = useState("");
  const [buildingColorOptions, setBuildingColorOptions] = useState("");

  const [buildingSound, setBuildingSound] = useState("");
  const [buildingSounds, setBuildingSounds] = useState("");
  const [buildingSoundOptions, setBuildingSoundOptions] = useState("");

  const [buildingSmell, setBuildingSmell] = useState("");
  const [buildingSmells, setBuildingSmells] = useState("");
  const [buildingSmellOptions, setBuildingSmellOptions] = useState("");

  const [buildingStyle, setBuildingStyle] = useState("");
  const [buildingStyles, setBuildingStyles] = useState("");
  const [buildingStyleOptions, setBuildingStyleOptions] = useState("");

  const [buildingEnterance, setBuildingEnterance] = useState("");
  const [buildingEnterances, setBuildingEnterances] = useState("");
  const [buildingEnteranceOptions, setBuildingEnteranceOptions] = useState("");

  const [buildingRoomCount, setBuildingRoomCount] = useState("");
  const [buildingRoomCounts, setBuildingRoomCounts] = useState("");
  const [buildingRoomCountOptions, setBuildingCountOptions] = useState("");

  const [buildingWindow, setBuildingWindow] = useState("");
  const [buildingWindows, setBuildingWindows] = useState("");
  const [buildingWindowOptions, setBuildingWindowOptions] = useState("");



  //Get Data
  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select()
        .order("id");

      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(
          dataName.map((r) => ({ name: r.name, value: r.value, type: r.type }))
        );
      }
    };
    fetchData();
  };

  useEffect(() => {
    getData(
      "buildingCategory",
      setBuildingCategory,
      setBuildingCategorys,
      setBuildingCategoryOptions
    );
    getData(
      "buildingAll",
      setBuildingType,
      setBuildingTypes,
      setBuildingTypeOptions
    );
  }, []);

  //Datatable
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div>
        <span className="p-input-icon-left">
          <i className="pi pi-search mr-2" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder="Keyword Search"
          />
        </span>
      </div>
    );
  };
  const header = (
    <div className="flex justify-content-between">{renderHeader()}</div>
  );

  //Show Options
  const showBasics = (e) => {
    setIsBasicActive((current) => !current);
  };
  //InputTexts
  const customInputText = (title, value, change, placeholder, click) => (
    <div>
      <h2 className={style.titles}>{title}</h2>
      <InputText value={value} onChange={change} placeholder={placeholder} />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );

  //onChanges
  const onBuildingNameChange = (e) => {
    setBuildingName(e.target.value);
  };
  const onRandomBuildingName = (e) => {};
  const onBuildingCategoryChange = (e) => {
    setBuildingCategory(e.value);
  };
  const onRandomBuildingCategory = (e) => {
    let r = Math.round(Math.random() * (9 - 0));
    setBuildingCategory(buildingCategoryOptions[r].name);
  };
  const onBuildingTypeChange = (e) => {
    setBuildingType(e.value);
  };
  const onRandomBuildingType = (e) => {
    let r = Math.round(Math.random() * (9 - 0));
    setBuildingType(buildingTypeOptions[r].name);
  };

  //Name Input
  const nameText = customInputText(
    "Building Name",
    buildingName,
    onBuildingNameChange,
    "Set Name",
    onRandomBuildingName
  );

  //DropDowns
  const customDrop = (title, value, options, change, placeholder, click) => (
    <div className={style.dropContainer}>
      <h2 className={style.monstergenTitles}>{title}</h2>
      <Dropdown
        optionLabel="name"
        value={value}
        options={options}
        onChange={change}
        placeholder={placeholder}
      />
      <Button onClick={click} className={style.btnName}>
        Random
      </Button>
    </div>
  );
  //BuildingCategory
  const buildingCategoryDrop = customDrop(
    "Category",
    buildingCategory,
    buildingCategoryOptions,
    onBuildingCategoryChange,
    "Choose Category",
    onRandomBuildingCategory
  );
  //BuildingType
  const openDialogBuildingType = () => {
    setDialogVisibleBuildingType(true);
  };
  const closeDialogBuildingType = () => {
    setDialogVisibleBuildingType(false);
    setBuildingType(selectedBuildingType.name);
  };
  const dialogFooterBuildingType = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogBuildingType} />
    );
  };

  //Filter by Category
  useEffect(() => {
    setBuildingType("");
    setBuildingList(buildingTypeOptions);
    for (let i = 0; buildingTypeOptions.length > i; i++) {
      if (buildingCategory === "Housing") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Housing")
        );
      } else if (buildingCategory === "Trade") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Trade")
        );
      } else if (buildingCategory === "Religious") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Religious")
        );
      } else if (buildingCategory === "Farm") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Farm")
        );
      } else if (buildingCategory === "Recreation") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Recreation")
        );
      } else if (buildingCategory === "Education") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Education")
        );
      } else if (buildingCategory === "Military") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Military")
        );
      } else if (buildingCategory === "Institutional") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Institutional")
        );
      } else if (buildingCategory === "Mine") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Mine")
        );
      } else if (buildingCategory === "Agriculture") {
        return setBuildingList(
          buildingTypeOptions.filter((value) => value.type === "Agriculture")
        );
      } else if (buildingCategory === "Any") {
        return setBuildingList(buildingTypeOptions);
      } else {
        return setBuildingList(buildingTypeOptions);
      }
    }
    // console.log(buildingTypeOptions)
  }, [buildingCategory]);

  //Filter if Type is set
  //   useEffect(() =>{
  //     if(buildingCategory === ""){
  //       setBuildingCategory(buildingType)
  //         if(buildingType.type === "Housing"){
  //             console.log("y")
  //         }

  //     }
  //   }, [buildingType])

  //   const buildingTypeDisplay = (
  //     <div>
  //       <DataTable
  //         value={selectedBuildingType}
  //         scrollable
  //         rows={20}
  //         dataKey="name"
  //         filters={filters}
  //         filterDisplay="row"
  //         responsiveLayout="scroll"
  //         globalFilterFields={["name"]}
  //         emptyMessage="No items found."
  //         currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
  //         rowHover
  //         resizableColumns
  //         reorderableColumns
  //         reorderableRows
  //       >
  //         <Column
  //           header="Building Type"
  //           field="name"
  //           sortable
  //           filter
  //           filterPlaceholder="Search"
  //         ></Column>
  //       </DataTable>
  //     </div>
  //   );
  const buildingTypeDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Building Type</h2>
      <Button
        onClick={openDialogBuildingType}
        className={style.monstergenBtnName}
      >
        Add / Remove
      </Button>
      <Dialog
        header="Building Type"
        visible={dialogVisibleBuildingType}
        maximizable
        modal
        onHide={closeDialogBuildingType}
        footer={dialogFooterBuildingType}
      >
        <DataTable
          value={buildingList}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={selectedBuildingType}
          onSelectionChange={(e) => {
            setSelectedBuildingType(e.value);
          }}
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="single"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            field="name"
            header="Name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
          <Column
            field="type"
            header="Type"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );

  //Buttons
  const onGenerate = (e) => {};
  const onClear = (e) => {};

  return (
    <div className={style.mainWrapper}>
      <Navbar />
      <div className={style.topHeader}>
        <h1 className={style.mainHeader}>Building Generator</h1>
        {/* Generate Btns */}
        <div>
          <div className={style.btnWrapper}>
            <button onClick={onGenerate} className={style.btnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.btnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
      {/* Options */}
      <div className={style.body}>
        <div className={style.optionsWrapper}>
          <h1>Building Options</h1>
          <h1 className={style.subHeader} onClick={showBasics}>
            Basic Info
          </h1>
          <div className={isBasicActive ? style.subsection : style.hidden}>
            {nameText}
            {buildingCategoryDrop}
            {buildingTypeDialog}
          </div>
        </div>
        {/* Main Display */}
        <div className={style.display}>
          <h1>{buildingName}</h1>
          <h2>
            Category:{" "}
            <span className={style.minorText2}>{buildingCategory}</span>
          </h2>
          <h2>
            Type: <span className={style.minorText2}>{buildingType}</span>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BuildingGen;
