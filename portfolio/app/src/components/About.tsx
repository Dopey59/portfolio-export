import React from "react";
import { faArrowDown, faLightbulb, faPeopleCarry, faBookOpenReader, faUserCheck, faHeart, faGamepad, faPlane, faSpa } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function About() {
  return (
    <main id="about" className="overflow-x-hidden">
      <div className='title flex justify-center sm:justify-start mx-4'>
        <h1 className="font-bold text-2xl">A propos <FontAwesomeIcon icon={faArrowDown} size="sm" bounce /></h1>
      </div>
      <div className="py-8 flex sm:justify-center justify-center">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 p-6">
          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500"> <FontAwesomeIcon icon={faPeopleCarry} size="sm" /> Travail d&apos;équipe</h1>
          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faLightbulb} size="sm" /> Créatif</h1>
          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faUserCheck} size="sm" /> Autonome</h1>
          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faBookOpenReader} size="sm" /> Curieux</h1>

          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500"> <FontAwesomeIcon icon={faGamepad} size="sm" />Jeux vidéos</h1>
          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faHeart} size="sm" /> Sports</h1>
          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faSpa} size="sm" /> Méditation</h1>
          <h1 className="bg-slate-300 hover:text-white hover:bg-gradient-to-r from-gray-900 to-purple-900 hover:cursor-pointer rounded-md p-4 sm:w-auto flex gap-2 place-content-center items-center transition duration-0 hover:duration-500 "><FontAwesomeIcon icon={faPlane} size="sm" /> Voyages</h1>
        </div>
      </div>
    </main>
  )
}