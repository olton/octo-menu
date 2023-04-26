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
            <Menu hotkeys={true} scrollStep={20}>
                <Group title="Button">
                    <Button caption="Home" icon={<MifIcon name="home"/>}/>
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
                    <IconButton caption="Home" icon={<MifIcon name="home"/>}/>
                    <IconButton caption="Share" icon="mif-share" disabled/>
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
                    <ToolButton title="Share" icon="mif-share" disabled/>
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
                            <DropdownMenuItem caption="Item 2" checkable onClick={(...rest) => console.log(...rest)}/>
                            <DropdownMenuItem caption="Item 3" checkable/>
                            <DropdownMenuDivider/>
                            <DropdownMenuGroup checked={2}>
                                <DropdownMenuItem caption="Item 4"/>
                                <DropdownMenuItem caption="Item 5" onClick={(...rest) => console.log(...rest)}/>
                                <DropdownMenuItem caption="Item 6"/>
                            </DropdownMenuGroup>
                        </DropdownMenu>
                    </SplitButton>
                    <VerticalDivider/>
                    <SplitButton icon="mif-apps" caption="Apps" disabled disabledSecondary></SplitButton>
                    <VerticalDivider/>
                    <SplitButton icon="mif-apps" caption="Apps" onClick={ () => alert('Ku from main') } onClickSecondary={ () => alert('Ku from secondary') }></SplitButton>
                </Group>
                <Group title="Button Group">
                    <ButtonGroup radio={false} style={{flexDirection: 'column'}}>
                        <ToolButton title="Bold" icon="mif-bold" hotkey="alt+b"/>
                        <ToolButton title="Italic" icon="mif-italic" hotkey="alt+i"/>
                        <ToolButton title="Underline" icon="mif-underline"  hotkey="alt+u"/>
                    </ButtonGroup>
                    <VerticalDivider/>
                    <ButtonGroup radio={true} style={{flexDirection: 'column'}}>
                        <ToolButton title="Left" icon="mif-paragraph-left"/>
                        <ToolButton title="Center" icon="mif-paragraph-center"/>
                        <ToolButton title="Right" icon="mif-paragraph-right"/>
                    </ButtonGroup>
                    <VerticalDivider/>
                    <ButtonGroup radio={true} style={{flexDirection: 'column'}}>
                        <IconButton caption="Left" icon="mif-paragraph-left"/>
                        <IconButton caption="Center" icon="mif-paragraph-center"/>
                        <IconButton caption="Right" icon="mif-paragraph-right"/>
                    </ButtonGroup>
                    <VerticalDivider/>
                    <ButtonGroup radio={true}>
                        <Button caption="Left" icon="mif-paragraph-left"/>
                        <Button caption="Center" icon="mif-paragraph-center"/>
                        <Button caption="Right" icon="mif-paragraph-right"/>
                    </ButtonGroup>
                </Group>
                <Group title="Overload">
                    <Button caption="Home" icon="mif-home" disabled/>
                    <Button caption="Home" icon="mif-home"/>
                    <Button caption="Home" icon="mif-home"/>
                    <Button caption="Home" icon="mif-home"/>
                    <Button caption="Home" icon="mif-home"/>
                    <Button caption="Rocket" icon="mif-rocket"/>
                </Group>

                <ServicePanel>
                    <ToolButton title="Hotkeys" icon="mif-keyboard" onClick={() => alert("Button inside a ServicePanel clicked!")}/>
                </ServicePanel>
            </Menu>
        </>
    )
}

export default App