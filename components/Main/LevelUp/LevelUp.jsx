import styles from '../LevelUp/LevelUp.module.scss'
import upgrade_image from '../../../src/assets/upgrade-image.png'
import { useAuth } from '../../../hooks/useAuth'
import { useState } from 'react'

export function LevelUp() {
    const { numberOfCoinsIncreased, setNumberOfCoinsIncreased } = useAuth()
    const { coins, setCoins } = useAuth()
    const [priceOfUpgrade, setPriceOfUpgrade] = useState(2500)

    const handleButtonClick = () => {
        if (coins < priceOfUpgrade) {
            setCoins((prevCoins) => prevCoins + 0)
        }
        else {
            setNumberOfCoinsIncreased((prevCoins) => prevCoins + 3)
            setPriceOfUpgrade((prevValue) => prevValue * 2)
            setCoins((prevCoins) => prevCoins - priceOfUpgrade)
        }
    }

    return (
        <div className={styles.level_up}>
            <img src={upgrade_image} alt="" className={styles.upgrade_image} />

            <ul className={styles.upgrades}>
                <li className={styles.upgrades_item}>
                    <p className={styles.upgrade_text}>Увеличить количество монет на 3</p>

                    <button className={styles.upgrade_button} onClick={handleButtonClick}>
                        {priceOfUpgrade}
                    </button>
                </li>
            </ul>
        </div>
    )
}
