export const getBadgeList = (badges: string[]) => {
    const lineWordCounts = [1, 2, 3, 3, 2, 1];

    const lines: string[][] = [];
    let wordIndex = 0;

    lineWordCounts.forEach(count => {
        const line = badges.slice(wordIndex, wordIndex + count);
        lines.push(line);
        wordIndex += count;
    });

    return lines;
};
