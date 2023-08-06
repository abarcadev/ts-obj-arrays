import { arrProducts } from "../data/getAllProducts"

const addStatusInProduct = () => {
    const data = arrProducts.map((elem) => {
        return {
            ...elem,
            status: true
        };
    });

    return data;
};

const deleteRatingInProduct = () => {
    const data = arrProducts.map(({ rating, ...rest }) => {
        return {
            ...rest
        }
    });

    return data;
};


export {
    addStatusInProduct,
    deleteRatingInProduct
};