import React from "react";

const Landing = () => {
  return (
    <div>
      <section class="landing">
        <div class="dark-overlay">
          <div class="landing-inner">
            <h1 class="x-large">Developer Connector</h1>
            <p class="lead">
              Create a developer profile/portfolio, share posts and get help
              from other developers
            </p>
            <div class="container">
              <Link to="/signup.html" class="btn btn-primary">
                Signup
              </Link>
              <Link to="/signin.html" class="btn btn-light">
                SignIn
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
