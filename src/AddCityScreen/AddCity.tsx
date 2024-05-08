import { StyleSheet, Text, View } from "react-native";
import { AddCityScreenProps, iCity } from "../../App";
import { Button, TextInput } from "react-native-paper";
import { useContext, useRef, useState } from "react";
import { CitiesContext } from "../Context/CitiesContext";
import uuid from 'react-native-uuid'

export const AddCity: React.FC<AddCityScreenProps> = () => {
  //text input states
  const [city, setCity] = useState<string>("")
  const [country, setCountry] = useState<string>("")
  
  const cityRef = useRef<any>(null)
  // city context
  const {addCity} = useContext(CitiesContext)
  return(
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        label="city name"
        mode="outlined"
        value={city}
        ref={cityRef}
        textColor='#000090'
        outlineColor="#3399ff"
        cursorColor="#000090"
        theme={{ colors: { primary: '#3388ee' } }}
        onChangeText={city => setCity(city)}
      />
      <TextInput
        style={styles.textInput}
        label="country name"
        mode="outlined"
        value={country}
        textColor='#000090'
        outlineColor="#3399ff"
        cursorColor="#000090"
        theme={{ colors: { primary: '#3388ee' } }}
        onChangeText={country => setCountry(country)}
      />
      <Button
        style={styles.button}
        mode="outlined"
        theme={{ colors: { primary: '#3388ee' } }}
        onPress={() => {
          const cityInfo: iCity = {
            name: city,
            country: country,
            id: uuid.v4().toString(),
            locations: []
          }
          addCity(cityInfo);
          setCity('');
          setCountry('');
          cityRef.current?.focus();
        }}>
          Add City
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#def',
    color: '#000090',
    width: 10000,
    maxWidth: '80%',
    margin: 4
  },
  button: {
    margin: 4,
    backgroundColor: '#def',
    borderColor: '#3399ff'
  }
});