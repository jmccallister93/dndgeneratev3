import style from "../stylesheets/PageStyle.module.scss";
import { jsPDF } from "jspdf";
import { useEffect, useRef, useState } from "react";
import { Button } from "primereact/button";
import PDF, { Text, AddPage, Line, Image, Table, Html } from 'jspdf-react'

const ExportButtons = (props) => {
  // const [obj, setObj] = useState([]);
  // const [k, setK] = useState();
  // let keys = Object.keys(props.combinedObj);
  // let values = Object.values(props.combinedObj);

  // useEffect(()=>{
  //   setObj([])
  //   for (let i = 0; i < values.length; i++) {
  //     if (Array.isArray(values[i])) {
  //       for (let j = 0; j < values[i].length; j++) {
  //         let multi = { [keys[i]]: values[i][j].name };
  //         setObj((old) => [multi, ...old])
  //       }
  //     } else if (typeof values[i] === "string") {
  //       let singles = { [keys[i]]: values[i] };
  //       setObj((old) => [...old, singles])
  //     }
  //   }
  // },[])

  const onClick = () => {
    const innerdiv = document.getElementById("mainDisplay").textContent
    // console.log(innerdiv)
    var doc = new jsPDF("portrait");
    doc.text(20, 20, `${innerdiv}`);
    doc.save(`Best.pdf`);
  };

  return (
    <div>
      <h1>Export</h1>
      <button className={style.btnName} onClick={onClick}>
        PDF
        </button>
    </div>
  );
};

export default ExportButtons;
