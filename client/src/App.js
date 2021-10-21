import "./App.css";
import { ApolloClient, InMemoryCache, gql, useQuery } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "http://localhost:5000/graphql",
});

const LIST_PERSONS = gql`
  {
    listOfPersons {
      name
      age
      job
      country
      gender
      likeTV
      exercise {
        name
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(LIST_PERSONS, { client });
  if (loading || error) {
    return <p>{error ? error.message : "Loading..."}</p>;
  }

  return (
    <div className="App">
      {data && (
        <ul>
          {data.listOfPersons.map((person, index) => (
            <li key={index}>
              <div>name : {person.name}</div>
              <div>age : {person.age}</div>
              <div>job : {person.job}</div>
              <div>country : {person.country}</div>
              <div>gender : {person.gender}</div>
              <div>likeTV : {person.likeTV ? "Like" : "Don't like"}</div>
              <div>
                Exercise :{" "}
                {person.exercise ? person.exercise.name : "Didn't write"}
              </div>

              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
