import Link from 'next/link'

const Navbar = () => {
    return (
        <div className = "navbar">
            <h1> torisutansan </h1>
            <div className = "links">
                <Link href = "/"> Home </Link>
                <Link href = "/about" > About </Link>
                <Link href = "/socials"> Socials </Link>
            </div>
        </div>
    );
}

export default Navbar;