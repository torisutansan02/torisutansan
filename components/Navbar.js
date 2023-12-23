import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <div className = {styles.navbar}>
            <h1> torisutan </h1>
            <ul className = {styles.links}>
                <li className = "listNav">
                    <Link className = "hover:text-sky-500" href = "/"> Home </Link>
                </li>
                <li className = "listNav">
                    <Link className = "hover:text-sky-500" href = "/about"> About </Link>
                </li>
                <li className = "listNav">
                    <Link className = "hover:text-sky-500" href = "/socials"> Socials </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;