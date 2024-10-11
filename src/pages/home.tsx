import { Button } from '../components/common/button/button'
import { TextInput } from '../components/common/textInput/textInput'
import { DropDownMenu } from '../components/common/dropDownMenu/dropDownMenu'

import styled from 'styled-components'

import "../styles/font_import.css"
import { font } from '../styles/constants'

export default function Home() {
    return (
        <StyledHome>
            <Button text="Новый вклад" />
            <TextInput placeholder="Сумма" />
            <DropDownMenu options={["дн", "мес", "год"]}
                          accent={false}
                          defaultValue="Выберите..."
            />
        </StyledHome>
    )
}

const StyledHome = styled.section`
    font-family: ${font.family};
`;

  