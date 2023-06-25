import React from "react";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; 

export default function Form() {
  return (
    <div className="flex justify-center p-4 md:p-12">
      <form className="w-full sm:w-1/2 md:1/3 bg-purple border-purple border-4 p-6 sm:p-12 shadow-xl rounded-lg">
        <div className="flex flex-col mb-4 py-2">
          <label htmlFor="email">Votre email :</label>
          <input
            className="border-2 border-gray-300 shadow-md rounded p-2"
            type="email"
            name="email"
            placeholder="votre.email@gmail.com"
          />
        </div>

        <div className="flex flex-col mb-4 py-2">
          <label htmlFor="sujet">Sujet :</label>
          <input
            className="border-2 border-gray-300 shadow-md rounded p-2"
            type="text"
            name="sujet"
            placeholder="Je veux vous contacter"
          />
        </div>

        <div className="flex flex-col mb-4 py-2">
          <label htmlFor="message">Message :</label>
          <textarea className="border-2 border-gray-300 shadow-md rounded p-2" name="message" placeholder="blablabla..." />
          <div className="flex justify-center py-4">
            <button className="hover:bg-white rounded p-3 sm:p-4 bg-black text-white transition duration-0 hover:duration-500 font-bold w-full md:w-64 flex justify-center hover:text-black hover:cursor-pointer" type="submit">
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faPaperPlane} style={{ color: '#3067d5' }} fade size="lg" />  Envoyer
              </div>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
