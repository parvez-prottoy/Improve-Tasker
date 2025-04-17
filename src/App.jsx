import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TaskBoard from "./components/taskBoard/TaskBoard";

export default function App() {
  return (
    <>
      {/* Header section */}
      <Header />
      {/* Main sections */}
      <main>
        {/* Banner section */}
        <Banner />
        {/* TaskBoard section */}
        <TaskBoard />
      </main>
      {/* Footer section */}
      <Footer />
    </>
  );
}
