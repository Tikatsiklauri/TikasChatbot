/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

export default function(controller) {
   
       controller.on('event', async (bot, message) => {
         await bot.reply(message, "Welcome to the channel!");
       });
    controller.hears('sample','message,direct_message', async(bot, message) => {
        await bot.reply(message, 'I heard a sample message.');
    });

    controller.on('message,direct_message', async(bot, message) => {
        await bot.reply(message, `Echo: ${ message.text }`);
    });
      controller.on("message", async (bot, message) => {
        await bot.reply(message, "I heard a message!");
      });

     

}
