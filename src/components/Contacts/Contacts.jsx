import ContactList from 'components/ContactList';
import Notification from 'components/Notification';
import Section from 'components/Section';
import { useSelector } from 'react-redux';
import { selectContactsLength, selectIsLoading } from '../../redux/selectors';
import Search from 'components/Search';
import { LoaderWrapper } from './Contacts.styled';
import Loader from 'components/Loader';

const Contacts = () => {
  const contactLength = useSelector(selectContactsLength);
  const { fetching } = useSelector(selectIsLoading);

  if (fetching)
    return (
      <LoaderWrapper>
        <Loader size={60} />
      </LoaderWrapper>
    );

  return (
    <Section title="Contacts">
      {contactLength !== 0 ? (
        <>
          <Search />
          <ContactList />
        </>
      ) : (
        <Notification message="No contacts" />
      )}
    </Section>
  );
};

export default Contacts;
