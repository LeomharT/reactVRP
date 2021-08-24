import { Nav, NavItem, NavItemIcon, NavItemText } from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { IsDarkThemeSelector, IsExpandedSelector } from '../../redux/HomeStore/Home_Selector';
import { ThemeType } from '../../redux/HomeStore/Home_Types';
export default function SideBar() {
    const [nav, setNav] = useState('nav-1');
    const isExpandedSelector: boolean = useSelector(IsExpandedSelector);
    const isDarkThemeSelector: boolean = useSelector(IsDarkThemeSelector);

    return (
        <Nav isExpanded={isExpandedSelector} style={{ backgroundColor: isDarkThemeSelector ? ThemeType.DARK : ThemeType.LIGHT }}>
            <NavItem hasLogo>
                <NavItemIcon>
                    <ProductIcon style={{ color: PALETTE.green[400] }} />
                </NavItemIcon>
                {isExpandedSelector && <NavItemText>Zendesk Garden</NavItemText>}
            </NavItem>
            <NavItem isCurrent={nav === 'nav-1'} onClick={() => setNav('nav-1')}>
                <NavItemIcon>
                    <HomeIcon />
                </NavItemIcon>
                {isExpandedSelector && <NavItemText>Home</NavItemText>}
            </NavItem>
            <NavItem isCurrent={nav === 'nav-2'} onClick={() => setNav('nav-2')}>
                <NavItemIcon>
                    <EmailIcon />
                </NavItemIcon>
                {isExpandedSelector && <NavItemText>Email</NavItemText>}
            </NavItem>
            <NavItem isCurrent={nav === 'nav-3'} onClick={() => setNav('nav-3')}>
                <NavItemIcon>
                    <SettingsIcon />
                </NavItemIcon>
                {isExpandedSelector && <NavItemText>Settings</NavItemText>}
            </NavItem>
            <NavItem hasBrandmark title="Zendesk">
                <NavItemIcon>
                    <ZendeskIcon />
                </NavItemIcon>
                <NavItemText>Zendesk</NavItemText>
            </NavItem>
        </Nav>
    );
}
