import '@styles/App.css';
import githubIcon from '@public/github.svg';

function Header() {

    const handleGitHub = () => {
        window.open("https://github.com/JunLovin", "_blank");
    }

    return (
        <header>
            <nav>
                <a href="/"><h1 className="header">cvdotcom</h1></a>
                <img src={githubIcon} alt="GitHub" title="Click here to go to my GitHub" onClick={handleGitHub} />
            </nav>
        </header>
    );
}

export default Header;