const schema = require("./schema.js")
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const cors = require('cors')
const app = express();

// Allow cross-origin

// app.use(cors());

app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    graphiql: true,
  }),
);

const PORT = process.env.PORT || 5200

app.listen(PORT, () => console.log(`Server started on port ${PORT} or http://localhost:${PORT}/graphql`));