import React from "react";

interface HorizontalLineProps {
    id: number;
    styles: string;
    horizontalDashStyle: string;
}

const HorizontalLine: React.FC<HorizontalLineProps> = ({ id, styles, horizontalDashStyle }) => {
    return (
        <>
            <span className={styles}>{id ?? "T"}</span>
            <span className={horizontalDashStyle} />
        </>
    );
};

export default HorizontalLine;
