const { Telegraf, async, Markup } = require("telegraf");
const { commands } = require("./command");

const bot = new Telegraf("6089353792:AAFRKFWGEZR5RzPE_BvdyjFcpbc-4F41kmg");

bot.start((ctx) =>
  ctx.reply(
    "Botga Xush Kelibsiz. Bot Haqida Ko'proq Ma'lumot Olish Uchun /help ni Bosing!!"
  )
);

bot.hears("Salom", (ctx) =>
  ctx.reply(
    `Salom ${ctx.message.from.username ? ctx.message.from.first_name : "Odam"}!`
  )
);

bot.hears("Mening ismim usenameim nima?", (ctx) =>
  ctx.reply(`Sening ismin ${ctx.message.from.username}`)
);

bot.help((ctx) => ctx.reply(commands));
bot.on("sticker", (ctx) => ctx.reply("👍"));

bot.command("admin", async (ctx) => {
  return await ctx.reply(
    "Adminlarning Telegramlari",
    Markup.keyboard([["t.me/mukhammad_mh"], ["t.me/mr_bey1"]])
      .oneTime()
      .resize()
  );
});

bot.command("phone", (ctx) => {
  ctx.reply("Send me your number please", {
    reply_markup: {
      keyboard: [[{ text: "📲 Send phone number", request_contact: true }]],
    },
  });
});

bot.command("contact", (ctx) => {
  bot.telegram.sendMessage(ctx.chat.id, "Bizning Telfon Raqamlarimiz", {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: "Bosing ",
            callback_data: "number",
          },
          {
            text: "Bosing ",
            callback_data: "number2",
          },
        ],
      ],
    },
  });
});

const alwaysUse = "+998";
const numberone = 915195251;
const numbertwo = 915486430;
bot.action("number", (ctx) => {
  ctx.reply(`makhkamov_ou7
 ${alwaysUse}${numberone}`);
});
bot.action("number2", (ctx) => {
  ctx.reply(`
  mukhammadbey
  ${alwaysUse}${numbertwo}`);
});

bot.launch();
