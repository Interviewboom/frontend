import React, { FC } from "react";
import { FormikProps, useFormik, Form, Formik } from "formik";
import { useRouter } from "next/router";

import { answerType, QuestionType } from "src/api/apiTypes";
import { postUserAnswers } from "src/api/testFlow";

import { RadioInput } from "@elements/RadioInput/RadioInput";
import { Button } from "@elements/Button";
import { Title } from "@elements/Title/Title";
import { Text } from "@elements/Text";

import styles from "./Answers.module.scss";

interface MyFormValues {
    answerIds: string[];
}

const initialValues: MyFormValues = { answerIds: [] };

type AnswersProps = {
    questionInfo: QuestionType;
    isLast: boolean;
    answers: answerType[];
};

export const AnswersCheckbox: FC<AnswersProps> = ({ questionInfo, isLast, answers }) => {
    const router = useRouter();
    const htmlWithoutTags = questionInfo.question?.replace(/(<([^>]+)>)/gi, "");

    const submitHandler = async (values: MyFormValues) => {
        if (typeof router.query?.sessionId !== "string") return;

        await postUserAnswers(router.query.sessionId, {
            answerIds: values.answerIds,
            questionId: questionInfo.id,
        });

        if (!isLast) {
            router.replace(router.asPath);
        } else {
            router.push(`${router.asPath}/result`);
        }
    };

    const formik: FormikProps<MyFormValues> = useFormik({
        initialValues,
        onSubmit: submitHandler,
    });

    return (
        <Formik initialValues={initialValues} onSubmit={submitHandler}>
            <Form className={styles.answersWrapper} onSubmit={formik.handleSubmit}>
                <Title className={styles.question} level={4}>
                    {questionInfo.title}
                </Title>
                {htmlWithoutTags && (
                    <div className={styles.questionCode} dangerouslySetInnerHTML={{ __html: questionInfo.question }} />
                )}

                <Text size="small" isParagraph color="grey-text-color" className={styles.choose}>
                    Choose several answers
                </Text>
                {answers?.map(item => {
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
                <Button type="submit" size="medium" className={styles.buttonMargin} disabled={formik.isSubmitting}>
                    {isLast ? "Finish" : "Next"}
                </Button>
            </Form>
        </Formik>
    );
};
