import React from 'react';
import styled from 'styled-components';
import logo from '../assets/w-mercury-development.svg';

const Div = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0 0 0;
	@media(max-height: 650px) {
		margin: 35px 0 0 0;
	}
`;

const Logo = styled.img`
	width: 315px;
	height: 69px;
	@media(max-height: 650px) {
		width: 305px;
		height: 59px;
	}
`;

const Header: React.FC = () => {
	return (
		<Div>
			<Logo src={logo} alt="Mercury Development" />
		</Div>
	)
};

export default Header;