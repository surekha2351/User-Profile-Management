import api from "../API.js";

export default function Home() {
  return (
    <div>
      <h1>{api.name}</h1>
      <p>{api.username}</p>
      <p>{api.email}</p>
      <p>{api.address}</p>
    </div>
  );
}
