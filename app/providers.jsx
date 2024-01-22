'use client'

import { Toaster } from "react-hot-toast"

const Providers = ({chilndren}) => {
  return (
    <>
      <Toaster position="top-center"/>
      {chilndren}
    </>
  )
}

export default Providers
