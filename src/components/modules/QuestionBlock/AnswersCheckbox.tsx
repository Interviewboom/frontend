import { FormikProps, useFormik, Form, Formik } from "formik";
import { useRouter } from "next/router";
import React, { FC } from "react";

import { Button } from "@elements/Button";
import { RadioInput } from "@elements/RadioInput/RadioInput";
import { Text } from "@elements/Text";
import { Title } from "@elements/Title/Title";
import { AnswerModel } from "src/models/entities/answer-model/answer-model";
import { QuestionModel } from "src/models/entities/question-model/question-model";
import { useSubmitSessionAnswersMutation } from "src/redux/api/sessions-api";

import styles from "./Answers.module.scss";

interface MyFormValues {
    answerIds: string[];
}

const initialValues: MyFormValues = { answerIds: [] };

type AnswersProps = {
    questionInfo: QuestionModel;
    isLast: boolean;
    answers: AnswerModel[];
};

export const AnswersCheckbox: FC<AnswersProps> = ({ questionInfo, isLast, answers }) => {
    const router = useRouter();

    const [submitSessionAnswersRequest] = useSubmitSessionAnswersMutation();

    const htmlWithoutTags = questionInfo.question?.replace(/(<([^>]+)>)/gi, "");

    const submitHandler = async (values: MyFormValues) => {
        if (typeof router.query?.sessionId !== "string") return;

        await submitSessionAnswersRequest({
            sessionId: router.query.sessionId,
            params: {
                answerIds: values.answerIds,
                questionId: questionInfo.id,
            },
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

                <Text size="small" isParagraph color="greyTextColor" className={styles.choose}>
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
                <Button
                    type="submit"
                    size="medium"
                    className={styles.buttonMargin}
                    onClick={() => setTimeout(() => formik.handleReset(), 0)}
                    disabled={!formik.values.answerIds.length}
                >
                    {isLast ? "Finish" : "Next"}
                </Button>
            </Form>
        </Formik>
    );
};
