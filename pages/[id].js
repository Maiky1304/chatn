import React, {useEffect, useState} from 'react';
import {doc, onSnapshot, query, where} from "firebase/firestore";
import {database} from "../lib/firebase";
import {signIn, useSession} from "next-auth/react";
import CoreLayout from "../components/layouts/CoreLayout";
import LoadingComponent from "../components/state/LoadingComponent";
import {useRouter} from "next/router";
import ChatScreen from "../components/ChatScreen";

const ChannelViewPage = () => {
    const { status, data: { user } } = useSession({
        required: true,
        onUnauthenticated() {
            signIn('google');
        }
    });
    const { query: { id } } = useRouter();

    const [channelData, setChannelData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [error, setError] = useState(false);

    useEffect(() => {
        if (user == null) return;

        return onSnapshot(doc(database, "channels", id.toString()), document => {
            const data = document.data();

            if (!data.users.includes(user.email)) {
                setIsLoading(false);
                setChannelData({});
                setError(true);
                return;
            }

            setIsLoading(false);
            setChannelData({ id, ...data });
        })
    }, [user, id]);

    if (status === "loading" || isLoading) {
        return <LoadingComponent />
    }

    return (
        <ChatScreen user={user} channel={channelData} />
    );
};

export default ChannelViewPage;

ChannelViewPage.getLayout = function getLayout(page) {
    return <CoreLayout>{page}</CoreLayout>
}
