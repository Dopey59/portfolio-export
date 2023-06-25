import React from "react";
import Image from 'next/image';
import Link from "next/link"
import { faArrowDown} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Importer les styles CSS de Font Awesome

export default function SchoolProjects(){
    return(
        <main id="school" className="flex flex-col align-center pt-8">
            <div className=' title flex justify-center sm:justify-start mx-4'>
                <a className="font-bold text-2xl">Projets scolaire <FontAwesomeIcon icon={faArrowDown} size="sm" bounce /></a>
            </div>

                <div className="quizzContainer grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-center p-12">

                    <div className="grid place-items-center p-4 overflow-hidden ">
                        <Link href={"https://github.com/Dopey59/My-Twitter"}>
                            <Image className="rounded-2xl h-90 w-90 sm:h-64 sm:w-full shadow-lg shadow-black hover:opacity-80 transition duration-0 hover:duration-500" src="/Twitter-min.jpg" alt="Portrait portfolio image profil" width={900} height={900}></Image>
                        </Link>

                            <a className="font-bold pt-4">My Twitter</a> 
                    </div>

                    <div className=" grid place-items-center p-4 rounded-2xl flow-hidden">
                        <Link href={"https://github.com/Dopey59/My-Snapchat"}>
                            <Image className="rounded-2xl  h-90 w-90 sm:h-64 sm:w-full shadow-lg  shadow-black hover:opacity-80 transition duration-0 hover:duration-500" src="/Snapchat-min.jpg" alt="Portrait portfolio image profil" width={900} height={900}></Image>
                        </Link>

                        <a className="font-bold pt-4">My Snapchat</a>
                    </div>

                    <div className=" grid place-items-center p-4 rounded-2xl flow-hidden">
                        <Link href={"https://github.com/Dopey59/My-Cinema"}>
                            <Image className="rounded-2xl  h-90 w-90 sm:h-64 sm:w-full shadow-lg  shadow-black hover:opacity-80 transition duration-0 hover:duration-500" src="/cinema-min.jpg" alt="Portrait portfolio image profil" width={900} height={900}></Image>
                        </Link>

                        <a className="font-bold pt-4 ">My Cinema</a>
                    </div>


                    <div className="grid place-items-center p-4 rounded-2xl flow-hidden">
                        <Link href={"https://github.com/Dopey59/Free-Ads"}>
                            <Image className="rounded-2xl  h-90 w-90 sm:h-64 sm:w-full shadow-lg  shadow-black hover:opacity-80 transition duration-0 hover:duration-500" src="/Ads-min.jpg" alt="Portrait portfolio image profil" width={900} height={900}></Image>
                        </Link>

                        <a className="font-bold pt-4">Free Ads</a>
                    </div>
                </div>
        </main>
    )

}