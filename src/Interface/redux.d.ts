type TStatus = 'idle' | 'pending' | 'fulfilled' | 'rejected'
type TStatusReq = 'error' | 'success'
type TError = string | undefined | null

interface ISet<T> {
	name: T
	value: string
}

interface IReqWrap<T> {
	status: TStatusReq
	result: T
}

interface IStatus<T> {
	status: TStatus
	error?: TError
	data?: T
}
