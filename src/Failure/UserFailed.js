import React from 'react'

export const UserFailed = ({responseData}) => {
  return (
    <div className='wrapper bg-dark d-flex align-items-center justify-content-center w-100'>
            <div className='addUser'>
                <h2 className='text-center mb-3'>{responseData.message}</h2>
            </div>
    </div>
  )
}
