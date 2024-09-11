import React from 'react';
import SmsIcon from '@mui/icons-material/Sms';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

export const SideBarData = [
    {
        title: "Chats",
        icon: <SmsIcon style={{fontSize:"64px"}}/>,
        link: "/Chats",
    },
    {
        title: "Shop",
        icon: <WorkspacePremiumIcon style={{fontSize:"64px"}}/>,
        link: "/Shop",
    },
]