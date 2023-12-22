import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.list}>
            <li className={css.item}>
              <NavLink
                to="/"
                className={css.link}
                style={({ isActive }) => ({
                  borderRadius: isActive ? '10px' : '0px',
                  background: isActive ? '#3f7b6f' : '#73b8aa',
                  padding: isActive ? '5px' : '0px',
                })}
              >
                Home
              </NavLink>
            </li>
            <li className={css.item}>
              <NavLink
                to="/movies"
                className={css.link}
                style={({ isActive }) => ({
                  borderRadius: isActive ? '10px' : '0px',
                  background: isActive ? '#3f7b6f' : '#73b8aa',
                  padding: isActive ? '5px' : '0px',
                })}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default SharedLayout;
