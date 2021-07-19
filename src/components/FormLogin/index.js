import { useState } from 'react';
import { useRouter } from 'next/router';
import nookies from 'nookies';

import { Section } from './styles';

export function FormLogin() {
  const router = useRouter();
  const [githubUser, setGithubUser] = useState('');

  async function handleFormSubmit(event) {
    event.preventDefault();
    fetch('https://alurakut.vercel.app/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ githubUser: githubUser })
    })
    .then(async (respostaDoServer) => {
      const dadosDaResposta = await respostaDoServer.json();
      const token = dadosDaResposta.token;
      nookies.set(null, 'USER_TOKEN', token, {
        path: '/',
        maxAge: 86400 * 7
      })
      router.push('/')
    })
  }

  return (
    <Section>
      <form className="box" onSubmit={(event) => handleFormSubmit(event)}>
        <p>
          Acesse agora mesmo com seu usuário do <strong>Github</strong>!
        </p>
        <input 
          placeholder="Usuário" 
          value={githubUser}
          onChange={(evento) => {
            setGithubUser(evento.target.value)
          }} 
          required
        />
        <button type="submit" >
          Login
        </button>
      </form>

      <footer className="box">
        <p>
          Ainda não é membro <br />
          <a href="/login">
            <strong>
              ENTRAR JÁ
            </strong>
          </a>
        </p>
      </footer>
    </Section>
  )
}