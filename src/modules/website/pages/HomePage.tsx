import type { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
  return (
    <div className="default_container py-10 font-primary">
      <h1 className="mb-4">Home</h1>
      <p className="default_para_sec mb-4">
        Starter routes for this base app.
      </p>
      <ul className="list-inside list-disc space-y-2 text-[var(--primary-color)]">
        <li>
          <Link to="/about-us" className="underline-offset-2 hover:underline">
            About us
          </Link>
        </li>
        <li>
          <Link
            to="/ui-showcase"
            className="underline-offset-2 hover:underline"
          >
            UI primitives showcase (Card, Badge, Alert, …)
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default HomePage
