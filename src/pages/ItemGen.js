import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import style from "../stylesheets/ItemGen.module.scss";
import supabase from "../config/supabaseClient";

const ItemGen = () => {
    const [fetchError, setFetchError] = useState(null);

    const [adventuringGear, setAdventuringGear] = useState()
    const [adventuringGearOptions, setAdventuringGearOptions] = useState()

    const [armor, setArmor] = useState()
    const [armorOptions, setArmorOptions] = useState()

    const [art, setArt] = useState()
    const [artOptions, setArtOptions] = useState()

    const [container, setContainer] = useState()
    const [containerOptions, setContainerOptions] = useState()

    const [pack, setPack] = useState()
    const [packOptions, setPackOptions] = useState()

    const [expense, setExpense] = useState()
    const [expenseOptions, setExpenseOptions] = useState()

    const [gemstone, setGemstone] = useState()
    const [gemstoneOptions, setGemstoneOptions] = useState()

    const [magic, setMagic] = useState()
    const [magicOptions, setMagicOptions] = useState()

    const [mountItem, setMountItem] = useState()
    const [mountItemOptions, setMountItemOptions] = useState()

    const [mount, setMount] = useState()
    const [mountOptions, setMountOptions] = useState()

    const [tool, setTool] = useState()
    const [toolOptions, setToolOptions] = useState()

    const [tradeGood, setTradeGood] = useState()
    const [tradeGoodOptions, setTradeGoodOptions] = useState()

    const [trinket, setTrinket] = useState()
    const [trinketOptions, setTrinketOptions] = useState()

    const [vehicle, setVehicle] = useState()
    const [vehicleOptions, setVehicleOptions] = useState()

    const [weapon, setWeapon] = useState()
    const [weaponOptions, setWeaponOptions] = useState()

    useEffect(() => {
        const fetchData = async () => {
          const { data, error } = await supabase.from("itemsAdventuringGear").select();
          if (error) {
            setFetchError("Could not fetch the data");
            setAdventuringGear(null);
            console.log(error);
          }
          if (data) {
            setFetchError(null);
            setAdventuringGear(data);
            setAdventuringGearOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
            setContainerOptions(data.map((r) => ({ name: r.name, value: r.value })));
          }
        };
        fetchData();
      }, []);

      useEffect(() => {
        const fetchData = async () => {
          const { data, error } = await supabase.from("itemsEquipmentPacks").select();
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
            setMountItemOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
            setTradeGoodOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
            setVehicleOptions(data.map((r) => ({ name: r.name, value: r.value })));
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
            setWeaponOptions(data.map((r) => ({ name: r.name, value: r.value })));
          }
        };
        fetchData();
      }, []);

  return (
    <div className={style.itemgenWrapper}>
      <Navbar />
    </div>
  );
};

export default ItemGen;
