import {
    Chrome
} from '@zendeskgarden/react-chrome';
import React from 'react';
import { Provider } from 'react-redux';
import { storeHome } from '../../redux/HomeStore/Home_Store';
import ContentBody from './Body';
import SideBar from './SideBar';




export default function HomePage() {


    return (
        <Provider store={storeHome}>
            <Chrome isFluid  >
                <SideBar />
                <ContentBody />
            </Chrome>
        </Provider>

    );
}
