import React from 'react'
import { iCity, iLocation } from '../../App';

export interface iCitiesContext {
    allCities: iCity[];
    addCity: (city: iCity) => void;
    addLocation: (city: iCity, location: iLocation) => void;
    removeCity: (city: iCity) => void;
    removeLocation: (city: iCity, location: iLocation) => void;
    initCities: (cities: iCity[]) => void;
}

const defaultEmptyState: iCitiesContext = {
    allCities: [],
    addCity: (city: iCity) => {},
    removeCity: (city: iCity) => {},
    addLocation: (city: iCity, location: iLocation) => {},
    removeLocation: (city: iCity, location: iLocation) => {},
    initCities: (cities: iCity[]) => {},
}

export const CitiesContext = React.createContext<iCitiesContext>(defaultEmptyState);
