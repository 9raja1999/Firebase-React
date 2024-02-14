import React from 'react'

function WithLoading(Component) {
  return function ButtonWithLoading({ isLoading }) {
    if(isLoading) return <button>Loading ...</button>
    return <Component />
  }
}

export default WithLoading