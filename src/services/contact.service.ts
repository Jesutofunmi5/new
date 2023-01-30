import { TECHNICAL_SUPPORT, PUBLIC_REQUEST_KEY } from "./CONSTANTS";
import fetchInstance from "./utils/FetchInterceptor";

export async function requestTechnicalSupport(supportParams: FormData) {
  try {
    const response = await fetchInstance({
      url: TECHNICAL_SUPPORT,
      method: "post",
      data: supportParams,
      headers: { "Content-Type": "multipart/form-data", [PUBLIC_REQUEST_KEY]: true }
    });
    return response;
  } catch (err) {
    return err;
  }
}
