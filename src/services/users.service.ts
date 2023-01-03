import { GET_USER } from "./CONSTANTS";
import fetch from "./utils/FetchInterceptor";
export const getUserById = async (id: string) => {
  try {
    const data = await fetch({
      url: `${GET_USER}/${id}`,
      method: "get"
    });
    return data;
  } catch (err) {
    return err;
  }
};
