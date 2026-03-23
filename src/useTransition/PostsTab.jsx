import React from 'react'

function PostsTab() {
    const items = Array.from({ length: 5000 }, (_, i) => `Post ${i + 1}`)
  return (
    <div>
      {items.map(item => (
        <p key={item}>{item}</p>
      ))}
    </div>
  )
}

export default PostsTab
