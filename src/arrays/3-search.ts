import { arrProducts } from "../data/getAllProducts";

const getProductById = (id: number) => {
    const product = arrProducts.find((elem) => elem.id === id);
    return product;
};

const getProductByCategories = (categoryA: string, categoryB: string) => {
    const products = arrProducts.filter((elem) => 
        elem.category === categoryA || elem.category === categoryB);
    
    return products;
};


export {
    getProductById,
    getProductByCategories
};