import React from "react";
import { useLoaderData } from "react-router-dom";
import Services from "../components/services/Services";

export default function ServicePage() {
  const data = useLoaderData();
  console.log(data.todos);
  return <Services data={data} />;
}

export const loader = async () => {
  const response = await fetch("https://dummyjson.com/todos");
  const data = await response.json();
  return data;
};
