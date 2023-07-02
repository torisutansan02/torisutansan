import styles from '@/styles/Home.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Footer = () => {
    return (
        <>
            <main>
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
                        <p className = {inter.className}>
                        LinkedIn Profile
                        </p>
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
                        <p className = {inter.className}>
                        音楽聞いています
                        </p>
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
                        <p className = {inter.className}>
                        RYM Profile
                        </p>
                    </a>

                    <a
                        href = "https://instagram.com/torisutansan?igshid=ZDdkNTZiNTM="
                        className = {styles.card}
                        target = "_blank"
                        rel = "noopener noreferrer"
                    >
                        <h2 className = {inter.className}>
                        IG <span> -&gt; </span>
                        </h2>
                        <p className = {inter.className}>
                        Instagram Profile
                        </p>
                    </a>
                </div>
            </main>

            <footer>
                © 2023, torisutansan.
            </footer>
        </>
    )
}

export default Footer;