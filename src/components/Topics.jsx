import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as api from "../utils/api";

function Topics() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.getTopics().then((topics) => setTopics(topics));
  }, []);

  return (
    <>
      <nav>
        <div className="">
          <Link
            className="w-15 f3 f4-m ttu link dim ph3 pv3 dib light-yellow bg-dark-red"
            key="latest"
            to="/"
          >
            Latest
          </Link>
          {topics.map((topic) => {
            return (
              <Link
                className="w-15 f3 f4-m ttu link dim ph3 pv3 dib light-yellow bg-dark-red"
                key={topic.slug}
                to={`/topics/${topic.slug}`}
              >
                {topic.slug}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}

export default Topics;
