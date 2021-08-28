import { IconButton } from '@zendeskgarden/react-buttons';
import {
    Body,
    Content, Header, HeaderItem,
    HeaderItemIcon, HeaderItemText, Main
} from '@zendeskgarden/react-chrome';
import { ColorpickerDialog, IColor } from '@zendeskgarden/react-colorpickers';
import { DEFAULT_THEME } from '@zendeskgarden/react-theming';
import { ReactComponent as MenuTrayIcon } from '@zendeskgarden/svg-icons/src/16/grid-2x2-stroke.svg';
import { ReactComponent as IndentIncreaseFillIcon } from '@zendeskgarden/svg-icons/src/16/indent-increase-fill.svg';
import { ReactComponent as LightbulbFillIcon } from '@zendeskgarden/svg-icons/src/16/lightbulb-fill.svg';
import { ReactComponent as LightbulbStrokeIcon } from '@zendeskgarden/svg-icons/src/16/lightbulb-stroke.svg';
import { ReactComponent as PaletteIcon } from '@zendeskgarden/svg-icons/src/16/palette-fill.svg';
import { ReactComponent as PersonIcon } from '@zendeskgarden/svg-icons/src/16/user-solo-stroke.svg';
import { rgba } from 'polished';
import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { SetPrimaryHue, SetSideBarToExpand, SetSideBarToFold, SetToDarkTheme, SetToLightTheme } from '../../redux/HomeStore/Home_Actions';
import { IsDarkThemeSelector, IsExpandedSelector } from '../../redux/HomeStore/Home_Selector';
import { ThemeType } from '../../redux/HomeStore/Home_Types';
import { ListingStore } from '../../redux/ListingStore/Listing_Store';
import { router, RouterType } from '../../route/routers';



export default function ContentBody(props: {}) {
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
                    <ColorpickerDialog color={color} onChange={(e: IColor) => {
                        setColor(e);
                        dispatch(SetPrimaryHue(e.hex));
                    }}>
                        <ColorPickerButton />
                    </ColorpickerDialog>
                    <IconButton
                        onClick={() => {
                            isDarkThemeSelector
                                ? dispatch(SetToLightTheme())
                                : dispatch(SetToDarkTheme());
                        }}
                    >
                        {isDarkThemeSelector
                            ? <LightbulbFillIcon />
                            : <LightbulbStrokeIcon />
                        }
                    </IconButton>
                    <IconButton>
                        <MenuTrayIcon />
                    </IconButton>
                    <HeaderItemText isClipped>Products</HeaderItemText>
                    <IconButton>
                        <PersonIcon />
                    </IconButton>
                    <HeaderItemText isClipped>User</HeaderItemText>
                </div>
            </Header>
            <Content id="example-main-content" style={{ height: "100vh" }}>
                <Main style={{ padding: 28 }}>
                    <Switch>
                        <Provider store={ListingStore}>

                            {router[0].childrenRoute?.map((r: RouterType) => {
                                return (
                                    <Route
                                        key={r.path}
                                        path={r.path}
                                        exact={r.exact}
                                        component={r.component}
                                    />
                                );
                            })}
                        </Provider>
                    </Switch>
                </Main>
            </Content>
        </Body>
    );
}
