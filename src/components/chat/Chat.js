import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "../../firebase";
import Messages from "../messages/Messages";
import ChatInput from '../chatinput/ChatInput';

function Chat() {
    const { roomId } = useParams();

    const [roomDetails, setRoomDetails] = useState([null]);
    
    const [roomMsgs, setRoomMsgs] = useState([]);

    useEffect(() => {
        if (roomId) {
            db.collection("rooms").doc(roomId)
            .onSnapshot((snapshot) => setRoomDetails(snapshot.data()))
        }

        db.collection('rooms').doc(roomId).collection('Messages').orderBy('timestamp', 'asc')
        .onSnapshot(
            snapshot => setRoomMsgs(snapshot.docs.map(doc => doc.data())
            )
        ) 
    }, [roomId]);

    console.log(roomDetails);
    console.log(roomMsgs);

    return (
        <div className="chat">
            <div className="chat--header">
                <div className="chat--headerLeft">
                    <h4 className="chat--channelName">
                        <strong>#{roomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>
                <div className="chat--headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>
            <div className="chat--msgs">
                {/* Messages... */}
                {roomMsgs.map(({message, timestamp, user, userimage}) => (
                    <Messages 
                    message={message}
                    timestamp={timestamp}
                    user={user}
                    userimage={userimage} />
                ))}
            </div>
            <ChatInput channelName={roomDetails?.name} channelId={roomDetails?.Id} />
        </div>
    );
}

export default Chat;
