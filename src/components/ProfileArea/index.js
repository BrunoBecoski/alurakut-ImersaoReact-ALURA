import Box from '../Box';
import { Wrapper } from './styles';

function ProfileSideBar({ githubUser }) {
  return (
    <Box as="aside">
      <img src={`https://github.com/${githubUser}.png`} style={{ borderRadius: '8px'}} />
      
      <hr />
  
      <p>
        <a className="boxLink" href={`https://github.com/${githubUser}`}>
          @{githubUser}
        </a>
      </p>

      <hr />

      <Wrapper>
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
      </Wrapper>
    </Box>
  )
}

export function ProfileArea({ user }) {
  return (
    <div className="profileArea" style={{gridArea: 'profileArea'}}>
      <ProfileSideBar githubUser={user}/>
    </div>
  )
}