import style from "../stylesheets/PageStyle.module.scss";
import { jsPDF } from "jspdf";
import { useEffect, useRef, useState, useContext } from "react";
import { Button } from "primereact/button";
import PDF, { Text, AddPage, Line, Image, Table, Html } from "jspdf-react";
import { supabase, auth } from "../config/supabaseClient";
import { Toast } from "primereact/toast";
import { SessionContext } from "../config/SessionContext";

const ExportButtons = (props) => {
  const session = useContext(SessionContext);
  //Create compnent that references to a props.div element and export it's content to a text file and pdf file
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(1);
  const [pdf, setPdf] = useState(null);
  const [html, setHtml] = useState(null);
  const [isPdfReady, setIsPdfReady] = useState(false);
  const [isHtmlReady, setIsHtmlReady] = useState(false);
  const doc = new jsPDF();
  const [data, setData] = useState([]);
  const [isDataReady, setIsDataReady] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const divRef = useRef(null);

  const toast = useRef(null);

  const show = () => {
    toast.current.show({
      severity: "success",
      summary: "Success",
      detail: "Saved to Database",
    });
  };

  useEffect(() => {
    if (props.div && props.div.current) {
      const div = props.div.current;
      const html = div.innerHTML;
      setHtml(html);
      setIsHtmlReady(true);
    }
  }, [props.div]);

  useEffect(() => {
    if (props.data) {
      setData(props.data);
      setIsDataReady(true);
    }
  }, [props.data]);

  useEffect(() => {
    if (isHtmlReady && isDataReady) {
      setIsReady(true);
    }
  }, [isHtmlReady, isDataReady]);

  useEffect(() => {
    if (isReady) {
      const doc = new jsPDF();
      doc.html(html, {
        callback: (pdf) => {
          setPdf(pdf);
          setIsPdfReady(true);
        },
      });
    }
  }, [isReady, html]);

  const exportToPdf = () => {
    if (isPdfReady) {
      pdf.save(`${props.data.name}.pdf`);
    }
  };

  const exportToText = () => {
    if (props.div && props.div.current) {
      const div = props.div.current;
      const text = div.innerText;
      const element = document.createElement("a");
      const file = new Blob([text], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `${props.data.name}.txt`;
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }
  };

  const exportToExcel = () => {
    if (data) {
      const element = document.createElement("a");
      const file = new Blob([JSON.stringify(data)], { type: "text/plain" });
      element.href = URL.createObjectURL(file);
      element.download = `${props.data.name}.xlsx`;
      document.body.appendChild(element); // Required for this to work in FireFox
      element.click();
    }
  };

  const saveToDb = () => {
    const fetchData = async () => {
      const { data: dataName, error: errorName } = await supabase
        .from(props.tableName)
        .insert(props.data);
      console.log("Added to DB");
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
      }
      if (dataName) {
        setFetchError(null);
      }
    };
    fetchData();
    show();
  };

  return (
    <>
      <Toast ref={toast} />
      {session === null ? (
        <p className={style.loginMessageSmall}>
          Please Login to save to Database
        </p>
      ) : (
        <>
          <button
            className={style.btnExport}
            onClick={saveToDb}
            title="Save to Database"
          >
            SAVE <i className="pi pi-cloud-upload"></i>
          </button>
        </>
      )}
      <button
        className={style.btnExport}
        onClick={exportToPdf}
        title="Export PDF"
      >
        PDF
        <i className="pi pi-file-pdf"></i>
      </button>
      <button
        className={style.btnExport}
        onClick={exportToText}
        title="Export TXT"
      >
        TXT <i className="pi pi-file-o"></i>
      </button>
      <button
        className={style.btnExport}
        onClick={exportToExcel}
        title="Export XLSX"
      >
        XLSX
        <i className="pi pi-file-excel"></i>
      </button>
    </>
  );
};
export default ExportButtons;
