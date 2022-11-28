import { FC } from 'react'

import style from './Footer.module.scss'

interface FooterProps {}

export const Footer: FC<FooterProps> = ({}) => {
	return <div className={style.wrap}>Footer</div>
}
