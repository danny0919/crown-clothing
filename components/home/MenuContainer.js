import styles from './MenuContainer.module.scss'
import {useState} from 'react'
import MenuItem from './MenuItem'

export default function MenuContainer({categories}) {
    return (
        <div className={styles.homepage}>
            <div className={styles.menuContainer_menu}>
                {categories.map(({name:title,remote_url:imageUrl,cid,size})=>(
                    <MenuItem Key={cid} title={title} imageUrl={imageUrl} size={size} />
                ))}
                </div>            
        </div>
    )
}
