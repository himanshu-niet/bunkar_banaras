"use client"
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

const page = () => {
    const searchParams = useSearchParams()
    const [token, setToken] = useState();

    useEffect(() => {
        const tkn = searchParams.get('token');
        axios.get(`/api/verifyToken?token=${tkn}`)
            .then((res) => {
                setToken(tkn)
            }).catch((err) => {
                alert("Token Exipre..")
                location.href = "/resetPassword"
            })

    }, [])

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        onSubmit: (values, { resetForm }) => {
            console.log(values)

            if (values.password != values.confirmPassword) {
                alert("Password and Confirm Password not Same")
                resetForm()
                return
            }
            axios.post(`api/changePassword?token=${token}`, { password: values.password }).then((res) => {
                console.log(res)
                if (res.data.success) {
                    alert("Password Succesfully Change..")
                    location.href = "/login"
                }
                else {
                    alert("Try Again..")
                }
            }).catch((err) => {
                console.log(err)
                alert("Token Exipre")
                 location.href="/resetPassword"
            })
        }
    })


    return (
        <section className='bg-gray-50 pt-20 lg:pt-24 p-b-116'>
            {/* component */}
            <div className="max-w-lg mx-auto my-10 bg-white  p-8 rounded-xl shadow shadow-slate-300">
                <h1 className="text-4xl font-medium">Change password</h1>
                <div className="my-10">
                    <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-5">
                        <label htmlFor="password">
                            <p className="font-medium text-slate-700 pb-2">New Password</p>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Enter New Password"
                            />
                        </label>
                        <label htmlFor="confirmPassword">
                            <p className="font-medium text-slate-700 pb-2">Confirm Password</p>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="text"
                                value={formik.values.confirmPassword}
                                onChange={formik.handleChange}
                                className="w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                                placeholder="Enter Confirm Password"
                            />
                        </label>
                        <button type='submit' className="w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center btn-m-lm">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                                />
                            </svg>
                            <span>Change password</span>
                        </button>

                    </form>
                </div>
            </div>
        </section>

    )
}

export default page