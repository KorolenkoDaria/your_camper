import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";

import { ModalProvider } from "../../context/ModalContext.jsx";
import { Wrapper } from './App.styled.jsx';

import Header from "../Header/Header.jsx";

const HomePage = lazy(() => import('../../pages/Home/Home.jsx'));
const CatalogPage = lazy(() => import('../../pages/Catalog/Catalog.jsx'));
const FavoritePage = lazy(() => import('../../pages/Favorite/Favorite'));

function App() {
  return (
    <ModalProvider>
      <Wrapper>
        <Header />
        <Suspense >
          <Routes>
            <Route path={'/'}>
              <Route index element={<HomePage />} />
              <Route path={'/catalog'} element={<CatalogPage />} />
              <Route path={'/favorite'} element={<FavoritePage />} />
            </Route>
          </Routes>
        </Suspense>
      </Wrapper >
    </ModalProvider>
  );
}

export default App;
