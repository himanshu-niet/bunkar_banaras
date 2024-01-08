import Link from 'next/link'
import React from 'react'

const Auth = () => {
  return (
    <>
    <Link
    href="/login"
    className="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 "
>
    <i className="fa fa-sign-in" />
</Link>

    </>
  )
}

export default Auth


