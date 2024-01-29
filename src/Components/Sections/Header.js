import '../../Styling/Header.css';

const Header = () => {
    return(
        <div className='HeaderDiv' id='Header'>
            <a className="HeaderLeft" href="#About">{`About`}</a>
            <a className="HeaderLeft" href="#Projects">{`Projects`}</a>
            <a className="HeaderLeft" href="#Skills">{`Skills`}</a>
                <div>
                    <a className="HeaderRight" href="#Contacts">{`Contact Me`} </a>
                </div>
            
        </div>
    )
}

export default Header