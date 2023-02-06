import { Auth } from "components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { setRefId } from "redux/slices/auth.slice";
import SignupView from "./SignupView";

export const SignupContainer = () => {
  const dispatch = useDispatch();
  const [searchParam] = useSearchParams();
  const refId = searchParam.get("refId");
  useEffect(() => {
    dispatch(setRefId(refId));
  }, []);
  return (
    <Auth>
      <SignupView />
    </Auth>
  );
};
