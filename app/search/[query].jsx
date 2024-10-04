import {
  Text,
  View,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import axios from "axios";
import { useLocalSearchParams } from "expo-router";
import CustomButton from "../../components/button";

export default function Search() {
  const { query } = useLocalSearchParams();
  const item = JSON.parse(decodeURIComponent(query));
  const [prices, setPrices] = useState([]);
  /*const [info, setInfo] = useState();
  const [pictures, setPictures] = useState([]);*/

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
          {/*pictures.length ? (
            <FlatList
              data={pictures}
              numColumns={2}
              renderItem={({ item, index }) => (
                <Image
                  style={index === 0 ? styles.firstImage : styles.gridImage}
                  source={{ uri: item }}
                ></Image>
              )}
              scrollEnabled={false}
            ></FlatList>
          ) : (
            <Image source={{ uri: item.image }} style={styles.image}></Image>
          )*/}
          <Image source={{ uri: item.image }} style={styles.image}></Image>

          <Text style={[styles.underText, styles.name]}>{item.name}</Text>

          <FlatList
            data={prices}
            renderItem={({ item }) => (
              <View style={styles.priceSizeContainer}>
                <Text style={styles.underText}>
                  $
                  {item.price
                    .toString()
                    .slice(0, item.price.toString().length - 2)}
                </Text>
                <Text style={styles.underText}> {item.size}</Text>
              </View>
            )}
            horizontal
          ></FlatList>

          {/*<Text style={styles.info}>{info}</Text>*/}

          <CustomButton
            title="BUY"
            func={console.log("Pressed")}
          ></CustomButton>
        </View>
      </ScrollView>
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
    borderRadius: 16,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 2.84,
    padding: 8,
  },
  underText: {
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
  name: {
    marginVertical: 12,
  },

  image: {
    width: "100%",
    height: 200,
    marginBottom: 10,
  },
  gridImage: {
    height: 150,
    width: "50%",
  },
  firstImage: {
    width: "100%",
    height: 250,
  },
  priceSizeContainer: {
    borderRadius: 4,
    padding: 4,
    margin: 4,
  },
  info: {
    fontSize: 14,
    marginVertical: 16,
  },
});
