import Image from "next/image";
import React, { FC } from "react";

interface IconProps {
    svgUrl: string;
    width?: number;
    height?: number;
    alt?: string;
}

export const Icon: FC<IconProps> = ({ svgUrl, width, height, alt }) => {
    return (
        <span>
            <Image src={svgUrl} width={width} height={height} alt={alt} />
        </span>
    );
};

Icon.defaultProps = {
    width: 24,
    height: 24,
    alt: "icon",
};
