import { Column } from "primereact/column";
import { FilterMatchMode } from "primereact/api";
import { DataTable } from "primereact/datatable";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import ns from "../../stylesheets/Note.module.scss";

const TreeTable = (props) => {

    const [select, setSelect] = useState(null);
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

  return (
    <>
      <div className={ns.noteTreeCategory}>
        <DataTable
          value={props.value}
          scrollable
          scrollHeight="60vh"
          rows={20}
          dataKey="name"
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
          selection={props.selection}
          onSelectionChange={(e) => props.onSelectedItem(e.value)}
        >
         <Column
            selectionMode="multiple"
            selectionAriaLabel="name"
            headerStyle={{ width: "6em" }}
          ></Column>
          <Column
            header={props.header}
            field="name"
            sortable
            filter
            filterPlaceholder="Search"
          ></Column>
        </DataTable>
      </div>
    </>
  );
};

export default TreeTable;
