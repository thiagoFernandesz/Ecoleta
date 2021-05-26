import express from 'express'
import routes from './routes'
import path from 'path'
import cors from 'cors'

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(3333);

// Rota: Endereço completo da requisição
// Recurso: Qual entidade estamos acessando do sistema

// GET: Buscar uma ou mais informações do backend
// POST: Criar uma nova informação no backend
// PUT: Atualizar uma informação existente no backend
// DELETE: Remover uma informação do backend

// POST:http://localhost:3333/users -> Criar um usuário
// GET:http://localhost:3333/users -> Listar usuários
// GET:http://localhost:3333/users/5 -> Listar do usuário com ID 5

// Request Params: Parâmetros que vem na própria rota que identificam um recurso
// Query Params: Parâmetros que vem na própria rota geralmente opcionais para filtros e paginação
// Request Body: Parâmetros para criação/atualização de informações

// SELECT * FROM users WHERE name = 'Thiago'
// Knex('users').where('name', 'Diego').select('*')

/*app.get('/users', (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;

    return response.json(filteredUsers);
});

app.get('/users/:id', (request, response) => {
    const id = Number(request.params.id);

    const user = users[id];

    return response.json(user);
});    

app.post('/users', (request, response) => {
    const data = request.body;

    console.log(data);

    const user = {
        name: data.name,
        email: data.email,
    };
    return response.json(user);
});*/
