import React from 'react'
import Cards from './Cards'

export default function Main(props) {
  return (
    <main className="content">
      <Cards {...props} />
    </main>
  )
}