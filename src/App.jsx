import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./components/ui/toaster";
import { TooltipProvider } from "./components/ui/tooltip";
import { ThemeProvider } from "./lib/theme-context";

import Home from "./pages/home";
import About from "./pages/about";
import Programs from "./pages/programs";
import Events from "./pages/events";
import Media from "./pages/media";
import Volunteers from "./pages/volunteers";
import Contact from "./pages/contact";
import NotFound from "./pages/not-found";
import Layout from "./pages/LayOut";

const router = createBrowserRouter([
  {
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/programs",
        element: <Programs />,
      },
      {
        path: "/events",
        element: <Events />,
      },
      {
        path: "/media",
        element: <Media />,
      },
      {
        path: "/volunteers",
        element: <Volunteers />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <div className="min-h-screen flex flex-col bg-background text-foreground">
            <main className="flex-1">
              <RouterProvider router={router} />
            </main>
          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
