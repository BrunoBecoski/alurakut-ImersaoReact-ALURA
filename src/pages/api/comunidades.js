import { SiteClient } from 'datocms-client';

export default async function recebedorDeRequest(request, response) {
  if(request.method === 'POST') {
    const TOKEN = process.env.DATOCMS_FULL_ACCESS_TOKEN;
    const client = new SiteClient(TOKEN);
    
    const registroCriado = await client.items.create({
      itemType: "968792", // ID do Model de "Communities" criado pelo Dato
      ...request.body,
    })
    
    response.json({
      dados: 'Algum dado qualquer',
      registroCriado: registroCriado
    })
    return;
  }

  response.status(404).json({
    message: 'Ainda não temos nada no GET, mas no POST tem!'
  })
}

