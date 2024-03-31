import { fetchExistingData } from "./GetData";

export async function setTrendingAllData(setTrending) {
    try {
      let data = await fetchExistingData();

      if (data.length === 0) {
        console.log("No data found");
        return;
      }

      // Create an object to hold the total quantities of each pizza
      let pizzaQuantities = {};

      for (let i = 0; i < data.length; i++) {
        let pizzaName = data[i].name;

        if (pizzaQuantities[pizzaName]) {
          pizzaQuantities[pizzaName] += data[i].qty;
        } else {
          pizzaQuantities[pizzaName] = data[i].qty;
        }
      }

      let maxPizzaName = Object.keys(pizzaQuantities)[0];
      for (let pizzaName in pizzaQuantities) {
        if (pizzaQuantities[pizzaName] > pizzaQuantities[maxPizzaName]) {
          maxPizzaName = pizzaName;
        }
      }

      setTrending(maxPizzaName);
    } catch (e) {
      console.log(e);
    }
  }
