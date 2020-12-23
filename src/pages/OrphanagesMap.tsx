import React from "react";
import { Link } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";

import "../styles/pages/orphanages-map.css";

import mapMarkerImg from "../images/map-marker.svg";

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
      </MapContainer>

      <Link to="#" className="create-orphanage">
        <FiPlus size={32} color="#fff" />
      </Link>
    </div>
  );
}

export default Landing;
