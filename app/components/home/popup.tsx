'use client'
import React, { useState } from 'react'

const PopUp = () => {
    const [hidden, setHidden] = useState<boolean>(false)
    return (
        <div id="alert-additional-content-1" className={`fixed ${hidden ? "opacity-0" : "opacity-100"} transition-opacity z-[50] left-1/2 -translate-x-1/2 w-11/12 md:w-auto p-4 mb-4 md:max-w-xl text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800 text-justify`} role="alert">
            <div className="flex items-center">
                <svg className="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="sr-only">Info</span>
                <h3 className="text-xl font-medium">Important Notice</h3>
            </div>
            <div className="mt-2 mb-4 text-lg">
                Interactiveworkers has no knowledge of any email related to "Request for Partnership / Investment" from an individual named Martyna Lungua <br /> <br />

                If you received any email related to this please do not have interaction with it and mark it as spam or simply delete it<br />

                We do not have relations to anything broker related or offering investment opportunities... We have been in the virtual assistance business for more than 5 years offering high quality bilingual personnel to our clients around the world<br /><br />

                We apologize for any inconvenience this might bring and feel free to contact us any time
                <br /><br />
                Best regards<br />
                -Interactiveworkers
            </div>
            <div className="flex">
                <button type="button" className="block w-fit mx-auto text-blue-800 bg-transparent border border-blue-800 hover:bg-blue-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-200 font-medium rounded-lg text-lg px-3 py-1.5 text-center dark:hover:bg-blue-600 dark:border-blue-600 dark:text-blue-400 dark:hover:text-white dark:focus:ring-blue-800" data-dismiss-target="#alert-additional-content-1" aria-label="Close" onClick={() => { setHidden(true) }}>
                    I Understand
                </button>
            </div>
        </div>
    )
}

export default PopUp