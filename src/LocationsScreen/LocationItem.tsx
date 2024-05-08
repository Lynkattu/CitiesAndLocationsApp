import {
    StyleSheet,
    View,
  } from 'react-native';
import { IconButton, Text } from 'react-native-paper';
import { iCity, iLocation } from '../../App';
import { useContext } from 'react';
import { CitiesContext } from '../Context/CitiesContext';
  
  interface Props {
    iLocationItem: iLocation;
    city: iCity;
  }
  
  const ListItem: React.FC<Props> = ({iLocationItem, city}) => {
    const {removeLocation} = useContext(CitiesContext)

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text 
            style={styles.name}
            variant="bodyMedium">{iLocationItem.name}
          </Text>
          <Text 
          style={styles.country}
            variant="bodyMedium">{iLocationItem.info}
          </Text>
        </View>
        <IconButton
            icon="delete"
            mode='contained-tonal'
            size={20}
            iconColor='#005'
            containerColor='#d44'
            onPress={() => {removeLocation(city, iLocationItem)}}
          />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: '#def',
      margin: 5,
      borderRadius: 6,
      borderColor: 'lightblue',
      borderWidth: 1,
      maxWidth: '80%',
      width: 100000
    },
    textContainer: {
      marginTop: 5
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
    
  })
  
  export default ListItem