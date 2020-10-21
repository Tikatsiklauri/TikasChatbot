import { Botkit } from "botkit";
import { WebAdapter } from "botbuilder-adapter-web";
import { MongoDbStorage } from "botbuilder-storage-mongodb";

const adapter = new WebAdapter({});
let storage = null;
if (process.env.MONGO_URI) {
  storage = mongoStorage = new MongoDbStorage({
    url: process.env.MONGO_URI,
  });
}
export const controller = new Botkit({
  webhook_uri: "/api/messages",
  adapter: adapter,
  storage,
});


