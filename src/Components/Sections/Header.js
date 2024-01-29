import '../../Styling/Header.css';

const Header = () => {
    return(
        <div className='HeaderDiv' id='Header'>
            <h3 className="HeaderLeft" href="#About">{`About`}</h3>
            <h3 className="HeaderLeft" href="#Projects">{`Projects`}</h3>
            <h3 className="HeaderLeft" href="#Skills">{`Skills`}</h3>
            <h3 className="HeaderRight" href="#Contact">{`Contact Me`} </h3>
        </div>
    )
}

export default Header