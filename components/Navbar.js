import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <div className = {styles.navbar}>
            <h1> torisutansan </h1>
            <ul className = {styles.links}>
                <li>
                    <Link href = "/"> Home </Link>
                </li>
                <li>
                    <Link href = "/about"> About </Link>
                </li>
                <li>
                    <Link href = "/socials"> Socials </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;