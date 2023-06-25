import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { faDownload, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-gray-900  to-purple-900">
      <div className='sm:flex text-center text-md sm:text-xl items-center justify-around my-10 py-28'>
        <div className='text-white pb-4'>
          <div className='flex justify-center'>
            <Image className="rounded-full" src="/william.jpg" alt="Portrait portfolio image profil" width={200} height={200}></Image>
          </div>
          <h1 className='py-4 font-bold'>Disponibilité : Dès maintenant <FontAwesomeIcon icon={faCircleCheck} style={{ color: '#3067d5' }} fade size="xl" /></h1>
          <h1 className='py-4'>&quot;Un Framework pour les gouverner tous.&quot;</h1>
        </div>
        <div className='text-white'>
          <Link href={"https://www.linkedin.com/in/william-penet/"} legacyBehavior>
            <a className='text-xl font-bold text-white hover:text-2xl'>Linked&apos;In</a>
          </Link>
          <div className='py-2'>
            <p>Anglais : B2</p>
            <p>06.64.93.22.02</p>
            <p>Nord, Lille 59800</p>
            <p>Permis B : Non véhiculé</p>
            <p>penet.william@gmail.com</p>
            <br />
            <Link legacyBehavior href="/cv.pdf">
              <a className='font-bold rounded hover:bg-white hover:text-black hover:p-2 transition duration-0 hover:duration-700'><FontAwesomeIcon icon={faDownload} size="lg" /> Télécharger le CV</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;