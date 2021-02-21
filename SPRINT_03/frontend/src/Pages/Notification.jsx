import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import "../Assets/css/notification.css";
import mapMarkerImg from "../Assets/img/pin_sos.svg";

export default function Notification() {
  const [pinArray, setPinArray] = useState([]);
  const [notificationButton, setnotificationButton] = useState([]);
  const [urlDen, setUrlDen] = useState("http://localhost:3001/den/");

  // ------------------------------ Api ubs retorna nos pins do mapa
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/ubs/DENcount");
      setPinArray(await response.json());
    }
    fetchMyAPI();
  }, [urlDen]);

  // ------------------------------ Api notificações
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(urlDen);
      const dados = await response.json();
      setnotificationButton(dados);
    }
    fetchMyAPI();
  }, [urlDen]);

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [170, -10],
  });

  // ------------------------------ Formatação da data de mensagens
  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth() + 1;
    const y = myDate.getFullYear();

    return `${pad(d)}/${pad(mo)}/${y}`;
  };

  function pad(num, size = 2) {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }
  return (
    <div className="container">
      <div
        className="d-flex justify-content-center row"
        style={{ minHeight: "calc(100vh - 68px - 56px )" }}
      >
        <div className="col-md-5 my-4">
          <div
            className="card_not p-3 text-white anyClass"
            style={{ background: "#00b9b3" }}
          >
            <h4 className="border-bottom border-white">
              NOTIFICAÇÕES RECENTES
            </h4>
            <div className="table-responsive" style={{ height: "90%" }}>
              <table className="table table-borderless">
                <tbody>
                  {notificationButton.length > 0 ? (
                    notificationButton.map((not, index) => (
                      <tr
                        key={index}
                        className="m-3 row border-bottom border-white"
                      >
                        <td className="col">
                          <div>
                            <b className="nome_ubs">{not.nomeUbs}</b>
                            <p className="lead font-weight-bold text-white ">
                              {not.nome}
                            </p>
                          </div>
                        </td>

                        <td>
                          <div className="justify-content-center flex-column py-auto d-flex align-items-center">
                            <p className="m-0 text-white">Data da Falta:</p>
                            <p style={{ fontSize: "26px", color: "#fff" }}>
                              {formatDate(not.data_ocorrencia)}
                            </p>
                            <p style={{ fontSize: "12px" }}>
                              registro: {formatDate(not.data_denuncia)}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <b>Sem registros no momento</b>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div id="reportMap" className="col-md-7 my-4">
          <MapContainer
            center={[-23.49, -46.43]}
            zoom={13}
            style={{ width: "100%", height: "550px" }}
            className="card_map"
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {pinArray.map((pin, index) => (
              <Marker
                key={index}
                icon={mapIcon}
                position={[pin.latitude, pin.longitude]}
              >
                <Tooltip>{pin.qtde}</Tooltip>
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  <button
                    className="btn btn-primary"
                    onClick={() =>
                      setUrlDen(`http://localhost:3001/den/byUBS/${pin.id}`)
                    }
                  >
                    Notificações
                  </button>
                  {pin.nomeUbs}
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
