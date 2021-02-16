import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from "react-leaflet";
import Leaflet from "leaflet";

import "leaflet/dist/leaflet.css";
import "../Assets/css/notification.css";
import mapMarkerImg from "../Assets/img/pin_sos.svg";

export default function Notification() {
  const [pinArray, setPinArray] = useState([]);
  const [ubs, setUbs] = useState(1);
  const [notificationList, setNotificationList] = useState([]);

  // ------------------------------ Api notificações
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch("http://localhost:3001/ubs/DENcount");
      setPinArray(await response.json());
    }
    fetchMyAPI();
  }, []);

  // ------------------------------ Api ubs
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch(`http://localhost:3001/den/byUBS/${ubs}`);
      setNotificationList(await response.json());
    }
    fetchMyAPI();
  }, [ubs]);

  const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [170, -10],
  });
  return (
    <div className="container">
      <div className="d-flex w-100 row"
        style={{height: "90vh"}}
      >

        <div
          className="col w-40 table-responsive my-5 rounded-3"
          style={{ width: "20vw", height: "", background: "aquamarine" }}
        >
          { notificationList.length > 0 && notificationList.map((not) => (
            <div className="m-3">
              <p className="lead font-weight-bold ">{not.nomeUbs}</p>
              <p>
                {not.nome}
              </p>
            </div>
          ))}
        </div>
        <div id="reportMap" className="col my-5">
          <MapContainer
            center={[-23.49400273269489, -46.435508651940815]}
            zoom={14}
            style={{ width: "100%", height: "100%" }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            {pinArray.map((pin) => (
              <Marker icon={mapIcon} position={[pin.latitude, pin.longitude]}>
                <Tooltip>{pin.qtde}</Tooltip>
                <Popup
                  closeButton={false}
                  minWidth={240}
                  maxWidth={240}
                  className="map-popup"
                >
                  <button onClick={() => setUbs(pin.id)}>Mostrar notificações</button>
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
