"use client";

import Block from "@/shared/ui/Block/Block";
import { InputNumber, Select } from "antd";
import { Option } from "antd/es/mentions";
import React, { useState } from "react";

type Props = {};
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
  </Select>
);

export default function Converter({}: Props) {
  const variantsSymb: any = {
    RUB: "₽",
    CNY: "$",
    USD: "¥",
  };

  const variants: any = {
    RUB: {
      CNY: 0.0773,
      RUB: 1,
      USD: 0.01081,
    },
    CNY: {
      CNY: 1,
      RUB: 12.9373,
      USD: 0.1397,
    },
    USD: {
      CNY: 7.1593,
      RUB: 92.5429,
      USD: 1,
    },
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
        {variantsSymb[left]}
      </div>
    </Block>
  );
}
