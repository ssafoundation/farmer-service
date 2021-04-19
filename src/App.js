import { createContext, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AddServices from "./components/FarmerSidebar/Dashboard/AddServices";
import Book from "./components/FarmerSidebar/Dashboard/Book";
import BookingList from "./components/FarmerSidebar/Dashboard/BookingList";
import Dashboard from "./components/FarmerSidebar/Dashboard/Dashboard";
import MakeAdmin from "./components/FarmerSidebar/Dashboard/MakeAdmin";
import ManageService from "./components/FarmerSidebar/Dashboard/ManageService";
import OrderList from "./components/FarmerSidebar/Dashboard/OrderList";
import Review from "./components/FarmerSidebar/Dashboard/Review";
import Login from "./components/FarmerSidebar/Login/Login";
import PrivateRoute from "./components/FarmerSidebar/PrivateRoute/PrivateRoute";
import Home from "./components/home/Home";

export const UserContext = createContext();

function App() {
  const [loggend, setLoggend] = useState({});
  return (
    <UserContext.Provider value={[loggend, setLoggend]}>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <PrivateRoute exact path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/book/:id">
            <Book />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/bookinglist">
            <BookingList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/review">
            <Review />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/orderlist">
            <OrderList />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/addservices">
            <AddServices />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/makeadmin">
            <MakeAdmin />
          </PrivateRoute>
          <PrivateRoute exact path="/dashboard/manageservice">
            <ManageService />
          </PrivateRoute>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
