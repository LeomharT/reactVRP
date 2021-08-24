import { Nav, NavItem, NavItemIcon, NavItemText } from '@zendeskgarden/react-chrome';
import { PALETTE } from '@zendeskgarden/react-theming';
import { ReactComponent as ProductIcon } from '@zendeskgarden/svg-icons/src/26/garden.svg';
import { ReactComponent as ZendeskIcon } from '@zendeskgarden/svg-icons/src/26/zendesk.svg';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { IsDarkThemeSelector, IsExpandedSelector } from '../../redux/HomeStore/Home_Selector';
import { ThemeType } from '../../redux/HomeStore/Home_Types';
import { router, RouterType } from '../../route/routers';
export default function SideBar() {
    const [nav, setNav] = useState<string>();
    const isExpandedSelector: boolean = useSelector(IsExpandedSelector);
    const isDarkThemeSelector: boolean = useSelector(IsDarkThemeSelector);
    const history = useHistory();

    return (
        <Nav isExpanded={isExpandedSelector} style={{ backgroundColor: isDarkThemeSelector ? ThemeType.DARK : ThemeType.LIGHT }}>
            <NavItem hasLogo>
                <NavItemIcon>
                    <ProductIcon style={{ color: PALETTE.green[400] }} />
                </NavItemIcon>
                {isExpandedSelector && <NavItemText>Zendesk Garden</NavItemText>}
            </NavItem>
            {router[0].childrenRoute!.map((r: RouterType) => {
                console.log(r.icon);
                return (
                    <NavItem
                        key={r.path}
                        isCurrent={nav === r.title}
                        onClick={() => {
                            setNav(r.title);
                            history.push(r.path);
                        }}
                    >
                        <NavItemIcon>
                            {r.icon}
                        </NavItemIcon>
                        {isExpandedSelector && <NavItemText>{r.title} </NavItemText>}
                    </NavItem>
                );
            })}
            <NavItem hasBrandmark title="Zendesk">
                <NavItemIcon>
                    <ZendeskIcon />
                </NavItemIcon>
                <NavItemText>Zendesk</NavItemText>
            </NavItem>
        </Nav>
    );
}
