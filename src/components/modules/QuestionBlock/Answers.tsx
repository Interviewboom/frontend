import React, { FC } from "react";
import { FormikProps, useFormik } from "formik";
import { useRouter } from "next/router";

import { answerType, QuestionType } from "src/api/apiTypes";
import { postUserAnswers } from "src/api/testFlow";

import { RadioInput } from "@elements/RadioInput/RadioInput";
import { Button } from "@elements/Button";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text";

import styles from "./Answers.module.scss";

const initialValues = { answerId: -1 };

interface MyFormValues {
    answerId: number;
}

type AnswersProps = {
    questionInfo: QuestionType;
    isLast: boolean;
    answers: answerType[];
};

export const Answers: FC<AnswersProps> = ({ questionInfo, isLast, answers }) => {
    const router = useRouter();

    const submitHandler = async (values: MyFormValues) => {
        if (typeof router.query?.sessionId !== "string") return;

        await postUserAnswers(router.query.sessionId, {
            answerIds: [Number(values.answerId)],
            questionId: questionInfo.id,
        });

        if (!isLast) {
            router.reload();
        } else {
            router.push(`${router.asPath}/result`);
        }
    };

    const formik: FormikProps<MyFormValues> = useFormik({
        initialValues,
        onSubmit: submitHandler,
    });

    return (
        <form className={styles.answersWrapper} onSubmit={formik.handleSubmit}>
            <Title className={styles.question} level={4}>
                {questionInfo.title}
            </Title>

            {questionInfo.question?.replace(/(<([^>]+)>)/gi, "") && (
                <div className={styles.questionCode} dangerouslySetInnerHTML={{ __html: questionInfo.question }} />
            )}

            <Text size="small" isParagraph color="grey-text-color" className={styles.choose}>
                Choose one correct answer
            </Text>
            {answers &&
                answers.map(item => {
                    return (
                        <RadioInput
                            text={item.answer}
                            key={item.id}
                            type="radio"
                            value={item.id}
                            checked={Number(formik.values.answerId) === item.id}
                            onChange={formik.handleChange}
                            name="answerId"
                        />
                    );
                })}
            <Button type="submit" size="medium" className={styles.buttonMargin}>
                {isLast ? "Finish" : "Next"}
            </Button>
        </form>
    );
};
