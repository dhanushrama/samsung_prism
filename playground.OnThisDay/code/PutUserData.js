import remoteDB from "./lib/remoteDB.js";
export default function putuser({ id, userData }) {
  // const bixbyUserId = $vivContext.bixbyUserId;
  return remoteDB.putUserData(id, userData);
}