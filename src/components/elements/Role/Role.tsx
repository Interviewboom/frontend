import React, { FC, useEffect, useRef } from "react";

import { IconLink } from "@elements/Breadcrumb/IconLink";
import { Icon } from "@elements/Icon";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title";
import { useCssClasses } from "@utils/getClassnames";

import styles from "./Role.module.scss";

interface RoleProps {
    name: string;
    type: "current" | "target";
    progress?: number;
}

export const Role: FC<RoleProps> = ({ name, type, progress }) => {
    const progressRef = useRef<HTMLDivElement>(null);
    const nameClasses = useCssClasses([styles.name, styles[type]]);

    useEffect(() => {
        if (progressRef.current)
            progressRef.current.style.background = `radial-gradient(closest-side, #f3f3f1 95%, transparent 95% 100%),
      conic-gradient(#5d8f54 ${progress}%, #f3f3f1 0)`;
    }, [progress]);

    return (
        <div className={styles.wraper}>
            <Text size="big" lineHeight={24}>
                {type.charAt(0).toUpperCase() + type.slice(1)} role
            </Text>
            <div className={styles.nameWrapper}>
                <Title level={1} className={nameClasses}>
                    {name}
                </Title>

                <div className={styles.infoWrapper}>
                    {progress && (
                        <div className={styles.progressBar} ref={progressRef}>
                            <progress
                                value={progress}
                                max="100"
                                style={{ visibility: "hidden", height: 0, width: 0 }}
                            />
                            <Text size="small" lineHeight={24} className={styles.progressText}>
                                {progress}%
                            </Text>
                        </div>
                    )}
                    <IconLink href="/">
                        <Icon name="edit" width={20} height={20} className={styles.icon} />
                    </IconLink>
                </div>
            </div>
        </div>
    );
};
