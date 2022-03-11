import { ReactComponent as CaretUp } from "../icons/caret-up.svg";
import { ReactComponent as CaretDown } from "../icons/caret-down.svg";
import { Link, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";

function Sort({ currentTopic, setArticles }) {
  const [sort, setSort] = useState();
  const [order, setOrder] = useState();

  const [searchParams] = useSearchParams();

  const handleSort = (e) => {
    const sort = e.target.value;

    if (sort === "title_a-z") {
      setSort("title");
      setOrder("asc");
    } else if (sort === "title_z-a") {
      setSort("title");
      setOrder("desc");
    }
    if (sort === "recent") {
      setSort("created_at");
      setOrder("desc");
    } else if (sort === "oldest") {
      setSort("created_at");
      setOrder("asc");
    }
    if (sort === "most_comments") {
      setSort("comment_count");
      setOrder("desc");
    }
  };

  useEffect(() => {
    api.getArticles(currentTopic, sort, order).then((articles) => {
      setArticles(articles);
    });
  }, [sort, order]);

  return (
    <>
      <div>
        <form>
          <fieldset id="sort" className="ba b--transparent ph0 mh0">
            <label htmlFor="sort_by">Sort by:</label>
            <select onChange={handleSort} name="sort_by" id="sort_by">
              <option id="recent" value="recent">
                Most recent
              </option>
              <option id="oldest" value="oldest">
                Oldest first
              </option>
              <option id="title_a-z" value="title_a-z">
                Title A - Z
              </option>
              <option id="title_z-a" value="title_z-a">
                Title Z - A
              </option>
              <option id="most_comments" value="most_comments">
                Most Comments
              </option>
            </select>
          </fieldset>
        </form>
      </div>

      {/* <Link
        to="/"
        className="grow no-underline br-pill ba bw1 ph3 pv2 flex items-center dark-red"
      >
        <div className="flex items-center justify-center mr2">
          <div className="flex flex-column svg w1">
            <CaretUp />
            <CaretDown />
          </div>
        </div>
        <div className="f5 f4-l">ASC</div>
      </Link> */}
    </>
  );
}

export default Sort;
