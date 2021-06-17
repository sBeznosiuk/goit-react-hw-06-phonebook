import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const contactsReducer = (
  state = {
    items: JSON.parse(localStorage.getItem('Contacts')) || [],
    filter: '',
  },
  { type, payload },
) => {
  switch (type) {
    case 'contact/Add':
      const doesExists = state.items.some(item => item.name === payload.name);

      if (doesExists) {
        alert(`${payload.name} is already in contacts.`);

        return {
          ...state,
        };
      } else {
        return {
          ...state,
          items: [...state.items, payload],
        };
      }

    case 'contact/Remove':
      console.log(payload);

      return {
        items: [...state.items.filter(i => i.id !== payload)],
      };

    case 'contact/Filter':
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
