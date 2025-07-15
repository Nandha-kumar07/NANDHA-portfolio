import { motion } from 'framer-motion';
import styled from 'styled-components';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
    id: 1,
    title: "MERN Stack Developer Intern",
    company: "Crypto Tracker and News Tracker",
    period: "2025",
    description: [
      "Developed a MERN stack web app for tracking cryptocurrency prices and news.",
      "Integrated CoinGecko and News APIs for real-time data.",
      "Implemented user authentication and watchlist functionality."
    ],
    type: "work"
    },
   {
    id: 2,
    title: "Full Stack Developer",
    company: "Expense Tracker and Analyzer (Personal Project)",
    period: "2025",
    description: [
      "Built a full-stack application using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented CRUD operations, local storage fallback, and data export to Excel and JSON.",
      "Used Tailwind CSS and modular architecture for responsive UI and clean code."
    ],
    type: "work"
  },
 {
    id: 3,
    title: "Full Stack Developer",
    company: "Expense Tracker and Analyzer (Personal Project)",
    period: "2025",
    description: [
      "Built a full-stack application using MongoDB, Express.js, React.js, and Node.js.",
      "Implemented CRUD operations, local storage fallback, and data export to Excel and JSON.",
      "Used Tailwind CSS and modular architecture for responsive UI and clean code."
    ],
    type: "work"
  },
  {
    id: 4,
    title: "B.E. in Electrical and Electronics Engineering",
    company: "Sri Eshwar College of Engineering",
    period: "2023 - 2027",
    description: [
      "Pursuing core engineering with focus on software projects and development.",
      "CGPA: 7.3",
      "Involved in hackathons, app innovation contests, and coding platforms."
    ],
    type: "education"
  },
  {
    id: 5,
    title: "HSC (12th Grade)",
    company: "Keshav Vidya Mandir Matric Higher Secondary School",
    period: "2021 - 2023",
    description: [
      "Completed Higher Secondary Education with 65%.",
      "Studied Computer Science with foundational knowledge in programming."
    ],
    type: "education"
  },
  ];

  return (
    <Section id="experience">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Experience & Education
        </SectionTitle>
        <Timeline>
          {experiences.map((exp, i) => (
            <TimelineItem 
              key={exp.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <TimelineContent>
                <TimelineIcon>
                  {exp.type === "work" ? <FaBriefcase /> : <FaGraduationCap />}
                </TimelineIcon>
                <TimelinePeriod>{exp.period}</TimelinePeriod>
                <TimelineTitle>{exp.title}</TimelineTitle>
                <TimelineCompany>{exp.company}</TimelineCompany>
                <TimelineDescription>
                  <ul>
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Container>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding: 5rem 5%;
  background: ${({ theme }) => theme.bgLight};
  scroll-margin-top: 80px;

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

const Timeline = styled.div`
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;

  &::after {
    content: '';
    position: absolute;
    width: 4px;
    background: ${({ theme }) => theme.primary};
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -2px;
    border-radius: 2px;

    @media (max-width: 768px) {
      left: 31px;
    }
  }

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const TimelineItem = styled(motion.div)`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  box-sizing: border-box;

  &:nth-child(odd) {
    left: 0;
    text-align: right;

    @media (max-width: 768px) {
      left: 0;
      text-align: left;
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }
  }

  &:nth-child(even) {
    left: 50%;

    @media (max-width: 768px) {
      left: 0;
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: ${({ theme }) => theme.bg};
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
  position: relative;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const TimelineIcon = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 15px;
  z-index: 1;
  font-size: 1.2rem;

  ${TimelineItem}:nth-child(odd) & {
    right: -60px;

    @media (max-width: 768px) {
      left: 15px;
      right: auto;
    }
  }

  ${TimelineItem}:nth-child(even) & {
    left: -60px;

    @media (max-width: 768px) {
      left: 15px;
    }
  }

  @media (max-width: 768px) {
    left: 15px;
    right: auto;
  }
`;

const TimelinePeriod = styled.p`
  color: ${({ theme }) => theme.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.5rem;
`;

const TimelineCompany = styled.h4`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textSoft};
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.div`
  color: ${({ theme }) => theme.textSoft};
  line-height: 1.6;

  ul {
    padding-left: 1.2rem;
  }

  li {
    margin-bottom: 0.5rem;
    position: relative;

    &::before {
      content: '•';
      position: absolute;
      left: -1rem;
      color: ${({ theme }) => theme.primary};
    }
  }
`;

export default Experience;