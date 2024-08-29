import { Logo } from "./logo";
import { Search } from "./search";

export const Header = () => {
  return (
    <header>
      <div class="container">
        <div class="header-inner">
          <div class="nav">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Work</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div>
            <a href="#" class="logo">
              <Logo />
            </a>
          </div>
          <div>
            <a href="#" class="search">
              <Search />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
