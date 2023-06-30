import { FC, Dispatch, SetStateAction, MouseEventHandler } from "react";

import { Text } from "@elements/Text";
import { Title } from "@elements/Title";
import { useCssClasses } from "@utils/getClassnames";

import styles from "./ErrorModal.module.scss";

type ErrorModalProps = {
    isModalOpen: boolean;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    className?: string;
};

export const ErrorModal: FC<ErrorModalProps> = ({ isModalOpen, setIsModalOpen, className }) => {
    const errorClasses = useCssClasses([className]);

    const closeModalHandler = (): MouseEventHandler<HTMLButtonElement> | void => {
        setIsModalOpen(prev => !prev);
    };

    return (
        <div className={errorClasses}>
            {isModalOpen && (
                <div className={styles.modalCard}>
                    <div className={styles.cardText}>
                        <Title>Something went wrong.</Title>
                        <Text>Please try again later.</Text>
                    </div>
                    <button onClick={closeModalHandler} className={styles.cardBtn} type="button">
                        Okay
                    </button>
                </div>
            )}
        </div>
    );
};
