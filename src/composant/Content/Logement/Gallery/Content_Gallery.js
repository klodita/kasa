import React from 'react'
import { Slide } from 'react-slideshow-image'
import { logement } from '../../../../assets/API/Logement'
import { useParams } from 'react-router-dom'
import gallery from './gallery.module.scss'
import 'react-slideshow-image/dist/styles.css'

const proprietes = {
  infinite: false,
  indicator: false,
}

const buttonStyle = {
  background: 'none',
  border: '0px',
  width: '0px',
}

const arrows = {
  prevArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        className={gallery.flecheGauche}
        width="96"
        height="120"
        viewBox="0 0 96 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M70.04 15.7831L62.92 8.70312L23.36 48.3031L62.96 87.9031L70.04 80.8231L37.52 48.3031L70.04 15.7831Z"
          fill="white"
        />
      </svg>
    </button>
  ),
  nextArrow: (
    <button style={{ ...buttonStyle }}>
      <svg
        className={gallery.flecheDroite}
        width="96"
        height="121"
        viewBox="0 0 96 121"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.96 81.3458L33.04 88.4258L72.64 48.8258L33.04 9.22583L25.96 16.3058L58.48 48.8258L25.96 81.3458Z"
          fill="white"
        />
      </svg>
    </button>
  ),
}

const Slideshow = () => {
  const id = useParams()
  const logementIndiv = logement.find((logement) => logement.id === id.id)
  const nbrLogement = logementIndiv.pictures.length

  if (nbrLogement === 1 || nbrLogement === 0) {
    return (
      <div>
        <Slide arrows={false} autoplay={false} {...proprietes}>
          {logementIndiv.pictures.map((images, index) => (
            <div className={gallery.pictures} key={index}>
              <img
                src={images}
                alt="Visite de logement"
                className={gallery.img}
              />
              <div className={gallery.numero}>
                <span className={gallery.numero}>
                  {index + 1}/{nbrLogement}
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
  } else {
    return (
      <div className="slide-container">
        <Slide {...proprietes} {...arrows} autoplay={false}>
          {logementIndiv.pictures.map((images, index) => (
            <div className={gallery.pictures} key={index}>
              <img
                src={images}
                alt="Visite de logement"
                className={gallery.img}
              />
              <div>
                <span className={gallery.numero}>
                  {index + 1}/{nbrLogement}
                </span>
              </div>
            </div>
          ))}
        </Slide>
      </div>
    )
  }
}

export default Slideshow
