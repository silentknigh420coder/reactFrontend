import React from "react";

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid ">
          <a class="navbar-brand text-danger" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler text-danger"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse text-danger"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 text-danger">
              <li class="nav-item dropdown ">
                <a
                  class="nav-link dropdown-toggle text-danger"
                  href="#"
                  id="navbarDropdownPractice"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Practice
                </a>
                <ul
                  class="dropdown-menu text-danger "
                  aria-labelledby="navbarDropdownPractice"
                >
                  <li>
                    <a class="dropdown-item text-danger" href="#">
                      tutorial
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-danger" href="#">
                     article
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-danger" href="#">
                     coding problems
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item text-danger" href="#">
                      learning videos
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item text-danger">
                <a class="nav-link text-danger" href="#">
                  Jobs
                </a>
              </li>
              <li class="nav-item text-danger">
                <a class="nav-link text-danger" href="#">
                  Events
                </a>
              </li>
              <li class="nav-item text-danger">
                <a class="nav-link text-danger" href="#">
                  Placements
                </a>
              </li>
              <li class="nav-item text-danger">
                <a class="nav-link text-danger" href="#">
                  Hire from Us
                </a>
              </li>
              <li class="nav-item text-danger">
                <a class="nav-link text-danger" href="#">
                  Refer & Earn
                </a>
              </li>
              <li class="nav-item dropdow text-dangern">
                <a
                  class="nav-link dropdown-toggle text-danger"
                  href="#"
                  id="navbarDropdownAbout"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About Us
                </a>
                <ul
                  class="dropdown-menu text-danger"
                  aria-labelledby="navbarDropdownAbout"
                >
                  <li>
                    <a class="dropdown-item" href="#">
                    about us
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      blogs
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      in the news
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
