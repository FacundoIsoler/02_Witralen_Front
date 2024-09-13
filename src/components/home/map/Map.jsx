import React, { useEffect } from 'react';
import styles from './Map.module.css';

function Map() {
    // Initialize and add the map
    useEffect(() => {
        async function initMap() {
            // The location of Uluru
            const position = { lat: -33.061885, lng: -68.87290 };

            // Request needed libraries.
            //@ts-ignore
            const { Map } = await google.maps.importLibrary('maps');
            const { AdvancedMarkerElement } = await google.maps.importLibrary('marker');

            // The map, centered at Uluru
            const map = new Map(document.getElementById('map'), {
                zoom: 10,
                center: position,
                mapId: 'DEMO_MAP_ID',
            });

            // The marker, positioned at Uluru
            const marker = new AdvancedMarkerElement({
                map: map,
                position: position,
                title: 'Uluru',
            });
        }

        // Load the Google Maps API script dynamically
        const loadGoogleMaps = () => {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAsJ8QLMN7GeP2WJa4zWHaAOMPoAeyie3o&callback=initMap`;
            script.async = true;
            script.defer = true;
            window.initMap = initMap; // Set the callback function
            document.head.appendChild(script);
        };

        loadGoogleMaps();
    }, []);

    return (
        <div className={styles.container}>
            <div id="map" className={styles.mapContainer}></div>
        </div>
    );
}

export default Map;
