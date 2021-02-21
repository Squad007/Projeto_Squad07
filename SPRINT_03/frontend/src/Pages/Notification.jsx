import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import Leaflet from 'leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

import 'leaflet/dist/leaflet.css';
import 'react-leaflet-markercluster/dist/styles.min.css';
import '../Assets/css/notification.css';
import mapMarkerImg from '../Assets/img/pin_sos.svg';

export default function Notification() {
  const [pinArray, setPinArray] = useState([]);
  const [notificationButton, setnotificationButton] = useState([]);
  const [urlDen, setUrlDen] = useState('http://localhost:3001/den/');

  // ------------------------------ Api ubs retorna nos pins do mapa
  useEffect(() => {
    async function fetchMyAPI() {
      const response = await fetch('http://localhost:3001/ubs/DENcount');
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
    iconAnchor: [20, 48],
    popupAnchor: [0, -40],
  });

  // ------------------------------ Formatação da data de mensagens
  const formatDate = (rawDate) => {
    const myDate = new Date(rawDate);
    const d = myDate.getDay();
    const mo = myDate.getMonth() + 1;
    const y = myDate.getFullYear();

    return `${pad(d).toString()}/${pad(mo).toString()}/${y.toString()}`;
  };

  function pad(num, size = 2) {
    num = num.toString();
    while (num.length < size) num = '0' + num;
    return num;
  }
  return (
    <div>
      <div
        className="d-flex flex-row-reverse justify-content-center row overflow-hidden"
        style={{
          background: '#00b9b3',
          margin: '20px',
          borderRadius: '20px',
          padding: '0px',
        }}
      >
        <div
          id="reportMap"
          className="col-lg-6 m-0 p-0 h-100"
          style={{
            height: '100%',
          }}
        >
          <MapContainer
            center={[-23.49, -46.43]}
            zoom={13}
            style={{
              width: '100%',
              height: 'calc(100vh - 68px - 56px - 41px )',
            }}
            className="card_map"
          >
            <TileLayer
              url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
            />

            <MarkerClusterGroup>
              {pinArray.map((pin, index) => (
                <Marker
                  key={index}
                  icon={mapIcon}
                  position={[pin.latitude, pin.longitude]}
                >
                  <Tooltip
                    direction="top"
                    offset={[0, 0]}
                    opacity={1}
                    className="tooltip_sos"
                    permanent
                  >
                    {pin.qtde.toString()}
                  </Tooltip>
                  <Popup
                    closeButton={false}
                    minWidth={150}
                    maxWidth={200}
                    className="map-popup"
                  >
                    <div className="d-flex flex-column justify-content-center align-items-center p-0 m-0">
                      <b
                        style={{
                          fontSize: '15px',
                          padding: '5px',
                          textAlign: 'center',
                        }}
                      >
                        {pin.nomeUbs}
                      </b>
                      <button
                        className="btn btn-primary font-weight-bold m-0"
                        onClick={() =>
                          setUrlDen(`http://localhost:3001/den/byUBS/${pin.id}`)
                        }
                      >
                        Notificações
                      </button>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MarkerClusterGroup>
          </MapContainer>
        </div>

        <div className="p-4 d-lg-none text-white">
          <i
            class="fas fa-arrow-alt-circle-up"
            style={{ fontSize: '1.5rem' }}
          ></i>
          <span> </span>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <i className="fas fa-ellipsis-v" style={{ fontSize: '1.5rem' }}></i>
          <span> </span>
          <i
            class="fas fa-arrow-alt-circle-down"
            style={{ fontSize: '1.5rem' }}
          ></i>
        </div>

        <div className="col-lg-6 m-0 p-0 h-100">
          <div
            className="card_not p-3 text-white overflow-auto"
            style={{
              height: 'calc(100vh - 68px - 56px - 41px )',
              background: '#00b9b3',
            }}
          >
            <h4 className="font-weight-bold text-center mb-3 titulo_notificacao">
              NOTIFICAÇÕES RECENTES
            </h4>

            <div className="table-responsive ">
              <table className="table table-borderless ">
                <tbody>
                  {notificationButton.length > 0 ? (
                    notificationButton.map((not, index) => (
                      <tr key={index} className="m-0 mb-3 p-1 row">
                        <td
                          className="col tabela_ubs_med"
                          style={{
                            background: 'rgba(0,0,0,0.1)',
                            borderRadius: '20px 0px 0px 20px',
                          }}
                        >
                          <div>
                            <b className="nome_ubs d-lg-none">
                              {formatDate(not.data_ocorrencia)} -{' '}
                            </b>
                            <b className="nome_ubs">{not.nomeUbs}</b>
                            <p className="nome_med lead font-weight-bold text-white">
                              {not.nome}
                            </p>
                          </div>
                        </td>

                        <td
                          className="d-none d-lg-block"
                          style={{
                            background: 'rgba(0,0,0,0.1)',
                            borderRadius: '0px 20px 20px 0px',
                          }}
                        >
                          <div className="justify-content-center flex-column py-auto d-flex align-items-center">
                            <p className="m-0 text-white">Data da Falta:</p>
                            <p
                              style={{
                                fontSize: '20px',
                                color: '#fff',
                                fontWeight: 'bold',
                              }}
                            >
                              {formatDate(not.data_ocorrencia)}
                            </p>
                            <p style={{ fontSize: '12px' }}>
                              Registro em: <br />
                              {formatDate(not.data_denuncia)}
                            </p>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <b style={{ fontSize: '1.2rem' }}>
                      Sem registros no momento
                    </b>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
