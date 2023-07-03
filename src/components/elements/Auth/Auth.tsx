import { ReactNode, FC, useState, useEffect } from "react";

import { Button } from "@elements/Button";
import { Error } from "@elements/Error";
import { ErrorModal } from "@elements/ErrorModal";
import { SocialButton } from "@elements/SocialButton";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title";
import { FIVE_HUNDRED_ERRORS } from "@utils/regexConstants";

import styles from "./Auth.module.scss";

interface ErrorProps {
    status: number;
    data: {
        statusCode: number;
        message: string;
    };
}

interface AuthProps {
    keyword?: string;
    isSubmitting: boolean;
    children: ReactNode;
    title: string;
    description: string;
    error?: ErrorProps;
    beforeContent?: ReactNode;
    afterContent?: ReactNode;
    onSubmit: () => void;
    isLoading?: boolean;
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

export const Auth: FC<AuthProps> = ({
    keyword = "Continue",
    isSubmitting,
    title,
    description,
    error,
    onSubmit,
    isLoading,
    beforeContent,
    afterContent,
    children,
    showSocials = true,
    wrongPage,
}: AuthProps) => {
    const [isModalOpen, setIsModalOpen] = useState(true);

    const are500thsErrors = FIVE_HUNDRED_ERRORS.test(error?.status.toString() || "");

    useEffect(() => {
        if (!are500thsErrors) {
            setIsModalOpen(prev => !prev);
        }
    }, [are500thsErrors]);

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
        <>
            <section className={`${styles.section} ${are500thsErrors && isModalOpen && styles.bgBlur}`}>
                <div className={styles.content}>
                    <div className={styles.heading}>
                        <Title level={1} className={styles.title}>
                            {title}
                        </Title>
                        <Text size="small" className={styles.info} isParagraph lineHeight={17}>
                            {description}
                        </Text>
                    </div>

                    <form onSubmit={onSubmit}>
                        {error && !are500thsErrors && <Error semiBold isAdaptive description={error.data.message} />}

                        {children}

                        <div className={styles.actions}>
                            {beforeContent}

                            <Button type="submit" size="medium" disabled={isSubmitting} className={styles.signIn}>
                                {isLoading ? "Loading..." : title}
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

                            <div>
                                <SocialButtons buttons={socialButtons} keyword={keyword} />
                            </div>
                        </>
                    )}
                    {wrongPage}
                </div>
            </section>
            {are500thsErrors && <ErrorModal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />}
        </>
    );
};
