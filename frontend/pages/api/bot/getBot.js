import SecurityClient from "~/utilities/SecurityClient.js";

/**
 * This function fetches the bot for a project
 * @param {Object} obj
 * @param {String} obj.workspaceId
 * @returns
 */
const getBot = async ({ workspaceId }) => {
  return SecurityClient.fetchCall(
      "/api/v1/bot/" + workspaceId,
    {
        method: "GET",
        headers: {
        "Content-Type": "application/json",
        }
    }
  ).then(async (res) => {
    if (res.status == 200) {
      return await res.json();
    } else {
      console.log("Failed to get bot for project");
    }
  });
};

export default getBot;