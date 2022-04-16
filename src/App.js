import { React } from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage.jsx';
import FavoritePage from '../src/pages/FavoritePage';
import NavBar from '../src/components/NavBar/NavBar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { grey, blue } from '@mui/material/colors';

import { Container, CssBaseline } from '@mui/material';
function App() {
	const { state } = useSelector((state) => state);
	const { darkMode } = state;

	const light = {
		palette: {
			mode: 'light',
			text: 'secondary',
			background: {
				default: blue[100],
			},
		},
	};

	const dark = {
		palette: {
			mode: 'dark',
			// text: 'secondary',

			background: {
				paper: grey[700],
			},
		},
	};
	return (
		<ThemeProvider theme={darkMode ? createTheme(dark) : createTheme(light)}>
			<CssBaseline />
			<div className="App">
				<Router>
					<NavBar />
					<Container>
						<Switch>
							<Route path="/favorite">
								<FavoritePage />
							</Route>
							<Route path="/">
								<HomePage />
							</Route>
						</Switch>
					</Container>
				</Router>{' '}
			</div>
		</ThemeProvider>
	);
}

export default App;
