import React from "react";
import "tailwindcss/tailwind.css";
import { useQuery, gql } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

function searhMatch() {}
export default function MatchSearch({ launches }) {
  console.log("launches", launches);
  return (
    <div className="text-3xl font-bold underline">
      <input type="text" id="matchIDBox" placeholder="00000000" />
      <button
        onClick={getStaticProps}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Get Match
      </button>
    </div>
  );
}

export async function getStaticProps() {
  const client = new ApolloClient({
    uri: "https://api.stratz.com/graphiql/".concat(process.env.STRATZ_API_KEY),
    cache: new InMemoryCache(),
  }); // Create a new Apollo Client

  const { data } = await client.query({
    query: gql`
      query GetDotaData {
        match(id: 7572925909) {
          didRadiantWin
        }
      }
    `,
  }); // Query for the match data
  console.log("returing");
  return {
    props: {
      launches: [0],
    },
  };
}
