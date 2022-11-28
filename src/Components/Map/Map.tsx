import { FC } from 'react'

import { MapProps } from './IMap'

export const Map: FC<MapProps> = ({
	keyName = '',
	data,
	Comp,
	props,
	onClick
}) => {
	return (
		<>
			{data &&
				data.map((item, index) => (
					<Comp
						{...item}
						{...props}
						index={index}
						key={`map-${index}-${
							item ? (keyName in item ? item[keyName] : 'none') : ''
						}`}
						onClick={onClick}
					/>
				))}
		</>
	)
}

Map.defaultProps = { keyName: 'id' }
