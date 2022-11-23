const ImmuneRemoveMPiercing = customDmgRemove(onRemoveImmuneMPiercing);const onRemoveImmuneAcid = (e) => onRemoveCustom(setImmuneList, ImmuneList, "Acid");
const onRemoveImmuneCold = (e) => onRemoveCustom(setImmuneList, ImmuneList, "Cold");
const onRemoveImmuneFire = (e) => onRemoveCustom(setImmuneList, ImmuneList, "Fire");
const onRemoveImmuneForce = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Force");
const onRemoveImmuneLightning = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Lightning");
const onRemoveImmuneNecrotic = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Necrotic");
const onRemoveImmunePoison = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Poison");
const onRemoveImmunePsychic = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Psychic");
const onRemoveImmuneRadiant = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Radiant");
const onRemoveImmuneThunder = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Thunder");
const onRemoveImmuneBludgeoning = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Bludgeoning");
const onRemoveImmuneSlashing = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Slashing");
const onRemoveImmunePiercing = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Piercing");
const onRemoveImmuneMagic = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Magic");
const onRemoveImmuneMBludgeoning = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Magical Bludgeoning");
const onRemoveImmuneMSlashing = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Magical Slashing");
const onRemoveImmuneMPiercing = (e) =>
  onRemoveCustom(setImmuneList, ImmuneList, "Magical Piercing");

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
const ImmuneRemoveAcid = customDmgRemove(onRemoveImmuneAcid);
const ImmuneRemoveCold = customDmgRemove(onRemoveImmuneCold);
const ImmuneRemoveFire = customDmgRemove(onRemoveImmuneFire);
const ImmuneRemoveForce = customDmgRemove(onRemoveImmuneForce);
const ImmuneRemoveLightning = customDmgRemove(onRemoveImmuneLightning);
const ImmuneRemoveNecrotic = customDmgRemove(onRemoveImmuneNecrotic);
const ImmuneRemovePoison = customDmgRemove(onRemoveImmunePoison);
const ImmuneRemovePsychic = customDmgRemove(onRemoveImmunePsychic);
const ImmuneRemoveRadiant = customDmgRemove(onRemoveImmuneRadiant);
const ImmuneRemoveThunder = customDmgRemove(onRemoveImmuneThunder);
const ImmuneRemoveBludgeoning = customDmgRemove(onRemoveImmuneBludgeoning);
const ImmuneRemoveSlashing = customDmgRemove(onRemoveImmuneSlashing);
const ImmuneRemovePiercing = customDmgRemove(onRemoveImmunePiercing);
const ImmuneRemoveMagic = customDmgRemove(onRemoveImmuneMagic);
const ImmuneRemoveMBludgeoning = customDmgRemove(onRemoveImmuneMBludgeoning);
const ImmuneRemoveMSlashing = customDmgRemove(onRemoveImmuneMSlashing);
const ImmuneRemoveMPiercing = customDmgRemove(onRemoveImmuneMPiercing);

const ImmuneDisplay = ImmuneList.map((i) => {
  return (
    <div>
      <h3>
        {i.name}
        {i.name === "Acid"
          ? ImmuneRemoveAcid
          : i.name === "Cold"
          ? ImmuneRemoveCold
          : i.name === "Fire"
          ? ImmuneRemoveFire
          : i.name === "Force"
          ? ImmuneRemoveForce
          : i.name === "Lightning"
          ? ImmuneRemoveLightning
          : i.name === "Necrotic"
          ? ImmuneRemoveNecrotic
          : i.name === "Poison"
          ? ImmuneRemovePoison
          : i.name === "Psychic"
          ? ImmuneRemovePsychic
          : i.name === "Radiant"
          ? ImmuneRemoveRadiant
          : i.name === "Thunder"
          ? ImmuneRemoveThunder
          : i.name === "Bludgeoning"
          ? ImmuneRemoveBludgeoning
          : i.name === "Slashing"
          ? ImmuneRemoveSlashing
          : i.name === "Piercing"
          ? ImmuneRemovePiercing
          : i.name === "Magic"
          ? ImmuneRemoveMagic
          : i.name === "Magical Bludgeoning"
          ? ImmuneRemoveMBludgeoning
          : i.name === "Magical Slashing"
          ? ImmuneRemoveMSlashing
          : i.name === "Magical Piercing"
          ? ImmuneRemoveMPiercing
          : null}
      </h3>
    </div>
  );
});
const ImmuneDialog = (
  <div className="card">
    <h2 className={style.monstergenTitles}>Immuneerabilities</h2>
    <Button onClick={openDialogImmune} className={style.monstergenBtnName}>
      <i className="pi pi-plus"> Add</i>
    </Button>
    <Dialog
      header="Immuneerabilities"
      visible={dialogVisibleImmune}
      maximizable
      modal
      onHide={closeDialogImmune}
      footer={dialogFooterImmune}
    >
      <DataTable
        value={ImmuneOptions}
        scrollable
        scrollHeight="60vh"
        //   className="p-datatable-customers"
        rows={20}
        dataKey="name"
        selection={selectedItemsImmune}
        onSelectionChange={(e) => setSelectedItemsImmune(e.value)}
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