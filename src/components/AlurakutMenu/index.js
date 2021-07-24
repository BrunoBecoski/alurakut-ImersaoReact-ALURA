import { useState } from 'react';
import { useRouter } from 'next/router'
import NextLink from 'next/link';
import nookies from 'nookies';

import { Logo, Wrapper, ProfileSidebar, ProfileSidebarMenuDefault } from './styles';

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

  const router = useRouter();
  
  function handleLogout() {
    nookies.destroy(null, 'USER_TOKEN');
    router.push('/login');
  }

  return (
    <Wrapper isMenuOpen={isMenuOpen}>
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
          <a onClick={handleLogout}>
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

      <ProfileSidebar isMenuOpen={isMenuOpen}>
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

            <ProfileSidebarMenuDefault>
              <nav>
                <a href="/perfil">
                  <img src={`http://alurakut.vercel.app/icons/user.svg`} />
                  Perfil
                </a>
                <a href="/recados">
                  <img src={`http://alurakut.vercel.app/icons/book.svg`} />
                  Recados
                </a>
                <a href="/fotos">
                  <img src={`http://alurakut.vercel.app/icons/camera.svg`} />
                  Fotos
                </a>
                <a href="/depoimentos">
                  <img src={`http://alurakut.vercel.app/icons/sun.svg`} />
                  Depoimentos
                </a>
              </nav>
              
              <hr />

              <nav>
                <a href="/githubtrends">
                  <img src={`http://alurakut.vercel.app/icons/plus.svg`} />
                  GitHub Trends
                </a>
                <a onClick={handleLogout}>
                  <img src={`http://alurakut.vercel.app/icons/logout.svg`} />
                  Sair
                </a>
              </nav>
            </ProfileSidebarMenuDefault>
          </div>
        </div>
      </ProfileSidebar>
    </Wrapper>
  )
}