import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WebLayout from "./pages/Website/components/Layout/WebLayout";
import HomePage from "./pages/Website/HomePage";
import PrivacyPolicyPage from "./pages/Website/PrivacyPolicyPage";
import TermConditionPage from "./pages/Website/TermConditionPage";
import ContactPage from "./pages/Website/ContactPage";
import Election2023Page from "./pages/Website/Election2023Page";
import AboutPage from "./pages/Website/AboutPage";
import ResidentCorner from "./pages/Website/ResidentCorner";
import EventsPage from "./pages/Website/EventsPage";
import LoginPage from "./pages/admin/LoginPage";
import Dashboard from "./pages/admin/Dashboard";
import ManageEventsPage from "./pages/admin/ManageEventsPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLayout from "./Pages/admin/components/Layout/AdminLayout";


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
    path: "login",
    element: <LoginPage />
  },
  {
    path: "*",
    element: <NotFoundPage/>
  }
]

const router = createBrowserRouter(routes);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;