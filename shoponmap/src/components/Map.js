import "leaflet/dist/leaflet.css"
import "../styles/Map.css"
import shopdata from "../data/shopdetail.json"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Icon, divIcon } from "leaflet"
import React from 'react'
import MarkerClusterGroup from "react-leaflet-cluster"

function Map() {
    const shops = shopdata;
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
            <MapContainer center={[shops[0].latitude, shops[0].longitude]} zoom={18}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                >
                    {shops.map(shop => (
                        <Marker className="custom-marker"
                            position={[shop.latitude, shop.longitude]}
                            icon={customIcon}>
                            <div>
                                <Popup className="custom-popup">
                                    <div >
                                        <img className="shop-image" src={shop.image} alt="shopimage" />
                                        <h4>Name: {shop.shopname}</h4>
                                        <h6>Type: {shop.shoptype}</h6>
                                        <h6>Owner: {shop.shopowner}</h6>
                                        <h6>Opening-time: {shop.opening_time}</h6>
                                        <h6>Closing-time: {shop.closing_time}</h6>
                                        <h6>Rating: {shop.rating}</h6>
                                        <h6>Price-range: {shop.price_range}</h6>
                                    </div>
                                </Popup>
                            </div>
                        </Marker>
                    ))}
                </MarkerClusterGroup>
            </MapContainer>        </div >
    )
}

export default Map