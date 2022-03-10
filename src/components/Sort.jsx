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
    setSort(e.target.value);
  };

  useEffect(() => {
    api.getArticles(currentTopic, sort).then((articles) => {
      setArticles(articles);
    });
  }, [sort]);

  return (
    <>
      <div>
        <form>
          <fieldset id="sort" className="ba b--transparent ph0 mh0">
            <label htmlFor="sort_by">Sort by:</label>
            <select onChange={handleSort} name="sort_by" id="sort_by">
              <option id="created_at" value="created_at">
                Most recent
              </option>
              <option id="title" value="title">
                Title Z - A
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
