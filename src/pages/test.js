const ResistRemoveMPiercing = customDmgRemove(onRemoveResistMPiercing);const onRemoveResistAcid = (e) => onRemoveCustom(setResistList, ResistList, "Acid");
const onRemoveResistCold = (e) => onRemoveCustom(setResistList, ResistList, "Cold");
const onRemoveResistFire = (e) => onRemoveCustom(setResistList, ResistList, "Fire");
const onRemoveResistForce = (e) =>
  onRemoveCustom(setResistList, ResistList, "Force");
const onRemoveResistLightning = (e) =>
  onRemoveCustom(setResistList, ResistList, "Lightning");
const onRemoveResistNecrotic = (e) =>
  onRemoveCustom(setResistList, ResistList, "Necrotic");
const onRemoveResistPoison = (e) =>
  onRemoveCustom(setResistList, ResistList, "Poison");
const onRemoveResistPsychic = (e) =>
  onRemoveCustom(setResistList, ResistList, "Psychic");
const onRemoveResistRadiant = (e) =>
  onRemoveCustom(setResistList, ResistList, "Radiant");
const onRemoveResistThunder = (e) =>
  onRemoveCustom(setResistList, ResistList, "Thunder");
const onRemoveResistBludgeoning = (e) =>
  onRemoveCustom(setResistList, ResistList, "Bludgeoning");
const onRemoveResistSlashing = (e) =>
  onRemoveCustom(setResistList, ResistList, "Slashing");
const onRemoveResistPiercing = (e) =>
  onRemoveCustom(setResistList, ResistList, "Piercing");
const onRemoveResistMagic = (e) =>
  onRemoveCustom(setResistList, ResistList, "Magic");
const onRemoveResistMBludgeoning = (e) =>
  onRemoveCustom(setResistList, ResistList, "Magical Bludgeoning");
const onRemoveResistMSlashing = (e) =>
  onRemoveCustom(setResistList, ResistList, "Magical Slashing");
const onRemoveResistMPiercing = (e) =>
  onRemoveCustom(setResistList, ResistList, "Magical Piercing");

const customDmgRemove = (onRemove) => (
  <div className={style.monstergenSpeedsWrapper}>
    <Button
      tooltip="Remove?"
      onClick={onRemove}
      className={style.monstergenBtnRemove}
      style={{ height: "2rem" }}
    >
      <i className="pi pi-minus"></i>
    </Button>
  </div>
);
const ResistRemoveAcid = customDmgRemove(onRemoveResistAcid);
const ResistRemoveCold = customDmgRemove(onRemoveResistCold);
const ResistRemoveFire = customDmgRemove(onRemoveResistFire);
const ResistRemoveForce = customDmgRemove(onRemoveResistForce);
const ResistRemoveLightning = customDmgRemove(onRemoveResistLightning);
const ResistRemoveNecrotic = customDmgRemove(onRemoveResistNecrotic);
const ResistRemovePoison = customDmgRemove(onRemoveResistPoison);
const ResistRemovePsychic = customDmgRemove(onRemoveResistPsychic);
const ResistRemoveRadiant = customDmgRemove(onRemoveResistRadiant);
const ResistRemoveThunder = customDmgRemove(onRemoveResistThunder);
const ResistRemoveBludgeoning = customDmgRemove(onRemoveResistBludgeoning);
const ResistRemoveSlashing = customDmgRemove(onRemoveResistSlashing);
const ResistRemovePiercing = customDmgRemove(onRemoveResistPiercing);
const ResistRemoveMagic = customDmgRemove(onRemoveResistMagic);
const ResistRemoveMBludgeoning = customDmgRemove(onRemoveResistMBludgeoning);
const ResistRemoveMSlashing = customDmgRemove(onRemoveResistMSlashing);
const ResistRemoveMPiercing = customDmgRemove(onRemoveResistMPiercing);

const ResistDisplay = ResistList.map((i) => {
  return (
    <div>
      <h3>
        {i.name}
        {i.name === "Acid"
          ? ResistRemoveAcid
          : i.name === "Cold"
          ? ResistRemoveCold
          : i.name === "Fire"
          ? ResistRemoveFire
          : i.name === "Force"
          ? ResistRemoveForce
          : i.name === "Lightning"
          ? ResistRemoveLightning
          : i.name === "Necrotic"
          ? ResistRemoveNecrotic
          : i.name === "Poison"
          ? ResistRemovePoison
          : i.name === "Psychic"
          ? ResistRemovePsychic
          : i.name === "Radiant"
          ? ResistRemoveRadiant
          : i.name === "Thunder"
          ? ResistRemoveThunder
          : i.name === "Bludgeoning"
          ? ResistRemoveBludgeoning
          : i.name === "Slashing"
          ? ResistRemoveSlashing
          : i.name === "Piercing"
          ? ResistRemovePiercing
          : i.name === "Magic"
          ? ResistRemoveMagic
          : i.name === "Magical Bludgeoning"
          ? ResistRemoveMBludgeoning
          : i.name === "Magical Slashing"
          ? ResistRemoveMSlashing
          : i.name === "Magical Piercing"
          ? ResistRemoveMPiercing
          : null}
      </h3>
    </div>
  );
});
const ResistDialog = (
  <div className="card">
    <h2 className={style.monstergenTitles}>Resistances</h2>
    <Button onClick={openDialogResist} className={style.monstergenBtnName}>
      <i className="pi pi-plus"> Add</i>
    </Button>
    <Dialog
      header="Resistances"
      visible={dialogVisibleResist}
      maximizable
      modal
      onHide={closeDialogResist}
      footer={dialogFooterResist}
    >
      <DataTable
        value={ResistOptions}
        scrollable
        scrollHeight="60vh"
        //   className="p-datatable-customers"
        rows={20}
        dataKey="name"
        selection={selectedItemsResist}
        onSelectionChange={(e) => setSelectedItemsResist(e.value)}
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