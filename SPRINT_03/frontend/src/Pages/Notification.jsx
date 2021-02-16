import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from "leaflet";


import 'leaflet/dist/leaflet.css';
import '../Assets/css/notification.css';
import mapMarkerImg from "../Assets/img/pin_sos.svg";

export default function Notification() {
  const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [38, 48],
    iconAnchor: [29, 68],
    popupAnchor: [170, -10],
  });
  return (
    <div>
      <h1>Notificação</h1>
      <div className="d-flex">
        <div className=" table-responsive"
          style={{ width: '25vw', height: '75vh', background: 'aquamarine' }}
        >
          <div className="m-3">
            <p className="lead font-weight-bold ">Notificação 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </div>

          <p className="m-3">
            <p className="lead font-weight-bold ">Notificação 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>

        </div>
        <div
          id="reportMap"
          className=""
        >
          <MapContainer
            center={[-23.479112376616733, -46.41956537170949]}
            zoom={13}
            style={{ width: '75vw', height: '75vh' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={mapIcon} position={[-23.479181260413636, -46.419179134217195]}>
              <Popup closeButton={false} minWidth={240} maxWidth={240} className="map-popup">
                AMA/UBS Integrada Jardim Helena
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
