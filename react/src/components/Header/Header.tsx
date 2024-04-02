import Navbar from '../Navbar/Navbar';
import YuhriPic from '../../assets/logo/Yhlogo2.png'

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="header flex light-bg">
        <div>
          <button>Software Developer</button>
          <h1 className="default">Server-side looking smooth.</h1>
          <h1 className="default">It's all about the backend!</h1>
          <p className="default">Crafting efficient APIs - since 2021.</p>
        </div>
        <img src={YuhriPic} alt="Sua Imagem" width={463} height={513} className='margin-auto'/>
      </div>
    </header>
  );
};

export default Header;
