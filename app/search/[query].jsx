import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
  Linking,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import CustomButton from "../../components/button";

export default function Search() {
  const { query } = useLocalSearchParams();
  const item = JSON.parse(decodeURIComponent(query));
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.goat.com/web-api/v1/product_variants/buy_bar_data?productTemplateId=" +
          item.id +
          "&countryCode=SE"
      )
      .then((response) => {
        let options = [];
        for (let result of response.data) {
          if (
            result.lowestPriceCents.amount &&
            result.shoeCondition == "new_no_defects"
          ) {
            const option = {
              size: result.sizeOption.value,
              price: result.lowestPriceCents.amount,
            };
            options.push(option);
          }
        }
        setPrices(options);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <View style={styles.scroll}>
      <ScrollView>
        <View style={styles.container}>
          <Image source={{ uri: item.image }} style={styles.image}></Image>

          <Text style={[styles.underText, styles.name]}>{item.name}</Text>

          <FlatList
            data={prices}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <View style={styles.priceSizeContainer}>
                <Text style={styles.underText}> {item.size}</Text>
                <Text style={styles.underText}>
                  $
                  {item.price
                    .toString()
                    .slice(0, item.price.toString().length - 2)}
                </Text>
              </View>
            )}
          ></FlatList>
        </View>
      </ScrollView>
      <View style={styles.container}>
        <CustomButton
          title="BUY"
          func={() => {
            Linking.openURL(`https://goat.com/sneakers/${item.slug}`);
          }}
        ></CustomButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: "white",
    display: "flex",
    flex: 1,
  },
  container: {
    padding: 20,
  },
  underText: {
    fontSize: 20,
  },
  name: {
    marginBottom: 24,
  },

  image: {
    width: "100%",
    height: 160,
    marginBottom: 10,
  },
  priceSizeContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    paddingBottom: 2,
    marginBottom: 12,
  },
});
