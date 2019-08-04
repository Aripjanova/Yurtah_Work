import React from 'react';
import '../assets/css/main.css'
import { Link,} from 'react-router-dom'
class Header extends React.Component {

    render() {
        return (
            <header className="header">
                <div className="logo">
                </div>
                <div className="topnav" id="Menu">
                    <a >  <Link to="/">Home</Link> </a>
                    <a >  <Link to="/About">About</Link> </a>
                </div>
            </header>


        )
    }
}
export default Header;