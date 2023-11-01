import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import NotFound from "./pages/NotFound";
import { colorSystem } from "./utils/handlers/getSystemColor";
import { lazy } from "react";
import "react-toastify/dist/ReactToastify.css";

const Login = lazy(() => import("./pages/Login"));
const AdminLayout = lazy(() => import("./components/layouts/AdminLayout"));
const AuthLayout = lazy(() => import("./components/layouts/AuthLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const Orders = lazy(() => import("./pages/Orders"));
const Users = lazy(() => import("./pages/Users"));
const Products = lazy(() => import("./pages/Products"));
const News = lazy(() => import("./pages/News"));
const Shops = lazy(() => import("./pages/Shops"));
const Vouchers = lazy(() => import("./pages/Vouchers"));
const Categories = lazy(() => import("./pages/Categories"));
const Tags = lazy(() => import("./pages/Tags"));
const Profile = lazy(() => import("./pages/Profile"));
const Settings = lazy(() => import("./pages/Settings"));
const Notifications = lazy(() => import("./pages/Notification"));

const App = () => {
  const theme = createTheme({
    palette: {
      mode: !colorSystem() || "dark",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <CssBaseline />
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route path="/" index element={<HomePage />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/:id" element={<Profile />} />
          <Route path="/products" element={<Products />} />
          <Route path="/news" element={<News />} />
          <Route path="/shops" element={<Shops />} />
          <Route path="/vouchers" element={<Vouchers />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tags" element={<Tags />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/Notifications" element={<Notifications />} />
        </Route>
        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
