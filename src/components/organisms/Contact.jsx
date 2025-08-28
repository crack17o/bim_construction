import React, { useState } from 'react';
import styled from 'styled-components';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import emailjs from 'emailjs-com';
import Container from '../atoms/Container';
import Section from '../atoms/Section';
import Heading from '../atoms/Heading';
import Text from '../atoms/Text';
import InputField from '../atoms/InputField';
import Button from '../atoms/Button';

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  width: 100%;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

const ContactInfo = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border-radius: 8px;
  padding: 40px;
  color: ${props => props.theme.colors.white};
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  
  svg {
    margin-right: 15px;
    font-size: 20px;
    margin-top: 5px;
  }
`;

const AlertMessage = styled.div`
  padding: 15px;
  border-radius: 4px;
  margin-bottom: 20px;
  background-color: ${props => 
    props.type === 'success' ? '#d4edda' : 
    props.type === 'error' ? '#f8d7da' : 'transparent'};
  color: ${props => 
    props.type === 'success' ? '#155724' : 
    props.type === 'error' ? '#721c24' : 'inherit'};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    status: null,
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  // Initialize EmailJS once when component loads
  React.useEffect(() => {
    // Initialize with your User ID from emailjs.com dashboard
    emailjs.init("_cftCT0rz9jfZe4tq");
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({
      submitting: true,
      status: null,
      message: ''
    });

    // Send email using EmailJS
    emailjs.send(
      'service_qcykm1t', // Create this service ID in EmailJS dashboard
      'template_7ef3q9w',    // Create this template ID in EmailJS dashboard
      {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      }
    )
      .then(() => {
        setFormStatus({
          submitting: false,
          status: 'success',
          message: 'Votre message a été envoyé avec succès. Nous vous contacterons bientôt!'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('Email error:', error);
        setFormStatus({
          submitting: false,
          status: 'error',
          message: 'Une erreur s\'est produite. Veuillez réessayer plus tard.'
        });
      });
  };

  return (
    <Section id="contact" bg="lightGrey">
      <Container>
        <Heading center underline>
          Contactez-nous
        </Heading>
        <Text center maxWidth="700px" style={{ margin: '0 auto 30px' }}>
          Vous avez des questions ou souhaitez discuter d'un projet? N'hésitez pas à nous contacter.
        </Text>
        
        <ContactWrapper>
          <ContactForm onSubmit={handleSubmit}>
            {formStatus.status && (
              <AlertMessage type={formStatus.status}>
                {formStatus.message}
              </AlertMessage>
            )}
            
            <FormRow>
              <InputField>
                <label htmlFor="name">Nom complet</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </InputField>
              
              <InputField>
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </InputField>
            </FormRow>
            
            <FormRow>
              <InputField>
                <label htmlFor="phone">Téléphone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </InputField>
              
              <InputField>
                <label htmlFor="subject">Sujet</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  required 
                />
              </InputField>
            </FormRow>
            
            <InputField>
              <label htmlFor="message">Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required 
              />
            </InputField>
            
            <Button type="submit" disabled={formStatus.submitting}>
              {formStatus.submitting ? 'Envoi en cours...' : 'Envoyer le message'}
            </Button>
          </ContactForm>
          
          <ContactInfo>
            <Heading $as="h2" light mb="30px">
              Informations de contact
            </Heading>
            
            <ContactItem>
              <FaMapMarkerAlt />
              <div>
                <Text light weight="600" mb="5px">
                  Adresse
                </Text>
                <Text light mb="0">
                  123 Avenue Lumumba, Kinshasa, RDC
                </Text>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaPhone />
              <div>
                <Text light weight="600" mb="5px">
                  Téléphone
                </Text>
                <Text light mb="0">
                  +243 XX XXX XXXX
                </Text>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaEnvelope />
              <div>
                <Text light weight="600" mb="5px">
                  Email
                </Text>
                <Text light mb="0">
                  info@bimconstruction.com
                </Text>
              </div>
            </ContactItem>
            
            <ContactItem>
              <FaClock />
              <div>
                <Text light weight="600" mb="5px">
                  Heures d'ouverture
                </Text>
                <Text light mb="0">
                  Lun - Ven: 8h00 - 17h00
                </Text>
              </div>
            </ContactItem>
          </ContactInfo>
        </ContactWrapper>
      </Container>
    </Section>
  );
};

export default Contact;
