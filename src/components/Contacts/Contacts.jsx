import css from './Contacts.module.css';
import PropTypes from "prop-types"

export function Contacts({contacts, handleDelete, children}){
  return (
    <div className={css.contacts}>
      <h2>Contacts</h2>      
      {children}
      <ul className={css.list}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <span className={css.name}>{contact.name}: </span>{contact.number} <button type='button' onClick={() => handleDelete(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}


Contacts.propTypes = {
  contacts:PropTypes.arrayOf(PropTypes.shape({
      id:PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      number:PropTypes.string.isRequired
  })),
  children:PropTypes.node
}