import { create } from "zustand";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import CooKies from "js-cookie";

// Definir la tienda Zustand
export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  errors: [],
  loading: true,

  signup: async (user) => {
    try {
      const res = await registerRequest(user);
      console.log(res.data);
      set({
        user: res.data,
        isAuthenticated: true,
        errors: [],
      });
    } catch (error) {
      console.log(error.response);
      set({ errors: error.response.data });
    }
  },

  signin: async (user) => {
    try {
      const res = await loginRequest(user);
      console.log(res);
      set({
        user: res.data,
        isAuthenticated: true,
        errors: [],
      });
    } catch (error) {
      const errorMessage = Array.isArray(error.response.data)
        ? error.response.data
        : [error.response.data.message];
      set({ errors: errorMessage });
    }
  },

  logout: () => {
    CooKies.remove("token");
    set({
      isAuthenticated: false,
      user: null,
    });
  },

  checkLogin: async () => {
    const cookies = CooKies.get();
    if (!cookies.token) {
      set({ isAuthenticated: false, user: null, loading: false });
      return;
    }

    try {
      const res = await verifyTokenRequest(cookies.token);
      if (!res.data) {
        set({ isAuthenticated: false, loading: false });
        return;
      }

      set({
        isAuthenticated: true,
        user: res.data,
        loading: false,
      });
    } catch (error) {
      set({
        isAuthenticated: false,
        user: null,
        loading: false,
      });
    }
  },

  clearErrors: () => {
    setTimeout(() => {
      set({ errors: [] });
    }, 5000);
  },
}));