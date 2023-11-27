// Require the necessary discord.js classes
import 'dotenv/config.js'
import { Client, Events, GatewayIntentBits } from 'discord.js';

// Grab Discord bot token and client ID
const token = process.env.DISCORD_BOT_TOKEN;
const clientID = process.env.DISCORD_CLIENT_ID;

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
// We use 'c' for the event parameter to keep it separate from the already defined 'client'
client.once(Events.ClientReady, (c) => {
	console.log(`Ready! Logged in as ${c.user?.tag}`);
});

// Log in to Discord with your client's token
client.login(token);