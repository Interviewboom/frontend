import dynamic from "next/dynamic";
import React, { ComponentType, FC, SVGProps, useMemo } from "react";
import styles from "./Icon.module.scss";
import DefaultIcon from "./icons/defaultIcon.svg";

interface IconProps {
    name: string;
    width?: number;
    height?: number;
    color?: string;
    stroke?: string;
}

export const Icon: FC<IconProps> = ({ name, width = 24, height = 24, color, stroke }) => {
    let IconComponent: ComponentType<SVGProps<SVGElement>>;
    const defaultComponent = useMemo(() => <DefaultIcon width={width} height={height} />, [height, width]);

    try {
        IconComponent = dynamic(() => import(`./icons/${name}.svg`), {
            loading: () => defaultComponent,
        });
    } catch (error) {
        return <span>{defaultComponent}</span>;
    }

    return (
        <span className={color ? styles.wrapper : ""}>
            <IconComponent width={width} height={height} fill={color} stroke={stroke} />
        </span>
    );
};

Icon.defaultProps = {
    width: 24,
    height: 24,
    color: "",
    stroke: "",
};
