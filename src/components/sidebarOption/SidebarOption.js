import React from 'react';
import './SidebarOption.css';
import { useHistory } from "react-router-dom";
import db from "../../firebase";

function SidebarOption({ Icon, tittle, id, addChannelOption }) {

    const history = useHistory();

    const selectChannel = () => {
        if (id) {
            history.push(`/room/${id}`)
        } else {
            history.push('tittle')
        }
    };

    const addChannel = () => {
        const channelName = prompt("Please enter the Channel name")

        if (channelName) {
            db.collection('rooms').add({
                name: channelName,
            })
        }
    }; 

    return (
        <div className="sidebarOption" onClick={addChannelOption ? addChannel : selectChannel}>
            {Icon && <Icon className="sidebarOption--icon" />}
            {Icon ? (
                <h3>
                    {tittle}
                </h3>
            ): (<h3 className="sidebarOption--channel">
                <span className="sidebarOption--hash">#</span>
                {tittle}
            </h3>
            )}
        </div>
    );
}

export default SidebarOption;
