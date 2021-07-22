import { ProfileRelationsBoxWrapper } from './styles';

export function ProfileRelationsArea({
  seguidores,
  numeroSeguidores,
  comunidades,
  pessoasFavoritas
}) {
  return (
    <div className="profileRelationsArea" style={{gridArea: 'profileRelationsArea'}}>
      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Seguidores ({numeroSeguidores})
        </h2>
        <ul>
          {seguidores.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={`/users/${itemAtual.login}`} key={itemAtual.login}>
                  <img src={itemAtual.avatar_url} />
                  <span>{itemAtual.login}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Comunidades ({comunidades.length})
        </h2>

        <ul>
          {comunidades.map((itemAtual) => {
            return (
              <li key={itemAtual.id}>
                <a href={`/communities/${itemAtual.id}`}>
                  <img src={itemAtual.imageUrl} />
                  <span>{itemAtual.title}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>

      <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
          Pessoas da comunidade ({pessoasFavoritas.length})
        </h2>

        <ul>
          {pessoasFavoritas.map((itemAtual) => {
            return (
              <li key={itemAtual}>
                <a href={`/users/${itemAtual}`} key={itemAtual}>
                  <img src={`https://github.com/${itemAtual}.png`} />
                  <span>{itemAtual}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </ProfileRelationsBoxWrapper>
    </div>
  )
}