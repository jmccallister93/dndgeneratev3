import style from "../stylesheets/PageStyle.module.scss";
import { jsPDF } from "jspdf";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";

const ExportButtons = (props) => {
  const [object, setObject] = useState([]);
  const [allSelection, setAllSelection] = useState();
  useEffect(() => {
    // setObject((oldArray) => ({ ...oldArray, name: props.name, type: props.type }));
    setObject([]);
    for (let i = 0; i < props.objectSingular.length; i++) {
      setObject((oldArray) => [...oldArray, props.objectSingular[i]]);
    }
    for (let i = 0; i < props.objectPlural.length; i++) {
      setObject((oldArray) => [...oldArray, props.objectPlural[i]]);
      for (let i = 0; i < props.objectPlural[i].length; i++) {
        console.log(props.objectPlural[i]);
      }
    }
  }, [props.objectSingular, props.objectPlural]);

  //Export Logic
  const dt = useRef(null);
  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, props.object.name);
        doc.save(props.objectName + ".pdf");
      });
    });
  };
  const cols = [
    { field: "name", header: "Name" },
    { field: "size", header: "Size" },
    { field: "type", header: "Type" },
    { field: "alignment", header: "Alignment" },
  ];
  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  // const exportCSV = (selectionOnly) => {
  //   dt.current.exportCSV({ selectionOnly });
  // };

  // const exportExcel = () => {
  //   import("xlsx").then((xlsx) => {
  //     const worksheet = xlsx.utils.json_to_sheet(allSelection);
  //     const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
  //     const excelBuffer = xlsx.write(workbook, {
  //       bookType: "xlsx",
  //       type: "array",
  //     });
  //     saveAsExcelFile(excelBuffer, "products");
  //   });
  // };

  // const saveAsExcelFile = (buffer, fileName) => {
  //   import("file-saver").then((module) => {
  //     if (module && module.default) {
  //       let EXCEL_TYPE =
  //         "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  //       let EXCEL_EXTENSION = ".xlsx";
  //       const data = new Blob([buffer], {
  //         type: EXCEL_TYPE,
  //       });

  //       module.default.saveAs(
  //         data,
  //         fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
  //       );
  //     }
  //   });
  // };

  //Export Buttons
  const exportBtns = (
    <div>
      {/* <Button
          type="button"
          icon="pi pi-file"
          onClick={() => exportCSV(true)}
          className="p-button-info mr-2 "
          data-pr-tooltip="Export CSV"
          tooltip="CSV"
        />
        <Button
          type="button"
          icon="pi pi-file-excel"
          onClick={exportExcel}
          className="p-button-success mr-2"
          data-pr-tooltip="Export XLS"
          tooltip="XLS"
        /> */}
      <Button
        type="button"
        icon="pi pi-file-pdf"
        onClick={exportPdf}
        className="p-button-warning mr-2"
        data-pr-tooltip="Export PDF"
        tooltip="PDF"
      />
    </div>
  );

  return (
    <div>
      <h1>Export</h1>
      {exportBtns}
    </div>
  );
};

export default ExportButtons;
