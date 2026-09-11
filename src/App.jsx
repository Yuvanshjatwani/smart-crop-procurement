import { Navigate, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import FarmerLayout from "./layouts/FarmerLayout";
import OfficialLayout from "./layouts/OfficialLayout";
import FarmerLogin from "./pages/farmer/Login";
import Registration from "./pages/farmer/Registration";
import FarmerDashboard from "./pages/farmer/Dashboard";
import CentreSelection from "./pages/farmer/CentreSelection";
import SlotSelection from "./pages/farmer/SlotSelection";
import ProduceDetails from "./pages/farmer/ProduceDetails";
import BookingConfirmation from "./pages/farmer/BookingConfirmation";
import LiveQueue from "./pages/farmer/LiveQueue";
import BookingHistory from "./pages/farmer/BookingHistory";
import OfficialLogin from "./pages/official/Login";
import OfficialDashboard from "./pages/official/Dashboard";
import Verification from "./pages/official/Verification";
import QueueManagement from "./pages/official/QueueManagement";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />

      <Route path="/farmer" element={<FarmerLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="register" element={<Registration />} />
        <Route path="login" element={<FarmerLogin />} />
        <Route path="dashboard" element={<FarmerDashboard />} />
        <Route path="centres" element={<CentreSelection />} />
        <Route path="slots" element={<SlotSelection />} />
        <Route path="produce" element={<ProduceDetails />} />
        <Route path="confirmation" element={<BookingConfirmation />} />
        <Route path="queue" element={<LiveQueue />} />
        <Route path="history" element={<BookingHistory />} />
      </Route>

      <Route path="/official" element={<OfficialLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="login" element={<OfficialLogin />} />
        <Route path="dashboard" element={<OfficialDashboard />} />
        <Route path="verification" element={<Verification />} />
        <Route path="queues" element={<QueueManagement />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}