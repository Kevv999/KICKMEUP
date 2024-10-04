import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import { router } from "expo-router";

export default function Product({ item }) {
  const itemString = encodeURIComponent(JSON.stringify(item));

  return (
    <Pressable onPress={() => router.push(`/search/${itemString}`)}>
      <View style={styles.container}>
        <Text style={styles.name}>{item.year}</Text>
        <Image source={{ uri: item.image }} style={styles.image} />
        <Text style={[styles.name, styles.underText]}>{item.name}</Text>
        <Text style={[styles.underText, styles.price]}>
          Lowest ask:{" "}
          {item.price ? "$" + item.price.toString().slice(0, -2) : "None"}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 2,
    marginVertical: 8,
    backgroundColor: "white",
    padding: 18,
    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
  },
  underText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  name: {
    opacity: 0.5,
  },
  price: {
    margin: 8,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
});
