import axios from 'axios';


const Navbar = () => {

  const fetchResume = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    const email = "yuhribrp.dev@gmail.com";
    const response = await axios.get("api/v1/resumes", {
      params: { email: email },
      responseType: 'blob'
    });
    const blob = new Blob([response.data], { type: 'application/pdf' });
    const pdfUrl = URL.createObjectURL(blob);
    window.open(pdfUrl, '_blank');
  };

  return (
    <nav className="flex light-bg justify-space">
      <div className="logo default">
        Yuhri Benaion
      </div>

      <ul className="flex default">
        <li className="white">
          <a href="#section2">{"< Projects />"}</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#" onClick={fetchResume}>Curriculum</a>
        </li>
      </ul>
    </nav>
  )
};

export default Navbar;
