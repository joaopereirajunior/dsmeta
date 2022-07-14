import Header from "./components/header";
import NotificatinButton from "./components/notificationButton";
import SalesCard from "./components/SalesCard";

function App() {
  return (
    <>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
