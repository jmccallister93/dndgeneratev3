import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../stylesheets/ItemCollection.module.scss";
import supabase from "../config/supabaseClient";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "/node_modules/primeflex/primeflex.css";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { FilterMatchMode, FilterOperator } from "primereact/api";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Tooltip } from "primereact/tooltip";
import { FileUpload } from "primereact/fileupload";
import { jsPDF } from "jspdf";
import { autoTable } from "jspdf-autotable";
import { Dialog } from "primereact/dialog";
import { Toast } from "primereact/toast";
import { e } from "mathjs";

const Items = (props) => {
  //---SAMPLE PROPS----
  // h1Title={"Items"}
  // dialogHeader={"Items"}
  // selectedItem={selectedItem}
  // setSelectedItem={setSelectedItem}
  // header={header}
  // itemList={itemList}
  // setItemList={setItemList}
  // valueOptions={itemOptions}
  // options={itemOptions}
  //---SAMPLE PROPS----

  const [fetchError, setFetchError] = useState(null);

  const [allItems, setAllItems] = useState();

  const [adventuringGear, setAdventuringGear] = useState();
  const [adventuringGearOptions, setAdventuringGearOptions] = useState("");

  const [armor, setArmor] = useState();
  const [armorOptions, setArmorOptions] = useState("");

  const [art, setArt] = useState();
  const [artOptions, setArtOptions] = useState("");

  const [container, setContainer] = useState();
  const [containerOptions, setContainerOptions] = useState("");

  const [currency, setCurrency] = useState();
  const [currencyOptions, setCurrencyOptions] = useState("");

  const [pack, setPack] = useState();
  const [packOptions, setPackOptions] = useState("");

  const [expense, setExpense] = useState();
  const [expenseOptions, setExpenseOptions] = useState("");

  const [gemstone, setGemstone] = useState();
  const [gemstoneOptions, setGemstoneOptions] = useState("");

  const [magic, setMagic] = useState();
  const [magicOptions, setMagicOptions] = useState("");

  const [mountItem, setMountItem] = useState();
  const [mountItemOptions, setMountItemOptions] = useState("");

  const [mount, setMount] = useState();
  const [mountOptions, setMountOptions] = useState("");

  const [tool, setTool] = useState();
  const [toolOptions, setToolOptions] = useState("");

  const [tradeGood, setTradeGood] = useState();
  const [tradeGoodOptions, setTradeGoodOptions] = useState("");

  const [trinket, setTrinket] = useState();
  const [trinketOptions, setTrinketOptions] = useState("");

  const [vehicle, setVehicle] = useState();
  const [vehicleOptions, setVehicleOptions] = useState("");

  const [weapon, setWeapon] = useState();
  const [weaponOptions, setWeaponOptions] = useState("");

  const [itemOptions, setItemOptions] = useState([]);
  const [itemList, setItemList] = useState([]);

  //Datatable settings
  //Dialog Visible State
  const [dialogVisible, setDialogVisible] = useState(false);
  //Set Filters
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    type: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  //On filter change
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;
    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  //Render header
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
  //Set Header
  const header = (
    <div className="flex justify-content-between">{renderHeader()}</div>
  );
  //Open dialog
  const openDialog = () => {
    setDialogVisible(true);
  };
  //Close Dialog
  const closeDialog = () => {
    setDialogVisible(false);
    for (let i = 0; i < props.selectedItem.length; i++) {
      if (props.itemList.includes(props.selectedItem[i])) {
      } else {
        props.setItemList((oldArray) => [...oldArray, props.selectedItem[i]]);
      }
    }
  };
  //Dialog Footer
  const dialogFooter = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />;
  };
  //On Selection change 
  const onSelectionChange =(e) => {
    props.setSelectedItem(e.value);
    // for (let i = 0; i < e.value.length; i++) {
    //   if (props.itemList.includes(e.value[i])) {
    //   } else {
    //     props.setItemList((oldArray) => [...oldArray, e.value[i]]);
    //   }
    // }
    // console.log("Selected items" + props.itemList)
  }
  useEffect(() => {
    props.setSelectedItem(props.itemList);
  }, [props.itemList]);
  //Pull supabase data
  //adventure gear
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("itemsAdventuringGear")
        .select();
      if (error) {
        setFetchError("Could not fetch the data");
        setAdventuringGear(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setAdventuringGear(data);
        setAdventuringGearOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
            weight: r.weight,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //armor
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsArmor").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setArmor(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setArmor(data);
        setArmorOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
            ac: r.ac,
            strength: r.strength,
            stealth: r.stealth,
            weight: r.weight,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //art
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsArt").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setArt(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setArt(data);
        setArtOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //containers
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsContainers").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setContainer(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setContainer(data);
        setContainerOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            capacity: r.capactiy,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //currencies
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsCurrencies").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setCurrency(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setCurrency(data);
        setCurrencyOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //equipment packs
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("itemsEquipmentPacks")
        .select();
      if (error) {
        setFetchError("Could not fetch the data");
        setPack(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setPack(data);
        setPackOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            price: r.price,
            content: r.content,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //expenses
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsExpenses").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setExpense(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setExpense(data);
        setExpenseOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //gemstones
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsGemstones").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setGemstone(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setGemstone(data);
        setGemstoneOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //magic items
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsMagicAll").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setMagic(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setMagic(data);
        setMagicOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            rarity: r.rarity,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //mount items
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsMountItems").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setMountItem(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setMountItem(data);
        setMountItemOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
            weight: r.weight,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //mounts
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsMounts").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setMount(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setMount(data);
        setMountOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
            speed: r.speed,
            capacity: r.capacity,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //tools
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsTools").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setTool(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setTool(data);
        setToolOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //tradegoods
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsTradeGoods").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setTradeGood(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setTradeGood(data);
        setTradeGoodOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //trinkets
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsTrinkets").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setTrinket(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setTrinket(data);
        setTrinketOptions(
          data.map((r) => ({ name: r.name, value: r.value, type: r.type }))
        );
      }
    };
    fetchData();
  }, []);
  //vehciles
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsVehicles").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setVehicle(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setVehicle(data);
        setVehicleOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
            speed: r.speed,
            capacity: r.capactiy,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //weapons
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsWeapons").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setWeapon(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setWeapon(data);
        setWeaponOptions(
          data.map((r) => ({
            name: r.name,
            value: r.value,
            type: r.type,
            cost: r.cost,
            damage: r.damage,
            weight: r.weight,
            properties: r.properties,
          }))
        );
      }
    };
    fetchData();
  }, []);
  //Set all items together
  useEffect(() => {
    // const items = [...weaponOptions,...armorOptions]
    setItemOptions(weaponOptions);
    setItemOptions((prevState) => [
      ...prevState,
      ...armorOptions,
      ...artOptions,
      ...containerOptions,
      ...packOptions,
      ...expenseOptions,
      ...gemstoneOptions,
      ...magicOptions,
      ...mountItemOptions,
      ...toolOptions,
      ...tradeGoodOptions,
      ...trinketOptions,
      ...vehicleOptions,
    ]);
  }, [
    adventuringGearOptions,
    armorOptions,
    artOptions,
    containerOptions,
    currencyOptions,
    packOptions,
    expenseOptions,
    gemstoneOptions,
    magicOptions,
    mountItemOptions,
    mountOptions,
    toolOptions,
    tradeGoodOptions,
    trinketOptions,
    vehicleOptions,
    weaponOptions,
  ]);
  //Random Item
    const onRandomItem = (e) => {
      const max = itemOptions.length - 1;
      let r = Math.round(Math.random() * (max - 0));
      if (props.itemList.includes(itemOptions[r])) {
      } else {
        props.setItemList((saveArray) => [...saveArray, itemOptions[r]]);
      }
    };
    const randomItemBtn = (
      <Button onClick={onRandomItem} className={style.btnName}>
        Random
      </Button>
    );
  const itemOptions2 = useRef();

  //JSX Dialog Vairable
  const itemDialog = (
    <div className="card">
      <h1 className={style.titles}>{props.h1Title}</h1>
      <Button onClick={openDialog} className={style.btnName}>
        Add / Remove
      </Button>
      {randomItemBtn}
      {/* {props.dialogVisibleItem === false ? ( 
       DIV WOULD GO HERE ) : (
         <div>
           <Button onClick={props.openDialogItem} className={style.btnAddRemove}>
             Loading...
          </Button>
          {props.randomItemBtn}
         </div>
       )} */}
      <Dialog
        header={props.dialogHeader}
        visible={dialogVisible}
        maximizable
        modal
        onHide={closeDialog}
        footer={dialogFooter}
        transitionOptions
      >
        <DataTable
          value={itemOptions}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={props.selectedItem}
          onSelectionChange={onSelectionChange
          //   (e) => {
          //   props.setSelectedItem(e.value);
          // }
        }
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          // header={props.header}
          emptyMessage="No items found."
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords} entries"
          rowHover
          resizableColumns
          reorderableColumns
          reorderableRows
        >
          <Column
            selectionMode="multiple"
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
            header={header}
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );

  return <>{itemDialog}</>;
};

export default Items;
