import React from "react"
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'; 

export default function Form() {

  return (
    <main id="contact">
      <div className='title flex justify-center sm:justify-start mx-4 py-6'>
        <h1 className="font-bold text-2xl">Contact <FontAwesomeIcon icon={faMailBulk} size="sm" bounce /></h1>
      </div>
    </main>
  );
}
