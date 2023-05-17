import React, { ReactNode, FC } from "react";

import { Button } from "@elements/Button";
import { Error } from "@elements/Error";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title";
import { SocialButton } from "@elements/SocialButton";

import styles from "./Auth.module.scss";

interface AuthProps {
    keyword?: string;
    isSubmitting: boolean;
    children: ReactNode;
    title: string;
    description: string;
    error?: string;
    beforeContent?: ReactNode;
    afterContent?: ReactNode;
    onSubmit: () => void;
    showSocials?: boolean;
    wrongPage?: ReactNode;
}

interface SocialButtonProps {
    buttons: { width: number; height: number; name: string }[];
    keyword: string;
}

const SocialButtons: FC<SocialButtonProps> = ({ buttons, keyword }) => (
    <div className={styles.socialButton}>
        {buttons.map(({ width, height, name }) => (
            <SocialButton key={name} width={width} height={height} name={name} keyword={keyword} />
        ))}
    </div>
);

export const Auth: React.FC<AuthProps> = ({
    keyword = "Continue",
    isSubmitting,
    title,
    description,
    error,
    onSubmit,
    beforeContent,
    afterContent,
    children,
    showSocials = true,
    wrongPage,
}: AuthProps) => {
    const socialButtons = [
        {
            width: 30,
            height: 30,
            name: "google",
        },
        {
            width: 30,
            height: 30,
            name: "github",
        },
    ];
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.heading}>
                    <Title level={2} className={styles.title}>
                        {title}
                    </Title>
                    <Text size="medium" className={styles.info} isParagraph lineHeight={17}>
                        {description}
                    </Text>
                </div>

                <form onSubmit={onSubmit}>
                    {error && <Error isAdaptive description={error} />}

                    {children}

                    <div className={styles.actions}>
                        {beforeContent}

                        <Button type="submit" size="medium" disabled={isSubmitting} className={styles.signIn}>
                            {title}
                        </Button>

                        {afterContent}
                    </div>
                </form>

                {showSocials && (
                    <>
                        <div className={styles.divider}>
                            <Text isParagraph color="greyTextColor">
                                or
                            </Text>
                        </div>

                        <div className={styles.socialButtons}>
                            <SocialButtons buttons={socialButtons} keyword={keyword} />
                        </div>
                    </>
                )}
                {wrongPage}
            </div>
        </section>
    );
};
