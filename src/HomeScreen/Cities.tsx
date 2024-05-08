import { FlatList, ScrollView, StyleSheet} from "react-native";
import { CitiesScreenProps } from "../../App";
import { CitiesContext } from "../Context/CitiesContext";
import { useContext, useEffect } from "react";
import CityItem from "./CityItem";
import { Storage } from "../scripts/Storage";

export const Cities: React.FC<CitiesScreenProps> = ({route}) => {
  const {allCities, initCities} = useContext(CitiesContext)
    //get data from storage when application start
    useEffect(() => {
      (async () => {
          const storedData = await Storage.getData()
          if(storedData != null) {
            initCities(storedData)
          }
      })();
      return () => {
        // this gets called when the component unmounts
      };
    }, []);
  return(
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
    >
      <FlatList
        scrollEnabled={false}
        horizontal={false}
        contentContainerStyle={styles.container}
        data={allCities}
        renderItem={({item}) => <CityItem iCityItem={item} />}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    margin: 5
  }
});