const asyncRedis = require("async-redis");
const client = asyncRedis.createClient();

client.on("error", function (err) {
    console.log("Error " + err);
});
export default client;