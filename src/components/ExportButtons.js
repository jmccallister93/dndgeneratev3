import style from "../stylesheets/PageStyle.module.scss"

const ExportButtons = (props) => {
  return (
    <div>
      <h1>Export</h1>
      <button className={style.btnPdf}>PDF</button>
      <button className={style.btnXls}>XLS</button>
      <button className={style.btnCsv}>CSV</button>
    </div>
  );
};

export default ExportButtons;
