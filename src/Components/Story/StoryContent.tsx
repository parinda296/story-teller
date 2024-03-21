import React from 'react'

export default function StoryContent({ text }: { text: string }) {
  return (
    <>
      <div>
        <p className='text-lg text-white' style={{ fontFamily: "'Dancing Script', cursive" }}>{text}</p>
      </div>
     
    </>
  )
}
