import { Input } from "./common/Input/Input";
import { DropDownMenu } from "./common/dropDownMenu/dropDownMenu";
import { Gridbox } from "./common/gridbox/gridBox";
import { FlexBox } from "./common/flexBox/flexBox";

import styled from "styled-components";
import React from "react";
import { Card as CardType } from "../pages/home";

const formStyle = {
  marginBlock: "27px",
};

const profitBoxStyle = {
  marginTop: "40px",
};

type CardProps = {
  id: string;
  onRemove: (id: string) => void;
  name: string;
  sum: string;
  currency: string;
  percentage: string;
  time: string;
  timeUnit: string;
  profitTime: string;
  account: string;
  changeValue: (toChange: keyof CardType, newValue: string, id: string) => void;
};

export const Card: React.FC<CardProps> = ({
  id,
  onRemove,
  name,
  sum,
  currency,
  percentage,
  time,
  timeUnit,
  profitTime,
  account,
  changeValue,
}) => {
  const remover = () => {
    onRemove(id);
  };

  const changeDropDownMenu = (value: string, param: keyof CardType) =>
    changeValue(param, value, id);

  return (
    <CardWrapper>
      <form>
        <FlexBox $justifyContent="space-between">
          <DepositName
            placeholder="Имя вклада"
            value={name}
            onChange={(e) => changeValue("name", e.target.value, id)}
          ></DepositName>
          <button type="button" onClick={remover}>
            <svg
              width="48"
              height="51"
              viewBox="0 0 48 51"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="10" width="48" height="9" fill="#E27277" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M43 15H5V51H43V15ZM35 18H13V43H35V18Z"
                fill="#E27277"
              />
              <path
                d="M34 10C34 7.34784 32.9464 4.8043 31.0711 2.92893C29.1957 1.05357 26.6522 2.00233e-07 24 0C21.3478 -2.00233e-07 18.8043 1.05357 16.9289 2.92893C15.0536 4.80429 14 7.34783 14 10L24 10H34Z"
                fill="#E27277"
              />
            </svg>
          </button>
        </FlexBox>
        <Gridbox $rows={3} $gap={34} style={formStyle}>
          <div>
            <Input
              placeholder="Сумма"
              value={String(sum)}
              onChange={(e) => {
                changeValue("sum", e.target.value, id);
                console.log(e.target.value);
              }}
            ></Input>
            <DropDownMenu
              options={["руб", "usd"]}
              defaultValue={currency}
              param="currency"
              onChange={changeDropDownMenu}
            ></DropDownMenu>
          </div>
          <div>
            <Input
              placeholder="Ставка"
              value={percentage}
              onChange={(e) => changeValue("percentage", e.target.value, id)}
              width={198}
            ></Input>
            <Label padding_left={29}>%</Label>
          </div>
          <div>
            <Input
              placeholder="Срок"
              value={String(time)}
              onChange={(e) => changeValue("time", e.target.value, id)}
              width={198}
            ></Input>
            <DropDownMenu
              options={["дн", "мес", "год"]}
              defaultValue={timeUnit}
              param="timeUnit"
              onChange={changeDropDownMenu}
            />
          </div>
        </Gridbox>
        <Gridbox $rows={2} $gap={31}>
          <FlexBox $justifyContent="space-between">
            <Label>Начисление:</Label>
            <DropDownMenu
              options={["ежемесячно", "ежегодно"]}
              defaultValue={profitTime}
              accent={true}
              param="profitTime"
              onChange={changeDropDownMenu}
            />
          </FlexBox>
          <FlexBox $justifyContent="space-between">
            <Label>Счет:</Label>
            <DropDownMenu
              options={["вкладчика", "отдельный"]}
              defaultValue={account}
              accent={true}
              param="account"
              onChange={changeDropDownMenu}
            />
          </FlexBox>
        </Gridbox>
      </form>
      <Gridbox $columns={2} style={profitBoxStyle}>
        <Label>Доход:</Label>
        <DepositResult>0 руб</DepositResult>
      </Gridbox>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  padding: 41px;
  border-radius: 30px;
  background-color: ${(props) => props.theme.light};
  filter: drop-shadow(0 0 8px black);
  max-width: 648px;
  margin-right: 55px;
`;

const Label = styled.span<{ padding_left?: number }>`
  padding-left: ${(props) => props.padding_left}px;
  color: ${(props) => props.theme.dark};
`;

const DepositName = styled.input`
  background-color: transparent;
  font-size: 48px;
  color: ${(props) => props.theme.dark};
  max-width: 400px;

  &:placeholder-shown {
    color: ${(props) => props.theme.dark};
  }
`;

const DepositResult = styled.div`
  font-size: 48px;
  color: ${(props) => props.theme.dark};
  margin-left: 29px;
`;
