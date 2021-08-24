import { IconButton } from '@zendeskgarden/react-buttons';
import {
    Body,
    Content, Header, HeaderItem,
    HeaderItemIcon, HeaderItemText, Main, Sidebar
} from '@zendeskgarden/react-chrome';
import { ColorpickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { MD, XXL } from '@zendeskgarden/react-typography';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as IndentIncreaseFillIcon } from '@zendeskgarden/svg-icons/src/16/indent-increase-fill.svg';
import { ReactComponent as LightbulbFillIcon } from '@zendeskgarden/svg-icons/src/16/lightbulb-fill.svg';
import { ReactComponent as LightbulbStrokeIcon } from '@zendeskgarden/svg-icons/src/16/lightbulb-stroke.svg';
import { ReactComponent as PaletteIcon } from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import { rgba } from 'polished';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SetSideBarToExpand, SetSideBarToFold, SetToDarkTheme, SetToLightTheme } from '../../redux/HomeStore/Home_Actions';
import { IsDarkThemeSelector, IsExpandedSelector } from '../../redux/HomeStore/Home_Selector';
import { ThemeType } from '../../redux/HomeStore/Home_Types';



export default function ContentBody() {
    const ColorPickerButton = React.forwardRef(
        (props: React.ComponentPropsWithoutRef<'button'>, ref: React.Ref<HTMLButtonElement>) => (
            <IconButton aria-label="palette" ref={ref} {...props}>
                <PaletteIcon />
            </IconButton>
        )
    );
    const isExpandedSelector: boolean = useSelector(IsExpandedSelector);
    const isDarkThemeSelector: boolean = useSelector(IsDarkThemeSelector);
    const dispatch = useDispatch();
    const [color, setColor] = useState<string | IColor>(rgba(DEFAULT_THEME.palette.blue[600], 1));

    return (
        <Body hasFooter>
            <Header style={{ justifyContent: "space-between", backgroundColor: isDarkThemeSelector ? ThemeType.DARK : ThemeType.LIGHT }}>
                {/* Fold or Expand */}
                <div>
                    <HeaderItem onClick={() => {
                        isExpandedSelector
                            ? dispatch(SetSideBarToFold())
                            : dispatch(SetSideBarToExpand());
                    }}>
                        <HeaderItemIcon>
                            <IndentIncreaseFillIcon />
                        </HeaderItemIcon>
                    </HeaderItem>
                </div>
                <div>
                    <ColorpickerDialog color={color} onChange={setColor}>
                        <ColorPickerButton />
                    </ColorpickerDialog>
                    <HeaderItem>
                        <HeaderItemIcon>
                            {isDarkThemeSelector
                                ? <LightbulbFillIcon onClick={() => { dispatch(SetToLightTheme()); }} />
                                : <LightbulbStrokeIcon onClick={() => { dispatch(SetToDarkTheme()); }} />
                            }
                        </HeaderItemIcon>
                    </HeaderItem>
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
                </div>
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
