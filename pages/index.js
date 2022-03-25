import NoChatScreen from "../components/NoChatScreen";
import CoreLayout from "../components/layouts/CoreLayout";
import React from "react";
import {signIn, useSession} from "next-auth/react";
import LoadingComponent from "../components/state/LoadingComponent";

export default function Home() {
    const { status, data } = useSession({
        required: true,
        onUnauthenticated() {
            signIn('google');
        }
    });

    if (status === "loading") {
        return <LoadingComponent />
    }

    return <NoChatScreen user={data.user} />
}

Home.getLayout = function getLayout(page) {
    return <CoreLayout>{page}</CoreLayout>
}