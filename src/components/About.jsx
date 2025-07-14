import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaReact, FaNodeJs, FaDatabase, FaDocker, FaAws } from 'react-icons/fa';
import { SiTypescript, SiGraphql, SiJest, SiKubernetes, SiJenkins, SiTerraform, SiGithubactions } from 'react-icons/si';

const About = () => {
  const skills = [
    // Frontend & Backend
    { name: 'React', icon: <FaReact />, color: '#61DAFB' },
    { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
    { name: 'Node.js', icon: <FaNodeJs />, color: '#68A063' },
    { name: 'GraphQL', icon: <SiGraphql />, color: '#E535AB' },
    { name: 'Databases', icon: <FaDatabase />, color: '#336791' },
    { name: 'Testing', icon: <SiJest />, color: '#C21325' },
    // DevOps
    { name: 'Docker', icon: <FaDocker />, color: '#2496ED' },
    { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    { name: 'AWS', icon: <FaAws />, color: '#FF9900' },
    { name: 'Terraform', icon: <SiTerraform />, color: '#7B42BC' },
    { name: 'Jenkins', icon: <SiJenkins />, color: '#D24939' },
    { name: 'GitHub Actions', icon: <SiGithubactions />, color: '#2088FF' },
  ];

  return (
    <Section id="about">
      <Container>
        <Left
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SectionTitle>About Me</SectionTitle>
          <AboutText>
            I'm a motivated Full Stack Developer with expertise in the MERN stack and DevOps practices. I build scalable web applications using MongoDB, Express.js, React, and Node.js, and implement efficient deployment pipelines with modern DevOps tools.
          </AboutText>
          <AboutText>
            I have hands-on experience with containerization (Docker, Kubernetes), infrastructure as code (Terraform), CI/CD pipelines (Jenkins, GitHub Actions), and cloud platforms (AWS). My goal is to bridge the gap between development and operations to deliver robust, high-performance applications.
          </AboutText>
          <AboutText>
            Throughout my career, I've worked with various companies ranging from startups to large enterprises, implementing DevOps best practices at Rampex and developing full-stack applications at RV Teach.
          </AboutText>
          <AboutText>
            When I'm not coding, I enjoy contributing to open-source projects, 
            writing technical articles about DevOps and full-stack development, 
            and staying up-to-date with the latest technologies.
          </AboutText>
        </Left>
        <Right
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <SkillsContainer>
            {skills.map((skill, i) => (
              <SkillItem 
                key={i}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <SkillIcon style={{ color: skill.color }}>
                  {skill.icon}
                </SkillIcon>
                <SkillName>{skill.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsContainer>
        </Right>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.bg};

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
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
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 70px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;

    &::after {
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

const AboutText = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.textSoft};

  @media (max-width: 768px) {
    font-size: 1rem;
    text-align: center;
  }
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  width: 100%;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const SkillItem = styled(motion.div)`
  background: ${({ theme }) => theme.bgLight};
  padding: 1.5rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const SkillIcon = styled.div`
  font-size: 2.5rem;
`;

const SkillName = styled.h3`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
`;

export default About;