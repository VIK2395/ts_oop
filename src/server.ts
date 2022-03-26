// const http = require('http'); // node imports
import { createServer, IncomingMessage, ServerResponse } from 'http'; // ts imports

type Post = {
  title: string;
  content: string;
};

const posts: Post[] = [
  {
    title: 'Lorem ipsum',
    content: 'Dolor sit amet',
  },
];

const requestListener = function (request: IncomingMessage, response: ServerResponse) {
  switch (request.url) {
    case '/posts': {
      if (request.method === 'GET') {
        response.end(JSON.stringify(posts));
      }
      break;
    }
    default: {
      response.statusCode = 404;
      response.end();
    }
  }
};

const server = createServer(requestListener);
server.listen(8080);
