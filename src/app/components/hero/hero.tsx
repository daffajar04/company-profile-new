import React from 'react'
import styles from './Hero.module.css'
import Image from 'next/image'
import HeroImage from '/public/images/panigale.webp'
import { BUTTON_VARIANTS } from '@/constants/enum'
import LinkButton from '../LinkButton'

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.heading}>
                    New Panigale v4
                </h1>

                <h2 className={styles.subHeading}>
                    WONDER. ENGINEERED.
                </h2>

                <p className={styles.heroText}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fu
                </p>

                <div>
                    <LinkButton href={'/'}>
                        Buy now
                    </LinkButton>

                    <LinkButton
                        href={'/'}
                        variant={BUTTON_VARIANTS.Secondary}
                        className={styles.menuButton}
                    >
                        Discover More
                    </LinkButton>
                </div>

            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={HeroImage}
                    alt={'Ducati Panigale V4'}
                    className={styles.heroImg}
                    style={{ objectFit: 'contain' }}
                    quality={100}
                    priority
                />
            </div>
        </div>
    )
}

export default Hero