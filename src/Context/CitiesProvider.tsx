import { ReactNode, useState } from "react";
import { iCity, iLocation } from "../../App";
import { CitiesContext } from "./CitiesContext";
import { Alert } from "react-native";
import { Storage } from "../scripts/Storage";

interface Props {
    children: ReactNode;
}

export const CitiesProvider: React.FC<Props> = ({children}) => {
  const [cities, setCities] = useState<iCity[]>([])
  return (
    <CitiesContext.Provider
      value={{
        allCities: cities,
        addCity: (city: iCity) => {
          const idx = cities.findIndex((item) => item.name===city.name);
          if(idx >= 0) {
            Alert.alert(`City ${city} already exists`)
            return;
          }
          setCities([...cities, city]);
          let newCities = cities;
          newCities.push(city);
          Storage.saveData(newCities);
        },
        addLocation: (city: iCity, location: iLocation) => {
          let newCities: iCity[] = [];
          // iterate trhough cities
          for(let i: number = 0; i<cities.length; i++) {
            // if city id matches add new location to city
            if(cities[i].id === city.id) {
              // check if location already exists
              const idx = cities[i].locations?.findIndex((item) => item.name===location.name);
              if(idx != null) {
                if(idx >= 0) {
                  Alert.alert(`Location ${city} already exists`)
                  return;
                }
              } 
              let updateCity = city;
              updateCity.locations?.push(location);
              newCities.push(updateCity);
            }
            else {
              newCities.push(cities[i]);
            }
          }
          // save data to storage and state
          Storage.saveData(newCities);
          setCities(newCities);
        },
        removeCity: (city: iCity) => {
          let newCities: iCity[] = [];
          // copy existing cities except city which user want to remove
          for(let i: number = 0; i<cities.length; i++) {
            if(cities[i].id != city.id) {
              newCities.push(cities[i]);
            }
          }
          // save data to storage and state
          Storage.saveData(newCities);
          setCities(newCities);
        },
        removeLocation(city: iCity, location: iLocation) {
          let newCities: iCity[] = [];
          // iterate through cities
          for(let i: number = 0; i < cities.length; i++) {
            // check if city id's matches
            if(cities[i].id === city.id) {
              if(city.locations != null) {
                let newCity: iCity = city;
                let updateLocation: iLocation[] = [];
                // copy current locations except location that user want remove
                for(let j = 0; j < city.locations?.length; j++) {
                  if(city.locations[j] != location) {
                    updateLocation.push(city.locations[j]);
                  }
                }
                // copy existing city with new locations
                newCity.locations = updateLocation;
                newCities.push(newCity);
              }
            }
            else {
              // copy existing city
              newCities.push(cities[i]);
            }
          }
          // save data to storage and state
          Storage.saveData(newCities);
          setCities(newCities);
        },
        initCities(cities: iCity[]) {
          setCities(cities)
        }
      }}
    >
      {children}
    </CitiesContext.Provider>
  )
}
