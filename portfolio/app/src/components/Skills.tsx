import React from "react";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importer les styles CSS de Font Awesome


export default function About(){
    return(
        <main id="skills" className="">
            <div className='title flex justify-center sm:justify-start mx-4 py-6'>
                <h1 className="font-bold text-2xl">Hard Skills <FontAwesomeIcon icon={faArrowDown} style={{color: "purple"}}size="sm" bounce /></h1>
            </div>

            <div className="flex justify-center bg-gradient-to-r from-gray-900  to-purple-900 text-white py-8 shadow-xl rounded-xl ">
                <div className="grid grid-cols-2 w-auto sm:grid-cols-2 lg:grid-cols-6 gap-4 p-8">
                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Css</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Html</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>TailwindCss</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center ">
                        <h1>React</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>NextJs</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>NodeJs</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>GitHub</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Php</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Symfony</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Javascript</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Laravel</h1>
                    </div>

                    <div className="flex bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900  to-purple-900 hover:cursor-pointer transition duration-0 hover:duration-500 rounded-md p-4 w-auto text-xl text-black justify-center">
                        <h1>Scss</h1>
                    </div>
                </div>
            </div>
        </main>
    )
}