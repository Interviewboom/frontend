import dynamic from "next/dynamic";
import React, { ComponentType, FC, SVGProps } from "react";
import styles from "./Icon.module.scss";

interface IconProps {
    name: string;
    width?: number;
    height?: number;
    color?: string;
}

export const Icon: FC<IconProps> = ({ name, width = 24, height = 24, color }) => {
    let IconComponent: ComponentType<SVGProps<SVGElement>>;

    try {
        IconComponent = dynamic(() => import(`./icons/${name}.svg`));
    } catch (error) {
        return <span>icon</span>;
    }

    return (
        <span className={color ? styles.wrapper : ""}>
            <IconComponent width={width} height={height} color={color} />
        </span>
    );
};

Icon.defaultProps = {
    width: 24,
    height: 24,
    color: "",
};
