import { FaServer, FaTools, FaLaptopCode } from 'react-icons/fa';
import AutoTyping from './AutoTyping';
import { TechIcons } from './TechIcons'
import { PortfolioOwner } from '../../App';
import { useEffect, useState } from 'react';

interface AboutProps {
  portfolioOwner: PortfolioOwner | null;
}

export default function About({ portfolioOwner }: AboutProps) {
  const firstName = portfolioOwner?.name.split(' ')[0];
  const [iconsState, setIconsState] = useState(TechIcons);

  useEffect(() => {
    const interval = setInterval(() => {
      setIconsState((prevIcons) => {
        const firstIcon = prevIcons[0];
        const remainingIcons = prevIcons.slice(1);
        return [...remainingIcons, firstIcon];
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const typingText = [
    ` > Hey There, my name is ${firstName}`,
    `> I am ${portfolioOwner?.age} years old`,
    `> ${portfolioOwner?.about_me}`,
    `> From ${portfolioOwner?.location}`,
    `> You can see my resume up there in the Menu`,
    `> Feel free to reach out`
  ];

  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            Title="Backend Maestro"
            Icon={FaServer}
            Description="I architect robust backend solutions, turning complex business logic into efficient, scalable code." />
          <AboutCard
            Title="API Craftsman"
            Icon={FaTools}
            Description="I design and implement intuitive APIs, ensuring seamless data flow and integration across platforms." />
          <AboutCard
            Title="Frontend Virtuoso"
            Icon={FaLaptopCode}
            Description="Building great and modern interfaces." />
        </div>

        <div className="flex-full terminalContainer">
          <div className="terminalHeader">
            <div className="terminalButtons">
              <span className="close"></span>
              <span className="minimize"></span>
              <span className="expand"></span>
            </div>
            <span>welcome.rb</span>
          </div>
          <div className="pownerInfo">
            <AutoTyping text={typingText} />
          </div>
        </div>
      </div>
      <div className="flex tech-icons">
        {iconsState.map((TechIcon, index) => (
          <div key={index} className="icon">
            {TechIcon}
          </div>
        ))}
      </div>
    </section>
  )
}

type Props = {
  Title: string,
  Icon: React.ElementType,
  Description: string
}

function AboutCard({ Title, Icon, Description }: Props) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{Title}</h3>
        <Icon className="green" size={24} />
      </div>
      <p className="default">{Description}</p>
    </div>
  )
}
