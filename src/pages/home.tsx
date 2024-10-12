import { StyledButton } from '../components/common/button/button'
import { DropDownMenu } from '../components/common/dropDownMenu/dropDownMenu'
import { FlexBox } from '../components/common/flexBox/flexBox'
import { ThemeSwitcher } from '../components/themeSwitcher/themeSwitcher'

import { Card } from '../components/card'

import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid';

import "../styles/font_import.css"
import { colorsDark, colorsLight } from '../styles/constants'
import { ThemeProvider } from 'styled-components'
import { ReactNode, useState } from 'react'



export default function Home() {
    const [cards, setCards] = useState<{id: string; value: ReactNode}[]>([])
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    
    const toggleTheme = () => {
        setIsDarkTheme((prevTheme) => !prevTheme);
    }

    const addCard = () => {
        const tempId = uuidv4()
        const newCard = {
            id: tempId,
            value: <li><Card id={tempId} onRemove={removeCard}/></li>,
        }
        setCards([...cards, newCard])
    }

    const setItems = () => {
        if (cards.length !== 0) {
            return (
                <CardList>
                    {cards.map(card => card.value)}
                </CardList>
            )
        } else {
            return <EmptyList>Здесь будут ваши вклады</EmptyList>
        }
    }

    const removeCard = (id: string) => {
        setCards(prev => prev.filter(el => el.id !== id))
    };

    return (
        <>
            <ThemeProvider theme={isDarkTheme ? colorsDark : colorsLight}>
                <Header>
                    <FlexBox $justifyContent='space-between'>
                        <StyledButton onClick={addCard}>Новый вклад</StyledButton>
                        <FlexBox $justifyContent='space-between'>
                            <DropDownMenu options={["рус", "eng"]} defaultValue='рус'/>
                            <ThemeSwitcher onSwitch={toggleTheme}></ThemeSwitcher>
                        </FlexBox>
                    </FlexBox>
                </Header>
                <StyledPageBody>
                        {setItems()}
                </StyledPageBody>
                <StyledFooter>

                </StyledFooter>
            </ThemeProvider>
        </>
    )
}

const Header = styled.header`
    padding: 48px 55px;
    filter: drop-shadow(0 0 10px black);
    background-color: ${props => props.theme.light};
`;

const StyledPageBody = styled.div`
    background-color: ${props => props.theme.light};
    padding: 73px 55px;
    min-height: 860px;
`;

const StyledFooter = styled.footer`
    padding: 95px 165px;
    background-color: ${props => props.theme.grey};
    filter: drop-shadow(0 0 10px black);
`;

const CardList = styled.ul`
    display: flex;
`;

const EmptyList = styled.span`
    margin: auto;
    font-size: 96px;
    color: ${props => props.theme.shade}
`

  