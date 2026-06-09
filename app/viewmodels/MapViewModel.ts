import { useEffect, useState } from "react";
import { Marker } from "../models/Marker";
import { mapService } from "../services/mapService";
import * as Location from "expo-location";

function getDistanceMeters(
  lat1: number, lng1: number,
  lat2: number, lng2: number
): number {
  const R = 6371000;
  const toRad = (x: number) => (x * Math.PI) / 180;
  const dLat = toRad(lat2 - lat1);
  const dLng = toRad(lng2 - lng1);
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

export const useMapViewModel = () => {
  const [markers, setMarkers] = useState<Marker[]>([]);
  const [loading, setLoading] = useState(true);
  const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [locationPermissionDenied, setLocationPermissionDenied] = useState(false);

  useEffect(() => {
    loadMarkers();
    loadUserLocation();
  }, []);

  const loadMarkers = async () => {
    setLoading(true);
    const data = await mapService.getMarkers();
    setMarkers(data);
    setLoading(false);
  };

  const loadUserLocation = async () => {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setLocationPermissionDenied(true);
      return;
    }

    const loc = await Location.getCurrentPositionAsync({});
    setUserLocation({ lat: loc.coords.latitude, lng: loc.coords.longitude });
  };

  const isInRange = (marker: Marker): boolean => {
    if (!userLocation) return false;
    const distance = getDistanceMeters(
      userLocation.lat, userLocation.lng,
      marker.position.lat, marker.position.lng
    );
    return distance <= 50;
  };

  const distanceToMarker = (marker: Marker): number | null => {
    if (!userLocation) return null;
    return getDistanceMeters(
      userLocation.lat, userLocation.lng,
      marker.position.lat, marker.position.lng
    ) / 1000;
  };

  return {
    markers,
    loading,
    userLocation,
    locationPermissionDenied,
    isInRange,
    reload: loadMarkers,
    distanceToMarker,
  };
};