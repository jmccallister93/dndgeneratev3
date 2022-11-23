const onRemoveLangAbyssal = (e) =>
  onRemoveCustom(setLangList, langList, "Abyssal");
  const onRemoveLangCelestial = (e) =>
  onRemoveCustom(setLangList, langList, "Celestial");
  const onRemoveLangCommon = (e) =>
  onRemoveCustom(setLangList, langList, "Common");
  const onRemoveLangDeepSpeech = (e) =>
  onRemoveCustom(setLangList, langList, "Deep Speech");
  const onRemoveLangDraconic = (e) =>
  onRemoveCustom(setLangList, langList, "Draconic");
  const onRemoveLangDwarvish = (e) =>
  onRemoveCustom(setLangList, langList, "Dwarvish");
  const onRemoveLangElvish = (e) =>
  onRemoveCustom(setLangList, langList, "Elvish");
  const onRemoveLangGiant = (e) =>
  onRemoveCustom(setLangList, langList, "Giant");
  const onRemoveLangGnomish = (e) =>
  onRemoveCustom(setLangList, langList, "Gnomish");
  const onRemoveLangGoblin = (e) =>
  onRemoveCustom(setLangList, langList, "Goblin");
  const onRemoveLangHalfling = (e) =>
  onRemoveCustom(setLangList, langList, "Halfling");
  const onRemoveLangInfernal = (e) =>
  onRemoveCustom(setLangList, langList, "Infernal");
  const onRemoveLangOrc = (e) =>
  onRemoveCustom(setLangList, langList, "Orc");
  const onRemoveLangPrimordial = (e) =>
  onRemoveCustom(setLangList, langList, "Primordial");
  const onRemoveLangSylvan = (e) =>
  onRemoveCustom(setLangList, langList, "Sylvan");
  const onRemoveLangUndercommon = (e) =>
  onRemoveCustom(setLangList, langList, "Undercommon");
  
  const langRemoveAbyssal = customDmgRemove(onRemoveLangAbyssal);
  const langRemoveCelestial = customDmgRemove(onRemoveLangCelestial);
  const langRemoveCommon = customDmgRemove(onRemoveLangCommon);
  const langRemoveDeepSpeech = customDmgRemove(onRemoveLangDeepSpeech);
  const langRemoveDraconic = customDmgRemove(onRemoveLangDraconic);
  const langRemoveDwarvish = customDmgRemove(onRemoveLangDwarvish);
  const langRemoveElvish = customDmgRemove(onRemoveLangElvish);
  const langRemoveGiant = customDmgRemove(onRemoveLangGiant);
  const langRemoveGnomish = customDmgRemove(onRemoveLangGnomish);
  const langRemoveGoblin = customDmgRemove(onRemoveLangGoblin);
  const langRemoveHalfling = customDmgRemove(onRemoveLangHalfling);
  const langRemoveInfernal = customDmgRemove(onRemoveLangInfernal);
  const langRemoveOrc = customDmgRemove(onRemoveLangOrc);
  const langRemovePrimordial = customDmgRemove(onRemoveLangPrimordial);
  const langRemoveSylvan = customDmgRemove(onRemoveLangSylvan);
  const langRemoveUndercommon = customDmgRemove(onRemoveLangUndercommon);
  
  const langDisplay = langList.map((i) => {
  return (
    <div>
      <h3>
        {i.name}
        {i.name === "Abyssal"
          ? langRemoveAbyssal
          : i.name === "Celestial"
          ? langRemoveCelestial
          : i.name === "Common"
          ? langRemoveCommon
          : i.name === "Deep Speech"
          ? langRemoveDeepSpeech
          : i.name === "Draconic"
          ? langRemoveDraconic
          : i.name === "Dwarvish"
          ? langRemoveDwarvish
          : i.name === "Elvish"
          ? langRemoveElvish
          : i.name === "Giant"
          ? langRemoveGiant
          : i.name === "Gnomish"
          ? langRemoveGnomish
          : i.name === "Goblin"
          ? langRemoveGoblin
          : i.name === "Halfling"
          ? langRemoveHalfling
          : i.name === "Infernal"
          ? langRemoveInfernal
          : i.name === "Orc"
          ? langRemoveOrc
          : i.name === "Primordial"
          ? langRemovePrimordial
          : i.name === "Sylvan"
          ? langRemoveSylvan
          : i.name === "Undercommon"
          ? langRemoveUndercommon
          : null}
      </h3>
    </div>
  );
  });
  const langDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Languages</h2>
      <Button onClick={openDialogLang} className={style.monstergenBtnName}>
        <i className="pi pi-plus"> Add</i>
      </Button>
      <Dialog
        header="Languages"
        visible={dialogVisibleLang}
        maximizable
        modal
        onHide={closeDialogLang}
        footer={dialogFooterLang}
      >
        <DataTable
          value={langOptions}
          scrollable
          scrollHeight="60vh"
          //   className="p-datatable-customers"
          rows={20}
          dataKey="name"
          selection={selectedItemsLang}
          onSelectionChange={(e) => setSelectedItemsLang(e.value)}
          //   selectionPageOnly
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
        </DataTable>
      </Dialog>
    </div>
  );

 

