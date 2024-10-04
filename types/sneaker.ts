export interface Sneaker {
  id: string;
  name: string;
  retail: string;
  price: string;
  year: string;
  image: string;
  slug: string;
}

export function addDataFromResponse(response: any): Sneaker[] {
  const results = response.data.response.results;
  let sneakers: Sneaker[] = [];
  for (let result of results) {
    const sneaker: Sneaker = {
      id: result.data.id,
      name: result.value,
      retail: result.data.retail_price_cents,
      price: result.data.gp_lowest_price_cents_2,
      year: result.data.release_date_year,
      image: result.data.image_url,
      slug: result.data.slug,
    };
    sneakers.push(sneaker);
  }
  return sneakers;
}
