import style from "../stylesheets/PageStyle.module.scss";
import { jsPDF } from "jspdf";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import PDF, { Text, AddPage, Line, Image, Table, Html } from "jspdf-react";
import supabase from "../config/supabaseClient";

const ExportButtons = (props) => {
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
        .insert({
          name: props.name,
        });
      if (errorName) {
        setFetchError("Could not fetch the data");
        console.log(errorName);
        // props.setSingular(null);
      }
      if (dataName) {
        // props.setPlural(dataName);
        setFetchError(null);
        // props.setOptions(
        //   dataName.map((r) => ({ name: r.name, value: r.value }))
        // );
      }
    };
    fetchData(); 
  };

  return (
    <>
      <button
        className={style.btnExport}
        onClick={saveToDb}
        title="Export PDF"
      >
        SAVE
      </button>
      <button
        className={style.btnExport}
        onClick={exportToPdf}
        title="Export PDF"
      >
        PDF
      </button>
      <button
        className={style.btnExport}
        onClick={exportToText}
        title="Export TXT"
      >
        TXT
      </button>
      <button
        className={style.btnExport}
        onClick={exportToExcel}
        title="Export XLSX"
      >
        XLSX
      </button>
    </>
  );
};
export default ExportButtons;
