const openDialogRoomType = () => {
    setDialogVisibleRoomType(true);
  };
  const closeDialogRoomType = () => {
    setDialogVisibleRoomType(false);
    setRoomType(selectedRoomType.name);
  };
  const dialogFooterRoomType = () => {
    return (
      <Button label="Ok" icon="pi pi-check" onClick={closeDialogRoomType} />
    );
  };
  const randomRoomTypeBtn = (
    <Button onClick={onRandomRoomType} className={style.btnName}>
      Random
    </Button>
  );
  
  const RoomTypeDialog = (
    <div className="card">
      <h2 className={style.monstergenTitles}>Room Type</h2>
      {RoomCategory === "" ? (
        "Set Category"
      ) : (
        <>
          <Button
            onClick={openDialogRoomType}
            className={style.btnAddRemove}
          >
            Add / Remove
          </Button>
          {randomRoomTypeBtn}
        </>
      )}

      <Dialog
        header="Room Type"
        visible={dialogVisibleRoomType}
        maximizable
        modal
        onHide={closeDialogRoomType}
        footer={dialogFooterRoomType}
      >
        <DataTable
          value={RoomList}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={selectedRoomType}
          onSelectionChange={(e) => {
            setSelectedRoomType(e.value);
          }}
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
            selectionMode="single"
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