import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Notification() {
  return (
    <div>
      <h1>Notication</h1>
      <div className="d-flex">
        <div
          style={{ width: '25vw', height: '75vh', background: 'aquamarine' }}
        >
          <p className="m-3">
            <p className="lead font-weight-bold ">Notificação 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>

          <p className="m-3">
            <p className="lead font-weight-bold ">Notificação 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>

          <p className="m-3">
            <p className="lead font-weight-bold ">Notificação 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>

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
            center={[-23.4936564,-46.4492472]}
            zoom={13}
            scrollWheelZoom={false}
            style={{ width: '75vw', height: '75vh' }}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[-23.4936564,-46.4492472]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </div>
  );
}
