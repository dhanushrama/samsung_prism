// import remoteDB from "./lib/remoteDB.js";
import getUserData from "./lib/services/resdtDB.js";

export default function ({ $vivContext }) {
  const bixbyUserId = $vivContext.bixbyUserId;
  return getUserData(bixbyUserId);
}