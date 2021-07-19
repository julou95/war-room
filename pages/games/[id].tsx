import { useRouter } from 'next/router';
import Link from 'next/link';
import db from '../../utils/db';
import BackLink from "../../components/BackLink";

type Props = {
  entry: Entry,
  category: Category,
}

type Entry = {
  id: string,
  name: string,
  shortDescription: string,
  fullDescription: string,
}

type Category = {
  id: string,
  name: string,
}

type StaticContext = {
  params: {
    id: string,
  },
}

const Post = (props: Props) => {
  const { entry, category } = props;
  const router = useRouter()
  if (router.isFallback) {
    return (
      <div>loading</div>
    )
  } else {
    if (entry.name) {
      return (
        <div>
          <BackLink text={`Zurück zu: ${category.name}`} href={`/category/${category.id}`} />
          <h1>{entry.name}</h1>
          <h3>{entry.shortDescription}</h3>
          <p>{entry.fullDescription}</p>
        </div>
      );
    } else {
      return (
        <div>
          <BackLink text={`Zurück`} href={`/category`} />
          <h1>Spiel nicht gefunden...</h1>
        </div>
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
  const res = await db.collection("games").where("ID", "==", id).get();
  const entry = res.docs.map(entry => entry.data())[0] || {};
  if (!entry.categoryID) {
    return {
      props: {
        entry: {},
        category: {}
      }
    }
  }
  const catRes = await db.collection("categories").where("id", "==", entry.categoryID).get();
  const category = catRes.docs.map(categories => categories.data())[0] || {};
  return {
    props: {
      entry,
      category,
    }
  }
}

export default Post;