import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <div className = {styles.navbar}>
            <h1 className = "font-bold"> torisutan </h1>
            <ul className = {styles.links}>
                <li>
                    <Link className = "hover:text-sky-500" href = "/"> Home </Link>
                </li>
                <li>
                    <Link className = "hover:text-sky-500" href = "/about"> About </Link>
                </li>
                <li>
                    <Link className = "hover:text-sky-500" href = "/socials"> Socials </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;