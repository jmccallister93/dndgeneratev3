import style from "../stylesheets/PageStyle.module.scss";
import { jsPDF } from "jspdf";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";

const ExportButtons = (props) => {
//   const [object, setObject] = useState([]);
//   const [allSelection, setAllSelection] = useState();
//   const [titles, setTitles] = useState();
// //   const [cols, setCols] = useState([])
//   useEffect(() => {
//     setObject([]);
//     for (let i = 0; i < props.objectSingular.length; i++) {
//       setObject((oldArray) => [...oldArray, props.objectSingular[i]]);
//     }
//     console.log(object)
//     for (let i = 0; i < props.objectPlural.length; i++) {
//     //   console.log(props.objectPlural[i]); // This is category
//       for (let j = 0; j < props.objectPlural[i].length; j++) {
//         // console.log(props.objectPlural[i][j].name); //this is name of value
//       }
//     }
//     console.log(props.objectSingular[0])
//   }, [props.objectSingular, props.objectPlural]);

//   //Export Logic
//   const dt = useRef(null);
//   const exportPdf = () => {
//     import("jspdf").then((jsPDF) => {
//       import("jspdf-autotable").then(() => {
//         const doc = new jsPDF.default(0, 0);
//         doc.autoTable(exportColumns, object);
//         doc.save(props.objectName + ".pdf");
//       });
//     });
//   };

// const cols = [
//     {field: props.objectSingular[0], header: props.headers[0]},
//     {field: props.objectSingular[1], header: props.headers[1]}
// ]

//   const exportColumns = cols.map((col) => ({
//     title: col.header,
//     dataKey: col.field,
//   }));
//------------------



const onClick = ()=> {
  let keys = Object.keys(props.combinedObj)
  let values = Object.values(props.combinedObj)

  console.log(values)

    // console.log(props.combinedObj[8]["Factions"][0].name)
   
//     var doc = new jsPDF('landscape');
//     doc.text(20, 20, 
//         `${props.headers}`);
//     doc.save('Test.pdf');
}
 // const objSingular = props.headers.reduce((accumulator, element, index) => {
    //     return {...accumulator, [element]: props.objectSingular[index]}
    // },{})

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
//   const exportBtns = (
//     <div>
//       {/* <Button
//           type="button"
//           icon="pi pi-file"
//           onClick={() => exportCSV(true)}
//           className="p-button-info mr-2 "
//           data-pr-tooltip="Export CSV"
//           tooltip="CSV"
//         />
//         <Button
//           type="button"
//           icon="pi pi-file-excel"
//           onClick={exportExcel}
//           className="p-button-success mr-2"
//           data-pr-tooltip="Export XLS"
//           tooltip="XLS"
//         /> */}
        
//       <Button
//         type="button"
//         icon="pi pi-file-pdf"
//         onClick={exportPdf}
//         className="p-button-warning mr-2"
//         data-pr-tooltip="Export PDF"
//         tooltip="PDF"
//       />
//     </div>
//   );

  return (
    <div>
      <h1>Export</h1>
      <button className={style.btnName} onClick={onClick}>PDF</button>
    </div>
  );
};

export default ExportButtons;
