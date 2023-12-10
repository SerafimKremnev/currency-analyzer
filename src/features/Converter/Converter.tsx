"use client";

import { IVariants } from "@/app/page";
import Block from "@/shared/ui/Block/Block";
import { InputNumber, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";

type Props = {
  variants: any;
};
type SelectProps = {
  val: string;
  value: string;
  onChange: (v: string) => void;
};

const SelectAfter = ({ val, value, onChange }: SelectProps) => (
  <Select
    value={value}
    onChange={onChange}
    style={{ width: 60 }}
    defaultValue={val}
  >
    <Option value="RUB">₽</Option>
    <Option value="USD">$</Option>
    <Option value="CNY">¥</Option>
    <Option value="EUR">€</Option>
  </Select>
);

export default function Converter({ variants }: Props) {
  const variantsSymb: any = {
    RUB: "₽",
    CNY: "¥",
    USD: "$",
    EUR: "€",
  };

  const [value, setValue] = useState<null | number>(100);
  const [left, setLeft] = useState("RUB");
  const [right, setRight] = useState("USD");

  return (
    <Block className="flex w-full gap-x-20 items-center">
      <InputNumber
        addonBefore={
          <SelectAfter value={left} onChange={(v) => setLeft(v)} val="RUB" />
        }
        addonAfter={
          <SelectAfter value={right} onChange={(v) => setRight(v)} val="USD" />
        }
        defaultValue={100}
        value={value}
        onChange={(e) => {
          if (!isNaN(Number(e)) || e === null) {
            setValue(e);
          }
        }}
      />
      <div>
        {parseFloat((variants[left][right] * (value || 0)).toFixed(3))}
        {variantsSymb[right]}
      </div>
    </Block>
  );
}
