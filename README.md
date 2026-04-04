### [ACS 3310] Postkit: Reading Time

Estimate how long a post takes to read based on word count. Words are character sequences separated by whitespace, and include punctuation

#### Installation


#### API

**wordCount** *count the number of words in a given text*

Takes in a string and returns a number representing the word count

```ts
wordCount(str: string): number
```

**readingTime** *estimate the reading time of a given text*

Takes in a string and returns a number representing the estimated reading time in minutes

```ts
readingTime(str: string): number
```

**formatTime** *format time for display*

Takes in a number of minutes and returns a readable label

```ts
formatTime(minutes: number): string
```

- **< 1 min**: `Less than a minute`
- **1–9 min**: exact minutes (`3 minutes`)
- **10–58 min**: rounded to 5min (`15 minutes`)
- **59–89 min**: `1 hour`
- **90–179 min**: rounded to half hour (`1.5 hours`, `2 hours`)
- **180+ min**: `A few hours`

#### Usage

```ts
import { wordCount, readingTime, formatTime } from "postkit-reading-time";

const text = "A fish jumped over something super tall. Wow!";

const count = wordCount(text);
console.log(count); // 8

const time = readingTime(text);
console.log(time); // 0.04

const formattedTime = formatTime(time);
console.log(formattedTime); // "Less than a minute"
```

#### Edge Cases

- Empty text: returns 0 words, 0 minutes, and "Less than a minute" 
- Negative numbers or 0: formats to "Less than a minute"

#### Design Notes

- A reading speed of 250 words per minute is used to calculate reading time. Calculated as total word count divided by WPM equals reading time in minutes
- Reading time is returned as is, rather than rounding, in case someone wants to use it for something other than display (like sorting posts by reading time)
- `0 words` and `Less than a minute` will be treated as the "floor". This way, unrealistic input (like empty text or negative numbers) can be handled gracefully rather than erroring
