import { queryOptions } from '@tanstack/react-query'
import { getUsers } from '../../../functions/get-users'

export const usersOptions = queryOptions({
    queryKey: ['users'],
    queryFn: getUsers
})