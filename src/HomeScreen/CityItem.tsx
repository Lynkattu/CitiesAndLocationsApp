import {
    StyleSheet,
    TouchableHighlight,
    View,
  } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { CitiesNavigationProp, iCity } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { useContext } from 'react';
import { CitiesContext } from '../Context/CitiesContext';
  
  interface Props {
    iCityItem: iCity ;
  }
  
  const ListItem: React.FC<Props> = ({iCityItem}) => {
    const navigation = useNavigation<CitiesNavigationProp>();
    const {removeCity} = useContext(CitiesContext)

    return (
        <TouchableHighlight 
          activeOpacity={0.8}
          underlayColor="#e9f4ff"
          onPress={() => navigation.navigate('Locations', {city: iCityItem.name})}
          style={styles.container}
        >
          <View >
            <View style={styles.textContainer}>
              <Text 
                style={styles.name}
                variant="bodyMedium">{iCityItem.name}
              </Text>
              <Text 
              style={styles.country}
                variant="bodyMedium">{iCityItem.country}
              </Text>
            </View>
            <IconButton
              style={styles.delete}
                icon="delete"
                mode='contained-tonal'
                size={20}
                iconColor='#005'
                containerColor='#d44'
                onPress={() => {removeCity(iCityItem)}}
              />
          </View>
      </TouchableHighlight>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#def',
      margin: 5,
      borderRadius: 6,
      borderColor: 'lightblue',
      borderWidth: 1,
      maxWidth: '80%',
      width: 10000
    },
    name: {
      color: '#000090',
      textAlign: 'center',
      fontSize: 18,
    },
    country: {
      color: '#000090',
      textAlign: 'center',
      textAlignVertical: 'center',
      fontSize: 12,
    },
    delete: {
      alignSelf: 'center',
    },
    textContainer: {
      marginTop: 5,
      flexDirection: 'column',
      alignSelf: 'center',
    },
    
  })
  
  export default ListItem