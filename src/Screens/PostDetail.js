import React from 'react'
import { useLocation } from 'react-router-dom'

const PostDetail = () => {

  const { pathname } = useLocation();
  console.log(pathname.split("/").pop(), "pathname")

  return (
    <div>
      <div>
        PostDetail
      </div>
    </div>
  )
}

export default PostDetail