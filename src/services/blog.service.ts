import { env } from "@/env";

const API_URL = env.AUTH_URL;

export const blogService = {
  getBlogs: async function () {
    try {
      const res = await fetch(`${API_URL}/posts`);
      const session = await res.json();

      return { data: session, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};
