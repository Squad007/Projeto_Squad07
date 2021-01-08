import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

export default function Notification() {
  return (
    <div>
      <h1>Notication</h1>
      <div className="d-flex">
        <div
          style={{ width: '25vw', height: '75vh', background: 'aquamarine' }}
        >
          <p className="m-3">
            <p className="lead font-weight-bold ">Denuncia 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>

          <p className="m-3">
            <p className="lead font-weight-bold ">Denuncia 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>

          <p className="m-3">
            <p className="lead font-weight-bold ">Denuncia 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>

          <p className="m-3">
            <p className="lead font-weight-bold ">Denuncia 1</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
              fuga non recusandae animi nesciunt! Unde eaque voluptates eos
              dignissimos temporibus?
            </p>
          </p>
        </div>
        <div
          id="reportMap"
          className="bg-primary"
          style={{ width: '75vw', height: '75vh' }}
        >
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
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
