import ContactForm from 'components/ContactForm';
import Container from 'components/Container';
import Section from 'components/Section';
import Contacts from 'components/Contacts';
import 'react-toastify/dist/ReactToastify.css';
import { MainHeading } from './App.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectError } from '../../redux/selectors';
import { useEffect } from 'react';
import { getContacts } from '../../redux/contacts/operations';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  useEffect(() => {
    if (error) toast.error(error);
  }, [error]);

  return (
    <div>
      <Container>
        <MainHeading>Phonebook</MainHeading>
        <Section>
          <ContactForm />
        </Section>
      </Container>

      <Container>
        <Contacts />
      </Container>
      <ToastContainer />
    </div>
  );
};

export default App;
