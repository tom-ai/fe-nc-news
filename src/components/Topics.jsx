import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api";

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.getTopics().then((topics) => setTopics(topics));
  }, []);

  {
    console.log(topics);
  }
  return (
    <>
      <h2>Topics</h2>
      <nav>
        <Link key="latest" to="/">
          Latest
        </Link>
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

export default Topics;
