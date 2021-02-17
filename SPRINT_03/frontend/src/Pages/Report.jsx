import React from "react";
import CardReport from "../Components/CardReport/index";

export default function Report() {
  return (
    <div className="section-3" style={{minHeight: "calc(100vh - 68px - 56px )"}}>
      <h2>Selecione o mês</h2>
      <div className="box">
        <section className="categories-container">
          <CardReport title="Janeiro" />
          <CardReport title="Fevereiro" />
          <CardReport title="Marco" />
          <CardReport title="Abril" />
          <CardReport title="Maio" />
          <CardReport title="Junho" />
          <CardReport title="Julho" />
          <CardReport title="Agosto" />
          <CardReport title="Setembro" />
          <CardReport title="Outubro" />
          <CardReport title="Novembro" />
          <CardReport title="Dezembro" />
        </section>
      </div>
    </div>
  );
}
