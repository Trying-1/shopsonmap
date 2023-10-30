import React from 'react';
import { Marker, Popup } from 'react-leaflet';

function ShopMarker({ shop }) {
  return (
    <Marker position={[shop.latitude, shop.longitude]}>
      <Popup>
        <div>
          <h3>{shop.name}</h3>
          <p>{shop.description}</p>
          {/* Add more details as needed */}
        </div>
      </Popup>
    </Marker>
  );
}

export default ShopMarker;
