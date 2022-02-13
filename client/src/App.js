import './App.css';
import logo from './spacexlogo.png';
import { ApolloClient, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client"
import Launches from "./components/launches"

const client = new ApolloClient({
  uri: 'http://localhost:5200/graphql',
  cache: new InMemoryCache()
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="countainer">
        <img
         src={logo}
         alt="SpaceX" 
         style={{width: 300, display: 'block', margin: 'auto'}}
        />
        <Launches></Launches>
      </div>
    </ApolloProvider>

  );
}

export default App;
