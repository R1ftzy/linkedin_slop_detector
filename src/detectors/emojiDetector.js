export function detectEmojis(text) {
    const emojis =
        text.match(
            /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu
        ) || [];

    const matches = emojis.length;
    const ticks = emojis.filter(e => e == '✅').length;
    const tick_multiplier = 4;
    let score = 0;

    if (matches >= 3)
        score += 2;

    if (matches >= 6)
        score += 5;

    if (matches >= 10)
        score += 8;

    if (matches >= 15)
        score += 12;

    score += ticks*(tick_multiplier-1);

    return {
        score,
        matches,
        reason: `${matches} emojis detected`
    };
}
