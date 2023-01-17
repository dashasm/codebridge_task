import { IArtice } from "./types/article";
import { ResponseError } from "./types/ResponseError";

const API_URL = "https://api.spaceflightnewsapi.net/v3/articles";

export async function getArticles(): Promise<IArtice | ResponseError> {
  return await fetch(API_URL)
    .then(async (res) => {
      return await res.json();
    })
    .catch(() => ({
      Response: "False",
      Error: "unexpected error",
    }));
}
