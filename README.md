### [ACS 3310] Postkit: Reading Time

Estimate how long a post takes to read based on word count

🤔 It would be good to declare what you consider a word up front. "Words are sequences separated by whitespace, and include punctuation" or soemthing like that. This will help other devs understand what is happening, and inform your decision making. 

#### Installation

```bash
npm i postkit-reading-time
```

#### API

**wordCount** *count the number of words in the given text*

Takes in a string and returns a number representing the word count

```ts
wordCount(str: string): number
```

**readingTime** *estimate the reading time of the given text*

Takes in a string and returns a number representing the estimated reading time in minutes

```ts
readingTime(str: string): number
```

**formatTime** *format the time for display*

Takes in a number of minutes and returns a readable label for the reading time, such as "Less than a minute", "1 minute", "15 minutes", etc.

```ts
formatTime(minutes: number): string
```

#### Usage

```ts
import { wordCount, readingTime, formatTime } from "postkit-reading-time";

const text = "A fish jumped over something super tall. Wow!";

console.log(wordCount(text)); // 8

const time = readingTime(text);
console.log(time); // 0.04

console.log(formatTime(time)); // "Less than a minute"
```

#### Edge Cases

- Empty text: returns 0 words, 0 minutes, and "Less than a minute" 
- Negative numbers or 0: formats to "Less than a minute"

#### Design Notes

🤔 Might be good to spell this out for devs: Calculated as wordCount(str) / 250

- A reading speed of 250 words per minute is used to calculate reading time
- Reading time is returned as is, rather than rounding in case someone want to use it for something other than display (like sorting posts by reading time)
- `0 words` and `Less than a minute` will be treated as the "floor". This way, unrealistic input (like empty text or negative numbers) can be handled gracefully rather than erroring
