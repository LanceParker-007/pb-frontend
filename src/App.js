import ContactForm from "./Components/ContactForm";
import Header from "./Components/Header";
import MainEvent from "./Components/MainEvent";
import PracticeButton from "./Components/PracticeButton";
import Footer from "./Components/Footer";
import { useAppContext } from "./Context/AppContext";

export default function App() {
  alert(
    "Event is over. You can follow me on twitter for future updates: https://twitter.com/Ore_wa_King"
  );
  const { user } = useAppContext();

  return (
    <>
      <Header />
      {!user && <ContactForm />}
      <PracticeButton />
      <MainEvent />
      <Footer />
    </>
  );
}
