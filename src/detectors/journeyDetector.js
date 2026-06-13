const JOURNEY_PATTERNS = [
    "day 1 of",
    "day 2 of",
    "day 3 of",
    "day 4 of",
    "day 5 of",
    "day 6 of",
    "day 7 of",

    "learning journey",
    "web development journey",

    "today i learned",
    "today i focused on",
    "today i continued",

    "looking forward to",
    "excited to keep learning",
    "one day at a time",
    "one step at a time",
    "moving forward",

    "helped me understand",
    "helped me improve",

    "continuing my journey",
    "enjoying the process"
];

export function detectJourneyPatterns(text) {

    const lower = text.toLowerCase();

    let matches = 0;

    JOURNEY_PATTERNS.forEach(pattern => {
        if (lower.includes(pattern)) {
            matches++;
        }
    });

    return {
        score: Math.min(matches * 12, 60),
        matches,
        reason:
            `${matches} AI-learning-journey patterns detected`
    };
}