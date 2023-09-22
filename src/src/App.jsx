import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebLayout from "./Pages/Website/components/Layout/WebLayout";
import HomePage from "./Pages/Website/HomePage";
import PrivacyPolicyPage from "./Pages/Website/PrivacyPolicyPage";
import TermConditionPage from "./Pages/Website/TermConditionPage";
import ContactPage from "./Pages/Website/ContactPage";
import Election2023Page from "./Pages/Website/Election2023Page";
import AboutPage from "./Pages/Website/AboutPage";
import ResidentCorner from "./Pages/Website/ResidentCorner";
import AdminLayout from "./Pages/admin/layout/AdminLayout";
import Dashboard from "./Pages/admin/Dashboard";
import EventsPage from "./Pages/Website/EventsPage";
import ManageEventsPage from "./Pages/admin/ManageEventsPage";

const routes = [
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "events",
        element: <ManageEventsPage />
      }
    ]
  },
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
        path: "events",
        element: <EventsPage />,
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
        element: <Election2023Page />
      },
      {
        path: "resident-corner",
        element: <ResidentCorner />
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