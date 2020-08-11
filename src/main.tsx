import React from 'react';
import ReactDOM from 'react-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { Searchbox } from './searchbox';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Roboto', sans-serif;
		background-image: url('../background/5705-min.jpg');
		background-size: cover;
	}
`;	

const MainContainer = styled.div`
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
`

const App = () => {
	return (
		<>
			<GlobalStyle />
			<MainContainer>
				<Searchbox></Searchbox>
			</MainContainer>
		</>
	);
};

ReactDOM.render(<App />, document.getElementById("root"));
