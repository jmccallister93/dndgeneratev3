import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../stylesheets/ItemGen.module.scss";
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
import { Dropdown } from "primereact/dropdown";
import { e } from "mathjs";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from "primereact/inputtextarea";
import { Checkbox } from "primereact/checkbox";

const ItemGen = () => {
  // Set state variables
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

  const [type, setType] = useState("");
  const [types, setTypes] = useState();
  const [typeOptions, setTypeOptions] = useState();
  const [showTypeInput, setShowTypeInput] = useState(false);

  const [rarity, setRarity] = useState("");
  const [rarities, setRarities] = useState();
  const [rarityOptions, setRarityOptions] = useState();
  const [showRarityInput, setShowRarityInput] = useState(false);

  const [currency, setCurrency] = useState("");
  const [currencies, setCurrencies] = useState();
  const [currencyOptions, setCurrencyOptions] = useState();
  const [showCurrencyInput, setShowCurrencyInput] = useState(false);

  const [currencyValue, setCurrencyValue] = useState();

  const [cost, setCost] = useState("");

  const [weight, setWeight] = useState("");

  const [additional, setAddtional] = useState();
  const [additionals, setAdditionals] = useState();
  const [additionalOptions, setAdditionalOptions] = useState();

  //Export Logic
  const [selectedItems, setSelectedItems] = useState(null);
  const dt = useRef(null);

  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, allItems);
        doc.save("products.pdf");
      });
    });
  };
  const cols = [
    { field: "name", header: "Name" },
    { field: "cost", header: "Cost" },
    { field: "type", header: "Type" },
  ];
  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(allItems);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, "products");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  //Export Buttons
  const exportBtns = (
    <div className="flex align-items-end export-buttons">
      <Button
        type="button"
        icon="pi pi-file"
        onClick={() => exportCSV(true)}
        className="p-button-info mr-2 "
        data-pr-tooltip="Export CSV"
      />
      <Button
        type="button"
        icon="pi pi-file-excel"
        onClick={exportExcel}
        className="p-button-success mr-2"
        data-pr-tooltip="Export XLS"
      />
      <Button
        type="button"
        icon="pi pi-file-pdf"
        onClick={exportPdf}
        className="p-button-warning mr-2"
        data-pr-tooltip="Export PDF"
      />
    </div>
  );

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
          data.map((r) => ({ name: r.name, value: r.value }))
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
        setArmorOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
        setArtOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
          data.map((r) => ({ name: r.name, value: r.value }))
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
        setPackOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
        setExpenseOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
        setGemstoneOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
        setMagicOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
          data.map((r) => ({ name: r.name, value: r.value }))
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
        setMountOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
        setToolOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
          data.map((r) => ({ name: r.name, value: r.value }))
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
        setTrinketOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
            cost: r.cost,
            type: r.type,
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
            cost: r.cost,
            type: r.type,
          }))
        );
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    setAllItems(weaponOptions);
    // console.log(allItems);
  });

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsTypes").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setType(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setTypes(data);
        setTypeOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("itemsRarities").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setRarity(null);
        console.log(error);
      }
      if (data) {
        setFetchError(null);
        setRarities(data);
        setRarityOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
        setCurrencies(data);
        setCurrencyOptions(data.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  }, []);

  //On change events

  const onTypeChange = (e) => {
    setType(e.value);
    setShowTypeInput(false);
    if (e.value === "Random") {
      let r = Math.round(Math.random() * (22 - 2) + 2);
      setType(typeOptions[r].name);
    }
    if (e.value === "Custom") {
      setShowTypeInput(true);
    }
  };

  useEffect(() => {
    if (type === "Weapon") {
    }
  }, [type]);

  const onTypeCustom = (e) => {
    setType(e.target.value);
  };

  const onRarityChange = (e) => {
    setRarity(e.value);
    setShowRarityInput(false);
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (7 - 2) + 2);
      setRarity(rarityOptions[r].name);
    }
    if (e.value === "Custom") {
      setShowRarityInput(true);
    }
  };

  const onRarityCustom = (e) => {
    setRarity(e.target.value);
  };

  const onCurrencyChange = (e) => {
    setCurrency(e.value);
    setShowCurrencyInput(false);
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (6 - 2) + 2);
      setCurrency(currencyOptions[r].name);
      setCurrencyValue(Math.round(Math.random() * (2000 - 1)))
    }
    if (e.value === "Custom") {
      setShowCurrencyInput(true);
    }
  };

  const onCurrencyCustom = (e) => {
    setCurrency(e.target.value);
  };

  const onCurrencyValueChange = (e) => {
    if (e.value === "Random") {
      let r = Math.floor(Math.random() * (6 - 2) + 2);
      setCurrencyValue(r);
    }
    setCurrencyValue(e.value);
  };

  useEffect(() => {
    setCost(currencyValue + " " + currency);
  }, [currencyValue][currency]);

  const onWeightChange = (e) => {
    setWeight(e.value);
  };

  const onRandomWeight = (e) => {
    let r = Math.floor(Math.random() * (2000 - 0));
    setWeight(r);
    console.log(r);
  };

  //Todo
  const onSearchPack = (e) => {
    
  }

  //Generate and Clear
  const onGenerate = (e) => {
    if (type === "") {
      let r = Math.floor(Math.random() * (22 - 2) + 2);
      setType(typeOptions[r].name)
    } else {
      setType(type)
    }
    if (rarity === "") {
      let r = Math.floor(Math.random() * (7 - 2) + 2);
      setRarity(rarityOptions[r].name)
    } else {
      setRarity(rarity)
    }
    if (currency === "") {
      let r = Math.floor(Math.random() * (6 - 2) + 2);
      setCurrency(currencyOptions[r].name)
    } else {
      setCurrency(currency)
    }
    if (currencyValue === ""){
      setCurrencyValue(Math.round(Math.random() * (2000 - 1)))
    } else {
      setCurrencyValue(currencyValue)
    }


  }
  const onClear = (e) => {
    setType("")
    setRarity("")
    setCurrency("")
    setCurrencyValue("")
  }

  return (
    <div className={style.itemgenWrapper}>
      <Navbar />
      <div className={style.itemgenBody}>
        <h1 className={style.itemgenHeader}>Item Generator</h1>
        <div className={style.itemgenOptionsWrapper}>
          <div>
            <h1>Name</h1>
            <InputText placeholder="Name" />
            <button className={style.itemgenBtnName}>Randomize</button>
          </div>
          <div>
            <h1>Type</h1>
            {showTypeInput ? (
              <InputText onChange={onTypeCustom} placeholder="Type" />
            ) : null}
            <Dropdown
              optionLabel="name"
              value={type}
              options={typeOptions}
              onChange={onTypeChange}
              placeholder={showTypeInput ? "Custom" : "Choose Type"}
            />
          </div>
          <div>
            <h1>Rarity</h1>
            {showRarityInput ? (
              <InputText onChange={onRarityCustom} placeholder="Rarity" />
            ) : null}
            <Dropdown
              optionLabel="name"
              value={rarity}
              options={rarityOptions}
              onChange={onRarityChange}
              placeholder={showRarityInput ? "Custom" : "Choose Rarity"}
            />
          </div>
          <div>
            <h1>Cost</h1>
            <InputNumber
              value={currencyValue}
              onChange={onCurrencyValueChange}
              placeholder="Value"
              mode="decimal"
              showButtons
              buttonLayout="currency"
              decrementButtonClassName="p-button-secondary"
              incrementButtonClassName="p-button-secondary"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              minFractionDigits={0}
              maxFractionDigits={2}
            />
            {showCurrencyInput ? (
              <InputText onChange={onCurrencyCustom} placeholder="Currency" />
            ) : null}
            <Dropdown
              optionLabel="name"
              value={currency}
              options={currencyOptions}
              onChange={onCurrencyChange}
              placeholder={showTypeInput ? "Currency" : "Choose Currency"}
            />
          </div>
          <div>
            <h1>Weight</h1>
            <InputNumber
              value={weight}
              onChange={onWeightChange}
              placeholder="Weight"
              mode="decimal"
              showButtons
              buttonLayout="currency"
              decrementButtonClassName="p-button-secondary"
              incrementButtonClassName="p-button-secondary"
              incrementButtonIcon="pi pi-plus"
              decrementButtonIcon="pi pi-minus"
              minFractionDigits={0}
              maxFractionDigits={2}
            />
            <button className={style.itemgenBtnName} onClick={onRandomWeight}>
              Randomize
            </button>
          </div>
          <div>
            <h1>Description</h1>
            <InputTextarea />
            <button className={style.itemgenBtnName}>Randomize</button>
          </div>
          <div className={style.itemgenWeaponAdditionalWrapper}>
            {type === "Weapon" ||
            type === "Vehicle" ||
            type === "Armor" ||
            type === "Equipment Pack" ||
            type === "Mount" ? (
              <h1>Additional</h1>
            ) : null}
            {type === "Weapon" ? (
              <div className={style.itemgenWeaponAdditionalInput}>
                <InputNumber
                  className={style.itemgenWeaponDmgInput}
                  mode="decimal"
                  showButtons
                  buttonLayout="currency"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  placeholder="Damage Amount"
                />
                <Dropdown placeholder="Damage Type" />
                <Dropdown placeholder="Properties" />
              </div>
            ) : null}
            {type === "Vehicle" ? (
              <div>
                <InputNumber
                  style={{ display: "flex" }}
                  placeholder="Speed"
                  mode="decimal"
                  showButtons
                  buttonLayout="currency"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  minFractionDigits={0}
                  maxFractionDigits={2}
                  step={5}
                />
                <InputNumber
                  style={{ display: "flex" }}
                  placeholder="Carry Capacity"
                  mode="decimal"
                  showButtons
                  buttonLayout="currency"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  minFractionDigits={0}
                  maxFractionDigits={2}
                />
              </div>
            ) : null}
            {type === "Armor" ? (
              <div>
                <InputNumber
                  style={{ display: "flex" }}
                  placeholder="Armor Class"
                  mode="decimal"
                  showButtons
                  buttonLayout="currency"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  minFractionDigits={0}
                  maxFractionDigits={2}
                />
                <Dropdown placeholder="Modifier" />
                <Dropdown placeholder="Strength Req." />
                <Dropdown placeholder="Stealth Disadvantage" />
              </div>
            ) : null}
            {type === "Equipment Pack" ? (
              <div>
                <InputText placeholder="Contains" />
                <button className={style.itemgenBtnSearch} onClick={onSearchPack}>
                  <i className="pi pi-search"></i>
                </button>
              </div>
            ) : null}
            {type === "Mount" ? (
              <div>
                <InputNumber
                  placeholder="Speed"
                  mode="decimal"
                  showButtons
                  buttonLayout="currency"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  step={5}
                  minFractionDigits={0}
                  maxFractionDigits={2}
                />
                <InputNumber
                  placeholder="Carry Capacity"
                  mode="decimal"
                  showButtons
                  buttonLayout="currency"
                  decrementButtonClassName="p-button-secondary"
                  incrementButtonClassName="p-button-secondary"
                  incrementButtonIcon="pi pi-plus"
                  decrementButtonIcon="pi pi-minus"
                  minFractionDigits={0}
                  maxFractionDigits={2}
                />
              </div>
            ) : null}
          </div>
        </div>
        <div>
          <div className={style.itemgenBtnWrapper}>
            <button onClick={onGenerate} className={style.itemgenBtnGen}>
              Generate
            </button>
            <button onClick={onClear} className={style.itemgenBtnClear}>
              Clear
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemGen;