const onRemoveSpecialAberrantGround = (e) => 
onRemoveCustom(setSpecialList, specialList, "Aberrant Ground") 
const onRemoveSpecialAdhesive = (e) => 
onRemoveCustom(setSpecialList, specialList, "Adhesive") 
const onRemoveSpecialAggressive = (e) => 
onRemoveCustom(setSpecialList, specialList, "Aggressive") 
const onRemoveSpecialAirForm = (e) => 
onRemoveCustom(setSpecialList, specialList, "Air Form") 
const onRemoveSpecialAlert = (e) => 
onRemoveCustom(setSpecialList, specialList, "Alert") 
const onRemoveSpecialAlienMind = (e) => 
onRemoveCustom(setSpecialList, specialList, "Alien Mind") 
const onRemoveSpecialAmbusher = (e) => 
onRemoveCustom(setSpecialList, specialList, "Ambusher") 
const onRemoveSpecialAmorphous = (e) => 
onRemoveCustom(setSpecialList, specialList, "Amorphous") 
const onRemoveSpecialAmphibious = (e) => 
onRemoveCustom(setSpecialList, specialList, "Amphibious") 
const onRemoveSpecialAngelicHellishWeapons = (e) => 
onRemoveCustom(setSpecialList, specialList, "Angelic/Hellish Weapons") 
const onRemoveSpecialAntimagicCone = (e) => 
onRemoveCustom(setSpecialList, specialList, "Antimagic Cone") 
const onRemoveSpecialAntimagicSusceptibility = (e) => 
onRemoveCustom(setSpecialList, specialList, "Antimagic Susceptibility") 
const onRemoveSpecialAversiontoFire = (e) => 
onRemoveCustom(setSpecialList, specialList, "Aversion to Fire") 
const onRemoveSpecialAvoidance = (e) => 
onRemoveCustom(setSpecialList, specialList, "Avoidance") 
const onRemoveSpecialAxiomaticMind = (e) => 
onRemoveCustom(setSpecialList, specialList, "Axiomatic Mind") 
const onRemoveSpecialBarbedHide = (e) => 
onRemoveCustom(setSpecialList, specialList, "Barbed Hide") 
const onRemoveSpecialBerserk = (e) => 
onRemoveCustom(setSpecialList, specialList, "Berserk") 
const onRemoveSpecialBlindSenses = (e) => 
onRemoveCustom(setSpecialList, specialList, "Blind Senses") 
const onRemoveSpecialBloodFrenzy = (e) => 
onRemoveCustom(setSpecialList, specialList, "Blood Frenzy") 
const onRemoveSpecialBound = (e) => 
onRemoveCustom(setSpecialList, specialList, "Bound") 
const onRemoveSpecialBoundSpellStoring = (e) => 
onRemoveCustom(setSpecialList, specialList, "Bound (Spell Storing)") 
const onRemoveSpecialBrave = (e) => 
onRemoveCustom(setSpecialList, specialList, "Brave") 
const onRemoveSpecialBrute = (e) => 
onRemoveCustom(setSpecialList, specialList, "Brute") 
const onRemoveSpecialChargeCentaur = (e) => 
onRemoveCustom(setSpecialList, specialList, "Charge(Centaur)") 
const onRemoveSpecialChargeBoar = (e) => 
onRemoveCustom(setSpecialList, specialList, "Charge(Boar)") 
const onRemoveSpecialConstrict = (e) => 
onRemoveCustom(setSpecialList, specialList, "Constrict") 
const onRemoveSpecialConsumeLife = (e) => 
onRemoveCustom(setSpecialList, specialList, "Consume Life") 
const onRemoveSpecialCorrodeMetal = (e) => 
onRemoveCustom(setSpecialList, specialList, "Corrode Metal") 
const onRemoveSpecialDamageAbsorption = (e) => 
onRemoveCustom(setSpecialList, specialList, "Damage Absorption") 
const onRemoveSpecialDamageTransfer = (e) => 
onRemoveCustom(setSpecialList, specialList, "Damage Transfer") 
const onRemoveSpecialDeathBurst = (e) => 
onRemoveCustom(setSpecialList, specialList, "Death Burst") 
const onRemoveSpecialDetectSentience = (e) => 
onRemoveCustom(setSpecialList, specialList, "Detect Sentience") 
const onRemoveSpecialDevilsSight = (e) => 
onRemoveCustom(setSpecialList, specialList, "Devil's Sight") 
const onRemoveSpecialDisintegration = (e) => 
onRemoveCustom(setSpecialList, specialList, "Disintegration") 
const onRemoveSpecialDisplacement = (e) => 
onRemoveCustom(setSpecialList, specialList, "Displacement") 
const onRemoveSpecialDistressSpores = (e) => 
onRemoveCustom(setSpecialList, specialList, "Distress Spores") 
const onRemoveSpecialDive = (e) => 
onRemoveCustom(setSpecialList, specialList, "Dive") 
const onRemoveSpecialDivineEminence = (e) => 
onRemoveCustom(setSpecialList, specialList, "Divine Eminence") 
const onRemoveSpecialDuergarResilience = (e) => 
onRemoveCustom(setSpecialList, specialList, "Duergar Resilience") 
const onRemoveSpecialEarthGlide = (e) => 
onRemoveCustom(setSpecialList, specialList, "Earth Glide") 
const onRemoveSpecialEcholocation = (e) => 
onRemoveCustom(setSpecialList, specialList, "Echolocation") 
const onRemoveSpecialEtherealSight = (e) => 
onRemoveCustom(setSpecialList, specialList, "Ethereal Sight") 
const onRemoveSpecialFalseAppearance = (e) => 
onRemoveCustom(setSpecialList, specialList, "False Appearance") 
const onRemoveSpecialFeyAncestry = (e) => 
onRemoveCustom(setSpecialList, specialList, "Fey Ancestry") 
const onRemoveSpecialFireForm = (e) => 
onRemoveCustom(setSpecialList, specialList, "Fire Form") 
const onRemoveSpecialFlyby = (e) => 
onRemoveCustom(setSpecialList, specialList, "Flyby") 
const onRemoveSpecialFreedomofMovement = (e) => 
onRemoveCustom(setSpecialList, specialList, "Freedom of Movement") 
const onRemoveSpecialFreeze = (e) => 
onRemoveCustom(setSpecialList, specialList, "Freeze") 
const onRemoveSpecialGibbering = (e) => 
onRemoveCustom(setSpecialList, specialList, "Gibbering") 
const onRemoveSpecialGnomeCunning = (e) => 
onRemoveCustom(setSpecialList, specialList, "Gnome Cunning") 
const onRemoveSpecialGrappler = (e) => 
onRemoveCustom(setSpecialList, specialList, "Grappler") 
const onRemoveSpecialHeatedBody = (e) => 
onRemoveCustom(setSpecialList, specialList, "Heated Body") 
const onRemoveSpecialHeartofHrugekk = (e) => 
onRemoveCustom(setSpecialList, specialList, "Heart of Hrugekk") 
const onRemoveSpecialHoldBreath = (e) => 
onRemoveCustom(setSpecialList, specialList, "Hold Breath") 
const onRemoveSpecialIceWalk = (e) => 
onRemoveCustom(setSpecialList, specialList, "Ice Walk") 
const onRemoveSpecialIllumination = (e) => 
onRemoveCustom(setSpecialList, specialList, "Illumination") 
const onRemoveSpecialImmutableForm = (e) => 
onRemoveCustom(setSpecialList, specialList, "Immutable Form") 
const onRemoveSpecialIncorporealMovement = (e) => 
onRemoveCustom(setSpecialList, specialList, "Incorporeal Movement") 
const onRemoveSpecialInscrutable = (e) => 
onRemoveCustom(setSpecialList, specialList, "Inscrutable") 
const onRemoveSpecialInvisibility = (e) => 
onRemoveCustom(setSpecialList, specialList, "Invisibility") 
const onRemoveSpecialIronScent = (e) => 
onRemoveCustom(setSpecialList, specialList, "Iron Scent") 
const onRemoveSpecialKeenSenses = (e) => 
onRemoveCustom(setSpecialList, specialList, "Keen Senses") 
const onRemoveSpecialLightSensitivity = (e) => 
onRemoveCustom(setSpecialList, specialList, "Light Sensitivity") 
const onRemoveSpecialLimitedMagicImmunity = (e) => 
onRemoveCustom(setSpecialList, specialList, "Limited Magic Immunity") 
const onRemoveSpecialLivingShadow = (e) => 
onRemoveCustom(setSpecialList, specialList, "Living Shadow") 
const onRemoveSpecialMagicResistance = (e) => 
onRemoveCustom(setSpecialList, specialList, "Magic Resistance") 
const onRemoveSpecialMagicWeapons = (e) => 
onRemoveCustom(setSpecialList, specialList, "Magic Weapons") 
const onRemoveSpecialMartialAdvantage = (e) => 
onRemoveCustom(setSpecialList, specialList, "Martial Advantage") 
const onRemoveSpecialMimicry = (e) => 
onRemoveCustom(setSpecialList, specialList, "Mimicry") 
const onRemoveSpecialMucousCloud = (e) => 
onRemoveCustom(setSpecialList, specialList, "Mucous Cloud") 
const onRemoveSpecialNimbleEscape = (e) => 
onRemoveCustom(setSpecialList, specialList, "Nimble Escape") 
const onRemoveSpecialOtherworldlyPerception = (e) => 
onRemoveCustom(setSpecialList, specialList, "Otherworldly Perception") 
const onRemoveSpecialPackTactics = (e) => 
onRemoveCustom(setSpecialList, specialList, "Pack Tactics") 
const onRemoveSpecialPetrifyingGaze = (e) => 
onRemoveCustom(setSpecialList, specialList, "Petrifying Gaze") 
const onRemoveSpecialPoorDepthPerception = (e) => 
onRemoveCustom(setSpecialList, specialList, "Poor Depth Perception") 
const onRemoveSpecialPounce = (e) => 
onRemoveCustom(setSpecialList, specialList, "Pounce") 
const onRemoveSpecialProbingTelepathy = (e) => 
onRemoveCustom(setSpecialList, specialList, "Probing Telepathy") 
const onRemoveSpecialProneDeficiency = (e) => 
onRemoveCustom(setSpecialList, specialList, "Prone Deficiency") 
const onRemoveSpecialPsychicDefense = (e) => 
onRemoveCustom(setSpecialList, specialList, "Psychic Defense") 
const onRemoveSpecialRampage = (e) => 
onRemoveCustom(setSpecialList, specialList, "Rampage") 
const onRemoveSpecialReactive = (e) => 
onRemoveCustom(setSpecialList, specialList, "Reactive") 
const onRemoveSpecialReckless = (e) => 
onRemoveCustom(setSpecialList, specialList, "Reckless") 
const onRemoveSpecialReflectiveCarapace = (e) => 
onRemoveCustom(setSpecialList, specialList, "Reflective Carapace") 
const onRemoveSpecialRegeneration = (e) => 
onRemoveCustom(setSpecialList, specialList, "Regeneration") 
const onRemoveSpecialRejuvenation = (e) => 
onRemoveCustom(setSpecialList, specialList, "Rejuvenation") 
const onRemoveSpecialRelentless = (e) => 
onRemoveCustom(setSpecialList, specialList, "Relentless") 
const onRemoveSpecialShadowStealth = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shadow Stealth") 
const onRemoveSpecialShapechanger = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shapechanger") 
const onRemoveSpecialSiegeMonster = (e) => 
onRemoveCustom(setSpecialList, specialList, "Siege Monster") 
const onRemoveSpecialSkewer = (e) => 
onRemoveCustom(setSpecialList, specialList, "Skewer") 
const onRemoveSpecialSlippery = (e) => 
onRemoveCustom(setSpecialList, specialList, "Slippery") 
const onRemoveSpecialSpeakCommandswithCreatures = (e) => 
onRemoveCustom(setSpecialList, specialList, "Speak Commands with Creatures") 
const onRemoveSpecialSpeakwithBeastsandPlants = (e) => 
onRemoveCustom(setSpecialList, specialList, "Speak with Beasts and Plants") 
const onRemoveSpecialSpellImmunity = (e) => 
onRemoveCustom(setSpecialList, specialList, "Spell Immunity") 
const onRemoveSpecialSpiderClimb = (e) => 
onRemoveCustom(setSpecialList, specialList, "Spider Climb") 
const onRemoveSpecialStandingLeap = (e) => 
onRemoveCustom(setSpecialList, specialList, "Standing Leap") 
const onRemoveSpecialSteadfast = (e) => 
onRemoveCustom(setSpecialList, specialList, "Steadfast") 
const onRemoveSpecialStench = (e) => 
onRemoveCustom(setSpecialList, specialList, "Stench") 
const onRemoveSpecialSunSickness = (e) => 
onRemoveCustom(setSpecialList, specialList, "Sun Sickness") 
const onRemoveSpecialSunlightSensitivity = (e) => 
onRemoveCustom(setSpecialList, specialList, "Sunlight Sensitivity") 
const onRemoveSpecialSuperiorInvisibility = (e) => 
onRemoveCustom(setSpecialList, specialList, "Superior Invisibility") 
const onRemoveSpecialSurefooted = (e) => 
onRemoveCustom(setSpecialList, specialList, "Sure-footed") 
const onRemoveSpecialSurpriseAttack = (e) => 
onRemoveCustom(setSpecialList, specialList, "Surprise Attack") 
const onRemoveSpecialSwarm = (e) => 
onRemoveCustom(setSpecialList, specialList, "Swarm") 
const onRemoveSpecialTelepathicShroud = (e) => 
onRemoveCustom(setSpecialList, specialList, "Telepathic Shroud") 
const onRemoveSpecialTerrainCamouflage = (e) => 
onRemoveCustom(setSpecialList, specialList, "Terrain Camouflage") 
const onRemoveSpecialTunneler = (e) => 
onRemoveCustom(setSpecialList, specialList, "Tunneler") 
const onRemoveSpecialTreeStride = (e) => 
onRemoveCustom(setSpecialList, specialList, "Tree Stride") 
const onRemoveSpecialTurnImmunity = (e) => 
onRemoveCustom(setSpecialList, specialList, "Turn Immunity") 
const onRemoveSpecialTurnResistance = (e) => 
onRemoveCustom(setSpecialList, specialList, "Turn Resistance") 
const onRemoveSpecialTwoHeads = (e) => 
onRemoveCustom(setSpecialList, specialList, "Two Heads") 
const onRemoveSpecialUndeadFortitude = (e) => 
onRemoveCustom(setSpecialList, specialList, "Undead Fortitude") 
const onRemoveSpecialWakeful = (e) => 
onRemoveCustom(setSpecialList, specialList, "Wakeful") 
const onRemoveSpecialWaterSusceptibility = (e) => 
onRemoveCustom(setSpecialList, specialList, "Water Susceptibility") 
const onRemoveSpecialWebSense = (e) => 
onRemoveCustom(setSpecialList, specialList, "Web Sense") 
const onRemoveSpecialWebWalker = (e) => 
onRemoveCustom(setSpecialList, specialList, "Web Walker") 
const onRemoveSpecialWoundedFury = (e) => 
onRemoveCustom(setSpecialList, specialList, "Wounded Fury") 
const onRemoveSpecialAdhesiveFilament = (e) => 
onRemoveCustom(setSpecialList, specialList, "Adhesive Filament") 
const onRemoveSpecialAntimagicShell = (e) => 
onRemoveCustom(setSpecialList, specialList, "Antimagic Shell") 
const onRemoveSpecialArcaneWard = (e) => 
onRemoveCustom(setSpecialList, specialList, "Arcane Ward") 
const onRemoveSpecialArmyArcane = (e) => 
onRemoveCustom(setSpecialList, specialList, "Army Arcane") 
const onRemoveSpecialAuraofAnnihilation = (e) => 
onRemoveCustom(setSpecialList, specialList, "Aura of Annihilation") 
const onRemoveSpecialBenignTransportation = (e) => 
onRemoveCustom(setSpecialList, specialList, "Benign Transportation") 
const onRemoveSpecialBlurredMovement = (e) => 
onRemoveCustom(setSpecialList, specialList, "Blurred Movement") 
const onRemoveSpecialCorruptedCarrier = (e) => 
onRemoveCustom(setSpecialList, specialList, "Corrupted Carrier") 
const onRemoveSpecialDeathFlash = (e) => 
onRemoveCustom(setSpecialList, specialList, "Death Flash") 
const onRemoveSpecialDeathGaze = (e) => 
onRemoveCustom(setSpecialList, specialList, "Death Gaze") 
const onRemoveSpecialEvasion = (e) => 
onRemoveCustom(setSpecialList, specialList, "Evasion") 
const onRemoveSpecialFearAura = (e) => 
onRemoveCustom(setSpecialList, specialList, "Fear Aura") 
const onRemoveSpecialFlammableBlood = (e) => 
onRemoveCustom(setSpecialList, specialList, "Flammable Blood") 
const onRemoveSpecialGrungPoisonVariables = (e) => 
onRemoveCustom(setSpecialList, specialList, "Grung Poison Variables") 
const onRemoveSpecialHeartoftheDragon = (e) => 
onRemoveCustom(setSpecialList, specialList, "Heart of the Dragon") 
const onRemoveSpecialImixsBlessing = (e) => 
onRemoveCustom(setSpecialList, specialList, "Imix’s Blessing") 
const onRemoveSpecialIndomitable = (e) => 
onRemoveCustom(setSpecialList, specialList, "Indomitable (2/day)") 
const onRemoveSpecialIronBoots = (e) => 
onRemoveCustom(setSpecialList, specialList, "Iron Boots") 
const onRemoveSpecialKickingRetreat = (e) => 
onRemoveCustom(setSpecialList, specialList, "Kicking Retreat") 
const onRemoveSpecialLowCunning = (e) => 
onRemoveCustom(setSpecialList, specialList, "Low Cunning") 
const onRemoveSpecialMentalFortitude = (e) => 
onRemoveCustom(setSpecialList, specialList, "Mental Fortitude") 
const onRemoveSpecialMentalResistance = (e) => 
onRemoveCustom(setSpecialList, specialList, "Mental Resistance") 
const onRemoveSpecialNilbogism = (e) => 
onRemoveCustom(setSpecialList, specialList, "Nilbogism") 
const onRemoveSpecialNurturedOneofYurtrus = (e) => 
onRemoveCustom(setSpecialList, specialList, "Nurtured One of Yurtrus") 
const onRemoveSpecialOutsizeStrength = (e) => 
onRemoveCustom(setSpecialList, specialList, "Outsize Strength") 
const onRemoveSpecialOverbearingPack = (e) => 
onRemoveCustom(setSpecialList, specialList, "Overbearing Pack") 
const onRemoveSpecialPoisonousSkin = (e) => 
onRemoveCustom(setSpecialList, specialList, "Poisonous Skin") 
const onRemoveSpecialRaxivortsTongue = (e) => 
onRemoveCustom(setSpecialList, specialList, "Raxivort’s Tongue") 
const onRemoveSpecialResonantConnection = (e) => 
onRemoveCustom(setSpecialList, specialList, "Resonant Connection") 
const onRemoveSpecialSecondWind = (e) => 
onRemoveCustom(setSpecialList, specialList, "Second Wind (Recharges after a Short or Long Rest)") 
const onRemoveSpecialShadowBlend = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shadow Blend") 
const onRemoveSpecialShadowStealth2 = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shadow Stealth") 
const onRemoveSpecialShadowTeleport = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shadow Teleport (Recharge 5-6)") 
const onRemoveSpecialShedSkin = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shed Skin") 
const onRemoveSpecialShockSusceptibility = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shock Susceptibility") 
const onRemoveSpecialSlayer = (e) => 
onRemoveCustom(setSpecialList, specialList, "Slayer") 
const onRemoveSpecialStunningGaze = (e) => 
onRemoveCustom(setSpecialList, specialList, "Stunning Gaze") 
const onRemoveSpecialSunlightHypersensitivity = (e) => 
onRemoveCustom(setSpecialList, specialList, "Sunlight Hypersensitivity") 
const onRemoveSpecialAberrantQuickness = (e) => 
onRemoveCustom(setSpecialList, specialList, "Aberrant Quickness (Recharges after a Short or Long Rest)") 
const onRemoveSpecialAnnihilatingAura = (e) => 
onRemoveCustom(setSpecialList, specialList, "Annihilating Aura") 
const onRemoveSpecialAssumeForm = (e) => 
onRemoveCustom(setSpecialList, specialList, "Assume Form") 
const onRemoveSpecialAuraofMadness = (e) => 
onRemoveCustom(setSpecialList, specialList, "Aura of Madness") 
const onRemoveSpecialBattleCommand = (e) => 
onRemoveCustom(setSpecialList, specialList, "Battle Command") 
const onRemoveSpecialBringerofPlagues = (e) => 
onRemoveCustom(setSpecialList, specialList, "Bringer of Plagues") 
const onRemoveSpecialBurdenofTime = (e) => 
onRemoveCustom(setSpecialList, specialList, "Burden of Time") 
const onRemoveSpecialBurningFury = (e) => 
onRemoveCustom(setSpecialList, specialList, "Burning Fury") 
const onRemoveSpecialCloudofVermin = (e) => 
onRemoveCustom(setSpecialList, specialList, "Cloud of Vermin") 
const onRemoveSpecialContamination = (e) => 
onRemoveCustom(setSpecialList, specialList, "Contamination") 
const onRemoveSpecialCorruptWater = (e) => 
onRemoveCustom(setSpecialList, specialList, "Corrupt Water") 
const onRemoveSpecialCreateSoulblade = (e) => 
onRemoveCustom(setSpecialList, specialList, "Create Soulblade") 
const onRemoveSpecialCripplingFear = (e) => 
onRemoveCustom(setSpecialList, specialList, "Crippling Fear") 
const onRemoveSpecialCunningOpportunist = (e) => 
onRemoveCustom(setSpecialList, specialList, "Cunning Opportunist") 
const onRemoveSpecialDemonicShadows = (e) => 
onRemoveCustom(setSpecialList, specialList, "Demonic Shadows") 
const onRemoveSpecialDiabolicalSense = (e) => 
onRemoveCustom(setSpecialList, specialList, "Diabolical Sense") 
const onRemoveSpecialDimensionalLock = (e) => 
onRemoveCustom(setSpecialList, specialList, "Dimensional Lock") 
const onRemoveSpecialDiscernLie = (e) => 
onRemoveCustom(setSpecialList, specialList, "Discern Lie") 
const onRemoveSpecialEarthArmor = (e) => 
onRemoveCustom(setSpecialList, specialList, "Earth Armor") 
const onRemoveSpecialEarthShakingMovement = (e) => 
onRemoveCustom(setSpecialList, specialList, "Earth Shaking Movement") 
const onRemoveSpecialEnchantingPresence = (e) => 
onRemoveCustom(setSpecialList, specialList, "Enchanting Presence") 
const onRemoveSpecialEngineofPain = (e) => 
onRemoveCustom(setSpecialList, specialList, "Engine of Pain") 
const onRemoveSpecialExtraordinaryLeap = (e) => 
onRemoveCustom(setSpecialList, specialList, "Extraordinary Leap") 
const onRemoveSpecialFallibleInvisibility = (e) => 
onRemoveCustom(setSpecialList, specialList, "Fallible Invisibility") 
const onRemoveSpecialFomentMadness = (e) => 
onRemoveCustom(setSpecialList, specialList, "Foment Madness") 
const onRemoveSpecialHowdah = (e) => 
onRemoveCustom(setSpecialList, specialList, "Howdah") 
const onRemoveSpecialLifeEater = (e) => 
onRemoveCustom(setSpecialList, specialList, "Life Eater") 
const onRemoveSpecialLifeHunger = (e) => 
onRemoveCustom(setSpecialList, specialList, "Life Hunger") 
const onRemoveSpecialLivingStorm = (e) => 
onRemoveCustom(setSpecialList, specialList, "Living Storm") 
const onRemoveSpecialLolthsFickleFavor = (e) => 
onRemoveCustom(setSpecialList, specialList, "Lolth’s Fickle Favor") 
const onRemoveSpecialMartialFury = (e) => 
onRemoveCustom(setSpecialList, specialList, "Martial Fury") 
const onRemoveSpecialMasteroftheGrave = (e) => 
onRemoveCustom(setSpecialList, specialList, "Master of the Grave") 
const onRemoveSpecialOutofPhaseMovement = (e) => 
onRemoveCustom(setSpecialList, specialList, "Out-of-Phase Movement") 
const onRemoveSpecialPhalanxFormation = (e) => 
onRemoveCustom(setSpecialList, specialList, "Phalanx Formation") 
const onRemoveSpecialPoisonSplash = (e) => 
onRemoveCustom(setSpecialList, specialList, "Poison Splash") 
const onRemoveSpecialPsychicLeech = (e) => 
onRemoveCustom(setSpecialList, specialList, "Psychic Leech") 
const onRemoveSpecialPsychicEngine = (e) => 
onRemoveCustom(setSpecialList, specialList, "Psychic Engine") 
const onRemoveSpecialPsychicMirror = (e) => 
onRemoveCustom(setSpecialList, specialList, "Psychic Mirror") 
const onRemoveSpecialRallytheTroops = (e) => 
onRemoveCustom(setSpecialList, specialList, "Rally the Troops") 
const onRemoveSpecialRancidDegeneration = (e) => 
onRemoveCustom(setSpecialList, specialList, "Rancid Degeneration") 
const onRemoveSpecialRisingAnger = (e) => 
onRemoveCustom(setSpecialList, specialList, "Rising Anger") 
const onRemoveSpecialShadowJump = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shadow Jump") 
const onRemoveSpecialShadowStep = (e) => 
onRemoveCustom(setSpecialList, specialList, "Shadow Step") 
const onRemoveSpecialSoulThirst = (e) => 
onRemoveCustom(setSpecialList, specialList, "Soul Thirst") 
const onRemoveSpecialSpectralDuplicate = (e) => 
onRemoveCustom(setSpecialList, specialList, "Spectral Duplicate (Recharges after a Short or Long Rest)") 
const onRemoveSpecialSummonSpectres = (e) => 
onRemoveCustom(setSpecialList, specialList, "Summon Spectres (Recharges after a Short or Long Rest)") 
const onRemoveSpecialThrivesonCompany = (e) => 
onRemoveCustom(setSpecialList, specialList, "Thrives on Company") 
const onRemoveSpecialUncannySenses = (e) => 
onRemoveCustom(setSpecialList, specialList, "Uncanny Senses") 
const onRemoveSpecialUndertow = (e) => 
onRemoveCustom(setSpecialList, specialList, "Undertow") 
const onRemoveSpecialWateryAdvantage = (e) => 
onRemoveCustom(setSpecialList, specialList, "Watery Advantage") 
const onRemoveSpecialWarMagic = (e) => 
onRemoveCustom(setSpecialList, specialList, "War Magic") 
const onRemoveSpecialWeightofAges = (e) => 
onRemoveCustom(setSpecialList, specialList, "Weight of Ages") 
const onRemoveSpecialWretchedPackTactics = (e) => 
onRemoveCustom(setSpecialList, specialList, "Wretched Pack Tactics")

