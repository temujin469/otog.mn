import React from 'react'
import { MdOutlineChevronRight } from 'react-icons/md'
import classNames from 'classnames'
import Icon from './Icon'

export const ReadMoreButton = () => {
  return (
    <p className={'text-primary flex gap-1 items-center hover:underline '}>
      Дэлгэрэнүй үзэх <MdOutlineChevronRight className='text-lg' />
    </p>
  )
}

export const WithIcon = ({ icon, title,size }: { icon: string, title: string,size?:"sm"|"md"|"lg"}) => {
  const style = classNames('flex items-center gap-2 md:text-base',{"text-[13px]":size === "sm","text-base":size === "md","text-lg":size === "lg" })

  return (
    <div className={style}>
      <Icon iconName={icon} />
      <p>{title}</p>
    </div>
  )
}


