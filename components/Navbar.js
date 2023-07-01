import Link from 'next/link'
import styles from '@/styles/Home.module.css'

const Navbar = () => {
    return (
        <div className = {styles.navbar}>
            <h1> torisutansan </h1>
            <ul className = {styles.links}>
                <li>
                    <a href = "#"> Home </a>
                </li>
                <li>
                    <a href = "about"> About </a>
                </li>
                <li>
                    <a href = "socials"> Socials </a>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;