const specialRemoveAberrantGround = customeDmgRemove(onRemoveSpecialAberrantGround)
const specialRemoveAdhesive = customeDmgRemove(onRemoveSpecialAdhesive)
const specialRemoveAggressive = customeDmgRemove(onRemoveSpecialAggressive)
const specialRemoveAirForm = customeDmgRemove(onRemoveSpecialAirForm)
const specialRemoveAlert = customeDmgRemove(onRemoveSpecialAlert)
const specialRemoveAlienMind = customeDmgRemove(onRemoveSpecialAlienMind)
const specialRemoveAmbusher = customeDmgRemove(onRemoveSpecialAmbusher)
const specialRemoveAmorphous = customeDmgRemove(onRemoveSpecialAmorphous)
const specialRemoveAmphibious = customeDmgRemove(onRemoveSpecialAmphibious)
const specialRemoveAngelicHellishWeapons = customeDmgRemove(onRemoveSpecialAngelicHellishWeapons)
const specialRemoveAntimagicCone = customeDmgRemove(onRemoveSpecialAntimagicCone)
const specialRemoveAntimagicSusceptibility = customeDmgRemove(onRemoveSpecialAntimagicSusceptibility)
const specialRemoveAversiontoFire = customeDmgRemove(onRemoveSpecialAversiontoFire)
const specialRemoveAvoidance = customeDmgRemove(onRemoveSpecialAvoidance)
const specialRemoveAxiomaticMind = customeDmgRemove(onRemoveSpecialAxiomaticMind)
const specialRemoveBarbedHide = customeDmgRemove(onRemoveSpecialBarbedHide)
const specialRemoveBerserk = customeDmgRemove(onRemoveSpecialBerserk)
const specialRemoveBlindSenses = customeDmgRemove(onRemoveSpecialBlindSenses)
const specialRemoveBloodFrenzy = customeDmgRemove(onRemoveSpecialBloodFrenzy)
const specialRemoveBound = customeDmgRemove(onRemoveSpecialBound)
const specialRemoveBoundSpellStoring = customeDmgRemove(onRemoveSpecialBoundSpellStoring)
const specialRemoveBrave = customeDmgRemove(onRemoveSpecialBrave)
const specialRemoveBrute = customeDmgRemove(onRemoveSpecialBrute)
const specialRemoveChargeCentaur = customeDmgRemove(onRemoveSpecialChargeCentaur)
const specialRemoveChargeBoar = customeDmgRemove(onRemoveSpecialChargeBoar)
const specialRemoveConstrict = customeDmgRemove(onRemoveSpecialConstrict)
const specialRemoveConsumeLife = customeDmgRemove(onRemoveSpecialConsumeLife)
const specialRemoveCorrodeMetal = customeDmgRemove(onRemoveSpecialCorrodeMetal)
const specialRemoveDamageAbsorption = customeDmgRemove(onRemoveSpecialDamageAbsorption)
const specialRemoveDamageTransfer = customeDmgRemove(onRemoveSpecialDamageTransfer)
const specialRemoveDeathBurst = customeDmgRemove(onRemoveSpecialDeathBurst)
const specialRemoveDetectSentience = customeDmgRemove(onRemoveSpecialDetectSentience)
const specialRemoveDevilsSight = customeDmgRemove(onRemoveSpecialDevilsSight)
const specialRemoveDisintegration = customeDmgRemove(onRemoveSpecialDisintegration)
const specialRemoveDisplacement = customeDmgRemove(onRemoveSpecialDisplacement)
const specialRemoveDistressSpores = customeDmgRemove(onRemoveSpecialDistressSpores)
const specialRemoveDivineEminence = customeDmgRemove(onRemoveSpecialDivineEminence)
const specialRemoveDuergarResilience = customeDmgRemove(onRemoveSpecialDuergarResilience)
const specialRemoveEarthGlide = customeDmgRemove(onRemoveSpecialEarthGlide)
const specialRemoveEcholocation = customeDmgRemove(onRemoveSpecialEcholocation)
const specialRemoveEtherealSight = customeDmgRemove(onRemoveSpecialEtherealSight)
const specialRemoveFalseAppearance = customeDmgRemove(onRemoveSpecialFalseAppearance)
const specialRemoveFeyAncestry = customeDmgRemove(onRemoveSpecialFeyAncestry)
const specialRemoveFireForm = customeDmgRemove(onRemoveSpecialFireForm)
const specialRemoveFlyby = customeDmgRemove(onRemoveSpecialFlyby)
const specialRemoveFreedomofMovement = customeDmgRemove(onRemoveSpecialFreedomofMovement)
const specialRemoveFreeze = customeDmgRemove(onRemoveSpecialFreeze)
const specialRemoveGibbering = customeDmgRemove(onRemoveSpecialGibbering)
const specialRemoveGnomeCunning = customeDmgRemove(onRemoveSpecialGnomeCunning)
const specialRemoveGrappler = customeDmgRemove(onRemoveSpecialGrappler)
const specialRemoveHeatedBody = customeDmgRemove(onRemoveSpecialHeatedBody)
const specialRemoveHeartofHrugekk = customeDmgRemove(onRemoveSpecialHeartofHrugekk)
const specialRemoveHoldBreath = customeDmgRemove(onRemoveSpecialHoldBreath)
const specialRemoveIceWalk = customeDmgRemove(onRemoveSpecialIceWalk)
const specialRemoveIllumination = customeDmgRemove(onRemoveSpecialIllumination)
const specialRemoveImmutableForm = customeDmgRemove(onRemoveSpecialImmutableForm)
const specialRemoveIncorporealMovement = customeDmgRemove(onRemoveSpecialIncorporealMovement)
const specialRemoveInscrutable = customeDmgRemove(onRemoveSpecialInscrutable)
const specialRemoveInvisibility = customeDmgRemove(onRemoveSpecialInvisibility)
const specialRemoveIronScent = customeDmgRemove(onRemoveSpecialIronScent)
const specialRemoveKeenSenses = customeDmgRemove(onRemoveSpecialKeenSenses)
const specialRemoveLightSensitivity = customeDmgRemove(onRemoveSpecialLightSensitivity)
const specialRemoveLimitedMagicImmunity = customeDmgRemove(onRemoveSpecialLimitedMagicImmunity)
const specialRemoveLivingShadow = customeDmgRemove(onRemoveSpecialLivingShadow)
const specialRemoveMagicResistance = customeDmgRemove(onRemoveSpecialMagicResistance)
const specialRemoveMagicWeapons = customeDmgRemove(onRemoveSpecialMagicWeapons)
const specialRemoveMartialAdvantage = customeDmgRemove(onRemoveSpecialMartialAdvantage)
const specialRemoveMimicry = customeDmgRemove(onRemoveSpecialMimicry)
const specialRemoveMucousCloud = customeDmgRemove(onRemoveSpecialMucousCloud)
const specialRemoveNimbleEscape = customeDmgRemove(onRemoveSpecialNimbleEscape)
const specialRemoveOtherworldlyPerception = customeDmgRemove(onRemoveSpecialOtherworldlyPerception)
const specialRemovePackTactics = customeDmgRemove(onRemoveSpecialPackTactics)
const specialRemovePetrifyingGaze = customeDmgRemove(onRemoveSpecialPetrifyingGaze)
const specialRemovePoorDepthPerception = customeDmgRemove(onRemoveSpecialPoorDepthPerception)
const specialRemovePounce = customeDmgRemove(onRemoveSpecialPounce)
const specialRemoveProbingTelepathy = customeDmgRemove(onRemoveSpecialProbingTelepathy)
const specialRemoveProneDeficiency = customeDmgRemove(onRemoveSpecialProneDeficiency)
const specialRemovePsychicDefense = customeDmgRemove(onRemoveSpecialPsychicDefense)
const specialRemoveRampage = customeDmgRemove(onRemoveSpecialRampage)
const specialRemoveReactive = customeDmgRemove(onRemoveSpecialReactive)
const specialRemoveReckless = customeDmgRemove(onRemoveSpecialReckless)
const specialRemoveReflectiveCarapace = customeDmgRemove(onRemoveSpecialReflectiveCarapace)
const specialRemoveRegeneration = customeDmgRemove(onRemoveSpecialRegeneration)
const specialRemoveRejuvenation = customeDmgRemove(onRemoveSpecialRejuvenation)
const specialRemoveRelentless = customeDmgRemove(onRemoveSpecialRelentless)
const specialRemoveShadowStealth = customeDmgRemove(onRemoveSpecialShadowStealth)
const specialRemoveShapechanger = customeDmgRemove(onRemoveSpecialShapechanger)
const specialRemoveSiegeMonster = customeDmgRemove(onRemoveSpecialSiegeMonster)
const specialRemoveSkewer = customeDmgRemove(onRemoveSpecialSkewer)
const specialRemoveSlippery = customeDmgRemove(onRemoveSpecialSlippery)
const specialRemoveSpeakCommandswithCreatures = customeDmgRemove(onRemoveSpecialSpeakCommandswithCreatures)
const specialRemoveSpeakwithBeastsandPlants = customeDmgRemove(onRemoveSpecialSpeakwithBeastsandPlants)
const specialRemoveSpellImmunity = customeDmgRemove(onRemoveSpecialSpellImmunity)
const specialRemoveSpiderClimb = customeDmgRemove(onRemoveSpecialSpiderClimb)
const specialRemoveStandingLeap = customeDmgRemove(onRemoveSpecialStandingLeap)
const specialRemoveSteadfast = customeDmgRemove(onRemoveSpecialSteadfast)
const specialRemoveStench = customeDmgRemove(onRemoveSpecialStench)
const specialRemoveSunSickness = customeDmgRemove(onRemoveSpecialSunSickness)
const specialRemoveSunlightSensitivity = customeDmgRemove(onRemoveSpecialSunlightSensitivity)
const specialRemoveSuperiorInvisibility = customeDmgRemove(onRemoveSpecialSuperiorInvisibility)
const specialRemoveSurefooted = customeDmgRemove(onRemoveSpecialSurefooted)
const specialRemoveSurpriseAttack = customeDmgRemove(onRemoveSpecialSurpriseAttack)
const specialRemoveSwarm = customeDmgRemove(onRemoveSpecialSwarm)
const specialRemoveTelepathicShroud = customeDmgRemove(onRemoveSpecialTelepathicShroud)
const specialRemoveTerrainCamouflage = customeDmgRemove(onRemoveSpecialTerrainCamouflage)
const specialRemoveTunneler = customeDmgRemove(onRemoveSpecialTunneler)
const specialRemoveTreeStride = customeDmgRemove(onRemoveSpecialTreeStride)
const specialRemoveTurnImmunity = customeDmgRemove(onRemoveSpecialTurnImmunity)
const specialRemoveTurnResistance = customeDmgRemove(onRemoveSpecialTurnResistance)
const specialRemoveTwoHeads = customeDmgRemove(onRemoveSpecialTwoHeads)
const specialRemoveUndeadFortitude = customeDmgRemove(onRemoveSpecialUndeadFortitude)
const specialRemoveWakeful = customeDmgRemove(onRemoveSpecialWakeful)
const specialRemoveWaterSusceptibility = customeDmgRemove(onRemoveSpecialWaterSusceptibility)
const specialRemoveWebSense = customeDmgRemove(onRemoveSpecialWebSense)
const specialRemoveWebWalker = customeDmgRemove(onRemoveSpecialWebWalker)
const specialRemoveWoundedFury = customeDmgRemove(onRemoveSpecialWoundedFury)
const specialRemoveAdhesiveFilament = customeDmgRemove(onRemoveSpecialAdhesiveFilament)
const specialRemoveAntimagicShell = customeDmgRemove(onRemoveSpecialAntimagicShell)
const specialRemoveArcaneWard = customeDmgRemove(onRemoveSpecialArcaneWard)
const specialRemoveArmyArcane = customeDmgRemove(onRemoveSpecialArmyArcane)
const specialRemoveAuraofAnnihilation = customeDmgRemove(onRemoveSpecialAuraofAnnihilation)
const specialRemoveBenignTransportation = customeDmgRemove(onRemoveSpecialBenignTransportation)
const specialRemoveBlurredMovement = customeDmgRemove(onRemoveSpecialBlurredMovement)
const specialRemoveCorruptedCarrier = customeDmgRemove(onRemoveSpecialCorruptedCarrier)
const specialRemoveDeathFlash = customeDmgRemove(onRemoveSpecialDeathFlash)
const specialRemoveDeathGaze = customeDmgRemove(onRemoveSpecialDeathGaze)
const specialRemoveEvasion = customeDmgRemove(onRemoveSpecialEvasion)
const specialRemoveFearAura = customeDmgRemove(onRemoveSpecialFearAura)
const specialRemoveFlammableBlood = customeDmgRemove(onRemoveSpecialFlammableBlood)
const specialRemoveGrungPoisonVariables = customeDmgRemove(onRemoveSpecialGrungPoisonVariables)
const specialRemoveHeartoftheDragon = customeDmgRemove(onRemoveSpecialHeartoftheDragon)
const specialRemoveImixsBlessing = customeDmgRemove(onRemoveSpecialImixsBlessing)
const specialRemoveIndomitable = customeDmgRemove(onRemoveSpecialIndomitable)
const specialRemoveIronBoots = customeDmgRemove(onRemoveSpecialIronBoots)
const specialRemoveKickingRetreat = customeDmgRemove(onRemoveSpecialKickingRetreat)
const specialRemoveLowCunning = customeDmgRemove(onRemoveSpecialLowCunning)
const specialRemoveMentalFortitude = customeDmgRemove(onRemoveSpecialMentalFortitude)
const specialRemoveMentalResistance = customeDmgRemove(onRemoveSpecialMentalResistance)
const specialRemoveNilbogism = customeDmgRemove(onRemoveSpecialNilbogism)
const specialRemoveNurturedOneofYurtrus = customeDmgRemove(onRemoveSpecialNurturedOneofYurtrus)
const specialRemoveOutsizeStrength = customeDmgRemove(onRemoveSpecialOutsizeStrength)
const specialRemoveOverbearingPack = customeDmgRemove(onRemoveSpecialOverbearingPack)
const specialRemovePoisonousSkin = customeDmgRemove(onRemoveSpecialPoisonousSkin)
const specialRemoveRaxivortsTongue = customeDmgRemove(onRemoveSpecialRaxivortsTongue)
const specialRemoveResonantConnection = customeDmgRemove(onRemoveSpecialResonantConnection)
const specialRemoveSecondWind = customeDmgRemove(onRemoveSpecialSecondWind)
const specialRemoveShadowBlend = customeDmgRemove(onRemoveSpecialShadowBlend)
const specialRemoveShadowStealth2 = customeDmgRemove(onRemoveSpecialShadowStealth2)
const specialRemoveShadowTeleport = customeDmgRemove(onRemoveSpecialShadowTeleport)
const specialRemoveShedSkin = customeDmgRemove(onRemoveSpecialShedSkin)
const specialRemoveShockSusceptibility = customeDmgRemove(onRemoveSpecialShockSusceptibility)
const specialRemoveSlayer = customeDmgRemove(onRemoveSpecialSlayer)
const specialRemoveStunningGaze = customeDmgRemove(onRemoveSpecialStunningGaze)
const specialRemoveSunlightHypersensitivity = customeDmgRemove(onRemoveSpecialSunlightHypersensitivity)
const specialRemoveAberrantQuickness = customeDmgRemove(onRemoveSpecialAberrantQuickness)
const specialRemoveAnnihilatingAura = customeDmgRemove(onRemoveSpecialAnnihilatingAura)
const specialRemoveAssumeForm = customeDmgRemove(onRemoveSpecialAssumeForm)
const specialRemoveAuraofMadness = customeDmgRemove(onRemoveSpecialAuraofMadness)
const specialRemoveBattleCommand = customeDmgRemove(onRemoveSpecialBattleCommand)
const specialRemoveBringerofPlagues = customeDmgRemove(onRemoveSpecialBringerofPlagues)
const specialRemoveBurdenofTime = customeDmgRemove(onRemoveSpecialBurdenofTime)
const specialRemoveBurningFury = customeDmgRemove(onRemoveSpecialBurningFury)
const specialRemoveCloudofVermin = customeDmgRemove(onRemoveSpecialCloudofVermin)
const specialRemoveContamination = customeDmgRemove(onRemoveSpecialContamination)
const specialRemoveCorruptWater = customeDmgRemove(onRemoveSpecialCorruptWater)
const specialRemoveCreateSoulblade = customeDmgRemove(onRemoveSpecialCreateSoulblade)
const specialRemoveCripplingFear = customeDmgRemove(onRemoveSpecialCripplingFear)
const specialRemoveCunningOpportunist = customeDmgRemove(onRemoveSpecialCunningOpportunist)
const specialRemoveDemonicShadows = customeDmgRemove(onRemoveSpecialDemonicShadows)
const specialRemoveDiabolicalSense = customeDmgRemove(onRemoveSpecialDiabolicalSense)
const specialRemoveDimensionalLock = customeDmgRemove(onRemoveSpecialDimensionalLock)
const specialRemoveDiscernLie = customeDmgRemove(onRemoveSpecialDiscernLie)
const specialRemoveEarthArmor = customeDmgRemove(onRemoveSpecialEarthArmor)
const specialRemoveEarthShakingMovement = customeDmgRemove(onRemoveSpecialEarthShakingMovement)
const specialRemoveEnchantingPresence = customeDmgRemove(onRemoveSpecialEnchantingPresence)
const specialRemoveEngineofPain = customeDmgRemove(onRemoveSpecialEngineofPain)
const specialRemoveExtraordinaryLeap = customeDmgRemove(onRemoveSpecialExtraordinaryLeap)
const specialRemoveFallibleInvisibility = customeDmgRemove(onRemoveSpecialFallibleInvisibility)
const specialRemoveFomentMadness = customeDmgRemove(onRemoveSpecialFomentMadness)
const specialRemoveHowdah = customeDmgRemove(onRemoveSpecialHowdah)
const specialRemoveLifeEater = customeDmgRemove(onRemoveSpecialLifeEater)
const specialRemoveLifeHunger = customeDmgRemove(onRemoveSpecialLifeHunger)
const specialRemoveLivingStorm = customeDmgRemove(onRemoveSpecialLivingStorm)
const specialRemoveLolthsFickleFavor = customeDmgRemove(onRemoveSpecialLolthsFickleFavor)
const specialRemoveMartialFury = customeDmgRemove(onRemoveSpecialMartialFury)
const specialRemoveMasteroftheGrave = customeDmgRemove(onRemoveSpecialMasteroftheGrave)
const specialRemoveOutofPhaseMovement = customeDmgRemove(onRemoveSpecialOutofPhaseMovement)
const specialRemovePhalanxFormation = customeDmgRemove(onRemoveSpecialPhalanxFormation)
const specialRemovePoisonSplash = customeDmgRemove(onRemoveSpecialPoisonSplash)
const specialRemovePsychicLeech = customeDmgRemove(onRemoveSpecialPsychicLeech)
const specialRemovePsychicEngine = customeDmgRemove(onRemoveSpecialPsychicEngine)
const specialRemovePsychicMirror = customeDmgRemove(onRemoveSpecialPsychicMirror)
const specialRemoveRallytheTroops = customeDmgRemove(onRemoveSpecialRallytheTroops)
const specialRemoveRancidDegeneration = customeDmgRemove(onRemoveSpecialRancidDegeneration)
const specialRemoveRisingAnger = customeDmgRemove(onRemoveSpecialRisingAnger)
const specialRemoveShadowJump = customeDmgRemove(onRemoveSpecialShadowJump)
const specialRemoveShadowStep = customeDmgRemove(onRemoveSpecialShadowStep)
const specialRemoveSoulThirst = customeDmgRemove(onRemoveSpecialSoulThirst)
const specialRemoveSpectralDuplicate = customeDmgRemove(onRemoveSpecialSpectralDuplicate)
const specialRemoveSummonSpectres = customeDmgRemove(onRemoveSpecialSummonSpectres)
const specialRemoveThrivesonCompany = customeDmgRemove(onRemoveSpecialThrivesonCompany)
const specialRemoveUncannySenses = customeDmgRemove(onRemoveSpecialUncannySenses)
const specialRemoveUndertow = customeDmgRemove(onRemoveSpecialUndertow)
const specialRemoveWateryAdvantage = customeDmgRemove(onRemoveSpecialWateryAdvantage)
const specialRemoveWarMagic = customeDmgRemove(onRemoveSpecialWarMagic)
const specialRemoveWeightofAges = customeDmgRemove(onRemoveSpecialWeightofAges)
const specialRemoveWretchedPackTactics = customeDmgRemove(onRemoveSpecialWretchedPackTactics)

