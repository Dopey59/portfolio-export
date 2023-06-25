import React from "react";
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

export default function Alternance() {
  return (
    <main id="alternance" className="flex flex-col">
      <div className='title flex justify-center sm:justify-start mx-4'>
        <h1 className="font-bold text-2xl">L&apos;alternance <FontAwesomeIcon icon={faArrowDown} size="sm" bounce /></h1>
      </div>
      <div className="py-8">
        <div className="w-1/1 flex justify-center text-left gap-8">
          <p className="text-md sm:text-xl mx-4">Passionné par le développement web et animé par la curiosité,
            <br />je suis à la recherche d&apos;une entreprise qui partage mes valeurs humaines.
            Je souhaite m&apos;investir pleinement dans une alternance qui me permettra
            d&apos;acquérir de nouvelles compétences
            et de les mettre en pratique au sein d&apos;une équipe dynamique.
            <br /><br />
            Mon alternance se déroulera sur une durée de 14 mois,
            accompagnée d&apos;un rythme d&apos;1 semaine à l&apos;école et 4 semaines en entreprise. Le but de ma formation étant d&apos;être full stack, j&apos;avoue avoir un
            goût plus prononcé pour le design et les interfaces graphiques, ce qui pourrait compter comme une spécialité en front.
          </p>
        </div>
      </div>
    </main>
  );
}