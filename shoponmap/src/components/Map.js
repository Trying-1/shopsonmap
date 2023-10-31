import "leaflet/dist/leaflet.css"
import "../styles/Map.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon, divIcon } from "leaflet"
import React from 'react'
import MarkerClusterGroup from "react-leaflet-cluster"

function Map() {
    const markers = [
        {
            geocode: [26.190036, 91.698543],
            popup: "Lohit Hostel"
        },
        {
            geocode: [26.191480, 91.699070],
            popup: "swimming pool"
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
            iconSize: [33, 33]
        })
    }
    return (
        <div className="brs-5 bx-shd map-container">
            <MapContainer center={[26.190489, 91.702043]} zoom={18}>
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