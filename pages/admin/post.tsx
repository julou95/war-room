import { useState, useEffect } from 'react';
// import dashify from 'dashify';
// import axios from 'axios';
import db from '../../utils/db';
import AddGameForm from '../../components/AddGameForm';
import {useAuthUser} from "next-firebase-auth";

const data = {
  id: '',
  fullDescription: '',
  categoryID: '',
  image: '',
  likes: 0,
  name: '',
  players: '',
  shortDescription: '',
  user: '',
}

const Post = (props) => {
  const AuthUser = useAuthUser();
  const [user, setUser] = useState();
  const [content, setContent] = useState({
    title: undefined,
    body: undefined,
  })

  useEffect(() => {
    const userData = async () =>
      await db.collection('users').where('email', '==', AuthUser.email).get();
    userData().then(res => {
      console.log('LJ - res:', res);
    });
  }, [])

  const onChange = (e: any) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }

  const onSubmit = async () => {
    const { title = '', body } = content;
    // await axios.post('/api/game', { title, slug: dashify(title), body });
  }

  console.log('LJ - id:', props.id, AuthUser.email);
  return (
    <div>
        <AddGameForm onSubmit={onSubmit} />
    </div>
  );
};

export const getStaticProps = async () => {
  const entries = await db.collection('games').get();
  console.log('LJ - entries:', entries.size);

  return {
    props: { nextId: entries.size+1 },
    revalidate: 10
  }
}

export default Post;