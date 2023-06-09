import React, { FC } from "react";

import { Button } from "@elements/Button";
import { Icon } from "@elements/Icon/Icon";
import { Title } from "@elements/Title/Title";
import { useNewSession } from "@utils/useNewSession";

import styles from "./Statistics.module.scss";

type StatisticsProps = {
    correctQuestionsNumber: number;
    questionsNumber: number;
};

const Statistics: FC<StatisticsProps> = ({ correctQuestionsNumber, questionsNumber }) => {
    const passTestAgain = useNewSession();

    return (
        <div className={styles.stats}>
            <Icon name="circleCheckmark" width={88} height={88} className={styles.iconCls} />

            <Title level={3}>
                {correctQuestionsNumber} out of {questionsNumber} correct answers
            </Title>

            <Button size="medium" className={styles.btn} onClick={passTestAgain}>
                Go again
            </Button>
        </div>
    );
};

export default Statistics;
