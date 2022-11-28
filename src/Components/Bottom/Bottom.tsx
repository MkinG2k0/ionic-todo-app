import { FC } from 'react'

import style from './Bottom.module.scss'

interface BottomProps {}

export const Bottom: FC<BottomProps> = ({ children }) => {
	return <div className={style.wrap}>{children}</div>
}