: i.name === ""
? specialRemoveAberrantGround 
: i.name === ""
? specialRemoveAdhesive 
: i.name === ""
? specialRemoveAggressive 
: i.name === ""
? specialRemoveAirForm 
: i.name === ""
? specialRemoveAlert 
: i.name === ""
? specialRemoveAlienMind 
: i.name === ""
? specialRemoveAmbusher 
: i.name === ""
? specialRemoveAmorphous 
: i.name === ""
? specialRemoveAmphibious 
: i.name === ""
? specialRemoveAngelicHellishWeapons 
: i.name === ""
? specialRemoveAntimagicCone 
: i.name === ""
? specialRemoveAntimagicSusceptibility 
: i.name === ""
? specialRemoveAversiontoFire 
: i.name === ""
? specialRemoveAvoidance 
: i.name === ""
? specialRemoveAxiomaticMind 
: i.name === ""
? specialRemoveBarbedHide 
: i.name === ""
? specialRemoveBerserk 
: i.name === ""
? specialRemoveBlindSenses 
: i.name === ""
? specialRemoveBloodFrenzy 
: i.name === ""
? specialRemoveBound 
: i.name === ""
? specialRemoveBoundSpellStoring 
: i.name === ""
? specialRemoveBrave 
: i.name === ""
? specialRemoveBrute 
: i.name === ""
? specialRemoveChargeCentaur 
: i.name === ""
? specialRemoveChargeBoar 
: i.name === ""
? specialRemoveConstrict 
: i.name === ""
? specialRemoveConsumeLife 
: i.name === ""
? specialRemoveCorrodeMetal 
: i.name === ""
? specialRemoveDamageAbsorption 
: i.name === ""
? specialRemoveDamageTransfer 
: i.name === ""
? specialRemoveDeathBurst 
: i.name === ""
? specialRemoveDetectSentience 
: i.name === ""
? specialRemoveDevilsSight 
: i.name === ""
? specialRemoveDisintegration 
: i.name === ""
? specialRemoveDisplacement 
: i.name === ""
? specialRemoveDistressSpores 
: i.name === ""
? specialRemoveDivineEminence 
: i.name === ""
? specialRemoveDuergarResilience 
: i.name === ""
? specialRemoveEarthGlide 
: i.name === ""
? specialRemoveEcholocation 
: i.name === ""
? specialRemoveEtherealSight 
: i.name === ""
? specialRemoveFalseAppearance 
: i.name === ""
? specialRemoveFeyAncestry 
: i.name === ""
? specialRemoveFireForm 
: i.name === ""
? specialRemoveFlyby 
: i.name === ""
? specialRemoveFreedomofMovement 
: i.name === ""
? specialRemoveFreeze 
: i.name === ""
? specialRemoveGibbering 
: i.name === ""
? specialRemoveGnomeCunning 
: i.name === ""
? specialRemoveGrappler 
: i.name === ""
? specialRemoveHeatedBody 
: i.name === ""
? specialRemoveHeartofHrugekk 
: i.name === ""
? specialRemoveHoldBreath 
: i.name === ""
? specialRemoveIceWalk 
: i.name === ""
? specialRemoveIllumination 
: i.name === ""
? specialRemoveImmutableForm 
: i.name === ""
? specialRemoveIncorporealMovement 
: i.name === ""
? specialRemoveInscrutable 
: i.name === ""
? specialRemoveInvisibility 
: i.name === ""
? specialRemoveIronScent 
: i.name === ""
? specialRemoveKeenSenses 
: i.name === ""
? specialRemoveLightSensitivity 
: i.name === ""
? specialRemoveLimitedMagicImmunity 
: i.name === ""
? specialRemoveLivingShadow 
: i.name === ""
? specialRemoveMagicResistance 
: i.name === ""
? specialRemoveMagicWeapons 
: i.name === ""
? specialRemoveMartialAdvantage 
: i.name === ""
? specialRemoveMimicry 
: i.name === ""
? specialRemoveMucousCloud 
: i.name === ""
? specialRemoveNimbleEscape 
: i.name === ""
? specialRemoveOtherworldlyPerception 
: i.name === ""
? specialRemovePackTactics 
: i.name === ""
? specialRemovePetrifyingGaze 
: i.name === ""
? specialRemovePoorDepthPerception 
: i.name === ""
? specialRemovePounce 
: i.name === ""
? specialRemoveProbingTelepathy 
: i.name === ""
? specialRemoveProneDeficiency 
: i.name === ""
? specialRemovePsychicDefense 
: i.name === ""
? specialRemoveRampage 
: i.name === ""
? specialRemoveReactive 
: i.name === ""
? specialRemoveReckless 
: i.name === ""
? specialRemoveReflectiveCarapace 
: i.name === ""
? specialRemoveRegeneration 
: i.name === ""
? specialRemoveRejuvenation 
: i.name === ""
? specialRemoveRelentless 
: i.name === ""
? specialRemoveShadowStealth 
: i.name === ""
? specialRemoveShapechanger 
: i.name === ""
? specialRemoveSiegeMonster 
: i.name === ""
? specialRemoveSkewer 
: i.name === ""
? specialRemoveSlippery 
: i.name === ""
? specialRemoveSpeakCommandswithCreatures 
: i.name === ""
? specialRemoveSpeakwithBeastsandPlants 
: i.name === ""
? specialRemoveSpellImmunity 
: i.name === ""
? specialRemoveSpiderClimb 
: i.name === ""
? specialRemoveStandingLeap 
: i.name === ""
? specialRemoveSteadfast 
: i.name === ""
? specialRemoveStench 
: i.name === ""
? specialRemoveSunSickness 
: i.name === ""
? specialRemoveSunlightSensitivity 
: i.name === ""
? specialRemoveSuperiorInvisibility 
: i.name === ""
? specialRemoveSurefooted 
: i.name === ""
? specialRemoveSurpriseAttack 
: i.name === ""
? specialRemoveSwarm 
: i.name === ""
? specialRemoveTelepathicShroud 
: i.name === ""
? specialRemoveTerrainCamouflage 
: i.name === ""
? specialRemoveTunneler 
: i.name === ""
? specialRemoveTreeStride 
: i.name === ""
? specialRemoveTurnImmunity 
: i.name === ""
? specialRemoveTurnResistance 
: i.name === ""
? specialRemoveTwoHeads 
: i.name === ""
? specialRemoveUndeadFortitude 
: i.name === ""
? specialRemoveWakeful 
: i.name === ""
? specialRemoveWaterSusceptibility 
: i.name === ""
? specialRemoveWebSense 
: i.name === ""
? specialRemoveWebWalker 
: i.name === ""
? specialRemoveWoundedFury 
: i.name === ""
? specialRemoveAdhesiveFilament 
: i.name === ""
? specialRemoveAntimagicShell 
: i.name === ""
? specialRemoveArcaneWard 
: i.name === ""
? specialRemoveArmyArcane 
: i.name === ""
? specialRemoveAuraofAnnihilation 
: i.name === ""
? specialRemoveBenignTransportation 
: i.name === ""
? specialRemoveBlurredMovement 
: i.name === ""
? specialRemoveCorruptedCarrier 
: i.name === ""
? specialRemoveDeathFlash 
: i.name === ""
? specialRemoveDeathGaze 
: i.name === ""
? specialRemoveEvasion 
: i.name === ""
? specialRemoveFearAura 
: i.name === ""
? specialRemoveFlammableBlood 
: i.name === ""
? specialRemoveGrungPoisonVariables 
: i.name === ""
? specialRemoveHeartoftheDragon 
: i.name === ""
? specialRemoveImixsBlessing 
: i.name === ""
? specialRemoveIndomitable 
: i.name === ""
? specialRemoveIronBoots 
: i.name === ""
? specialRemoveKickingRetreat 
: i.name === ""
? specialRemoveLowCunning 
: i.name === ""
? specialRemoveMentalFortitude 
: i.name === ""
? specialRemoveMentalResistance 
: i.name === ""
? specialRemoveNilbogism 
: i.name === ""
? specialRemoveNurturedOneofYurtrus 
: i.name === ""
? specialRemoveOutsizeStrength 
: i.name === ""
? specialRemoveOverbearingPack 
: i.name === ""
? specialRemovePoisonousSkin 
: i.name === ""
? specialRemoveRaxivortsTongue 
: i.name === ""
? specialRemoveResonantConnection 
: i.name === ""
? specialRemoveSecondWind 
: i.name === ""
? specialRemoveShadowBlend 
: i.name === ""
? specialRemoveShadowStealth2 
: i.name === ""
? specialRemoveShadowTeleport 
: i.name === ""
? specialRemoveShedSkin 
: i.name === ""
? specialRemoveShockSusceptibility 
: i.name === ""
? specialRemoveSlayer 
: i.name === ""
? specialRemoveStunningGaze 
: i.name === ""
? specialRemoveSunlightHypersensitivity 
: i.name === ""
? specialRemoveAberrantQuickness 
: i.name === ""
? specialRemoveAnnihilatingAura 
: i.name === ""
? specialRemoveAssumeForm 
: i.name === ""
? specialRemoveAuraofMadness 
: i.name === ""
? specialRemoveBattleCommand 
: i.name === ""
? specialRemoveBringerofPlagues 
: i.name === ""
? specialRemoveBurdenofTime 
: i.name === ""
? specialRemoveBurningFury 
: i.name === ""
? specialRemoveCloudofVermin 
: i.name === ""
? specialRemoveContamination 
: i.name === ""
? specialRemoveCorruptWater 
: i.name === ""
? specialRemoveCreateSoulblade 
: i.name === ""
? specialRemoveCripplingFear 
: i.name === ""
? specialRemoveCunningOpportunist 
: i.name === ""
? specialRemoveDemonicShadows 
: i.name === ""
? specialRemoveDiabolicalSense 
: i.name === ""
? specialRemoveDimensionalLock 
: i.name === ""
? specialRemoveDiscernLie 
: i.name === ""
? specialRemoveEarthArmor 
: i.name === ""
? specialRemoveEarthShakingMovement 
: i.name === ""
? specialRemoveEnchantingPresence 
: i.name === ""
? specialRemoveEngineofPain 
: i.name === ""
? specialRemoveExtraordinaryLeap 
: i.name === ""
? specialRemoveFallibleInvisibility 
: i.name === ""
? specialRemoveFomentMadness 
: i.name === ""
? specialRemoveHowdah 
: i.name === ""
? specialRemoveLifeEater 
: i.name === ""
? specialRemoveLifeHunger 
: i.name === ""
? specialRemoveLivingStorm 
: i.name === ""
? specialRemoveLolthsFickleFavor 
: i.name === ""
? specialRemoveMartialFury 
: i.name === ""
? specialRemoveMasteroftheGrave 
: i.name === ""
? specialRemoveOutofPhaseMovement 
: i.name === ""
? specialRemovePhalanxFormation 
: i.name === ""
? specialRemovePoisonSplash 
: i.name === ""
? specialRemovePsychicLeech 
: i.name === ""
? specialRemovePsychicEngine 
: i.name === ""
? specialRemovePsychicMirror 
: i.name === ""
? specialRemoveRallytheTroops 
: i.name === ""
? specialRemoveRancidDegeneration 
: i.name === ""
? specialRemoveRisingAnger 
: i.name === ""
? specialRemoveShadowJump 
: i.name === ""
? specialRemoveShadowStep 
: i.name === ""
? specialRemoveSoulThirst 
: i.name === ""
? specialRemoveSpectralDuplicate 
: i.name === ""
? specialRemoveSummonSpectres 
: i.name === ""
? specialRemoveThrivesonCompany 
: i.name === ""
? specialRemoveUncannySenses 
: i.name === ""
? specialRemoveUndertow 
: i.name === ""
? specialRemoveWateryAdvantage 
: i.name === ""
? specialRemoveWarMagic 
: i.name === ""
? specialRemoveWeightofAges 
: i.name === ""
? specialRemoveWretchedPackTactics 