import React from "react";

export default function About() {
  return (
    <div className="container-fluid">
      <h1 className="display-4">About</h1>
      <br />
      <p className="font-italic">Hello,</p>
      <p className="text-justify">
        I built this project initially as an intro to web development. I have
        implemented it using reactjs for the frontend and express nodejs for the
        backend. If you're reading this, I'd like to thank you and thank the
        fine people uploading their tutorials to Youtube.
      </p>
      <p>Best tutorials and tutors</p>
      <ul>
        <li>
          <a href="https://www.youtube.com/user/TechGuyWeb">Traversy Media</a>
        </li>
        <li>
          <a href="https://www.youtube.com/user/shiffman">The Coding Train</a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UClb90NQQcskPUGDIXsQEz5Q">
            Dev Ed
          </a>
        </li>
      </ul>
      <p className="font-weight-bold">
        Special thanks to <a href="https://twitter.com/bobziroll">@bobziroll</a>{" "}
        and{" "}
        <a href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ">
          freeCodeCamp.org
        </a>{" "}
        for this{" "}
        <a href="https://www.youtube.com/watch?v=DLX62G4lc44">masterpiece</a>
      </p>
      <p>
        You can check the{" "}
        <a
          href="https://github.com/OsamaAdam98/todoNumeroUno"
          className="badge badge-primary"
        >
          repository here
        </a>
      </p>
    </div>
  );
}
