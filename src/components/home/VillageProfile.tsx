import React from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

// Define the data structure for the current year
const currentYearData = {
  year: 2024,
  regions: [
    {
      name: 'Cisitu',
      population: 2500,
      density: 125,
      level: 'Rendah'
    },
    {
      name: 'Nagrog',
      population: 3200,
      density: 160,
      level: 'Sedang'
    },
    {
      name: 'Tugu',
      population: 4100,
      density: 205,
      level: 'Tinggi'
    }
  ]
};

const boundaryCoordinates = {
  cisitu: [
    [-7.0157, 107.1973],
    [-7.0257, 107.2073],
    [-7.0357, 107.1973],
    [-7.0257, 107.1873],
  ],
  nagrog: [
    [-7.0257, 107.2073],
    [-7.0357, 107.2173],
    [-7.0457, 107.2073],
    [-7.0357, 107.1973],
  ],
  tugu: [
    [-7.0357, 107.1973],
    [-7.0457, 107.2073],
    [-7.0557, 107.1973],
    [-7.0457, 107.1873],
  ]
};

const VillageProfile = () => {
  return (
    <div className="aspect-square rounded-lg overflow-hidden bg-gray-100 mb-6">
      <MapContainer 
        center={[-7.0257, 107.1973]} 
        zoom={14} 
        style={{ height: '100%', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {Object.entries(boundaryCoordinates).map(([region, coords]) => {
          const regionData = currentYearData.regions.find(r => r.name.toLowerCase() === region);
          const color = regionData ? 
            regionData.level === 'Rendah' ? '#22C55E' :
            regionData.level === 'Sedang' ? '#F59E0B' :
            '#EF4444' : '#4F46E5';
            
          return (
            <Polygon
              key={region}
              positions={coords}
              pathOptions={{
                fillColor: color,
                fillOpacity: 0.4,
                weight: 2,
                opacity: 1,
                color: 'white'
              }}
            >
              <Tooltip sticky>
                <div className="p-2">
                  <h4 className="font-medium">Dusun {regionData?.name}</h4>
                  <p className="text-sm">Populasi: {regionData?.population.toLocaleString()} jiwa</p>
                  <p className="text-sm">Kepadatan: {regionData?.density} jiwa/Ha</p>
                </div>
              </Tooltip>
            </Polygon>
          );
        })}
      </MapContainer>
    </div>
  );
};

export default VillageProfile;