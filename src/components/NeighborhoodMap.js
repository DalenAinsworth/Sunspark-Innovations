// NeighborhoodMap.js
import React from 'react';
import './NeighborhoodMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

const NeighborhoodMap = () => {
  // Sample neighborhood data
  const locations = [
    { id: 1, name: 'Green Home', position: [37.7749, -122.4194], 
      production: 620, credits: 200, solarPanels: 24 },
    { id: 2, name: 'Eco Villa', position: [37.7755, -122.4182], 
      production: 580, credits: 200, solarPanels: 22 },
    { id: 3, name: 'Solar House', position: [37.7738, -122.4157], 
      production: 540, credits: 190, solarPanels: 20 },
    { id: 4, name: 'Your Home', position: [37.7762, -122.4168], 
      production: 520, credits: 140, solarPanels: 18 }
  ];

  // Calculate marker size based on production
  const getMarkerSize = (production) => {
    if (production > 600) return 35;
    if (production > 550) return 30;
    if (production > 500) return 25;
    return 20;
  };

  return (
    <div className="map-container">
      <MapContainer 
        center={[37.775, -122.419]} 
        zoom={15} 
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {locations.map(location => (
          <Marker 
            key={location.id} 
            position={location.position}
            icon={L.divIcon({
              className: 'custom-marker',
              html: `<div class="marker-content ${location.name === 'Your Home' ? 'your-home' : ''}">
                      <div class="marker-value">${location.production}kWh</div>
                    </div>`,
              iconSize: [getMarkerSize(location.production), getMarkerSize(location.production)]
            })}
          >
            <Popup>
              <div className="map-popup">
                <h4>{location.name}</h4>
                <p>Production: <strong>{location.production} kWh</strong></p>
                <p>Energy Credits: <strong>{location.credits}</strong></p>
                <p>Solar Panels: <strong>{location.solarPanels}</strong></p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-icon small"></div>
          <span>Low Production</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon medium"></div>
          <span>Medium Production</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon large"></div>
          <span>High Production</span>
        </div>
        <div className="legend-item">
          <div className="legend-icon your-home"></div>
          <span>Your Home</span>
        </div>
      </div>
    </div>
  );
};

export default NeighborhoodMap;