import "leaflet/dist/leaflet.css"
import "../styles/Map.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon, divIcon } from "leaflet"
import React from 'react'
import MarkerClusterGroup from "react-leaflet-cluster"

function Map() {
    const markers = [
        {
            geocode: [48.86, 2.3522],
            popup: "hello I am first popup"
        },
        {
            geocode: [48.85, 2.3522],
            popup: "hello I am second popup"
        },
        {
            geocode: [48.855, 2.34],
            popup: "hello I am third popup"
        }


    ]
    const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/128/149/149059.png",
        iconSize: [38, 38]
    })

    const createCustomClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            className: "custom-marker-cluster",
            iconSize: [33,33]
        })
    }
    return (
        <div>
            <MapContainer center={[48.8566, 2.3522]} zoom={13}>
                <TileLayer
                    // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                >
                    {markers.map(marker => (
                        <Marker
                            position={marker.geocode}
                            icon={customIcon}>
                            <Popup>
                                <h4>{marker.popup}</h4>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>        </div >
    )
}

export default Map