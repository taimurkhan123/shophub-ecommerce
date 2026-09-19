// // const BASE_URL = "https://dummyjson.com";
// const BASE_URL = "https://fakestoreapi.com";
// export const api = {
//   getProducts: async () => {
//     const response = await fetch(`${BASE_URL}/products`);
//     if (!response.ok) throw new Error("Failed to fetch products");
//     const data = await response.json();
//     return data.products;
//   },

//   getProductsById: async (id) => {
//     const response = await fetch(`${BASE_URL}/products/${id}`);
//     if (!response.ok) throw new Error("Product not found");
//     return await response.json();
//   },
// };
const BASE_URL = "https://fakestoreapi.com";

export const api = {
  getProducts: async () => {
    const response = await fetch(`${BASE_URL}/products`);
    if (!response.ok) throw new Error("Failed to fetch products");
    return await response.json();   // ✅ returns array directly
  },

  getProductsById: async (id) => {
    const response = await fetch(`${BASE_URL}/products/${id}`);
    if (!response.ok) throw new Error("Product not found");
    return await response.json();
  },
};