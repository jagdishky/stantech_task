import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {Contact} from '../../sqlite/models/Contact';
import {
  addContact,
  deleteContact,
  getContacts,
  updateContact,
} from '../../sqlite/services/contactServices';

interface ContactsState {
  contacts: Contact[];
  loading: boolean;
}

const initialState: ContactsState = {
  contacts: [],
  loading: false,
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async () => {
    return await getContacts();
  },
);

export const createContact = createAsyncThunk(
  'contacts/createContact',
  async ({fullname, phone}: {fullname: string; phone: string}, {dispatch}) => {
    await addContact(fullname, phone);
    dispatch(fetchContacts());
  },
);

export const editContact = createAsyncThunk(
  'contacts/editContact',
  async (
    {id, fullname, phone}: {id: number; fullname: string; phone: string},
    {dispatch},
  ) => {
    await updateContact(id, fullname, phone);
    dispatch(fetchContacts());
  },
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id: number, {dispatch}) => {
    await deleteContact(id);
    dispatch(fetchContacts());
  },
);

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.contacts = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, state => {
        state.loading = false;
      });
  },
});

export default contactsSlice.reducer;
