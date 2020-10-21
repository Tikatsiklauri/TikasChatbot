//  __   __  ___        ___
// |__) /  \  |  |__/ |  |
// |__) \__/  |  |  \ |  |
// This is the main file for the chatbot bot.
// Import Botkit's core features
import { BotkitCMSHelper } from "botkit-plugin-cms";
import { controller } from "./controller";
// Import a platform-specific adapter for web.
// Load process.env values from .env file


require("dotenv").config();
if (process.env.CMS_URI) {
  controller.usePlugin(
    new BotkitCMSHelper({
      uri: process.env.CMS_URI,
      token: process.env.CMS_TOKEN,
    })
  );
}
// Once the bot has booted up its internal services, you can use them to do stuff.
controller.ready(() => {
  // load traditional developer-created local custom feature modules
  controller.loadModules(__dirname + "/features");
  /* catch-all that uses the CMS to trigger dialogs */
  if (controller.plugins.cms) {
    controller.on("message,direct_message", async (bot, message) => {
      let results = false;
      results = await controller.plugins.cms.testTrigger(bot, message);
      if (results !== false) {
        // do not continue middleware!
        return false;
      }
    });
  }


});




