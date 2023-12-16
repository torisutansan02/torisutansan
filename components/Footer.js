import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
    return (
        <>
            <footer>
                <div className = {styles.grid}>
                        <a
                            href = "https://linkedin.com/in/tristan-cai-b89571267"
                            className = {styles.card}
                            target = "_blank"
                            rel = "noopener noreferrer"
                        >
                            <h2 className = {inter.className}>
                            LinkedIn <span> -&gt; </span>
                            </h2>
                        </a>

                        <a
                            href = "https://last.fm/user/luckifier"
                            className = {styles.card}
                            target = "_blank"
                            rel = "noopener noreferrer"
                        >
                            <h2 className = {inter.className}>
                            LastFM <span> -&gt; </span>
                            </h2>
                        </a>

                        <a
                            href = "https://rateyourmusic.com/~torisutan"
                            className = {styles.card}
                            target = "_blank"
                            rel = "noopener noreferrer"
                        >
                            <h2 className = {inter.className}>
                            RYM <span> -&gt; </span>
                            </h2>
                        </a>

                        <a
                            href = "https://instagram.com/torisutansan?igshid=ZDdkNTZiNTM="
                            className = {styles.card}
                            target = "_blank"
                            rel = "noopener noreferrer"
                        >
                            <h2 className = {inter.className}>
                            Instagram <span> -&gt; </span>
                            </h2>
                        </a>
                    </div>
                    © 2023, torisutansan.
                <br/>
                My website is open-source, feel free to use it as a reference.
            </footer>
        </>
    )
}

export default Footer;