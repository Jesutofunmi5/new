/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import axios from "axios";

import env from "configs";
import authHeader from "./auth-header";
import { LOGIN, LOGIN_SUCCESS_URL, LOG_OUT, REGISTER, ZUMARIDI_USER_DATA } from "./CONSTANTS";

export const signin = async ({ email, password }: { email: string; password: string }) => {
  return await axios
    .post(`${env.API_BASE_URL}/${LOGIN}`, {
      username: email,
      password
    })
    .then((res) => {
      const data = res.data;
      if (data?.DATA?.accessToken) {
        localStorage.setItem(ZUMARIDI_USER_DATA, JSON.stringify(data.DATA));
      }
      return data;
    });
};

export const loginSuccess = async () => {
  try {
    const config = {
      url: `${env.API_BASE_URL}/${LOGIN_SUCCESS_URL}`,
      method: "get",
      withCredentials: true,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true
      }
    };
    const response = await axios(config);
    if (response.data?.DATA?.accessToken) {
      localStorage.setItem(ZUMARIDI_USER_DATA, JSON.stringify(response.data.DATA));
    }
    return response.data;
  } catch (err) {
    return err;
  }
};

export const register = async (details: {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  refId?: string;
}) => {
  const response = await axios.post(`${env.API_BASE_URL}/${REGISTER}`, details);
  return response.data;
};

export const confirmAccount = async (confirmationCode: string) => {
  const response = await axios.get(env.API_BASE_URL + `/auth/confirm/${confirmationCode}`);
  return response.data;
};

export const logout = async () => {
  return await axios
    .get(`${env.API_BASE_URL}/${LOG_OUT}`, { headers: authHeader() })
    .then((response) => {
      if (response) {
        localStorage.removeItem(ZUMARIDI_USER_DATA);
      }
    })
    .catch((err) => {
      console.log("logout err", err);
    });
};
