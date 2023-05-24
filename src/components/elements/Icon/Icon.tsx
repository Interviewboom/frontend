import dynamic from "next/dynamic";
import React, { ComponentType, FC, SVGProps, useMemo } from "react";

import { useCssClasses } from "@utils/getClassnames";

import styles from "./Icon.module.scss";
import DefaultIcon from "./icons/defaultIcon.svg";

interface IconProps {
    name: string;
    width?: number;
    height?: number;
    color?: string;
    stroke?: string;
    className?: string;
}

export const Icon: FC<IconProps> = ({ name, width = 24, height = 24, color, stroke, className }) => {
    let IconComponent: ComponentType<SVGProps<SVGElement>>;
    const defaultComponent = useMemo(() => <DefaultIcon width={width} height={height} />, [height, width]);

    const iconClasses = useCssClasses([styles.wrapper, color && styles.applyColor, className]);

    try {
        IconComponent = dynamic(() => import(`./icons/${name}.svg`), {
            loading: () => defaultComponent,
        });
    } catch (error) {
        return <span>{defaultComponent}</span>;
    }

    return (
        <span className={iconClasses}>
            <IconComponent width={width} height={height} fill={color} stroke={stroke} />
        </span>
    );
};
