// noinspection UnnecessaryLocalVariableJS

import { Camera, CameraResultType } from '@capacitor/camera'
import { WebPlugin } from '@capacitor/core'

export const takePictures = async () => {
	// const image = await Camera.getPhoto({
	// 	quality: 90,
	// 	allowEditing: true,
	// 	resultType: CameraResultType.DataUrl
	// })

	const images = await Camera.pickImages({
		quality: 90
	})

	const dataFetch: Promise<Blob>[] = []
	images.photos.map(async (photo) => {
		dataFetch.push(fetch(photo.webPath).then((data) => data.blob()))
	})

	const resultDataPhoto = await Promise.all(dataFetch)

	const files: File[] = []
	resultDataPhoto.map((blob) => {
		files.push(
			new File([blob], `image.${images.photos[0].format}`, {
				type: images.photos[0].format
			})
		)
	})

	const fileReader: Promise<any>[] = []

	files.map((file) => {
		const reader = new FileReader()
		reader.readAsDataURL(file)

		fileReader.push(
			new Promise((resolve, reject) => {
				reader.addEventListener('load', () => {
					resolve(reader.result)
				})
			})
		)
	})

	const dataFileReader = await Promise.all(fileReader)

	const urls = dataFileReader.map((data) => ({ webPath: data }))

	return urls
}
