import { TECHNICAL_SUPPORT } from "./CONSTANTS";
import fetchInstance from "./utils/FetchInterceptor";

export async function requestTechnicalSupport(supportParams: FormData) {
  try {
    const response = await fetchInstance({
      url: TECHNICAL_SUPPORT,
      method: "post",
      data: supportParams,
      headers: { "Content-Type": "multipart/form-data" }
    });
    return response;
  } catch (err) {
    return err;
  }
}
