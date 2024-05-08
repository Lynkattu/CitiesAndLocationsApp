import { StyleSheet, Text, View } from "react-native";
import { InfoScreenProps } from "../../App";

export const Info: React.FC<InfoScreenProps> = () => {
  return(
    <View style={styles.container}>
      <Text
      style={styles.text}
      >Info Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000090'
  }
});