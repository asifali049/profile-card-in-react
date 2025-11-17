import ProfileCard from "./components/ProfileCard";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <ProfileCard
        name="John Doe"
        age={30}
        location="New York"
        profession="Software Engineer"
        greeting={
          <div>
            <strong>"Hello, I'm John!"</strong>
          </div>
        }
      >
        <p>hobbies: gaming, cooking</p>
        <button>Contact</button>
      </ProfileCard>
    </>
  );
}

export default App;
