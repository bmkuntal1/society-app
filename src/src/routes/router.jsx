import { createBrowserRouter } from "react-router-dom";
import AdminLayout from "../components/layouts/AdminLayout";
import WebLayout from "../components/layouts/WebLayout";
import HomePage from "../pages/website/HomePage";
import AboutPage from "../pages/website/AboutPage";
import EventsPage from "../pages/website/EventsPage";
import PrivacyPolicyPage from "../pages/website/PrivacyPolicyPage";
import TermConditionPage from "../pages/website/TermConditionPage";
import ContactPage from "../pages/website/ContactPage";
import Election2023Page from "../pages/website/Election2023Page";
import ResidentCorner from "../pages/website/ResidentCorner";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/admin/LoginPage";
import Dashboard from "../pages/admin/Dashboard";
import ManageEventsPage from "../pages/admin/ManageEventsPage";
import MemberPage from "../pages/website/MemberPage";

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
            },
            {
                path: "member",
                element: <MemberPage />
            }
        ],
    },
    {
        path: "login",
        element: <LoginPage />
    },
    {
        path: "*",
        element: <NotFoundPage />
    }
]

const router = createBrowserRouter(routes);
export default router;