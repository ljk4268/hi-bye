import { api } from "./utils/instance";

//axios
export const signUp = (params) => {
  return api.post("/account/signup", params);
};

export const signIn = (params) => {
  return api.post("/account/signin", params);
};

export const checkIsPatient = (params) => {
  return api.post("/account/patient", params);
};

export const chatWithClova = (params) => {
  return api.post("/talk/clova-studio", params, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
