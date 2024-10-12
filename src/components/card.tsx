import { TextInput } from './common/textInput/textInput'
import { DropDownMenu } from './common/dropDownMenu/dropDownMenu'
import { Gridbox } from './common/gridbox/gridBox';
import { FlexBox } from './common/flexBox/flexBox';

import styled from "styled-components"

import { colors } from '../styles/constants';

const formStyle = {
    marginBlock: "27px",
}

const profitStyle = {
    marginLeft: "29px",
}

const profitBoxStyle = {
    marginTop: "40px",
}

export function Card() {
    return (
        <CardWrapper>
            <form>
                <FlexBox $justifyContent='space-between'>
                    <DepositName placeholder='Имя вклада'></DepositName>
                    <button type="button">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="24" cy="24" r="22" stroke="#DBDEF0" stroke-width="4"/>
                        <rect x="11.9791" y="33.1924" width="30" height="4" transform="rotate(-45 11.9791 33.1924)" fill="#DBDEF0"/>
                        <rect x="33.1924" y="36.0208" width="30" height="4" transform="rotate(-135 33.1924 36.0208)" fill="#DBDEF0"/>
                    </svg>
                    </button>
                </FlexBox>
                <Gridbox $rows={3} $gap={34} style={formStyle}>
                    <div>
                        <TextInput placeholder='Сумма'></TextInput>
                        <DropDownMenu options={["руб", "usd"]} defaultValue='руб'></DropDownMenu>
                    </div>
                    <div>
                        <TextInput placeholder='Ставка'  width={198}></TextInput>
                        <Label padding_left={29}>%</Label>
                    </div>
                    <div>
                        <TextInput placeholder='Срок'  width={198}></TextInput>
                        <DropDownMenu options={["дн", "мес", "год"]}
                                    defaultValue="дн"
                        />
                    </div>
                </Gridbox>
                <Gridbox $rows={2} $gap={31}>
                    <FlexBox $justifyContent='space-between'>
                        <Label>Начисление:</Label>
                        <DropDownMenu options={["ежемесячно", "ежегодно"]} 
                                      defaultValue='ежемесячно'
                                      accent={true}
                        />
                    </FlexBox>
                    <FlexBox $justifyContent='space-between'>
                        <Label>Счет:</Label>
                        <DropDownMenu options={["вкладчика", "отдельный"]} 
                                      defaultValue='вкладчика'
                                      accent={true}
                        />
                    </FlexBox>
                </Gridbox>
            </form>
                <Gridbox $columns={2} style={profitBoxStyle}>
                    <Label>Доход:</Label>
                    <h2 style={profitStyle}>0 руб</h2>
                </Gridbox>

        </CardWrapper>
    );
}

const CardWrapper = styled.div`
    padding: 41px;
    border-radius: 30px;
    background-color: white;
    filter: drop-shadow(0 0 10px grey);
    max-width: 648px;
    margin: 73px 55px
`;

const Label = styled.span<{ padding_left?: number }>`
    padding-left: ${props => props.padding_left}px;
`;

const DepositName = styled.input`
    background-color: transparent;
    font-size: 48px;
    color: ${colors.dark};
    max-width: 400px;
    
    &:placeholder-shown {
        color: ${colors.dark};
    }
`