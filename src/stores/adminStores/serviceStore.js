import { create } from "zustand";
import axios from "axios";

const useServiceStore = create((set, get) => ({
    services: [],
    loading: false,
    error: null,

    serviceList: async () => {
        set({ loading: true, error: null });
        try {
            console.log("Intentando obtener Servicios");

            const response = await axios.post(
                "http://localhost:3000/service/showServices",
            );

            set({ services: response.data, error: null });
            console.log("Servicios obtenidos exitosamente");
        } catch (error) {
            if (error.response) {
                console.error("Error al obtener Servicios:", error.response.data);
                set({ error: error.response.data.error || "Error en el login" });
            } else if (error.request) {
                console.error(
                    "Error al obtener Servicios: No se recibió respuesta del servidor"
                );
                set({ error: "No se recibió respuesta del servidor" });
            } else {
                console.error("Error al obtener Servicios:", error.message);
                set({ error: error.message });
            }
        } finally {
            set({ loading: false });
        }
    },

    deleteService: async (id) => {
        set({ loading: true, error: null });
        try {
            console.log("Intentando eliminar este Servicio");

            await axios.delete(`http://localhost:3000/service/deleteService/${id}`);

            set((state) => ({
              services: state.services.filter((service) => service.id !== id),
              error: null,
            }));
            console.log("Servicio eliminado exitosamente");
        } catch (error) {
            if (error.response) {
                console.error("Error al eliminar este Servicio:", error.response.data);
                set({ error: error.response.data.error || "Error en el login" });
            } else if (error.request) {
                console.error(
                    "Error al eliminar este Servicio: No se recibió respuesta del servidor"
                );
                set({ error: "No se recibió respuesta del servidor" });
            } else {
                console.error("Error al eliminar este Servicio:", error.message);
                set({ error: error.message });
            }
        } finally {
            set({ loading: false });
        }
    }
}));

export default useServiceStore;