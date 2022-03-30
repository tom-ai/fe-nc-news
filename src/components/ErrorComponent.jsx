import { Link } from "react-router-dom";

export default function ErrorComponent({ status }) {
  let message;
  if (status === 404) {
    message = "This page does not exist!";
  } else if (status === 400) {
    message = "Incorrect URL!";
  }
  return (
    <div className="flex flex-column items-center mb3 pa3">
      <h1 className="f-headline f-subheadline-m measure mb3">{status}</h1>
      <p className="f2 f3-m measure-narrow tc mb4">{message}</p>
      <Link
        to={"/"}
        className="f5 f4-l grow no-underline pointer br-pill ba bw1 ph3 pv2 mb3 dark-red"
      >
        Go back to articles
      </Link>
    </div>
  );
}
