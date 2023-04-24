import type { NextPage } from "next";
import { DefaultLayout } from "@layouts/DefaultLayout";

const NotFoundPage: NextPage = () => {
    return <DefaultLayout>404 - Page Not Found</DefaultLayout>;
};

export default NotFoundPage;
