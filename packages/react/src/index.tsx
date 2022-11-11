import React from 'react'
import { styled } from './styles/index'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>Click me</Button>
}
