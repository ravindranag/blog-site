import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import { createContext } from 'react';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP2rgpVBtdG4Qb8RWJBv-BpmjL_K5Orxo",
    authDomain: "blogapp-bd383.firebaseapp.com",
    projectId: "blogapp-bd383",
    storageBucket: "blogapp-bd383.appspot.com",
    messagingSenderId: "151401575255",
    appId: "1:151401575255:web:f3ea08648890a7584c0412"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const dbContext = createContext();


function App() {
	return (
		<dbContext.Provider value={db}>
			<Router>
				<div className="App">
					<Navbar />
					<div className="content">
						<Switch>
							<Route exact path='/'>
								<Home />
							</Route>
							<Route exact path='/create'>
								<Create />
							</Route>
							<Route exact path='/blogs/:id'>
								<BlogDetails />
							</Route>
							<Route path='*'>
								<NotFound />
							</Route>
						</Switch>
					</div>
				</div>
			</Router>
		</dbContext.Provider>
	);
}

export default App;
