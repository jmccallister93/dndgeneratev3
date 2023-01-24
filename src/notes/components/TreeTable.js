import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useEffect, useState, useRef } from "react";
import ns from "../../stylesheets/Note.module.scss";
import { TreeTable } from "primereact/treetable";

const NoteTreeTable = (props) => {
  const [selectedItemKey, setSelectedItemKey] = useState(null);
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

  //Selection change
  const handleSelectionChange = (e) => {
    setSelectedItemKey(e.node.key);
    props.onSelectedItem({
      name: e.node.data.name,
      data: e.node.data.additionalData,
      key: e.node.key,
      links: e.node.data.links,
    });
    function getLinks(node, links= []) {
        if (!node) return links;
        if (!node.data) return links;
        links.push(...node.data.links);
        if (!node.children) return links;
        for (const child of node.children) {
            getLinks(child, links);
        }
        return links;
    }
    const links = getLinks(e.node);
    console.log(selectedItemKey, "is linked to, ", links);
    // if (e.node.data.links.includes(selectedItemKey)) {
    //     console.log("Hooray! A Match!")
    //   } else {
    //     console.log("Boo! No Match!");  
    //   }
  };

  return (
    <>
      <div className={ns.noteTreeCategory}>
        <TreeTable
          value={props.value}
          selectionMode="single"
          onSelect={handleSelectionChange}
          className="tree-table"
          style={{ width: "15rem" }}
        >
          <Column
            sortable
            filter
            draggable={true}
            filterMatchMode={filters}
            filterPlaceholder="Search"
            field="name"
            header={props.header}
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
