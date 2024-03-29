import { Column } from "jspdf-autotable";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { supabase,  } from "../config/supabaseClient";
import style from "../stylesheets/PageStyle.module.scss";
import MultipleRandomButton from "./MultipleRandomButton";

const CustomDataTableMember = (props) => {
  //-----SAMPLE PROPS-------
  // tableName={"itemsTools"}
  // setSingular={setItem}
  // setPlural={setItems}
  // setOptions={setItemOptions}
  // h1Title={"Pack Contents"}
  // dialogHeader={"Items"}
  // selectedItem={selectedItem}
  // setSelectedItem={setSelectedItem}
  // list={itemList}
  // setList={setItemList}
  // valueOptions={itemOptions}
  // options={itemOptions}
  //-----SAMPLE PROPS-------

  //Set States
  const [, setFetchError] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const [filteredOptions, ] = useState();

  //DataTable filters
  const [globalFilterValue, setGlobalFilterValue] = useState("");
  const [filters, setFilters] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    representative: { value: null, matchMode: FilterMatchMode.IN },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    verified: { value: null, matchMode: FilterMatchMode.EQUALS },
  });
  //On filter change
  const onGlobalFilterChange = (e) => {
    const value = e.target.value;
    let _filters = { ...filters };
    _filters["global"].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  //Render header
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
  //Set Header
  const header = (
    <div className="flex justify-content-between">{renderHeader()}</div>
  );
  //Get Data from supabase
  useEffect(() => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(props.tableName)
        .select();
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        props.setSingular(null);
      }
      if (dataName) {
        props.setPlural(dataName);
        setFetchError(null);
        props.setOptions(
          dataName.map((r) => ({ name: r.name, value: r.value, desc: r.desc }))
        );
      }
    };
    fetchData();
    // eslint-disable-next-line 
  }, []);
  //Open dialog
  const openDialog = () => {
    setDialogVisible(true);
  };
  //Close Dialog
  const closeDialog = () => {
    setDialogVisible(false);
    for (let i = 0; i < props.selectedItem.length; i++) {
      if (props.list.includes(props.selectedItem[i])) {
      } else {
        props.setList((old) => [...old, props.selectedItem[i]]);
      }
    }
  };
  //Dialog Footer
  const dialogFooter = () => {
    return <Button label="Ok" icon="pi pi-check" onClick={closeDialog} />;
  };
  //Use effect to set list
  useEffect(() => {
    if(props.selectedItem){
    props.setSelectedItem(props.list);
    }
    // eslint-disable-next-line 
  }, [props.list]);

  // Set Value Options based on membership state
//   useEffect(() => {
//     if (props.valueOptions) {
//       const optionNames = props.valueOptions.map((option) => option.name);
//       const favoredNames = props.membershipState.favored
//         ? props.membershipState.favored.map((member) => member.name)
//         : [];
//       const positiveNames = props.membershipState.positive
//         ? props.membershipState.positive.map((member) => member.name)
//         : [];
//       const neutralNames = props.membershipState.neutral
//         ? props.membershipState.neutral.map((member) => member.name)
//         : [];
//       const unwelcomeNames = props.membershipState.unwelcome
//         ? props.membershipState.unwelcome.map((member) => member.name)
//         : [];
//       const intolerantNames = props.membershipState.intolerant
//         ? props.membershipState.intolerant.map((member) => member.name)
//         : [];

//       setFilteredOptions(
//         props.valueOptions.filter((option) => {
//           const name = option.name;
//           return (
//             !favoredNames.includes(name) &&
//             !positiveNames.includes(name) &&
//             !neutralNames.includes(name) &&
//             !unwelcomeNames.includes(name) &&
//             !intolerantNames.includes(name)
//           );
//         })
//       );
//     }
//   }, [props.membershipState, props.valueOptions]);

  //JSX Dialog template
  const templateDatatable = (
    <>
      <h1 className={style.titles}>{props.h1Title}</h1>
      <button onClick={openDialog} className={style.btnName}>
        Add / Remove
      </button>
      <Dialog
        header={props.dialogHeader}
        visible={dialogVisible}
        maximizable
        modal
        onHide={closeDialog}
        footer={dialogFooter}
        transitionOptions
      >
        <DataTable
          value={filteredOptions}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
          selection={props.selectedItem}
          onSelectionChange={(e) => {
            props.setList(e.value);
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
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            header={props.h1Title}
            field="name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </Dialog>
    </>
  );

  return (
    <>
      <div>
        {templateDatatable}{" "}
        <MultipleRandomButton
          valueOptions={props.valueOptions}
          setSelectedItem={props.setSelectedItem}
          list={props.list}
          selectedItem={props.selectedItem}
          setList={props.setList}
        />
      </div>
    </>
  );
};

export default CustomDataTableMember;
