import { FlatList, View, Text, StyleSheet } from "react-native";
import SmallProduct from "./smallProduct";

export default function ProductGrid({ title, item }) {
  item = item.slice(0, 4);
  return (
    <View style={styles.listContainer}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.container}>
        <FlatList
          data={item}
          numColumns={2}
          scrollEnabled={false}
          renderItem={({ item }) => <SmallProduct item={item}></SmallProduct>}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
  },

  listContainer: {
    marginVertical: 16,
    marginBottom: 32,
  },

  title: {
    fontWeight: "regular",
    fontSize: 30,
    textAlign: "center",
  },
});
