import { NavLink } from '@remix-run/react'
import type { FC, PropsWithChildren } from 'react'
import Logo from '~/img/asdougllogo.svg'

export const PageLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* header */}
      <div className="mb-12 border-b border-b-white/10">
        <div className="container mx-auto flex items-center gap-6 py-6 px-4 md:px-0">
          <div className="flex items-baseline gap-4">
            <img src={Logo} alt="" className="h-6" />
            <h1 className="font-display text-2xl font-bold">Asdougl</h1>
          </div>
          <div className="flex items-center gap-6 px-4 font-display text-lg tracking-wide">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              Me
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? 'underline' : '')}
            >
              Blog
            </NavLink>
          </div>
        </div>
      </div>
      {/* body */}
      <div className="container mx-auto flex-grow px-4 pt-6 pb-24 md:px-0">
        {children}
      </div>
      {/* footer */}
      <div className="container mx-auto flex items-center justify-between py-4">
        <div>Copyright &copy; {new Date().getFullYear()} Cameron Burrows</div>
        <a
          href="https://github.com/Asdougl"
          className="font-bold hover:text-opacity-75"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </div>
    </div>
  )
}
