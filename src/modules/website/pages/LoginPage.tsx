import type { FC } from "react";
import { Link } from "react-router-dom";

/** Placeholder until auth UI is implemented; `useAuthLogout` navigates here. */
const LoginPage: FC = () => {
  return (
    <div className="default_container py-10 font-primary">
      <h1 className="mb-4">Sign in</h1>
      <p className="default_para_sec mb-4">
        Replace this page with your real login flow. The API layer redirects here
        when the refresh token is missing or invalid.
      </p>
      <Link
        to="/"
        className="text-[var(--primary-color)] underline-offset-2 hover:underline"
      >
        ← Home
      </Link>
    </div>
  );
};

export default LoginPage;
