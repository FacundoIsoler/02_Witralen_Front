import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  productList: async () => {
    set({ loading: true, error: null });
    try {

      const response = await axios.post(
        "http://localhost:3000/product/showProducts"
      );

      set({ products: response.data, error: null });
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

  postProduct: async (name, image, category, description, brandId) => {
    set({ loading: true, error: null });
    try {
      const response = await axios.post(
        "http://localhost:3000/product/newProduct",
        { name, image, category, description, brandId }
      );

      set((state) => ({
        products: [...state.products, response.data],
        error: null,
      }));
      console.log("Producto posteado exitosamente");
    } catch (error) {
      if (error.response) {
        console.error("Error al postear Producto:", error.response.data);
        set({
          error: error.response.data.error || "Error al postear Producto",
        });
      } else if (error.request) {
        console.error(
          "Error al postear Producto: No se recibió respuesta del servidor"
        );
        set({ error: "No se recibió respuesta del servidor" });
      } else {
        console.error("Error al postear Producto:", error.message);
        set({ error: error.message });
      }
    } finally {
      set({ loading: false });
    }
  },

  deleteProduct: async (id) => {
    set({ loading: true, error: null });
    try {
      console.log("Intentando eliminar este Producto");

      await axios.delete(`http://localhost:3000/product/deleteProduct/${id}`);

      set((state) => ({
        products: state.products.filter((product) => product.id !== id),
        error: null,
      }));
      console.log("Producto eliminado exitosamente");
    } catch (error) {
      if (error.response) {
        console.error("Error al eliminar este Producto:", error.response.data);
        set({ error: error.response.data.error || "Error en el login" });
      } else if (error.request) {
        console.error(
          "Error al eliminar este Producto: No se recibió respuesta del servidor"
        );
        set({ error: "No se recibió respuesta del servidor" });
      } else {
        console.error("Error al eliminar este Producto:", error.message);
        set({ error: error.message });
      }
    } finally {
      set({ loading: false });
    }
  },
}));

export default useProductStore;
