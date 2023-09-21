import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebLayout from "./Pages/Website/components/Layout/WebLayout";
import HomePage from "./Pages/Website/HomePage";
import AnouncementPage from "./Pages/Website/AnouncementPage";
import PrivacyPolicyPage from "./Pages/Website/PrivacyPolicyPage";
import TermConditionPage from "./Pages/Website/TermConditionPage";
import ContactPage from "./Pages/Website/ContactPage";
import Election2023Page from "./Pages/Website/Election2023Page";
import AboutPage from "./Pages/Website/AboutPage";
import ResidentCorner from "./Pages/Website/ResidentCorner";

const routes = [
  {
    path: "",
    element: <WebLayout />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "about-us",
        element: <AboutPage />,
      },
      {
        path: "anouncements",
        element: <AnouncementPage />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "terms-conditions",
        element: <TermConditionPage />,
      },
      {
        path: "contact-us",
        element: <ContactPage />,
      },
      {
        path: "election-2023",
        element: <Election2023Page/>
      },
      {
        path: "resident-corner",
        element: <ResidentCorner/>
      }
    ],
  },
  {
    path: "*",
    element: <h1>404</h1>
  }
]

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;