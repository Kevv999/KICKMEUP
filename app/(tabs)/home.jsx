import { StyleSheet, ScrollView, Image } from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
import { addDataFromResponse } from "../../types/sneaker";
import ProductGrid from "../../components/productGrid";
export default function Home() {
  const [justDropped, setJustDropped] = useState([]);
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    if (!justDropped.length) {
      axios
        .get(
          "https://ac.cnstrc.com/browse/collection_id/just-dropped?c=ciojs-client-2.35.2&key=key_XT7bjdbvjgECO5d8&i=6cdd0ed5-d4c5-4ddf-b5de-485f4d54c01a&s=16&page=1&num_results_per_page=24&sort_by=relevance&sort_order=descending&fmt_options%5Bhidden_fields%5D=gp_lowest_price_cents_2&fmt_options%5Bhidden_fields%5D=gp_instant_ship_lowest_price_cents_2&fmt_options%5Bhidden_facets%5D=gp_lowest_price_cents_2&fmt_options%5Bhidden_facets%5D=gp_instant_ship_lowest_price_cents_2&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_2%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_2%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=1724768895883"
        )
        .then((response) => {
          setJustDropped(addDataFromResponse(response));
        })

        .catch((error) => {
          console.error(error);
        });
    }
    if (!popular.length) {
      axios
        .get(
          "https://ac.cnstrc.com/browse/group_id/sneakers?c=ciojs-client-2.51.2&key=key_XT7bjdbvjgECO5d8&i=6cdd0ed5-d4c5-4ddf-b5de-485f4d54c01a&s=27&page=1&num_results_per_page=24&sort_by=relevance&sort_order=descending&fmt_options%5Bhidden_fields%5D=gp_lowest_price_cents_2&fmt_options%5Bhidden_fields%5D=gp_instant_ship_lowest_price_cents_2&fmt_options%5Bhidden_facets%5D=gp_lowest_price_cents_2&fmt_options%5Bhidden_facets%5D=gp_instant_ship_lowest_price_cents_2&variations_map=%7B%22group_by%22%3A%5B%7B%22name%22%3A%22product_condition%22%2C%22field%22%3A%22data.product_condition%22%7D%2C%7B%22name%22%3A%22box_condition%22%2C%22field%22%3A%22data.box_condition%22%7D%5D%2C%22values%22%3A%7B%22min_regional_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_lowest_price_cents_2%22%7D%2C%22min_regional_instant_ship_price%22%3A%7B%22aggregation%22%3A%22min%22%2C%22field%22%3A%22data.gp_instant_ship_lowest_price_cents_2%22%7D%7D%2C%22dtype%22%3A%22object%22%7D&qs=%7B%22features%22%3A%7B%22display_variations%22%3Atrue%7D%2C%22feature_variants%22%3A%7B%22display_variations%22%3A%22matched%22%7D%7D&_dt=1727899231458"
        )
        .then((response) => {
          setPopular(addDataFromResponse(response));
        })
        .catch((error) => {
          console.error(error);
        });
    }
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ProductGrid title="Just Dropped" item={justDropped}></ProductGrid>
      <Image
        source={require("../../assets/img/image.png")}
        style={{ width: "100%", height: 200 }}
      ></Image>
      <ProductGrid title="Popular" item={popular}></ProductGrid>
    </ScrollView>
  );
}
