import api from "@/api/axiosInstance";
import "@/api/interceptors";

export default api;
export { api };
export { dispatchLogout } from "@/api/interceptors";
export { tokenManager, STORAGE_KEYS } from "@/api/tokenManager";
