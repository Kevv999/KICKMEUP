import React, { useState, useEffect } from "react";
import axios from "axios";
import { addDataFromResponse } from "../../types/sneaker";
import Product from "../../components/product";
import CustomButton from "../../components/button";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Alert,
} from "react-native";

export default function Search() {
  const [isFocused, setIsFocused] = useState(false);
  const [sneakers, setSneakers] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    if (sneakers.length === 0 && name.length != 0) {
      Alert.alert("Sneaker " + `"` + name + `"` + " was not found.");
    }
  }, [sneakers]);

  function sneakerHandler() {
    axios
      .get(
        "https://ac.cnstrc.com/search/" +
          name +
          " ?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=6cdd0ed5-d4c5-4ddf-b5de-485f4d54c01a&s=11&page=1&num_results_per_page=24&filters%5Bweb_groups%5D=sneakers&sort_by=relevance&sort_order=descending&fmt_options%5Bhidden_fields%5D=gp_lowest_price_cents_2&fmt_options%5Bhidden_fields%5D=gp_instant_ship_lowest_price_cents_2&fmt_options%5Bhidden_facets%5D=gp_lowest_price_cents_2&fmt_options%5Bhidden_facets%5D=gp_instant_ship_lowest_price_cents_2&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_2%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_2%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=1724443080512"
      )
      .then((response) => {
        setSneakers(addDataFromResponse(response));
      })
      .catch((error) => {
        console.error(error);
      });
    Keyboard.dismiss();
  }

  return (
    <>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 70 : 10}
      >
        <View style={styles.container}>
          {sneakers.length > 0 && (
            <FlatList
              data={sneakers}
              renderItem={({ item }) => <Product item={item}></Product>}
            />
          )}
          <View style={styles.inputContainer}>
            <TextInput
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              autoCorrect={false}
              spellCheck={false}
              style={styles.input}
              placeholder="Type to search"
              placeholderTextColor="gray"
              onChangeText={setName}
            ></TextInput>
          </View>
        </View>

        {isFocused && (
          <CustomButton title="Search" func={sneakerHandler}></CustomButton>
        )}
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 2,
    justifyContent: "center",
    alignContent: "center",
    marginHorizontal: 10,
  },
  input: {
    backgroundColor: "white",
    borderWidth: 1,
    padding: 16,
    borderRadius: 16,
    fontSize: 16,
    marginTop: 16,
  },
  inputContainer: {
    marginBottom: "auto",
  },
});
