import * as search from "./3-search";
import * as transform from "./5-transform";
import * as mix from "./6-mix";

// console.log('- FIND', search.getProductById(1));

// console.log('- FILTER', search.getProductByCategories('skincare', 'fragrances'));

// console.log('- MAP ADD', transform.addStatusInProduct());

// console.log('- MAP DEL', transform.deleteRatingInProduct());

console.log('- FILTER & REDUCE', mix.getTotalPriceByCategory('laptops'));
