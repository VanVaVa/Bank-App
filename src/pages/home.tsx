import { StyledButton } from '../components/common/button/button'
import { DropDownMenu } from '../components/common/dropDownMenu/dropDownMenu'
import { FlexBox } from '../components/common/flexBox/flexBox'
import { ThemeSwitcher } from '../components/themeSwitcher/themeSwitcher'

import { Card } from '../components/card'

import styled from 'styled-components'

import "../styles/font_import.css"
import { colors } from '../styles/constants'

export default function Home() {
    return (
        <>
            <Header>
                <FlexBox $justifyContent='space-between'>
                    <StyledButton>Новый вклад</StyledButton>
                    <FlexBox $justifyContent='space-between'>
                        <DropDownMenu options={["рус", "eng"]} defaultValue='рус'/>
                        <ThemeSwitcher></ThemeSwitcher>
                    </FlexBox>
                </FlexBox>
            </Header>
            <Card></Card>
        </>
    )
}

const Header = styled.header`
    padding: 48px 55px;
    filter: drop-shadow(0 0 10px grey);
    background-color: ${colors.light};
`

  