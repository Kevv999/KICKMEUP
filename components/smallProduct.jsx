import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { useLocalSearchParams, router } from "expo-router";

export default function SmallProduct({ item }) {
  const itemString = encodeURIComponent(JSON.stringify(item));

  return (
    <Pressable onPress={() => router.push(`/search/${itemString}`)}>
      <View style={styles.container}>
        <Image source={{ uri: item.image }} style={styles.image}></Image>
        <Text style={[styles.underText]}>{item.name}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 150,
    margin: 10,
  },

  underText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 12,
  },

  image: {
    width: 150,
    height: 125,
  },
});
