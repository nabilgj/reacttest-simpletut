import Header from "./components/header";
import HeadLine from "./components/headlines";
import "./app.scss";

function App() {
  return (
    <div className="App">
      <Header />

      <section className="main">
        <HeadLine header="Posts" desc="Click the button to render posts" />
      </section>
    </div>
  );
}

export default App;
