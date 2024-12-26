const { test, expect } = require('@playwright/test');

test('Get a User => deve buscar user com id=1 no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  // Define a query para o GraphQL user endpoint
  const query = `query {user(id: 1) {id username email address { geo { lat lng}}}}`;

  // Enviar o POST request para o GraphQL endpoint
  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse a resposta para Json
  const responseData = await response.json();

  // montas o resultado esperado (json)
  const expectedData = {
    data: {
      user: {
        id: '1',
        username: 'Bret',
        email: 'Sincere@april.biz',
        address: {
          geo: {
            lat: -37.3159,
            lng: 81.1496
          }
        }
      }
    }
  };

  /* Assertions */

  // Verificar se a requisicao foi realizada com sucesso
  expect(response).toBeTruthy();

  // Verificar se o "Data" é igual ao experado
  expect(responseData).toEqual(expectedData);
});

test('Get a Post => deve buscar post com id=1 no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  // Define a query para o GraphQL post endpoint
  const query = `query {post(id: 1) {id title body}}`;

  // Enviar o POST request para o GraphQL endpoint
  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse a resposta para Json
  const responseData = await response.json();

  // montas o resultado esperado (json)
  const expectedData = {
    data: {
      post: {
        id: '1',
        title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      }
    }
  };

  /* Assertions */
  expect(response).toBeTruthy();
  expect(responseData).toEqual(expectedData);
});

test('Get User`s Posts => deve buscar todos os posts de um user com id=1 no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  // Define a query para o GraphQL user endpoint
  const query = `query {user(id: 1) { posts { data {id title}}}}`;

  // Enviar o POST request para o GraphQL endpoint
  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse a resposta para Json
  const responseData = await response.json();

  // montas o resultado esperado (json)
  const expectedData = {
    data: {
      user: {
        posts: {
          data: [
            {
              id: "1",
              title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            },
            {
              id: "2",
              title: "qui est esse"
            },
            {
              id: "3",
              title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
            },
            {
              id: "4",
              title: "eum et est occaecati"
            },
            {
              id: "5",
              title: "nesciunt quas odio"
            },
            {
              id: "6",
              title: "dolorem eum magni eos aperiam quia"
            },
            {
              id: "7",
              title: "magnam facilis autem"
            },
            {
              id: "8",
              title: "dolorem dolore est ipsam"
            },
            {
              id: "9",
              title: "nesciunt iure omnis dolorem tempora et accusantium"
            },
            {
              id: "10",
              title: "optio molestias id quia eum"
            },
          ],
        },
      },
    }
  };

  /* Assertions */
  expect(response).toBeTruthy();
  expect(responseData).toEqual(expectedData);

});

test('Get a Photo`s Album => deve buscar o album de uma foto com id=5 no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  // Define a query para o GraphQL photo endpoint
  const query = `query {photo(id: 1) {album {id title}}}`;

  // Enviar o POST request para o GraphQL endpoint
  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse a resposta para Json
  const responseData = await response.json();

  // montas o resultado esperado (json)
  const expectedData = {
    data: {
      photo: {
        album: {
          id: "1",
          title: "quidem molestiae enim"
        }
      }
    }
  };

  /* Assertions */
  expect(response).toBeTruthy();
  expect(responseData).toEqual(expectedData);
});

test('Get All Posts => deve buscar todos os posts no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  const query = `query {user(id: 1) {posts {data {id title }}}}`;

  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse 
  const responseData = await response.json();

  // result
  const expectedData = {
    data: {
      user: {
        posts: {
          data: [
            {
              id: "1",
              title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
            },
            {
              id: "2",
              title: "qui est esse"
            },
            {
              id: "3",
              title: "ea molestias quasi exercitationem repellat qui ipsa sit aut"
            },
            {
              id: "4",
              title: "eum et est occaecati"
            },
            {
              id: "5",
              title: "nesciunt quas odio"
            },
            {
              id: "6",
              title: "dolorem eum magni eos aperiam quia"
            },
            {
              id: "7",
              title: "magnam facilis autem"
            },
            {
              id: "8", "title": "dolorem dolore est ipsam"
            },
            {
              id: "9",
              title: "nesciunt iure omnis dolorem tempora et accusantium"
            },
            {
              id: "10",
              title: "optio molestias id quia eum"
            },
          ],
        },
      },
    },
  };


  /* Assertions */
  expect(response).toBeTruthy();
  expect(responseData).toEqual(expectedData);

});

test('Create a Post => deve criar um post no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  const query = `mutation {createPost(input: {title: "Post Title", body: "Post Body"}) {id title body}}`;

  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse 
  const responseData = await response.json();

  // Result
  const expectedData = {
    data: {
      createPost: {
        id: "101",
        title: "Post Title",
        body: "Post Body"
      }
    }
  };

  /* Assertions */
  expect(response).toBeTruthy();
  expect(responseData).toEqual(expectedData);

});

test('Update a Post => deve atualizar um post com id=1 no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  const query = `mutation { updatePost(id: 1, input: {title: "Post Title Updated", body: "Post Body Updated"}) {id title body}}`;

  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse 
  const responseData = await response.json();

  // Result
  const expectedData = {
    data: {
      updatePost: {
        id: "1",
        title: "Post Title Updated",
        body: "Post Body Updated"
      }
    }
  };

  /* Assertions */
  expect(response).toBeTruthy();
  expect(responseData).toEqual(expectedData);

});

test('Delete a Post => deve deletar um post com id=1 no Endpoint do GraphQL e responder corretamente', async ({ request }) => {
  const graphqlUrl = 'https://graphqlzero.almansi.me/api';

  const query = `mutation {deletePost(id: 1)}`;

  const response = await request.post(graphqlUrl, {
    data: { query },
    headers: { 'Content-Type': 'application/json' }
  });

  // Parse 
  const responseData = await response.json();

  // Result
  const expectedData = {
    data: {
      deletePost: true
    }
  };

  /* Assertions */
  expect(response).toBeTruthy();
  expect(responseData).toEqual(expectedData);

});
