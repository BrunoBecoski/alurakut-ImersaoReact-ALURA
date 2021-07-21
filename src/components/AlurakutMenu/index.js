import { useState } from 'react';
import NextLink from 'next/link';

// import { AlurakutMenu as Header} from '../../lib/AlurakutCommons';

import { Logo, Wrapper, ProfileSidebar } from './styles';

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  )
}

export function AlurakutMenu({ githubUser }) {
  const [isMenuOpen, setMenuState] = useState(false);

  return (

    // <Header githubUser={'peas'}/>
    <Wrapper>
      <div className="container">
        <Logo src={`http://alurakut.vercel.app/logo.svg`} />

        <nav style={{ flex: 1 }}>
          {[{ name: 'Inicio', slug: '/'}, {name: 'Amigos', slug: '/amigos'}, {name: 'Comunidades', slug: '/comunidades'}].map((menuItem) => (
            <Link key={`key__${menuItem.name.toLocaleLowerCase()}`} href={`${menuItem.slug.toLocaleLowerCase()}`}>
              {menuItem.name}
            </Link>
          ))}
        </nav>

        <nav>
          <a href={`/logout`}>
            Sair
          </a>
          <div>
            <input placeholder="Pesquisar no Orkut" />
          </div>
        </nav>

        <button onClick={() => setMenuState(!isMenuOpen)}>
          {isMenuOpen && <img src={`http://alurakut.vercel.app/icons/menu-open.svg`} />}
          {!isMenuOpen && <img src={`http://alurakut.vercel.app/icons/menu-closed.svg`} />}
        </button>
      </div>
      <ProfileSidebar>
        <div className="alurakutMenuProfileSidebar">
          <div>
            <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px' }} />
            <hr />
            <p>
              <a className="boxLink" href={`/user/${githubUser}`}>
                @{githubUser}
              </a>
            </p>
            <hr />

            <nav>
              <a href="/">
                <img src={`http://alurakut.vercel.app/icons/user.svg`} />
                  Perfil
                </a>
              <a href="/">
                <img src={`http://alurakut.vercel.app/icons/book.svg`} />
                  Recados
                </a>
              <a href="/">
                <img src={`http://alurakut.vercel.app/icons/camera.svg`} />
                  Fotos
                </a>
              <a href="/">
                <img src={`http://alurakut.vercel.app/icons/sun.svg`} />
                  Depoimentos
                </a>
            </nav>
            <hr />
            <nav>
              <a href="/">
                <img src={`http://alurakut.vercel.app/icons/plus.svg`} />
                  GitHub Trends
                </a>
              <a href="/logout">
                <img src={`http://alurakut.vercel.app/icons/logout.svg`} />
                  Sair
                </a>
            </nav>
          </div>
        </div>
      </ProfileSidebar>
    </Wrapper>
  )
}