const SECTIONS = [
    "problem statement",
    "solution",
    "usp",
    "key features",
    "benefits",
    "for customers",
    "for restaurant owners",
    "for businesses",
    "key takeaways",
    "conclusion"
];

export function detectCorporateStructure(text) {

    const lower = text.toLowerCase();

    let matches = 0;

    SECTIONS.forEach(section => {
        if (lower.includes(section)) {
            matches++;
        }
    });

    let score = matches * 15;

    if (
        lower.includes("problem statement") &&
        lower.includes("solution")
    ) {
        score += 25;
    }

    return {
        score: Math.min(score, 80),
        matches,
        reason:
            `${matches} AI-style section headers detected`
    };
}