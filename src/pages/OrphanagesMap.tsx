import React from "react";
import { Link } from "react-router-dom";

import { FiPlus, FiArrowRight } from "react-icons/fi";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import Leaflet from "leaflet";

import "../styles/pages/orphanages-map.css";

import mapMarkerImg from "../images/map-marker.svg";

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,
  iconSize: [58, 60],
  iconAnchor: [29, 68],
  popupAnchor: [170, 2],
});

function Landing() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarkerImg} alt="Happy" />
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando a sua visita :)</p>
        </header>

        <footer>
          <strong>Rio do Sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <MapContainer
        center={[-27.6127202, -48.6128901]}
        zoom={13}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <Marker position={[-27.6127202, -48.6128901]} icon={mapIcon}>
          <Popup
            closeButton={false}
            minWidth={240}
            maxWidth={240}
            className="map-popup"
          >
            Lar das meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color="#FFF" />
            </Link>
          </Popup>
        </Marker>
      </MapContainer>

      <Link to="/orphanages/create" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default Landing;
