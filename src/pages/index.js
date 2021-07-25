import { useState, useEffect } from 'react';
import nookies from 'nookies';
import jwt from 'jsonwebtoken';

import { AlurakutMenu } from '../components/AlurakutMenu';
import { MainGrid } from '../components/MainGrid';
import { ProfileArea } from '../components/ProfileArea';
import { WelcomeArea } from '../components/WelcomeArea';
import { ProfileRelationsArea } from '../components/ProfileRelationsArea'

export default function Home(props) {
  const [comunidades ,setComunidades] = useState([]);
  const [numeroComunidades, setNumeroComunidades] = useState(0);
  const githubUser = props.githubUser;
  const pessoasFavoritas = [
    'juunegreiros', 
    'omariosouto', 
    'peas', 
    'rafaballerini', 
    'marcobrunodev',
    'felipefialho',
  ];
  const [seguidores, setSeguidores] = useState([]);
  const [numeroSeguidores, setNumeroSeguidores] = useState(0);

  useEffect(function() {
    fetch(`https://api.github.com/users/${props.githubUser}/followers?per_page=6`)
      .then(respostaDoServidor => respostaDoServidor.json())
      .then(respostaCompleta =>setSeguidores(respostaCompleta));

      fetch(`https://api.github.com/users/${props.githubUser}`)
        .then((response) => response.json())
        .then(({ followers }) => setNumeroSeguidores(followers));

      // API GraphQL 
      fetch('https://graphql.datocms.com/', {
        method: 'POST',
        headers: {
          'Authorization': process.env.NEXT_PUBLIC_DATOCMS_READ_ONLY_TOKEN,
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({ "query": `query {
          _allCommunitiesMeta {
            count
          }
          
          allCommunities(first: 6) {
            title
            id
            imageUrl
            creatorSlug
          }
        }`})
      })
      .then((response) => response.json())
      .then(({ data }) =>  {
        setNumeroComunidades(data._allCommunitiesMeta.count);
        setComunidades(data.allCommunities);
      });
  }, []);

  return (
    <>
      <AlurakutMenu githubUser={githubUser} />
      <MainGrid>
        <ProfileArea 
          githubUser={githubUser}
        />

        <WelcomeArea 
          githubUser={githubUser} 
          comunidades={comunidades}
          setComunidades={setComunidades}
        />
        
        <ProfileRelationsArea
          seguidores={seguidores}
          numeroSeguidores={numeroSeguidores}
          comunidades={comunidades}
          numeroComunidades={numeroComunidades}
          pessoasFavoritas={pessoasFavoritas}
        />
      </MainGrid>
    </>
  );
}

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);
  const token = cookies.USER_TOKEN;
  const { isAuthenticated } = await fetch('http://localhost:3000/api/auth', {
    headers: {
      Authorization: token
    }
  })
  .then((response) => response.json())
  
  if(!isAuthenticated) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      }
    }
  }
  
  const { githubUser } = jwt.decode(token);
  return {
    props: {
      githubUser
    },
  }
}