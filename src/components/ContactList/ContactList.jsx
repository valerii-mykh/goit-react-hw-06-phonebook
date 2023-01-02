import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'redux/slices/contacts';

import s from 'components/ContactList/ContactList.module.css';

const filtersContacts = (contacts, filter) =>
  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

export default function ContactList() {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const contactsList = filtersContacts(contacts, filter);

  const deleteItem = id => {
    dispatch(deleteContacts(id));
  };

  return (
    <ol className={s.list}>
      {contactsList.map(el => (
        <li key={el.id}>
          <p className={s.posBtn}>
            <span className={s.text}>
              {el.name}: {el.number}
            </span>
            <button
              type="button"
              onClick={() => deleteItem(el.id)}
              className={s.btn}
            >
              Delete
            </button>
          </p>
        </li>
      ))}
    </ol>
  );
}
