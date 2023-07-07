import React from "react";

import { Icon } from "@elements/Icon";
import { Link } from "@elements/Link";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title";
import { useAppDispatch } from "src/redux/hooks";
import { setIsShownPopup } from "src/redux/slices/roadmapSlice";

import styles from "./Popup.module.scss";

const mocked = {
    name: "Functions",
    currentLevel: "Middle",
    targetLevel: "Senior",
    lastTimeTested: "11 days ago",
    linkedTests: ["Javascript Basic Express test", "Javascript Asynchronous programming"],
    historyOfSkillTestResults: ["Javascript Basic Express test"],
    usefulLinksToLearnTheSkill: ["Javascript Basic Express test", "https://javascript.info/structure"],
};

const Popup = () => {
    const dispatch = useAppDispatch();

    const closePopup = () => {
        dispatch(setIsShownPopup());
    };

    return (
        <div className={styles.container}>
            <button type="button" onClick={closePopup}>
                <Icon className={styles.close} name="close" width={20} height={20} />
            </button>
            <div className={styles.wrapper}>
                <div className={styles.status}>
                    <Title level={3} className={styles.title}>
                        Status of the skill
                    </Title>
                    <Title className={styles.skill} level={3}>
                        {mocked.name}
                    </Title>
                </div>
                <div className={styles.topic}>
                    <Text size="small" color="greyTextColor" lineHeight={17}>
                        Current level (based on test results)
                    </Text>
                    <Text color="darkTextColor" lineHeight={22}>
                        {mocked.currentLevel}
                    </Text>
                </div>
                <div className={styles.topic}>
                    <Text className={styles.point} size="small" color="greyTextColor" lineHeight={17}>
                        Target level
                    </Text>
                    <Text className={styles.info} color="darkTextColor" lineHeight={22}>
                        {mocked.targetLevel}
                    </Text>
                </div>
                <div className={styles.topic}>
                    <Text className={styles.point} size="small" color="greyTextColor" lineHeight={17}>
                        Last time tested
                    </Text>
                    <Text className={styles.info} color="darkTextColor" lineHeight={22}>
                        {mocked.lastTimeTested}
                    </Text>
                </div>
                <div className={styles.topic}>
                    <Text className={styles.point} size="small" color="greyTextColor" lineHeight={17}>
                        Linked tests the target role
                    </Text>
                    {mocked.linkedTests.map(test => {
                        return (
                            <Text className={styles.info} color="darkTextColor" lineHeight={22}>
                                {test}
                            </Text>
                        );
                    })}
                </div>
                <div className={styles.topic}>
                    <Text className={styles.point} size="small" color="greyTextColor" lineHeight={17}>
                        History of Skill Test Results
                    </Text>
                    {mocked.historyOfSkillTestResults.map(test => {
                        return (
                            <Text className={styles.info} color="darkTextColor" lineHeight={22}>
                                {test}
                            </Text>
                        );
                    })}
                </div>
                <div className={styles.topic}>
                    <Text className={styles.point} size="small" color="greyTextColor" lineHeight={17}>
                        Useful links to learn the skill
                    </Text>
                    {mocked.usefulLinksToLearnTheSkill.map(link => {
                        return (
                            <Link className={styles.info} href={`${link}`} withArrow="right">
                                {link}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Popup;
