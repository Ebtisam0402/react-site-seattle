import './Header.css'

export default function Header(){
    return(
        <header>
            <h1 className= "title">Seattle</h1>
            <nav>
                <ul className= "nav-links">
                    <li><a href= "#intro">Introduction</a></li>
                    <li><a href= "#funFacts">Fun Facts</a></li>
                    <li><a href= "#tourist">Tourist Places</a></li>
                    <li><a href= "#nature">Nature & Outdoors</a></li>
                    <li><a href= "#footer">Authors</a></li>
                </ul>
            </nav>
        </header>
    )
}