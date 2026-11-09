import classes from './Header.module.css'

const Header = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>LOGO</div>
            <div className={classes.title}>VISTA</div>
            <button className={classes.btn}>Bejelentkezés</button>
        </header>
    )
}

export default Header