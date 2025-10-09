import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const StoreLocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Coordenadas aproximadas de Santa Cruz do Capibaribe, PE
  const storeCoordinates: [number, number] = [-36.2089, -7.9564];

  useEffect(() => {
    if (!mapboxToken || !mapContainer.current) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: storeCoordinates,
      zoom: 15,
    });

    // Add marker for store location
    const marker = new mapboxgl.Marker({
      color: '#ef4444',
      scale: 1.2
    })
      .setLngLat(storeCoordinates)
      .setPopup(
        new mapboxgl.Popup({ offset: 25 })
          .setHTML(`
            <div class="p-2">
              <h3 class="font-semibold text-sm">Sete Fios Têxtil</h3>
              <p class="text-xs text-gray-600">Av. Pref. Braz de Líra, 760 - Novo</p>
              <p class="text-xs text-gray-600">Santa Cruz do Capibaribe - PE, 55192-460</p>
            </div>
          `)
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [mapboxToken]);

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      setShowTokenInput(false);
    }
  };

  if (showTokenInput) {
    return (
      <div className="aspect-video rounded-lg border-2 border-dashed border-muted-foreground/25 flex flex-col items-center justify-center p-6 space-y-4">
        <MapPin className="w-12 h-12 text-muted-foreground" />
        <div className="text-center space-y-2">
          <h3 className="font-semibold text-foreground">Mapa da Loja</h3>
          <p className="text-sm text-muted-foreground">
            Para exibir o mapa, insira seu token público do Mapbox
          </p>
          <p className="text-xs text-muted-foreground">
            Obtenha em: <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">mapbox.com</a>
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2 w-full max-w-md">
          <Input
            type="text"
            placeholder="pk.ey..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="flex-1"
          />
          <Button onClick={handleTokenSubmit} size="sm">
            Carregar Mapa
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="aspect-video rounded-lg overflow-hidden border">
      <div ref={mapContainer} className="w-full h-full" />
    </div>
  );
};

export default StoreLocationMap;