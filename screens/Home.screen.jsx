import { StyleSheet, Text } from "react-native";
import { Button, View } from "react-native";
import axios from "axios";
import { useState } from "react";

export const HomeScreen = () => {
  const [data, setData] = useState();
  const onPress = () => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://api-adresse.data.gouv.fr/search/?q=8+bd+du+port",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <View style={styles.container}>
      <Text onPress={onPress}>press me</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
