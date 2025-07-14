import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Expense Tracker & Analyzer",
      description:
        "A full-stack MERN application to track and analyze expenses. Features include income/expense logging, graphical summaries, and export to Excel/JSON.",
      tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      github: "https://github.com/Nandha-kumar07/expance",
      live: ""
    },
    {
      id: 2,
      title: "Crypto Tracker & News App",
      description:
        "A MERN stack app that tracks real-time cryptocurrency prices and news using CoinGecko and News APIs. Includes user login and watchlist features.",
      tags: ["React", "MongoDB", "Node.js", "Express", "API Integration"],
      github: "https://github.com/Nandha-kumar07/cryptonandha",
      live: ""
    },
    {
      id: 3,
      title: "Banking Application",
      description:
        "Console-based Java and SQL banking system with features for account creation, deposits, withdrawals, and transaction history.",
      tags: ["Java", "SQL", "JDBC"],
      github: "",
      live: ""
    },
    {
      id: 4,
      title: "Insurance Management System",
      description:
        "Java + SQL based app for managing insurance policies, customer data, and premium tracking, built with a secure backend.",
      tags: ["Java", "SQL", "OOP"],
      github: "",
      live: ""
    }
  ];

  return (
    <Section id="projects">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Featured Projects
        </SectionTitle>
        <ProjectsGrid>
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectImage />
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectDescription>{project.description}</ProjectDescription>
                <ProjectTags>
                  {project.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </ProjectTags>
                <ProjectLinks>
                  {project.github && (
                    <ProjectLink href={project.github} target="_blank">
                      <FaGithub /> Code
                    </ProjectLink>
                  )}
                  {project.live && (
                    <ProjectLink href={project.live} target="_blank">
                      <FaExternalLinkAlt /> Live Demo
                    </ProjectLink>
                  )}
                </ProjectLinks>
              </ProjectContent>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 5%;

  @media (max-width: 768px) {
    padding: 3rem 5%;
  }
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  position: relative;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 70px;
    height: 4px;
    background: ${({ theme }) => theme.primary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${({ theme }) => theme.bgLight};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: ${({ theme }) => theme.primary};
  opacity: 0.8;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const ProjectDescription = styled.p`
  color: ${({ theme }) => theme.textSoft};
  line-height: 1.6;
`;

const ProjectTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const Tag = styled.span`
  background: ${({ theme }) => theme.soft};
  color: ${({ theme }) => theme.text};
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
  }
`;

export default Projects;
