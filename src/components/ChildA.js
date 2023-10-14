import React from 'react'

const ChildA = ({changeHandler}) => {
    console.log('Child A rendered')
  return (
    <div>ChildA</div>
  )
}

export default React.memo(ChildA)