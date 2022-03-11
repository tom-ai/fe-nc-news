import { useState } from "react";

function PostComment() {
  const initialFormData = {
    comment: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <form>
        <div>
          <label for="comment" className="f5 b db mb1">
            Write comment
          </label>
          <textarea
            onChange={handleChange}
            id="comment"
            name="comment"
            className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2"
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
