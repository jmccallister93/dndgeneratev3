import { Column } from "jspdf-autotable";
import { FilterMatchMode } from "primereact/api";
import { Button } from "primereact/button";
import { DataTable } from "primereact/datatable";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { supabase, auth } from "../config/supabaseClient";
import style from "../stylesheets/PageStyle.module.scss";
import MultipleRandomButton from "./MultipleRandomButton";

const CustomDataTableNpc = (props) => {
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
  const [fetchError, setFetchError] = useState(null);
  const [dialogVisible, setDialogVisible] = useState(false);

  const [memberNameOptions, setMemberNameOptions] = useState([]);
  const [memberName, setMemberName] = useState("");
  const [memberNames, setMemberNames] = useState([]);
  const [memberNameList, setMemberNameList] = useState([]);

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

  //Name Data
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("names").select();
      if (error) {
        setFetchError("Could not fetch the data");
        setMemberName(null);
        console.log(error);
      }
      if (data) {
        setMemberNames(data);
        setFetchError(null);
        setMemberNameOptions(
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

  //Create Member Names
  const onRandomName = (e) => {
    let f = Math.floor(Math.random() * 208);
    let firstName = [memberNameOptions[f].first_name];
    let eA = Math.floor(Math.random() * 208);
    let epiphet_a = [memberNameOptions[eA].epithet_a];
    let eB = Math.floor(Math.random() * 208);
    let epiphet_b = [memberNameOptions[eB].epithet_b];
    let nA = Math.floor(Math.random() * 208);
    let noun_a = [memberNameOptions[nA].noun_a];
    let nB = Math.floor(Math.random() * 208);
    let noun_b = [memberNameOptions[nB].noun_b];

    let random = Math.round(Math.random() * 3);
    let name = "";

    if (random === 0) {
      name = firstName + " " + epiphet_a + noun_a;
    } else if (random === 1) {
      name = firstName + " " + epiphet_a + noun_b;
    } else if (random === 2) {
      name = firstName + " " + epiphet_b + noun_b;
    } else {
      name = firstName + " " + epiphet_b + noun_a;
    }
    return name;
  };

  useEffect(() => {
    if (memberNameOptions.length > 0) {
      const names = [];
      for (let i = 0; i < 20; i++) {
        const name = onRandomName();
        names.push({ name: name, value: name });
      }
      setMemberNameList(names);
    }
  }, [memberNameOptions]);

  //Use effect to set list
  useEffect(() => {
    if (memberNameList) {
      props.setList(memberNameList);
    }
    if (memberNameOptions) {
      props.setOptions(memberNameOptions);
    }
    props.setSelectedItem(props.list);
  }, [memberNameList, memberNameOptions, props]);

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
          value={memberNameList}
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

export default CustomDataTableNpc;
