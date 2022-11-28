import { Req } from 'Interface/Axios'

import { http } from '../http'

const path_data = 'data'

const GetData = (data: Q_Data.Info): Req<R_Data.Info> =>
	http.post(path_data, data)

export const Data = {
	GetData
}
