import {
    Body,
    Content, Header, HeaderItem,
    HeaderItemIcon, HeaderItemText, Main, Sidebar
} from '@zendeskgarden/react-chrome';
import { MD, XXL } from '@zendeskgarden/react-typography';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import React from 'react';


export default function ContentBody() {
    return (
        <Body hasFooter>
            <Header>
                <HeaderItem>
                    <HeaderItemIcon>
                        <MenuTrayIcon />
                    </HeaderItemIcon>
                    <HeaderItemText isClipped>Products</HeaderItemText>
                </HeaderItem>
                <HeaderItem isRound>
                    <HeaderItemIcon>
                        <PersonIcon />
                    </HeaderItemIcon>
                    <HeaderItemText isClipped>User</HeaderItemText>
                </HeaderItem>
            </Header>
            <Content id="example-main-content">
                <Main style={{ padding: 28 }}>
                    <XXL>Main Content</XXL>
                    <MD>Beetroot water spinach okra water chestnut ricebean pea catsear.</MD>
                </Main>
                <Sidebar style={{ padding: 28 }}>
                    <XXL>Example Sidebar</XXL>
                    <MD>
                        Beetroot water spinach okra water chestnut ricebean pea catsear courgette summer
                        purslane. Water spinach arugula pea tatsoi aubergine spring onion bush tomato kale
                        radicchio turnip chicory salsify pea sprouts fava bean.
                    </MD>
                </Sidebar>
            </Content>
        </Body>
    );
}
