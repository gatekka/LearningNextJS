import LikeButton from "./like-button";

function Header({ title = 'Default Title' }) {
  return <h1>{title}</h1>
}

export default function HomePage() {
  const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];

  return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}

// function main() {
//   const app = document.getElementById("app")
//   const root = ReactDOM.createRoot(app);
//   root.render(<HomePage />);
// }
//
// main();
