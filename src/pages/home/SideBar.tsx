import { Nav, NavItem, NavItemIcon, NavItemText } from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as EmailIcon } from '@zendeskgarden/svg-icons/src/26/email-fill.svg';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as HomeIcon } from '@zendeskgarden/svg-icons/src/26/home-fill.svg';
import { ReactComponent as SettingsIcon } from '@zendeskgarden/svg-icons/src/26/settings-fill.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import React, { useState } from 'react';
export default function SideBar() {
    const [nav, setNav] = useState('nav-1');
    const [isExpanded, setisExpanded] = useState(true);
    return (
        <Nav isExpanded={isExpanded}>
            <NavItem hasLogo>
                <NavItemIcon>
                    <ProductIcon style={{ color: PALETTE.green[400] }} />
                </NavItemIcon>
                <NavItemText>Zendesk Garden</NavItemText>
            </NavItem>
            <NavItem isCurrent={nav === 'nav-1'} onClick={() => setNav('nav-1')}>
                <NavItemIcon>
                    <HomeIcon />
                </NavItemIcon>
                <NavItemText>Home</NavItemText>
            </NavItem>
            <NavItem isCurrent={nav === 'nav-2'} onClick={() => setNav('nav-2')}>
                <NavItemIcon>
                    <EmailIcon />
                </NavItemIcon>
                <NavItemText>Email</NavItemText>
            </NavItem>
            <NavItem isCurrent={nav === 'nav-3'} onClick={() => setNav('nav-3')}>
                <NavItemIcon>
                    <SettingsIcon />
                </NavItemIcon>
                <NavItemText>Settings</NavItemText>
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
