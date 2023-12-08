"use client"

import Block from '@/shared/ui/Block/Block'
import { InputNumber, Select } from 'antd';
import { Option } from 'antd/es/mentions';
import React from 'react'

type Props = {}

const SelectAfter = ({val}: {val: string}) => (
  <Select style={{ width: 60 }} defaultValue={val}>
    <Option value="RUB">₽</Option>
    <Option value="USD">$</Option>
    <Option value="CNY">¥</Option>
  </Select>
);


export default function Converter({}: Props) {
  return (
    <Block className='flex w-full gap-x-20 items-center'>
      <InputNumber addonBefore={<SelectAfter val='RUB'/>} addonAfter={<SelectAfter val='USD'/>} defaultValue={100} />
      <div>{140}$</div>
    </Block>
  )
}