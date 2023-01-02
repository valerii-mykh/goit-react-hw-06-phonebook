import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'conacts',
  initialState: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  reducers: {
    addContacts: (state, action) => {
      localStorage.setItem(
        'contacts',
        JSON.stringify([...state, action.payload])
      );
      return [...state, action.payload];
    },
    deleteContacts: (state, action) => {
      const contact = state.filter(contact => contact.id !== action.payload);
      localStorage.setItem('contacts', JSON.stringify(contact));
      return contact;
    },
  },
});
export const { addContacts, deleteContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
