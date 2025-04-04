import { create } from "zustand";
import axios from "axios";

const useRandomProductStore = create((set) => ({
    randomProducts: [],
    loading: false,
    error: null,

    fetchRandomProducts: async () => {
        set({ loading: true, error: null });
        try {
            // Obtener todos los productos
            const response = await axios.post("https://witralen-back.onrender.com/product/showProducts");
            const allProducts = response.data.products || [];

            // Seleccionar hasta 10 productos al azar
            const shuffled = allProducts.sort(() => 0.5 - Math.random());
            const randomProducts = shuffled.slice(0, 5);

            set({ randomProducts, loading: false, error: null });
        } catch (error) {
            set({ loading: false, error: error.message || "Error al obtener productos" });
        }
    },
}));

export default useRandomProductStore;
