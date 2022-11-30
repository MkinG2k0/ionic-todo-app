import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import { FC } from 'react'
import { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import style from './SwiperMap.module.scss'

interface SwiperMapProps {
	data: any[]
	Component: any
	props?: object
	onClick?: () => void
	spaceBetween?: number
}

export const SwiperMap: FC<SwiperMapProps> = ({
	data,
	Component,
	props,
	onClick,
	spaceBetween
}) => {
	return (
		<div className={style.wrap}>
			<Swiper
				modules={[Scrollbar]}
				spaceBetween={spaceBetween}
				slidesPerView={3}
				scrollbar={{ draggable: true }}
			>
				{data.map((item, index) => (
					<SwiperSlide key={`slide-${index}`}>
						<Component {...item} {...props} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
SwiperMap.defaultProps = {
	spaceBetween: 10
}
