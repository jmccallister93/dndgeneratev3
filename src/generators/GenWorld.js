import { useState, useEffect } from "react";
import CustomInputNumber from "./CustomInputNumber";

const GenWorld = (props) => {
  const [worldName, setWorldName] = useState("");
  const [worldNames, setWorldNames] = useState("");
  const [worldNameOptions, setWorldNameOptions] = useState("");

  const [continent, setContinent] = useState("");
  const [continents, setContinents] = useState("");
  const [continentOptions, setContinentOptions] = useState("");

  const [ocean, setSea] = useState("");
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

  return (
    <>
      <CustomInputNumber
        setSingular={props.setContinent}
        h1Title={"Continents"}
        value={props.continent}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={1}
      />
      <CustomInputNumber
        setSingular={props.setOcean}
        h1Title={"Oceans"}
        value={props.ocean}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setRiver}
        h1Title={"Rivers"}
        value={props.rivers}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setLake}
        h1Title={"Lakes"}
        value={props.lake}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setMountain}
        h1Title={"Mountains"}
        value={props.mountain}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setHill}
        h1Title={"Hills"}
        value={props.hill}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setPlain}
        h1Title={"Plains"}
        value={props.plain}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setForest}
        h1Title={"Forests"}
        value={props.forest}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setSwamp}
        h1Title={"Swamps"}
        value={props.swamp}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setDesert}
        h1Title={"Deserts"}
        value={props.desert}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setTundra}
        h1Title={"Tundras"}
        value={props.tundra}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setJungle}
        h1Title={"Jungles"}
        value={props.jungle}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setIsland}
        h1Title={"Islands"}
        value={props.island}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setBasin}
        h1Title={"Basins"}
        value={props.basin}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setCanyon}
        h1Title={"Canyons"}
        value={props.canyon}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setVolcano}
        h1Title={"Volcanos"}
        value={props.volcano}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setPlateau}
        h1Title={"Plateaus"}
        value={props.plateau}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setGrassland}
        h1Title={"Grasslands"}
        value={props.grassland}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setSavanna}
        h1Title={"Savannas"}
        value={props.savanna}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setSteppe}
        h1Title={"Steppes"}
        value={props.steppe}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setOasis}
        h1Title={"Oasises"}
        value={props.oasis}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setGlacier}
        h1Title={"Glaciers"}
        value={props.glacier}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
      <CustomInputNumber
        setSingular={props.setMarsh}
        h1Title={"Marshes"}
        value={props.marsh}
        placeholder={"Set Amount"}
        maxNumber={99}
        minNumber={0}
      />
    </>
  );
};

export default GenWorld;
