// import Proptypes from 'prop-types';

const ContactItem = ({ name, number, onBtnClick }) => {
    return (
        <li className="contactList__item">
            <p>{name}:</p>
            <p>{number}</p>
            <button
                type="button"
                onClick={onBtnClick}
            >
                Delete
            </button>
        </li>
    )
};

// ContactItem.propTypes = {
//     name: PropTypes.string.isRequired,
//     number: PropTypes.string.isRequired,
// };

export default ContactItem;