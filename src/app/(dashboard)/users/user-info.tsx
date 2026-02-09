'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { usersOptions } from './user'

export function UserInfo() {
  const { data } = useSuspenseQuery(usersOptions)
  console.log('Meu dados:', data)

  return (
    <ul>
      {data.map((user: any) => <li>{user.name}</li>)}
    </ul>
  )
}