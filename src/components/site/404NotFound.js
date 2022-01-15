import React from 'react'
import styled from 'styled-components'

const NotFound = () => {
    return (
        
        <NotFoun>
        <h1>404 Not Found</h1>
        </NotFoun>
            
        
    )
}

export default NotFound
const NotFoun = styled.div`
  background: red;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  width: 93vw;
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
`