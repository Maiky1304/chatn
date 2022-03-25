import React, {useEffect, useState} from 'react';
import {collection, onSnapshot, query, where} from "firebase/firestore";
import {database} from "../lib/firebase";
import StyledChannelList from "./elements/StyledChannelList";
import StyledChannelListItem from "./elements/StyledChannelListItem";
import StyledChannelSearch from "./elements/StyledChannelSearch";
import {useRouter} from "next/router";

// Channel object consists of:
// user = email
// name = string
// messages = array of documents

const ChannelList = ({ user }) => {
    const [channels, setChannels] = useState([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        const q = query(collection(database, "channels"), where("users", "array-contains", user.email))
        return onSnapshot(q, snapshot => {
            const updatedChannels = [];
            snapshot.forEach(doc => {
                updatedChannels.push({ id: doc.id, ...doc.data() });
            })
            setChannels(updatedChannels);
        });
    }, []);

    return (
        <StyledChannelList>
            <StyledChannelSearch>
                <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </StyledChannelSearch>
            {channels
                .filter(channelData => channelData.name.includes(search))
                .map(channelData => <ChannelListItem key={channelData.id} channelData={channelData} />)
            }
        </StyledChannelList>
    );
};

const ChannelListItem = ({ channelData }) => {
    const router = useRouter();

    return (
        <StyledChannelListItem onClick={() => router.push(`/${channelData.id}`)}>
            <p>{channelData.name}</p>
        </StyledChannelListItem>
    )
}

export default ChannelList;
