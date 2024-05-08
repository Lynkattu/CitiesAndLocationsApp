import AsyncStorage from '@react-native-async-storage/async-storage';
import { iCity } from '../../App';

export class Storage {
    // android storage "key" 
    private static keyPrefix = "citiesApPrefixKeyX003"
    // save data to storage, !Android storage can store only string format
    static saveData = async (data: iCity[]) => {
        try {
            await AsyncStorage.setItem(this.keyPrefix, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving data:', error);
        }
    }
    // get data from storage
    static getData = async (): Promise<iCity[] | null> => {
        try {
            const userDataString = await AsyncStorage.getItem(this.keyPrefix);
            if (userDataString !== null) {
                return JSON.parse(userDataString) as iCity[];
            }
        } catch (error) {
            console.error('Error retrieving data:', error);
        }
        return null
    };
}
