import React from 'react'

export default function ExploreBtn({ children }) {
  return (
    <div className='border border-solid border-black py-8 px-6 bg-white text-black text-14 lg:text-xl font-medium capitalize transition duration-300 ease-in-out flex items-center justify-center shadow-xl hover:bg-black hover:text-white hover:shadow-none'>{ children }</div>
  )
}
