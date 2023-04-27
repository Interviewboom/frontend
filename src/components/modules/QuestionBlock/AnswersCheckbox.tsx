import React, { FC } from "react";
import { FormikProps, useFormik } from "formik";
import { useRouter } from "next/router";

import { RadioInput } from "@elements/RadioInput/RadioInput";
import { Button } from "@elements/Button";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text";

import { useSubmitSessionAnswersMutation } from "src/redux/api/sessions-api";
import { Question } from "src/models/entities/question/question";
import { Answer } from "src/models/entities/answer/answer";
import styles from "./Answers.module.scss";

interface MyFormValues {
    answerIds: string[];
}

const initialValues: MyFormValues = { answerIds: [] };

type AnswersProps = {
    questionInfo: Question;
    isLast: boolean;
    answers: Answer[];
};

export const AnswersCheckbox: FC<AnswersProps> = ({ questionInfo, isLast, answers }) => {
    const router = useRouter();
    const [submitSessionAnswersRequest] = useSubmitSessionAnswersMutation();

    const htmlWithoutTags = questionInfo.question?.replace(/(<([^>]+)>)/gi, "");

    const submitHandler = (values: MyFormValues) => {
        if (typeof router.query?.sessionId !== "string") return;

        submitSessionAnswersRequest({
            sessionId: router.query.sessionId,
            params: {
                answerIds: values.answerIds,
                questionId: questionInfo.id,
            },
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
            {htmlWithoutTags && (
                <div className={styles.questionCode} dangerouslySetInnerHTML={{ __html: questionInfo.question }} />
            )}

            <Text size="small" isParagraph color="grey-text-color" className={styles.choose}>
                Choose several answers
            </Text>
            {answers &&
                answers.map(item => {
                    return (
                        <RadioInput
                            text={item.answer}
                            key={item.id}
                            type="checkbox"
                            value={item.id}
                            checked={formik.values.answerIds.includes(item.id.toString())}
                            onChange={formik.handleChange}
                            name="answerIds"
                        />
                    );
                })}
            <Button type="submit" size="medium" className={styles.buttonMargin}>
                {isLast ? "Finish" : "Next"}
            </Button>
        </form>
    );
};
