import styleB from "../stylesheets/BuildingGen.module.scss";
import { useEffect, useState } from "react";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";

const Npcs = () => {
    const [align, setAlign] = useState("");
    const [aligns, setAligns] = useState();
    const [alignOptions, setAlignOptions] = useState();
  
    const [bond, setBond] = useState("");
    const [bonds, setBonds] = useState();
    const [bondOptions, setBondOptions] = useState();
  
    const [feature, setFeature] = useState("");
    const [features, setFeatures] = useState();
    const [featureOptions, setFeatureOptions] = useState();
  
    const [interaction, setInteraction] = useState("");
    const [interactions, setInteractions] = useState();
    const [interactionOptions, setInteractionOptions] = useState();
  
    const [prof, setProf] = useState("");
    const [profs, setProfs] = useState();
    const [profOptions, setProfOptions] = useState();
  
    const [mannerism, setMannerism] = useState("");
    const [mannerisms, setMannerisms] = useState();
    const [mannerismOptions, setMannerismOptions] = useState();
  
    const [race, setRace] = useState("");
    const [races, setRaces] = useState();
    const [raceOptions, setRaceOptions] = useState();
  
    const [sex, setSex] = useState("");
    const [sexes, setSexes] = useState();
    const [sexOptions, setSexOptions] = useState();
  
    const [talent, setTalent] = useState("");
    const [talents, setTalents] = useState();
    const [talentOptions, setTalentOptions] = useState();
  
    const [name, setName] = useState("");
    const [names, setNames] = useState();
    const [nameOptions, setNameOptions] = useState();
  
    const [str, setStr] = useState("");
    const [strMod, setStrMod] = useState("");
    const [dex, setDex] = useState("");
    const [dexMod, setDexMod] = useState("");
    const [con, setCon] = useState("");
    const [conMod, setConMod] = useState("");
    const [int, setInt] = useState("");
    const [intMod, setIntMod] = useState("");
    const [wis, setWis] = useState("");
    const [wisMod, setWisMod] = useState("");
    const [cha, setCha] = useState("");
    const [chaMod, setChaMod] = useState("");
  
    const [hook, setHook] = useState("");

//Get Data function
  const getData = (tableName, setSingular, setPlural, setOptions) => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        setSingular(null);
      }
      if (dataName) {
        setPlural(dataName);
        setFetchError(null);
        setOptions(dataName.map((r) => ({ name: r.name, value: r.value })));
      }
    };
    fetchData();
  };

  //Import data via getData
  useEffect(() => {
    getData("aligns", setAlign, setAligns, setAlignOptions);
    getData("bonds", setBond, setBonds, setBondOptions);
    getData("features", setFeature, setFeatures, setFeatureOptions);
    getData("interactions", setInteraction, setInteractions, setInteractionOptions);
    getData("mannerisms", setMannerism, setMannerisms, setMannerismOptions);
    getData("professions", setProf, setProf, setProfOptions);
    getData("races", setRace, setRaces, setRaceOptions);
    getData("sexes", setSex, setSexes, setSexOptions);
    getData("talents", setTalent, setTalents, setTalentOptions);
  }, []);
  //name get data
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("names").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setName(null);
        console.log(error);
      }
      if (data) {
        setNames(data);
        setFetchError(null);
        setNameOptions(
          data.map((r) => ({
            first_name: r.first_name,
            epithet_a: r.epithet_a,
            noun_a: r.noun_a,
            epithet_b: r.epithet_b,
            noun_b: r.noun_b,
          }))
        );
      }
    };
    fetchData();
  }, []);

    return (  );
}
 
export default Npcs;