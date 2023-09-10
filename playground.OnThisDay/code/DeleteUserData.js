import remoteDB from "./lib/remoteDB.js";
// import deleteUserData from "./lib/services/resdtDB.js";

export default function ({ $vivContext, userData }) {
  return remoteDB.deleteUserData(userData);
}