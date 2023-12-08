import clsx from 'clsx'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
}

export default function Block({children, className}: Props) {
  return (
    <div className={clsx('bg-white rounded p-16', className)}>{children}</div>
  )
}