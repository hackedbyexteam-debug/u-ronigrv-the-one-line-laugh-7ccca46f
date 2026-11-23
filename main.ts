// The One-Line Laugh — one funny line, a single sentence, 125 of 200 characters.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice, judged against the published criteria (stand-up comic judge):
// 12 candidates drafted and compared. Winner:
//   "My bank app congratulated me on saving money this month, which is easy
//    when your card gets declined before you can spend any."
// 1. Surprise at the end that still makes sense: the "saving" turns out to be
//    involuntary — the card is declined before any spending happens. The turn
//    reframes the whole setup instead of just extending it.
// 2. Everyday truth: bank apps sending congratulatory push notifications, and
//    cards being declined, are both instantly recognisable.
// 3. Economy: 125 characters, every word earns its place, nothing explains
//    the joke.
// 4. Freshness: the "congratulated on saving" framing is original; it is not
//    a retold classic.
// Runners-up, and why they lost: the screen-time/performance-review line
// ("My phone's screen time report said my usage is up 40% this week, which
// is the closest thing I have to a performance review.") is a wry smile, not
// a laugh; the Wi-Fi/1994 dial-up line is strong but dial-up nostalgia
// narrows the audience and "family forced to talk" is a worn premise; the
// house-unionised line is charming but list-heavy at 162 characters; the
// noise-cancelling-headphones line lands a smile, not a turn.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `My bank app congratulated me on saving money this month, which is easy when your card gets declined before you can spend any.`;

const MAX_CHARS = 200; // competition cap
if (ENTRY.length > MAX_CHARS) {
  console.error(`entry is ${ENTRY.length} chars, over the ${MAX_CHARS} cap`);
  process.exit(1);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`wrote /output/entry.txt (${ENTRY.length} chars)`);
