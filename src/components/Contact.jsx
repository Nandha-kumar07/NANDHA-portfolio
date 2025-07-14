import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { FaPaperPlane, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

const onSubmit = (data) => {
    console.log(data);
    // Here you would typically send the data to your backend
    reset();
    alert('Message sent successfully!');
  };

// Potential improvement: Debounce form submission to prevent multiple rapid submits
// or add a loading state to disable the submit button while processing.

// Also, consider replacing alert with a more user-friendly notification component.

  return (
    <Section id="contact">
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Get In Touch
        </SectionTitle>
        <ContactGrid>
          <ContactInfo
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <InfoTitle>Contact Information</InfoTitle>
            <InfoText>
              I'm currently seeking opportunities as a Junior MERN Stack Developer or in DevOps. I'm eager to contribute to innovative teams, grow my technical skills, and help build scalable, high-quality applications and infrastructure.

If you’re hiring or know of any openings, feel free to connect with me. I'm open to full-time, internship, or freelance roles.
            </InfoText>
            <InfoItems>
              <InfoItem>
                <InfoIcon>
                  <FaMapMarkerAlt />
                </InfoIcon>
                <div>
                  <InfoItemTitle>Location</InfoItemTitle>
                  <InfoItemText>Pollachi</InfoItemText>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <FaEnvelope />
                </InfoIcon>
                <div>
                  <InfoItemTitle>Email</InfoItemTitle>
                  <InfoItemText>nandhakumar00072004@gmail.com</InfoItemText>
                </div>
              </InfoItem>
              <InfoItem>
                <InfoIcon>
                  <FaPhone />
                </InfoIcon>
                <div>
                  <InfoItemTitle>Phone</InfoItemTitle>
                  <InfoItemText>+91 8925795716</InfoItemText>
                </div>
              </InfoItem>
            </InfoItems>
          </ContactInfo>
          <ContactForm
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormGroup>
              <Input 
                type="text" 
                placeholder="Your Name" 
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
            </FormGroup>
            <FormGroup>
              <Input 
                type="email" 
                placeholder="Your Email" 
                {...register("email", { 
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address"
                  }
                })}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </FormGroup>
            <FormGroup>
              <Input 
                type="text" 
                placeholder="Subject" 
                {...register("subject", { required: "Subject is required" })}
              />
              {errors.subject && <ErrorText>{errors.subject.message}</ErrorText>}
            </FormGroup>
            <FormGroup>
              <TextArea 
                placeholder="Your Message" 
                rows="5"
                {...register("message", { 
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters"
                  }
                })}
              />
              {errors.message && <ErrorText>{errors.message.message}</ErrorText>}
            </FormGroup>
            <SubmitButton type="submit">
              Send Message <FaPaperPlane />
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoTitle = styled.h3`
  font-size: 1.8rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
`;

const InfoText = styled.p`
  color: ${({ theme }) => theme.textSoft};
  line-height: 1.6;
`;

const InfoItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
`;

const InfoIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  flex-shrink: 0;
`;

const InfoItemTitle = styled.h4`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ theme }) => theme.text};
  margin-bottom: 0.3rem;
`;

const InfoItemText = styled.p`
  color: ${({ theme }) => theme.textSoft};
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: ${({ theme }) => theme.bg};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.soft};
  border-radius: 5px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: 1rem;
  transition: all 0.3s ease;
  resize: vertical;

  &:focus {
    border-color: ${({ theme }) => theme.primary};
    outline: none;
  }
`;

const ErrorText = styled.span`
  color: #ff4d4f;
  font-size: 0.9rem;
`;

const SubmitButton = styled.button`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.bg};
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.hover};
    transform: translateY(-3px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export default Contact;