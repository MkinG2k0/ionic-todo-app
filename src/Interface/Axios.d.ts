import { AxiosResponse } from 'axios'

type Req<T> = Promise<AxiosResponse<IReqWrap<T>>>
