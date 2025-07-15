import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaFileDownload } from 'react-icons/fa';
import profilePhoto from '../assets/profile.jpg';

const Hero = () => {
  return (
    <Section id="home">
      <Container>
        <Left
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Greeting>Hello, I'm</Greeting>
          <Name>NANDHA KUMAR P</Name>
          <Title>DevOps & MERN Developer</Title>
          <Desc>
            I'm a passionate MERN Stack Developer with hands-on project and internship experience. I specialize in building responsive, user-centric, and scalable web applications. I’ve developed real-time cryptocurrency and expense tracking apps using MongoDB, Express.js, React, and Node.js. I'm also exploring DevOps tools like Git, GitHub, and CI/CD to streamline development workflows.
          </Desc>
          <Buttons>
            <ResumeBtn
              href="/RESUME.pdf"
              download="Nandha_Kumar_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFileDownload /> Download Resume
            </ResumeBtn>
            <ContactBtn
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </ContactBtn>
          </Buttons>
          <Socials>
            <SocialLink
              href="https://github.com/Nandha-kumar07"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </SocialLink>
            <SocialLink
              href="https://linkedin.com/in/nandha-kumar-9427b428a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </SocialLink>
          </Socials>
        </Left>
        <Right
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ProfilePhoto src={profilePhoto} alt="Profile" />
        </Right>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 5%;
  padding-top: 5rem;
  scroll-margin-top: 80px;

  @media (max-width: 768px) {
    padding-top: 7rem;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    text-align: center;
    gap: 3rem;
  }
`;

const Left = styled(motion.div)`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Right = styled(motion.div)`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Greeting = styled.h3`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${({ theme }) => theme.primary};

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  background: linear-gradient(to right, #38bdf8, #0ea5e9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Title = styled.h2`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.textSoft};

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Desc = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSoft};
  max-width: 600px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Button = styled(motion.a)`
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
`;

const ResumeBtn = styled(Button)`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  border: 2px solid ${({ theme }) => theme.primary};
`;

const ContactBtn = styled(Button)`
  background: transparent;
  color: ${({ theme }) => theme.primary};
  border: 2px solid ${({ theme }) => theme.primary};
`;

const Socials = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const SocialLink = styled.a`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.primary};
    transform: translateY(-3px);
  }
`;

const ProfilePhoto = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  object-fit: cover;

  @media (max-width: 768px) {
    max-width: 300px;
  }
`;

export default Hero;
