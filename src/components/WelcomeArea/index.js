import { Box } from '../Box';
import { OrkutIconSet } from '../OrkutIconSet';

export function WelcomeArea({ 
  githubUser, 
  comunidades, 
  setComunidades 
}) {

  function handleCriaComunidade(event) {
    event.preventDefault();

    const dadosDoForm = new FormData(event.target);
    const comunidade = {
      title: dadosDoForm.get('title'),
      imageUrl: dadosDoForm.get('image'),
      creatorSlug: githubUser,
    }

    fetch('/api/comunidades', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comunidade)
    })
    .then(async (response) => {
      const dados = await response.json();
      const comunidade = dados.registroCriado;
      const comunidadesAtualizadas = [...comunidades, comunidade];
      setComunidades(comunidadesAtualizadas)
    })
  }

  return (
    <div className="welcomeArea" style={{gridArea: 'welcomeArea'}}>
      <Box>
        <h1 className="title">
          Bem Vindo
        </h1>

        <OrkutIconSet />
      </Box>

      <Box>
        <h2 className="subTitle">O que você deseja fazer?</h2>
        <form onSubmit={(event) => handleCriaComunidade(event)}>
          <div>
            <input 
              placeholder="Qual vai ser o nome da sua comunidade?" 
              name="title" 
              aria-label="Qual vai ser o nome da sua comunidade?"
              type="text"
            />
          </div>
          <div>
            <input 
              placeholder="Coloque uma URL para usarmos de capa"
              name="image"
              aria-label="Coloque uma URL para usarmos de capa"
            />
          </div>

          <button>
            Criar comunidade
          </button>

        </form>
      </Box>
    </div>
  )
}