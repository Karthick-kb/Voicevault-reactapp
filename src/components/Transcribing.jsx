import React from 'react'

export default function Transcribing(props) {
    const { downloading } = props


    return (
        <div className='flex items-center flex-1 flex-col justify-center gap-10 md:gap-14 text-center pb-24 p-4'>
            <div className='flex flex-col gap-2 sm:gap-4'>

                <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'><span className='text-purple-500 bold'>Transcribing</span></h1>
                <p>{!downloading ? 'Processing Almost there!' : 'All set! Review below'}</p>
            </div>
            
            <div flex justify-center items-end h-screen>
            <div className='flex gap-5'>
                {[0, 1, 2,3,4,5].map(val => {
                    return (
                        <div key={val} className={'bar w-4 bg-slate-400 loading ' + `loading${val}`}></div>
                    )
                })}
            </div>
        </div>
        </div>
        
    )
}
