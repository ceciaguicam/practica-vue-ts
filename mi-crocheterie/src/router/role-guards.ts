/* eslint-disable @typescript-eslint/no-explicit-any */
import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {

  const token = localStorage.getItem("token");

  if (token) {
    next();
  } 
  else {
    next({ name: "loginView" });
  }
};

export default haveRoleGuard;