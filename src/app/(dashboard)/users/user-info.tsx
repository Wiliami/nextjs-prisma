'use client'

import React from 'react'
import { useSuspenseQuery } from '@tanstack/react-query'
import { usersOptions } from './user'

export function UserInfo() {
  const { data } = useSuspenseQuery(usersOptions)

  return (
    <div>
      <figure>
        <h2>I'm {data.name}</h2>
      </figure>
    </div>
  )
}