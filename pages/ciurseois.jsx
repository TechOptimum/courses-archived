import Link from "next/link";
import { getDatabase } from "../lib/notion";
import { Text } from "./[id]";

export const databaseId = process.env.NOTION_DATABASE_ID;

export default function miurseois({ posts }) {
  return (
    <>
      <div className="announcements-container">
        <ol className="announcements">
          {posts.map((post) => {
            const date = new Date(post.last_edited_time).toLocaleString(
              "en-US",
              {
                month: "short",
                day: "2-digit",
                year: "numeric",
              }
            );
            return (

              <li className="post" key={post.id} >
                <h3 className="postTitle">
                  <Link href={`/${post.id}`}>
                    <Text text={post.properties.Name.title} />
                  </Link>
                </h3>

                <p className="postDescription">{date}</p>
                <Link className="readMoreLink" href={`/${post.id}`}>Read more → </Link>
              </li>
            );
          })}
        </ol>
      </div>
    </>
  );
}
export const getStaticProps = async () => {
  const database = await getDatabase(databaseId);
  return {
    props: {
      posts: database,
    },
    revalidate: 1,
  };
};
