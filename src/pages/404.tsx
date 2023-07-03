import type { NextPage } from "next";

import { Text } from "@elements/Text";
import { Title } from "@elements/Title";
import { DefaultLayout } from "@layouts/DefaultLayout";

const container = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "1.5rem",
    height: "calc(100vh - 9rem)",
};

const verticalLine = {
    fontSize: "4rem",
    opacity: 0.1,
};

const NotFoundPage: NextPage = () => {
    return (
        <DefaultLayout>
            <div style={container}>
                <Title color="darkTextColor" level={3}>
                    404
                </Title>
                <span style={verticalLine}>|</span>
                <Text size="small" color="greyTextColor">
                    This page could not be found.
                </Text>
            </div>
        </DefaultLayout>
    );
};

export default NotFoundPage;
