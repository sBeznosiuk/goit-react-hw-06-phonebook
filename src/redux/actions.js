export const addContact = contact => ({
  type: 'contact/Add',
  payload: contact,
});

export const removeContact = id => ({
  type: 'contact/Remove',
  payload: id,
});

export const filterContacts = value => ({
  type: 'contact/Filter',
  payload: value,
});
