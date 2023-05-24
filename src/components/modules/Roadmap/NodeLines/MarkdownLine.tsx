import React from "react";

interface MarkdownLineProps {
    markdown?: string;
    markdownStyle: string;
    horizontalDashStyle: string;
}

const MarkdownLine: React.FC<MarkdownLineProps> = ({ markdown, markdownStyle, horizontalDashStyle }) => {
    return (
        <>
            <span className={markdownStyle}>{markdown ?? "T"}</span>
            <span className={horizontalDashStyle} />
        </>
    );
};

export default MarkdownLine;
