import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { deleteContact } from 'redux/contacts/operations';
import { Item, ItemInner, TextWrap, Text, BtnWrap, Btn } from './contactItem.styled';

export default function ContactItem({ name, phone, contactId }) {
    const dispatch = useDispatch();

    const handleDelete = id => {
        Confirm.show(
            'Delete contact',
            'Are you sure?',
            'Yes',
            'No',
            () => {
                dispatch(deleteContact(id));
            },
            () => {
                return;
            }
        )
    };
    
    return (
        <Item>
            <ItemInner>
                <TextWrap>
                    <Text>{ name }</Text>
                </TextWrap>
                <TextWrap>
                    <Text>{ phone }</Text>
                </TextWrap>
            </ItemInner>
            <BtnWrap>
                <Btn type='button' onClick={() => handleDelete(contactId)}></Btn>
            </BtnWrap>
        </Item>
    );
};

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    contactId: PropTypes.string.isRequired,
};