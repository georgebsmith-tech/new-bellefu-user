import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter as Router, Route, Switch, useParams  } from "react-router-dom";

import LandingPage from "./components/app/LandingPage";
import CategoryPage from "./components/app/CategoryPage";
import UserDashbordPage from "./components/app/UserDashbordPage";
import UserProfilePage from "./components/app/UserProfilePage";
import UserAdPage from "./components/app/UserAdPage";
import UserFavouriteAdPage from "./components/app/UserFavouriteAdPage";
import UserPendingAdPage from "./components/app/UserPendingAdPage";
import UserExpriedAdPage from "./components/app/UserExpriedAdPage";
import PostAdPage from "./components/app/PostAdPage";
import PostAdPaymentPage from "./components/app/PostAdPaymentPage";
import AdViewPage from  "./components/app/AdViewPage"
import RegistrationFormPage from "./components/app/RegistrationFormPage";
import LoginFormPage from "./components/app/LogInFormPage";
import  PostAdSuccessMessagePage from "./components/app/PostAdSuccessMessagePage"

//REDUX STATE
import { Provider } from "react-redux";
import store from "./redux/store";


function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Router>
					<Route exact path="/" component={LandingPage} />
					<Route exact path="/product_list/" component={CategoryPage} />
					<Route exact path="/register" component={RegistrationFormPage} />
					<Route exact path="/login" component={LoginFormPage} />
					<Route exact path="/product_detail/:id"  component={AdViewPage} />
					<Switch>
						<PrivateRoute
							exact
							path="/user_dashboard"
							component={UserDashbordPage}
						/>
						<PrivateRoute exact path="/profile" component={UserProfilePage} />
						<PrivateRoute exact path="/user_ad" component={UserAdPage} />
						<PrivateRoute exact path="/pending_ad" component={UserPendingAdPage} />
						<PrivateRoute
							exact
							path="/favourite_ad"
							component={UserFavouriteAdPage}
						/>
						<PrivateRoute
							exact
							path="/expried_ad"
							component={UserExpriedAdPage}
						/>
						
						<PrivateRoute exact path="/post_ad" component={PostAdPage} />
						<PrivateRoute exact path="/payment" component={PostAdPaymentPage} />
						<PrivateRoute exact path="/post_sucess" component={PostAdSuccessMessagePage} />
					</Switch>
				</Router>
			</div>
		</Provider>  
	);
}

export default App;
