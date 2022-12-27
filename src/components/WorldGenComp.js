import { useState, useEffect } from "react";
import supabase from "../config/supabaseClient";

const WorldGenComp = (props) => {
  const [worldName, setWorldName] = useState("");
  const [worldNames, setWorldNames] = useState("");
  const [worldNameOptions, setWorldNameOptions] = useState("");

  const [continent, setContinent] = useState("");
  const [continents, setContinents] = useState("");
  const [continentOptions, setContinentOptions] = useState("");

  const [sea, setSea] = useState("");
  const [seas, setSeas] = useState("");
  const [seaOptions, setSeaOptions] = useState("");

  const [river, setRiver] = useState("");
  const [rivers, setRivers] = useState("");
  const [riverOptions, setRiverOptions] = useState("");

  const [lake, setLake] = useState("");
  const [lakes, setLakes] = useState("");
  const [lakeOptions, setLakeOptions] = useState("");

    const [mountain, setMountain] = useState("");
    const [mountains, setMountains] = useState("");
    const [mountainOptions, setMountainOptions] = useState("");

    const [hill, setHill] = useState("");
    const [hills, setHills] = useState("");
    const [hillOptions, setHillOptions] = useState("");

    const [plain, setPlain] = useState("");
    const [plains, setPlains] = useState("");
    const [plainOptions, setPlainOptions] = useState("");

    const [forest, setForest] = useState("");
    const [forests, setForests] = useState("");
    const [forestOptions, setForestOptions] = useState("");

    const [swamp, setSwamp] = useState("");
    const [swamps, setSwamps] = useState("");
    const [swampOptions, setSwampOptions] = useState("");

    const [desert, setDesert] = useState("");
    const [deserts, setDeserts] = useState("");
    const [desertOptions, setDesertOptions] = useState("");

    const [tundra, setTundra] = useState("");
    const [tundras, setTundras] = useState("");
    const [tundraOptions, setTundraOptions] = useState("");

    const [jungle, setJungle] = useState("");
    const [jungles, setJungles] = useState("");
    const [jungleOptions, setJungleOptions] = useState("");

    const [island, setIsland] = useState("");
    const [islands, setIslands] = useState("");
    const [islandOptions, setIslandOptions] = useState("");

    const [basin, setBasin] = useState("");
    const [basins, setBasins] = useState("");
    const [basinOptions, setBasinOptions] = useState("");

    const [canyon, setCanyon] = useState("");
    const [canyons, setCanyons] = useState("");
    const [canyonOptions, setCanyonOptions] = useState("");

    const [volcano, setVolcano] = useState("");
    const [volcanos, setVolcanos] = useState("");
    const [volcanoOptions, setVolcanoOptions] = useState("");

    const [plateau, setPlateau] = useState("");
    const [plateaus, setPlateaus] = useState("");
    const [plateauOptions, setPlateauOptions] = useState("");

    const [grassland, setGrassland] = useState("");
    const [grasslands, setGrasslands] = useState("");
    const [grasslandOptions, setGrasslandOptions] = useState("");

    const [savanna, setSavanna] = useState("");
    const [savannas, setSavannas] = useState("");
    const [savannaOptions, setSavannaOptions] = useState("");

    const [steppe, setSteppe] = useState("");
    const [steppes, setSteppes] = useState("");
    const [steppeOptions, setSteppeOptions] = useState("");

    const [oasis, setOasis] = useState("");
    const [oasises, setOasises] = useState("");
    const [oasisOptions, setOasisOptions] = useState("");

    const [marsh, setMarsh] = useState("");
    const [marshes, setMarshes] = useState("");
    const [marshOptions, setMarshOptions] = useState("");

    const [glacier, setGlacier] = useState("");
    const [glaciers, setGlaciers] = useState("");
    const [glacierOptions, setGlacierOptions] = useState("");

  return <></>;
};

export default WorldGenComp;
