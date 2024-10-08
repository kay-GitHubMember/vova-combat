import styles from '../Main/Main.module.scss'
import vova_image from '../../src/assets/vova-image.png'
import lesha_coin from '../../src/assets/lesha-coin.png'
import { useEffect, useState } from 'react'
import { LevelUp } from './LevelUp/LevelUp'
import { useAuth } from '../../hooks/useAuth'
import { useRef } from 'react'

export function Main() {
    const { coins, setCoins } = useAuth()
    const { numberOfCoinsIncreased, setnumberOfCoinsIncreased } = useAuth()
    const numberOfCoinsRef = useRef(null)

    useEffect(() => {
        if (coins > 10000000000) {
            numberOfCoinsRef.current.style.fontSize = "45px"
        }
    })

    const handleButtonClick = () => {
        setCoins((prevCoins) => prevCoins + numberOfCoinsIncreased)
    }

    return (
        <main className={styles.main}>
            <div className={styles.coins}>
                <div className={styles.coin_place}>
                    <img src={lesha_coin} alt="" className={styles.lesha_coin} />
                </div>
                <input type="text" className={styles.number_of_coins} 
                value={coins} ref={numberOfCoinsRef} />
            </div>
            <button className={styles.vova_place} onClick={handleButtonClick}>
                <img src={vova_image} alt="" className={styles.vova_image} />
            </button>

            <LevelUp />
        </main>
    )
}
