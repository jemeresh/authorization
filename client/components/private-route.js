import React from 'react'
import Head from './head'

const PrivateComponent = () => (
  <>
    <Head title="Hello" />
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col justify-center bg-indigo-800 p-10 rounded-xl select-none">
        <img alt="wave" src="images/logo-new-text.png" />
        <span className="text-white text-right font-semibold">PrivateComponent</span>
      </div>
    </div>
  </>
)

PrivateComponent.propTypes = {}

export default React.memo(PrivateComponent)
