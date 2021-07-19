import { useEffect, useState } from 'react';
import Link from 'next/link'
import axios from 'axios';

type Entry = {
  id: string,
  title: string,
}

const List = () => {
  const [entries, setEntries] = useState([]);

  // @ts-ignore
  useEffect(async () => {
    const res = await axios.get('/api/games');
    setEntries(res.data.entriesData);
  }, []);

  return (
    <div>
      <h1>Entries</h1>
      {entries.map((entry: Entry) => (
        <div key={entry.id}>
          <Link href={`/admin/edit/${entry.id}`}>
            <a>{entry.title}</a>
          </Link>
          <br/>
        </div>
      ))}
    </div>
  );
};

export default List;