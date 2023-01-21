import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { TreeTable } from "primereact/treetable";

const NoteTreeTable = (props) => {
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


const [selectedNodeKey, setSelectedNodeKey] = useState(null);
// useEffect(() => {
//     console.log(selectedNodeKey);
//     }, [selectedNodeKey]);

  return (
    <>
      <div className={ns.noteTreeCategory}>
        <TreeTable
          value={props.value}
          selectionMode="single"
          onSelect= {e => 
            props.onSelectedItem({
                name: e.node.name,
                data: e.node.additionalData,
                key: e.node.key,
              })
            }

          className="tree-table"
          style={{ width: "15rem" }}
        >
          <Column
            sortable
            filter
            filterMatchMode={filters}
            filterPlaceholder="Search"
            field="name"
            header="Name"
            expander
            reorderable
            keyField="id"
          ></Column>
        </TreeTable>
      </div>
    </>
  );
};

export default NoteTreeTable;
