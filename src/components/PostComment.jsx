import { useState } from "react";
import * as api from "../utils/api";

function PostComment({ articleId, users }) {
  const initialFormData = {
    username: "",
    body: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    if (formData.username === "") {
      // do something here like isLoading
    } else if (formData.body === "") {
      // do something here like isLoading
    } else {
      e.preventDefault();
      api.postComment(articleId, formData);
    }
  };

  return (
    <>
      <form>
        <div>
          <div className="flex items-end mb2">
            <label htmlFor="comment" className="f5 f4-l b db mr2">
              Write comment <span className="normal">as</span>
            </label>
            <label htmlFor="username"></label>
            <select
              name="username"
              id="username"
              className="f5 f4-l ph2 pv1 br3"
              onChange={handleChange}
            >
              <option key="default">Choose Username</option>
              {users.map(({ username }) => {
                return (
                  <option key={username} id={username} value={username}>
                    {username}
                  </option>
                );
              })}
            </select>
          </div>

          <textarea
            onChange={handleChange}
            id="body"
            name="body"
            className="f4 f3-l db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
          ></textarea>
        </div>
      </form>

      <button
        onClick={handleSubmit}
        className="f5 f4-l grow no-underline br-pill ba bw1 ph3 pv2 mb3 b--dark-red dark-red bg-light-yellow"
      >
        Post
      </button>
    </>
  );
}

export default PostComment;
