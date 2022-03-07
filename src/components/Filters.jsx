import { Link } from "react-router-dom";

function Filters({ topics }) {
  return (
    <>
      <h2>Filters</h2>
      <nav>
        <Link key='latest' to='/'>Latest</Link>
        {topics.map((topic) => {
          return (
            <Link key={topic.slug} to={`/topics/${topic.slug}`}>
              {topic.slug}
            </Link>
          );
        })}
      </nav>
    </>
  );
}

export default Filters;
