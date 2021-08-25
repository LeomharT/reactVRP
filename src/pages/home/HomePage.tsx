import {
    Chrome
} from '@zendeskgarden/react-chrome';
import { DEFAULT_THEME, IGardenTheme } from '@zendeskgarden/react-theming';
import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { IsDarkThemeSelector, SetPrimaryHueSelecto } from '../../redux/HomeStore/Home_Selector';
import { ThemeType } from '../../redux/HomeStore/Home_Types';
import ContentBody from './ContentBody';
import SideBar from './SideBar';

export default function HomePage() {
    const isDarkThemeSelector: boolean = useSelector(IsDarkThemeSelector);
    const setPrimaryHueSelecto: string = useSelector(SetPrimaryHueSelecto);

    const HOME_THEME = (DEFAULT_THEME: IGardenTheme): IGardenTheme => {
        return ({
            ...DEFAULT_THEME,
            colors: {
                ...DEFAULT_THEME.colors,
                chromeHue: isDarkThemeSelector ? ThemeType.DARK : ThemeType.LIGHT,
                background: isDarkThemeSelector ? ThemeType.DARK : ThemeType.LIGHT,
                foreground: !isDarkThemeSelector ? ThemeType.DARK : ThemeType.LIGHT,
                primaryHue: setPrimaryHueSelecto ?? ""
            }
        });
    };
    return (
        <ThemeProvider theme={HOME_THEME(DEFAULT_THEME)} >
            <Chrome isFluid>
                <SideBar />
                <ContentBody />
            </Chrome>
        </ThemeProvider>
    );
}
