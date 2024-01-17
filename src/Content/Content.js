import styles from './content.module.scss'
import clsx from 'clsx'

export default function Content({primary}){

    const classes = clsx(styles.name, {
        [styles.primary] : primary
    })
    return (
       <>
        <h1 className={classes} >
            Hello
            <h2>
                CHào Các Bạn
            </h2>
            </h1>
        <button className={styles.button}> Click</button>
        <button className={styles.button2}> Click2</button>


        <h1 className={clsx(styles.name,styles.bg)}>Hello</h1>
       </>
    )
}