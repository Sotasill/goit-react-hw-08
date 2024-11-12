

import Layout from "../Layout/Layout";
import RestrictedRoute from "../RestrictedRoute/RestrictedRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


import { useSelector, useDispatch } from "react-redux";


import { useEffect, lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";




import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";


const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const RegistrationPage = lazy(() => import("../../pages/RegistrationPage/RegistrationPage"));
const LoginPage = lazy(() => import("../../pages/LoginPage/LoginPage"));
const ContactsPage = lazy(() => import("../../pages/ContactsPage/ContactsPage"));
const AboutPage = lazy(() => import("../../pages/AboutPage/AboutPage"));


function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

   useEffect(() => {
     dispatch(refreshUser());
   }, [dispatch]);
  

  return isRefreshing ? (
    <p>Refreshing user please wait...</p>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage /> }/>
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegistrationPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}
export default App;













  