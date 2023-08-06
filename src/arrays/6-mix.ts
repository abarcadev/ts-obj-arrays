import { arrProducts } from "../data/getAllProducts";

const getTotalPriceByCategory = (category: string) => {
    const total = arrProducts.filter((elem) => elem.category === category)
                            .reduce((acum, current) => acum + current.price, 0);

    return total;
};


export {
    getTotalPriceByCategory
};