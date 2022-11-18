import "./index.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import {
  BrowseByLanguagesAdults,
  SignIn,
  HomeAdults,
  LandingPage,
  MoviesAdults,
  MyListAdults,
  NewAndPopularAdults,
  TvShowsAdults,
  Registration,
  RegistrationDetails,
  AdultProfile,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
        <Route exact path="/homeadults" element={<HomeAdults />} />
        <Route exact path="/adultsprofile" element={<AdultProfile />} />
        <Route exact path="/tvshowsadults" element={<TvShowsAdults />} />
        <Route exact path="/moviesadults" element={<MoviesAdults />} />
        <Route
          exact
          path="/newandpopularadults"
          element={<NewAndPopularAdults />}
        />
        <Route exact path="/mylistadults" element={<MyListAdults />} />
        <Route
          exact
          path="browsebylanguages"
          element={<BrowseByLanguagesAdults />}
        />
        <Route exact path="signin" element={<SignIn />} />
        <Route exact path="registration" element={<Registration />} />
        <Route exact path="/signup/regform" element={<RegistrationDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
