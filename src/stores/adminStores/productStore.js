import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set, get) => ({
    products: [],
    loading: false,
    error: null,

    productList: async () => {
        set({ loading: true, error: null });
        try {
            console.log("Intentando obtener los productos");

            const response = await axios.post(
                "http://localhost:3000/product/showProducts",
            );

            set({ products: response.data, error: null });
            console.log("Productos obtenidos exitosamente");
        } catch (error) {
            if (error.response) {
                console.error("Error al obtener productos:", error.response.data);
                set({ error: error.response.data.error || "Error en el login" });
            } else if (error.request) {
                console.error(
                    "Error al obtener productos: No se recibió respuesta del servidor"
                );
                set({ error: "No se recibió respuesta del servidor" });
            } else {
                console.error("Error al obtener productos:", error.message);
                set({ error: error.message });
            }
        } finally {
            set({ loading: false });
        }
    },
}));

export default useProductStore;