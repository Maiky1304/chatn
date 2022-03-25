import React from 'react';
import TopBar from "../topbar/TopBar";
import TopBarTitle from "../topbar/TopBarTitle";
import TopBarAccount from "../topbar/TopBarAccount";
import Container from "../elements/Container";
import ChannelList from "../ChannelList";
import {signIn, useSession} from "next-auth/react";
import LoadingComponent from "../state/LoadingComponent";

const CoreLayout = ({children}) => {
    const { data, status } = useSession({
        required: true,
        onUnauthenticated() {
            signIn('google');
        },
    });

    if (status === "loading") {
        return <LoadingComponent />
    }

    return (
        <>
            <TopBar>
                <TopBarTitle>Chatn</TopBarTitle>
                <TopBarAccount user={data.user} />
            </TopBar>
            <Container>
                <ChannelList user={data.user} />
                {children}
            </Container>
        </>
    );
};

export default CoreLayout;
