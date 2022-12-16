import style from "../stylesheets/PageStyle.module.scss";
import { jsPDF } from "jspdf";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import PDF, { Text, AddPage, Line, Image, Table, Html } from "jspdf-react";

const ExportButtons = (props) => {
  //Create a reference to a specific div and export all it's contents to PDF
  const divRef = useRef(null);
  const [isExported, setIsExported] = useState(false);

  const exportToPDF = () => {
    setIsExported(true);
  };

  useEffect(() => {
    if (isExported) {
      const doc = new jsPDF();
      doc.html(props.divRef.current, {
        callback: function (doc) {
          doc.save("Test.pdf");
        },
      });
      setIsExported(false);
    }
  }, [isExported]);

  return (
    // <div>
    //     <div ref={divRef}>
    //         <div className={style.page}>
    //             <div className={style.pageContent}>
    //                 <h1>Test</h1>
    //                 <p>Test</p>
    //             </div>
    //         </div>
    //     </div>
    <div>
      <Button
        className={style.button}
        label="Export to PDF"
        icon="pi pi-file-pdf"
        onClick={exportToPDF}
      />
    </div>
    // </div>
  );
};
export default ExportButtons;
