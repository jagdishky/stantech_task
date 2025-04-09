import SQLite from 'react-native-sqlite-storage';

SQLite.enablePromise(true);

export const getDBConnection = async () => {
  return SQLite.openDatabase({name: 'Contacts.db', location: 'default'});
};

export const createTable = async () => {
  const db = await getDBConnection();
  const query = `CREATE TABLE IF NOT EXISTS contacts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullname TEXT NOT NULL,
    phone TEXT NOT NULL
  );`;
  await db.executeSql(query);
};
