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

const initialValues = { answerId: -1 };

interface MyFormValues {
    answerId: number;
}

type AnswersProps = {
    questionInfo: Question;
    isLast: boolean;
    answers: Answer[];
};

export const Answers: FC<AnswersProps> = ({ questionInfo, isLast, answers }) => {
    const router = useRouter();
    const [submitSessionAnswersRequest] = useSubmitSessionAnswersMutation();

    const htmlWithoutTags = questionInfo.question?.replace(/(<([^>]+)>)/gi, "");

    const submitHandler = (values: MyFormValues) => {
        if (typeof router.query?.sessionId !== "string") return;

        submitSessionAnswersRequest({
            sessionId: router.query.sessionId,
            params: {
                answerIds: [Number(values.answerId)],
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
