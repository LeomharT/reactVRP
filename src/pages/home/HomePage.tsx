import {
    Chrome
} from '@zendeskgarden/react-chrome';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { storeHome } from '../../redux/HomeStore/Home_Store';
import ContentBody from './ContentBody';
import SideBar from './SideBar';




export default function HomePage() {
    return (
        <Provider store={storeHome}>
            <ThemeProvider theme={DEFAULT_THEME} >
                <Chrome isFluid  >
                    <SideBar />
                    <ContentBody />
                </Chrome>
            </ThemeProvider>

        </Provider>

    );
}
