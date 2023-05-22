import { useRouter } from "next/router";
import React, { Dispatch, FC, SetStateAction } from "react";

import { Button } from "@elements/Button";
import { Title } from "@elements/Title/Title";

import styles from "./Modal.module.scss";

type PropType = { setModalOpened: Dispatch<SetStateAction<boolean>> };

export const Modal: FC<PropType> = ({ setModalOpened }) => {
    const router = useRouter();

    const closeTest = () => {
        router.push(`/categories/${router.query?.categoryId}/test/${router.query?.testId}`);
    };

    return (
        <div className={styles.overlay}>
            <form className={styles.form}>
                <Title level={3} className={styles.textClass}>
                    Are you sure you want to close the test?
                </Title>
                <div>
                    <Button type="button" size="medium" onClick={closeTest} className={styles.closeBtn}>
                        Close the test
                    </Button>
                    <Button type="button" size="medium" onClick={() => setModalOpened(false)}>
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    );
};
