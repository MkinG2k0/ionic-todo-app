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
}

export const SwiperMap: FC<SwiperMapProps> = ({ data, Component }) => {
	return (
		<div className={style.wrap}>
			<Swiper
				modules={[Navigation, Pagination, Scrollbar, A11y]}
				spaceBetween={50}
				slidesPerView={3}
				navigation
				pagination={{ clickable: true }}
				scrollbar={{ draggable: true }}
				onSwiper={(swiper) => console.log(swiper)}
				onSlideChange={() => console.log('slide change')}
			>
				{data.map((item, index) => (
					<SwiperSlide key={`slide-${index}`}>
						<Component {...item} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	)
}
