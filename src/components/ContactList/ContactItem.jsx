import PropTypes from 'prop-types';
import {
  ButtonTextWrapper,
  CardWrapper,
  Delete,
  Meta,
  Name,
  Tel,
} from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contacts/operations';
import { selectIsLoading } from '../../redux/selectors';
import Loader from 'components/Loader';
import { useRef } from 'react';

const ContactItem = ({ id, name, phone }) => {
  const dispatch = useDispatch();
  const currentButtonRef = useRef(false);
  const { removing } = useSelector(selectIsLoading);

  return (
    <CardWrapper>
      <Meta>
        <Name>{name}</Name>
        <Tel>{phone}</Tel>
      </Meta>

      <Delete
        type="button"
        onClick={() => {
          dispatch(removeContact(id));
          currentButtonRef.current = true;
        }}
      >
        <ButtonTextWrapper>
          Delete
          {removing && currentButtonRef.current && <Loader size={12} />}
        </ButtonTextWrapper>
      </Delete>
    </CardWrapper>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};
