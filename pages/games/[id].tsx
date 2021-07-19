import { useRouter } from 'next/router';
import Link from 'next/link';
import db from '../../utils/db';

type Props = {
  entry: Entry,
}

type Entry = {
  id: string,
  name: string,
  shortDescription: string,
  fullDescription: string,
}

type StaticContext = {
  params: {
    id: string,
  },
}

const Post = (props: Props) => {
  const { entry } = props;
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div>loading</div>
    )
  } else {
    if (entry) {
      return (
        <div>
          <Link href='/games'>zurück</Link>
          <h1>{entry.name}</h1>
          <h4>{entry.shortDescription}</h4>
          <p>{entry.fullDescription}</p>
        </div>
      );
    } else {
      return (
        <div>not found</div>
      )
    }
  }
};

export const getStaticPaths = async () => {
  const entries = await db.collection("games").get()
  const paths = entries.docs.map(entry => ({
    params: {
      id: entry.data().ID
    }
  }));
  return {
    paths,
    fallback: true
  }
}

export const getStaticProps = async (context: StaticContext) => {
  const { id } = context.params;
  const res = await db.collection("games").where("ID", "==", id).get()
  const entry = res.docs.map(entry => entry.data());
  if (entry.length) {
    return {
      props: {
        entry: entry[0]
      }
    }
  } else {
    return {
      props: {}
    }
  }
}

export default Post;