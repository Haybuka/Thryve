
import React from 'react'
import { AuthBaby, AuthCalender, AuthHeart } from '@/assets/icons';


const IconSelection = ({ icon }: { icon: string }) => {
    switch (icon) {
        case 'calender':
            return <AuthCalender width={24} height={24} />;
        case 'heart':
            return <AuthHeart width={24} height={24} />;
        case 'child':
            return <AuthBaby width={24} height={24} />;
        // Add more cases for other icons as needed
        default:
            return null;
    }
}

const AuthIconSelect = ({ icon }: { icon: string }) => {
    return (<IconSelection icon={icon} />
    )
}

export default AuthIconSelect

