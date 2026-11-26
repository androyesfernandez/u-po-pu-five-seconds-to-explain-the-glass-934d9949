import { mkdirSync, writeFileSync } from "node:fs";

// The cat's defence, in its own voice: the human parked the glass on
// the very edge like a tiny diving board, then acted surprised that a
// cat with paws and curiosity would test the acoustics of the room.
// No apology, no confession — the knock was the experiment, and the
// experiment was the whole point. The sentence is one breath long, the
// way a cat would deliver it in five seconds flat.
const LINE =
  "You left it parked on the very edge like a tiny diving board and expected a cat with paws and curiosity to just stroll past it tonight without ever checking the acoustics of this room.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`LINE must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
