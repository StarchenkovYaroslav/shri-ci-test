import { FC } from "react";
import { Helmet } from "react-helmet";

export const About: FC = () => {
  return (
    <>
      <Helmet>
        <title>About page</title>
      </Helmet>
      <h1 data-testid="page-title">Abou</h1>
      <div>BYE BABY!</div>
      <p>This is an example application.</p>
    </>
  );
};
