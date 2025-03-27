'use client';

import React, {useEffect, useRef} from "react";
import maplibregl, {Map} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import style from "./GoogleMap.module.css"

const GoogleMapComponent = () => {
    const mapContainer = useRef<string | HTMLElement>('');
    const map = useRef<Map>(null);
    const lng = 108.212868;
    const lat = 16.050678;
    const zoom = 14;
    const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

    useEffect(() => {
        if (map.current) return;

        map.current = new maplibregl.Map({
            container: mapContainer.current,
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom,
        });

        map.current.addControl(new maplibregl.NavigationControl(), 'top-right');

    }, [API_KEY, lng, lat, zoom]);

    return (
        <div className={`${style.mapWrap }`}>
            <div ref={mapContainer} className={`${style.map} w-full`} />
        </div>
    );
};

export default GoogleMapComponent;
