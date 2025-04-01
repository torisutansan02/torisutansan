import styles from '@/styles/Home.module.css'
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ['latin'] })

const socialLinks = [
    { name: 'LinkedIn', url: 'https://linkedin.com/in/tristan-cai-b89571267', icon: 'linkedin' },
    { name: 'LastFM', url: 'https://last.fm/user/torisunyan', icon: 'lastfm' },
    { name: 'RYM', url: 'https://rateyourmusic.com/~torisutan', icon: 'rym' },
    { name: 'Instagram', url: 'https://instagram.com/torisunyan?igshid=ZDdkNTZiNTM=', icon: 'instagram' },
]

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
        <div className = "footer">
            <div className={styles.grid}>
                {socialLinks.map((link, index) => (
                    <a
                        key={index}
                        href={link.url}
                        className={styles.card}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2 className={inter.className}>
                            {link.name} <span className = "!text-white"> -&gt; </span>
                        </h2>
                    </a>
                ))}
            </div>
            &copy; {currentYear}, torisutansan.
            <br/>
            My website is open-source, feel free to use it as a reference.
        </div>
        </>
    )
}

export default Footer;
