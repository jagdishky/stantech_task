import {getDBConnection} from '../database';
import {Contact} from '../models/Contact';
import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);
export const getContacts = async (): Promise<Contact[]> => {
  const db = await getDBConnection();
  const results = await db.executeSql('SELECT * FROM contacts');
  const rows = results[0].rows;
  const contacts: Contact[] = [];
  for (let i = 0; i < rows.length; i++) {
    contacts.push(rows.item(i));
  }
  return contacts;
};

export const addContact = async (fullname: string, phone: string) => {
  const db = await getDBConnection();
  await db.executeSql('INSERT INTO contacts (fullname, phone) VALUES (?, ?)', [
    fullname,
    phone,
  ]);
};

export const updateContact = async (
  id: number,
  fullname: string,
  phone: string,
) => {
  const db = await getDBConnection();
  await db.executeSql(
    'UPDATE contacts SET fullname = ?, phone = ? WHERE id = ?',
    [fullname, phone, id],
  );
};

export const deleteContact = async (id: number) => {
  const db = await getDBConnection();
  await db.executeSql('DELETE FROM contacts WHERE id = ?', [id]);
};
