import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm sorry I auto-filled your job application with Biscuit's name and listed 'good boy' as your top skill.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
