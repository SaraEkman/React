import { Link, Outlet } from "react-router-dom"

export const Layout = () => {
    return (<>
        <header>
            <div className="logo-container">   
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Hem</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
        <main>
        <Outlet></Outlet>
        </main>
        <footer>
            <div>kolumn 1</div>
            <div>kolumn 2</div>
            <div>kolumn 3</div>
        </footer>
    </>)
}