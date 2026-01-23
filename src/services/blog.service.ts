import { env } from "@/env";

const API_URL = env.AUTH_URL;

interface getBlogsParams {
  isFeatured?: boolean;
  search?: string;
}

interface ServiceOption {
  cache?: RequestCache;
  revalidate?: number;
}

export const blogService = {
  getBlogs: async function (params?: getBlogsParams, options?: ServiceOption) {
    try {
      const url = new URL(`${env.API_URL}/post`);
      //   url.searchParams.append("key", "value"); //url er moddhe chayle dynamic kicu add korte pari

      if (params) {
        //same vabe ekhanew params ta get korte pari
        Object.entries(params).forEach(([key, value]) => {
          if (value !== undefined && value !== null && value !== "") {
            url.searchParams.append("key", "value");
          }
        });
      }

      const config: RequestInit = {};
      if (options?.cache) {
        config.cache = options.cache;
      }
      if (options?.revalidate) {
        config.next = { revalidate: options.revalidate };
      }

      const res = await fetch(url.toString(), config); //fetch er moddhe must ekta plan text string pathate hobe er jonnoi toString use kora hoyece

      const session = await res.json();

      return { data: session, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },

  getBlogById: async function (id: string) {
    try {
      const res = await fetch(`${env.API_URL}/post/${id}`);
      const session = await res.json();
      return { data: session, error: null };
    } catch (error) {
      return { data: null, error: { message: "something went wrong" } };
    }
  },
};

//ei khane muloto kaj ta hocce : jokhon amra url a dynamic params add korte chay,fetch korar shomoi jokhon dynaic params pathate chay tokhon prothome Object.entries theke params ta dhorlam then url.searchParams.append kore key,value ta url a set kore dilam r fetch er moddhe url ta pathiye dilam
