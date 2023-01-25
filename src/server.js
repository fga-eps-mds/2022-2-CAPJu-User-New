import app from "./app.js";
import { config } from "dotenv";

config();

app.listen(process.env.PORT || 3334, () => console.log("Server running"));

async function failGracefully() {
    console.log("Something is gonna blow up.");
    process.exit(0);
  }

process.on("SIGTERM", failGracefully);
process.on("SIGINT", failGracefully);


