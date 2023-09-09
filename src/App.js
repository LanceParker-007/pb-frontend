import ContactForm from "./Components/ContactForm";
import Header from "./Components/Header";
import MainEvent from "./Components/MainEvent";
import PracticeButton from "./Components/PracticeButton";
import Footer from "./Components/Footer";
import { useAppContext } from "./Context/AppContext";

export default function App() {
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
