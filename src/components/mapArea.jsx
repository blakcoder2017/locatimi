import React, { useState, useEffect, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const googleMapsApiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
const googleMapID  = import.meta.env.VITE_GOOGLE_MAP_ID;
const mapContainerStyle = {
  width: '100%',
  height: '500px',
};

const defaultCenter = {
  lat: 9.4071,
  lng: -0.8536,
};

const defaultZoom = 12;

class MapErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error in MapArea:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: '20px' }}>
          An error occurred while displaying the map. Please try again later.
        </div>
      );
    }

    return this.props.children;
  }
}

function MapArea() {
  const selectedLocation = useSelector((state) => state.locationsData.selectedLocation);
  const currentLocation = useSelector((state) => state.locationsData.currentLocation);
  const [mapInstance, setMapInstance] = useState(null);
  const [marker, setMarker] = useState(null);

  const onLoad = useCallback((map) => {
    setMapInstance(map);
  }, []);

  useEffect(() => {
    if (!mapInstance || !window.google?.maps?.marker?.AdvancedMarkerElement) return;

    const lat = selectedLocation?.lat;
    const long = selectedLocation?.long;

    // Remove previous marker
    if (marker) {
      marker.map = null;
    }

    if (lat && long && typeof lat === 'number' && typeof long === 'number') {
      const newMarker = new window.google.maps.marker.AdvancedMarkerElement({
        map: mapInstance,
        position: { lat, lng: long },
        title: selectedLocation?.name || 'Selected Location',
      });

      setMarker(newMarker);
      mapInstance.panTo({ lat, lng: long });
      mapInstance.setZoom(15);
    } else if (currentLocation?.lat && currentLocation?.long) {
      mapInstance.panTo({ lat: currentLocation.lat, lng: currentLocation.long });
      mapInstance.setZoom(defaultZoom);
    } else {
      mapInstance.panTo(defaultCenter);
      mapInstance.setZoom(defaultZoom);
    }
  }, [mapInstance, selectedLocation, currentLocation]);

  return (
    <div className="col-12 col-md-9 border-end p-4">
      <LoadScript
        googleMapsApiKey={googleMapsApiKey}
        libraries={['marker']} // 👈 Load Advanced Marker library
      >
        <MapErrorBoundary>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={defaultCenter}
            zoom={defaultZoom}
            onLoad={onLoad}
            mapID={googleMapID}
          />
        </MapErrorBoundary>
      </LoadScript>
    </div>
  );
}

export default MapArea;
