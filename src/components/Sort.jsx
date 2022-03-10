import { ReactComponent as CaretUp } from "../icons/caret-up.svg";
import { ReactComponent as CaretDown } from "../icons/caret-down.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import * as api from "../utils/api";

function Sort() {
  const [sortQuery, setSortQuery] = useState([]);

  const handleChange = (e) => {
    setSortQuery(e.target.value);
  };

  useEffect(() => {}, []);

  return (
    <>
      <div>
        <form>
          <fieldset id="sort" className="ba b--transparent ph0 mh0">
            <label htmlFor="sort_by">Sort by:</label>
            <select onChange={handleChange} name="sort_by" id="sort_by">
              <option id="date" value="date">
                Most recent
              </option>
              <option id="title" value="title">
                Title A - Z
              </option>
              {/* <option id="votes" value="votes">
                Vote Count
              </option> */}
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
      </Link>
 */}
    </>
  );
}

export default Sort;
