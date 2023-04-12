import React from "react";
import {
    Menu,
    Group,
    Divider,
    Button,
    Dropdown,
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuDivider,
    IconButton,
    ToolButton,
    SplitButton,
    ButtonGroup,
    HorizontalDivider,
    VerticalDivider,
    ServicePanel, DropdownMenuGroup
} from "../src";
import {MifIcon} from "@metroui/icons";

import "./index.less"

const App = () => {
    return (
        <>
            <Menu hotkeys={true}>
                <Group title="Button">
                    <Button caption="Home" icon="mif-home"/>
                    <Button caption="Share" icon="mif-share"/>
                    <VerticalDivider/>
                    <Button caption="Rocket" icon="mif-rocket"/>
                    <Divider/>
                    <Dropdown>
                        <Button caption="Apps" icon="mif-apps"/>
                        <DropdownMenu>
                            <DropdownMenuItem caption="Item 1" icon="" image=""/>
                            <DropdownMenuItem caption="Author's site" icon="mif-rocket" image="" target="https://pimenov.com.ua" hotkey="alt+h"/>
                            <DropdownMenuDivider/>
                            <DropdownMenuItem caption="Item 1" icon="" image=""/>
                            <DropdownMenuItem caption="Item 2" icon="mif-rocket" image="" onClick={() => alert('ku')} hotkey="alt+ctrl+1"/>
                        </DropdownMenu>
                    </Dropdown>
                </Group>
                <Group title="Icon Button" style={{width: 100}}>
                    <IconButton caption="Home" icon="mif-home"/>
                    <IconButton caption="Share" icon="mif-share"/>
                    <HorizontalDivider/>
                    <Dropdown>
                        <IconButton caption="Rocket" icon="mif-rocket"/>
                        <DropdownMenu>
                            <DropdownMenuItem caption="Item 1" icon="" image=""/>
                            <DropdownMenuItem caption="Author's site" icon="mif-rocket" image="" target="https://pimenov.com.ua" hotkey="alt+h"/>
                            <DropdownMenuDivider/>
                            <DropdownMenuItem caption="Item 1" icon="" image=""/>
                            <DropdownMenuItem caption="Item 2" icon="mif-rocket" image="" onClick={() => alert('ku')} hotkey="alt+ctrl+1"/>
                        </DropdownMenu>
                    </Dropdown>
                </Group>
                <Group title="Tool Button">
                    <ToolButton title="Home" icon="mif-home"/>
                    <ToolButton title="Share" icon="mif-share"/>
                    <Dropdown>
                        <ToolButton caption="Rocket" icon="mif-rocket"/>
                        <DropdownMenu>
                            <DropdownMenuItem caption="Item 1" icon="" image=""/>
                            <DropdownMenuItem caption="Author's site" icon="mif-rocket" image="" target="https://pimenov.com.ua" hotkey="alt+h"/>
                            <DropdownMenuDivider/>
                            <DropdownMenuItem caption="Item 1" icon="" image="" checked/>
                            <DropdownMenuItem caption="Item 2" icon="mif-rocket" image="" onClick={() => alert('ku')} hotkey="alt+ctrl+1"/>
                        </DropdownMenu>
                    </Dropdown>
                </Group>
                <Group title="Split Button">
                    <SplitButton icon="mif-apps" caption="Apps">
                        <DropdownMenu>
                            <DropdownMenuItem caption="Item 1" checkable checked/>
                            <DropdownMenuItem caption="Item 2"/>
                            <DropdownMenuItem caption="Item 3"/>
                            <DropdownMenuDivider/>
                            <DropdownMenuGroup checked={2}>
                                <DropdownMenuItem caption="Item 4"/>
                                <DropdownMenuItem caption="Item 5"/>
                                <DropdownMenuItem caption="Item 6"/>
                            </DropdownMenuGroup>
                        </DropdownMenu>
                    </SplitButton>
                </Group>
                <Group title="Group">
                    <ButtonGroup radio={true}>
                        <ToolButton title="Bold" icon="mif-bold"/>
                        <ToolButton title="Italic" icon="mif-italic"/>
                    </ButtonGroup>
                </Group>

                <ServicePanel>
                    <ToolButton title="Hotkeys" icon="mif-keyboard"/>
                </ServicePanel>
            </Menu>
        </>
    )
}

export default App