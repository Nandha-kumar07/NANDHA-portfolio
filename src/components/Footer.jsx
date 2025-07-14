import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterLogo>{"<Portfolio />"}</FooterLogo>
        <FooterLinks>
          <FooterLink href="#home">Home</FooterLink>
          <FooterLink href="#about">About</FooterLink>
          <FooterLink href="#experience">Experience</FooterLink>
          <FooterLink href="#projects">Projects</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterLinks>
        <FooterSocials>
          <FooterSocial href="https://github.com/Nandha-kumar07" target="_blank">
            <FaGithub />
          </FooterSocial>
          <FooterSocial href="https://www.linkedin.com/in/nandha-kumar-9427b428a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
            <FaLinkedin />
          </FooterSocial>
          <FooterSocial href="https://twitter.com/yourusername" target="_blank">
            <FaTwitter />
          </FooterSocial>
        </FooterSocials>
        <FooterCopyright>
          &copy; {new Date().getFullYear()} NANDHA KUMAR. All rights reserved.
        </FooterCopyright>
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.bgLight};
  padding: 3rem 5%;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  color: ${({ theme }) => theme.primary};
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }
`;

const FooterLink = styled.a`
  color: ${({ theme }) => theme.textSoft};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
  }
`;

const FooterSocials = styled.div`
  display: flex;
  gap: 1.5rem;
`;

const FooterSocial = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.textSoft};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const FooterCopyright = styled.p`
  color: ${({ theme }) => theme.textSoft};
  font-size: 0.9rem;
  text-align: center;
`;

export default Footer;