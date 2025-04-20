
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import HandymanDashboard from "./pages/HandymanDashboard";
import ScheduleJobs from "./pages/ScheduleJobs";
import ClientSettings from "./pages/ClientSettings";
import Jobs from "./pages/Jobs";
import Settings from "./pages/Settings";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import SignUpRole from "./pages/SignUpRole";
import ClientSignUp from "./pages/ClientSignUp";
import HandymanSignUp from "./pages/HandymanSignUp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/handyman-dashboard" element={<HandymanDashboard />} />
          <Route path="/schedule-jobs" element={<ScheduleJobs />} />
          <Route path="/client-settings" element={<ClientSettings />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUpRole />} />
          <Route path="/signup/client" element={<ClientSignUp />} />
          <Route path="/signup/handyman" element={<HandymanSignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
