import React, { useRef, useEffect } from 'react'

export default function (props) {
  const { handleAudioReset, file, audioStream, handleFormSubmission } = props
  const audioRef = useRef()

  useEffect(() => {
    if (!file && !audioStream) { return }
    if (file) {
      console.log('HERE FILE', file)
      audioRef.current.src = URL.createObjectURL(file)
    } else {
      console.log('EHER AUDIO', audioStream)
      audioRef.current.src = URL.createObjectURL(audioStream)
    }
  }, [audioStream, file])
  return (
    <main className='flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 md:gap-5 justify-center pb-20 w-72 max-w-full  mx-auto'>

      <h1 className='font-semibold text-4xl sm:text-5 xl md:text-6xl'>Your<span className='text-purple-500 bold'> File</span>
      </h1>
      <div className=' flex flex-col text-left my-4 '>
        <h3 className='font-semibold'>Name</h3>
        <p className='truncate'>{file ? file.name : 'custom audio'}</p>

      </div>
      <div className='flex flex-col mb-2'>
        <audio ref={audioRef} className='w-full' controls>
          Your browser does not support the audio element.
        </audio>
      </div>
      <div className='flex items-center justify-between gap-4'>
        <button onClick={handleAudioReset} className='text-state-400 hover:text-purple-600 duration 200'> Reset</button>
        <button onClick={handleFormSubmission} className='specialBtn px-3 py-2 rounded-lg text-purple-500 flex items-center gap-2 font-medium '>
          <p>Transcribe</p>
          <i className='fa-solid fa-pen-nib'></i>
        </button>
      </div>

    </main>
  )
}
