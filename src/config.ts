import dotenv from "dotenv";

dotenv.config();

const { DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_MIN_DELAY, DISCORD_MAX_DELAY } = process.env;

if (!DISCORD_TOKEN || !DISCORD_CLIENT_ID || !DISCORD_MIN_DELAY || !DISCORD_MAX_DELAY) {
  throw new Error("Missing environment variables");
}

export const config = {
  DISCORD_TOKEN,
  DISCORD_CLIENT_ID,
  DISCORD_MIN_DELAY,
  DISCORD_MAX_DELAY
};