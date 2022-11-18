import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";

const Exports = () => {
  const [allItems, setAllItems] = useState();
  const [selectedItems, setSelectedItems] = useState(null);
  const dt = useRef(null);

  //Export Logic
  const exportPdf = () => {
    import("jspdf").then((jsPDF) => {
      import("jspdf-autotable").then(() => {
        const doc = new jsPDF.default(0, 0);
        doc.autoTable(exportColumns, allItems);
        doc.save("products.pdf");
      });
    });
  };
  const cols = [
    { field: "name", header: "Name" },
    { field: "cost", header: "Cost" },
    { field: "type", header: "Type" },
  ];
  const exportColumns = cols.map((col) => ({
    title: col.header,
    dataKey: col.field,
  }));

  const exportCSV = (selectionOnly) => {
    dt.current.exportCSV({ selectionOnly });
  };

  const exportExcel = () => {
    import("xlsx").then((xlsx) => {
      const worksheet = xlsx.utils.json_to_sheet(allItems);
      const workbook = { Sheets: { data: worksheet }, SheetNames: ["data"] };
      const excelBuffer = xlsx.write(workbook, {
        bookType: "xlsx",
        type: "array",
      });
      saveAsExcelFile(excelBuffer, "products");
    });
  };

  const saveAsExcelFile = (buffer, fileName) => {
    import("file-saver").then((module) => {
      if (module && module.default) {
        let EXCEL_TYPE =
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
        let EXCEL_EXTENSION = ".xlsx";
        const data = new Blob([buffer], {
          type: EXCEL_TYPE,
        });

        module.default.saveAs(
          data,
          fileName + "_export_" + new Date().getTime() + EXCEL_EXTENSION
        );
      }
    });
  };

  //Export Buttons
  const exportBtns = (
    <div className="flex align-items-end export-buttons">
      <Button
        type="button"
        icon="pi pi-file"
        onClick={() => exportCSV(true)}
        className="p-button-info mr-2 "
        data-pr-tooltip="Export CSV"
      />
      <Button
        type="button"
        icon="pi pi-file-excel"
        onClick={exportExcel}
        className="p-button-success mr-2"
        data-pr-tooltip="Export XLS"
      />
      <Button
        type="button"
        icon="pi pi-file-pdf"
        onClick={exportPdf}
        className="p-button-warning mr-2"
        data-pr-tooltip="Export PDF"
      />
    </div>
  );

  return <div>{exportBtns}</div>;
};

export default Exports;
