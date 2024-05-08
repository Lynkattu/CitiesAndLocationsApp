import { FlatList, ScrollView, StyleSheet, View } from "react-native";
import { LocationsNavigationProp, LocationsScreenProps } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { IconButton } from "react-native-paper";
import LocationItem from "./LocationItem";
import { CitiesContext } from "../Context/CitiesContext";
import uuid from 'react-native-uuid'


export const Locations: React.FC<LocationsScreenProps> = ({route}) => {
  // get current city
  const getCity = () => {
    for(let i: number = 0; i < allCities.length; i++) {
      if(allCities[i].name === route.params.city) {
        return allCities[i]
      }
    }
    return {
      id: uuid.v4().toString(),
      name: '',
      country: '',
      locations: []
    }
  }
  const navigation = useNavigation<LocationsNavigationProp>();
  const {allCities} = useContext(CitiesContext)
  // save current city in state
  const [city, setCity] = useState((getCity))

  // add icon button to header
  useEffect(() => {
    navigation.setOptions({
      title: `Locations of ${route.params.city}`,
      headerRight: () => (
        <IconButton  
          icon='plus-circle-outline'
          onPress={() => navigation.navigate('AddLocation', {city: route.params.city})}
        />
      )
    })
    setCity(getCity)
    console.log(city.name)
  })

  return(
    <View>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
      >
        <FlatList
          scrollEnabled={false}
          horizontal={false}
          contentContainerStyle={styles.container}
          data={city.locations}
          renderItem={({item}) => <LocationItem iLocationItem={item} city={city} />}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  }
});