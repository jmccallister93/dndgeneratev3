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

const Items = (props) => {
  const [fetchError, setFetchError] = useState(null);

  const [allItems, setAllItems] = useState();

  const [adventuringGear, setAdventuringGear] = useState();
  const [adventuringGearOptions, setAdventuringGearOptions] = useState();

  const [armor, setArmor] = useState();
  const [armorOptions, setArmorOptions] = useState();

  const [art, setArt] = useState();
  const [artOptions, setArtOptions] = useState();

  const [container, setContainer] = useState();
  const [containerOptions, setContainerOptions] = useState();

  const [currency, setCurrency] = useState();
  const [currencyOptions, setCurrencyOptions] = useState();

  const [pack, setPack] = useState();
  const [packOptions, setPackOptions] = useState();

  const [expense, setExpense] = useState();
  const [expenseOptions, setExpenseOptions] = useState();

  const [gemstone, setGemstone] = useState();
  const [gemstoneOptions, setGemstoneOptions] = useState();

  const [magic, setMagic] = useState();
  const [magicOptions, setMagicOptions] = useState();

  const [mountItem, setMountItem] = useState();
  const [mountItemOptions, setMountItemOptions] = useState();

  const [mount, setMount] = useState();
  const [mountOptions, setMountOptions] = useState();

  const [tool, setTool] = useState();
  const [toolOptions, setToolOptions] = useState();

  const [tradeGood, setTradeGood] = useState();
  const [tradeGoodOptions, setTradeGoodOptions] = useState();

  const [trinket, setTrinket] = useState();
  const [trinketOptions, setTrinketOptions] = useState();

  const [vehicle, setVehicle] = useState();
  const [vehicleOptions, setVehicleOptions] = useState();

  const [weapon, setWeapon] = useState();
  const [weaponOptions, setWeaponOptions] = useState();

  const [itemOptions, setItemOptions] = useState([]);

  //Datatable settings
  const [selectedItems, setSelectedItems] = useState(null);
  const dt = useRef(null);

  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    "country.name": { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });

  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);

  const openDialog = () => {
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  const dialogFooterTemplate = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />;
  };

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

  //Pull supabase data
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
            id: r.id,
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

  //   Set all items together
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
    console.log(itemOptions);
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

  //Dialog Vairable
  const itemDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Items</h2>
      <>
        <Button onClick={props.openDialogItem} className={style.btnAddRemove}>
          Add / Remove
        </Button>
        {props.randomItemBtn}
      </>
      <Dialog
        header="Items"
        visible={props.dialogVisibleItem}
        maximizable
        modal
        onHide={props.closeDialogItem}
        footer={props.dialogFooterItem}
      >
        <DataTable
          value={itemOptions}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={props.selectedItem}
          onSelectionChange={(e) => {
            props.setSelectedItem(e.value);
          }}
          filters={filters}
          filterDisplay="row"
          responsiveLayout="scroll"
          globalFilterFields={["name"]}
          header={props.header}
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
            header="Type"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </div>
  );
  return itemDialog;
};

export default Items;
