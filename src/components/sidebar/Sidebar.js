import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from '../sidebarOption/SidebarOption';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AddIcon from '@material-ui/icons/Add';
import db from '../../firebase';
import {useStateValue} from "../../StateProvider";

function Sidebar() {
    const [channels, setChannels] = useState([]);
    const [{user}] = useStateValue();

    useEffect(() => {
        // run this code when sidebae component loads
        db.collection('rooms').onSnapshot(snapshot => (
            setChannels(
                snapshot.docs.map(doc => ({
                    id: doc.id,
                    name: doc.data().name,
                }))
            )
        ))
    }, []);

    return (
        <div className="sidebar">
            <div className="sidebar--header">
                <div className="sidebar--info">
                    <h2>Vamsi Pasumarthi</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        {user?.displayName}
                    </h3>
                </div>
                <CreateIcon />
                
            </div>
            <SidebarOption Icon={InsertCommentIcon} tittle="Threads" />
            <SidebarOption Icon={InboxIcon} tittle="Mentions &amp; reactions" />
            <SidebarOption Icon={DraftsIcon} tittle="Saved items" />
            <SidebarOption Icon={BookmarkBorderIcon} tittle="Channel browser" />
            <SidebarOption Icon={PeopleAltIcon} tittle="People &amp; user groups" />
            <SidebarOption Icon={AppsIcon} tittle="Apps" />
            <SidebarOption Icon={FileCopyIcon} tittle="File browser" />
            <SidebarOption Icon={ExpandLessIcon} tittle="Show less" />

            <hr/>

            <SidebarOption Icon={ExpandMoreIcon} tittle="Channels" />

            <hr/>

            <SidebarOption Icon={AddIcon} addChannelOption tittle="Add Channel" />

            {/* connect to db and list all channels */}
            {/* sidebarOption... */}
            {channels.map((channel) => (
                <SidebarOption tittle={channel.name} id={channel.id  } />
            ))}

        </div>
    );
}

export default Sidebar;
