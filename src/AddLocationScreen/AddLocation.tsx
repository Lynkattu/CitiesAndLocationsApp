import { StyleSheet, View } from "react-native";
import { AddLocationNavigationProp, AddLocationScreenProps, iLocation } from "../../App";
import { useContext, useEffect, useState } from "react";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import uuid from 'react-native-uuid'
import { CitiesContext } from "../Context/CitiesContext";

export const AddLocation: React.FC<AddLocationScreenProps> = ({route}) => {

  const navigation = useNavigation<AddLocationNavigationProp>();
  const {addLocation, allCities} = useContext(CitiesContext)
  // TextInput states
  const [location, setLocation] = useState<string>("");
  const [info, setInfo] = useState<string>("");

  useEffect(() => {
    navigation.setOptions({
      title: `Add Location to ${route.params.city}`,
    })
  })

  return(
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        label="location"
        mode="outlined"
        textColor='#000090'
        outlineColor="#3399ff"
        cursorColor="#000090"
        theme={{ colors: { primary: '#3388ee' } }}
        value={location}
        onChangeText={location => setLocation(location)}/>
      <TextInput
        style={styles.textInput}
        label="Info"
        mode="outlined"
        textColor='#000090'
        outlineColor="#3399ff"
        cursorColor="#000090"
        theme={{ colors: { primary: '#3388ee' } }}
        value={info}
        onChangeText={info => setInfo(info)}/>
      <Button
        style={styles.button}
        theme={{ colors: { primary: '#3388ee' } }}
        mode="outlined"
        onPress={() => {
          const locationInfo: iLocation = {
            name: location,
            info: info,
            id: uuid.v4().toString(),
          }
          for(let i: number = 0; i < allCities.length; i++) {
            if(allCities[i].name === route.params.city) {
              addLocation(allCities[i], locationInfo);
            }
          }
          setLocation('');
          setInfo('');
        }}>
          Add Location
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