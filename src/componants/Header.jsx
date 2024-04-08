

const Header = () => {
    return (
        <header className="header">
            <img src="https://www.yves.brette.biz/public/humour/Pokemon_Go.jpg" alt="logo" className="logo"/>
            <ul className="menu">
                <li><a href="#">accueil</a></li>    
                <li><a href="#">boutique</a></li>    
                <li><a href="#">contact</a></li>    
                <li><a href="#">a propos</a></li>    
            </ul>            
        </header>
    );
};

export default Header;