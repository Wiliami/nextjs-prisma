'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { usersOptions } from './user'

export function UserInfo() {
  const { data } = useSuspenseQuery(usersOptions)

  return (
    <ul>
      {data.map((user: any) => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}