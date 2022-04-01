import { useEffect, useState } from "react";
import * as api from "../utils/api";

function PostComment({ articleId, users, setLoggedInUser, setHasPosted }) {
  const [isInputDisabled, setIsInputDisabled] = useState(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const dropdownPlaceholder = "select a user";
  const inputPlaceholder = "Comment...";

  const initialFormData = {
    username: dropdownPlaceholder,
    body: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (formData.username !== dropdownPlaceholder) {
      setIsInputDisabled(false);
      setLoggedInUser(formData.username);
    } else if (formData.username === dropdownPlaceholder) {
      setIsInputDisabled(true);
      setLoggedInUser(null);
    }
    if (formData.body !== "") {
      setIsButtonDisabled(false);
    } else if (formData.body === "") {
      setIsButtonDisabled(true);
    }
  }, [formData, setLoggedInUser]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHasPosted(false);
    api.postComment(articleId, formData).then(() => {
      setHasPosted(true);
      setFormData(initialFormData);
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center mb2">
          <label htmlFor="comment" className="f5 f4-l b db mr2">
            Edit <span className="normal">as</span>
          </label>
          <label htmlFor="username"></label>
          <select
            value={formData.username}
            name="username"
            id="username"
            className="f5 f4-l ph2 pv1 br3"
            onChange={handleChange}
          >
            <option key="default">{dropdownPlaceholder}</option>
            {users.map(({ username }) => {
              return (
                <option key={username} id={username} value={username}>
                  {username}
                </option>
              );
            })}
          </select>
        </div>
        <input
          value={formData.body}
          placeholder={inputPlaceholder}
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = inputPlaceholder)}
          disabled={isInputDisabled}
          onChange={handleChange}
          id="body"
          name="body"
          className={`f4 f3-l ${
            isInputDisabled ? "o-50" : ""
          } db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2`}
        ></input>
      </form>
      <button
        disabled={isButtonDisabled}
        type="submit"
        onClick={handleSubmit}
        className={`f5 f4-l ${
          isButtonDisabled ? "o-50" : "grow"
        } no-underline br-pill ba bw1 ph3 pv2 mb3 b--dark-red dark-red bg-light-yellow`}
      >
        Post
      </button>
    </>
  );
}

export default PostComment;
