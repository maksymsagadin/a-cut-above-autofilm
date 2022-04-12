import React, { useState, useEffect, useRef } from 'react'

import { submitComment } from '../services'

const CommentsForm = ({ slug }) => {
    const [error, setError] = useState(false)
    const [localStorage, setLocalStorage] = useState(null)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)
    const commentElement = useRef()
    const nameElement = useRef()
    const emailElement = useRef()
    const storeDataElement = useRef()

    // autofills name and email if checked in the past
    useEffect(() => {
        nameElement.current.value = window.localStorage.getItem('name')
        emailElement.current.value = window.localStorage.getItem('email')
    }, [])
    

    const handleCommentSubmission = () => {
        setError(false)

        // get input values and set to variables
        const {value: comment} = commentElement.current
        const {value: name} = nameElement.current
        const {value: email} = emailElement.current
        const {checked: storeData} = storeDataElement.current
        
        // if an input is empty then return error
        if (!comment || !name || !email) {
            setError(true)
            return
        }
        // if user has local data stored
        if (storeData) {
            window.localStorage.setItem('name', name)
            window.localStorage.setItem('email', email)
        }
        else {
            window.localStorage.removeItem('name', name)
            window.localStorage.removeItem('email', email)
        }
        
        // create comment object
        const commentObj = { name, email, comment, slug }
        // submit comment to GraphCMS
        submitComment(commentObj)
            .then((res) => {
                // show success message
                setShowSuccessMessage(true);
                // remove success message
                setTimeout(() => {
                    setShowSuccessMessage(false);
                }, 5000)
            })
    }

    return (
        <div className='bg-gray-100 bg-opacity-10 shadow-lg rounded-lg p-8 pb-12 mb-8'>
            <h3 className='text-xl text-gray-300 font-semibold mb-8 border-b pb-4'>Leave a Comment</h3>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <textarea 
                    ref={commentElement}
                    className='p-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-300 text-gray-700'
                    placeholder="Comment"
                    name='comment'
                />
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
                <input
                    type="text" ref={nameElement}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-300 text-gray-700'
                    placeholder="Name"
                    name='name'
                />
                <input
                    type="text" ref={emailElement}
                    className='py-2 px-4 outline-none w-full rounded-lg focus:ring-2 focus:ring-gray-300 bg-gray-300 text-gray-700'
                    placeholder="Email"
                    name='email'
                />
            </div>
            <div className='grid grid-cols-1 gap-4 mb-4'>
                <div className='flex'>
                    <input ref={storeDataElement} className='accent-slate-700 focus:accent-blue-600 h-6 w-6' type='checkbox' id='storeData' name='storeData' value='true' />
                    <label className='text-gray-300 cursor-pointer ml-2' htmlFor='storeData' >Save name and e-mail for next time</label>
                </div>
            </div>
            {error && <p className='text-xs text-red-500'>All fields are required.</p>}
            <div className='mt-8'>
                <button 
                    className='py-2 px-4 bg-gray-800 text-gray-200 text-lg rounded-xl transition duration-500 ease hover:bg-indigo-800' 
                    type='button' 
                    onClick={handleCommentSubmission}
                    >
                    Submit
                </button>
                {showSuccessMessage && <span className='text-xl float-right font-semibold mt-3 text-emerald-200'>Comment submitted for review.</span>}
            </div>
        </div>
    )
}

export default CommentsForm