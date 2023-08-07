import { useEffect, useState } from "react";

interface WithError {
  loading: boolean;
  location?: never;
  error: GeolocationPositionError;
}

interface WithPosition {
  loading: boolean;
  location: GeolocationCoordinates | undefined;
  error?: never;
}

type CurrentLocation = WithError | WithPosition;

export function useCurrentLocation(): WithError | WithPosition {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState<GeolocationCoordinates | undefined>(
    undefined
  );
  const [error, setError] = useState<GeolocationPositionError | undefined>(
    undefined
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation(position.coords);
        setLoading(false);
      },
      (error) => {
        setError(error);
        setLoading(false);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  if (error) {
    return {
      loading,
      error,
    };
  }

  return {
    loading,
    location,
  };
}

export function isLocation(value: CurrentLocation): value is WithPosition {
  return "location" in value && value.location !== undefined;
}
