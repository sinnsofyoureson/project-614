import React from 'react';
import styled from 'styled-components';
import logo from '../assets/w-mercury-development.svg';

const Div = styled.div`
	display: flex;
	justify-content: center;
	margin: 50px 0 0 0;
`;

const Logo = styled.img`
	width: 315px;
	height: 69px;
`;

const Header: React.FC = () => {
	return (
		<Div>
			<Logo src={logo} alt="Mercury Development" />
		</Div>
	)
};

export default Header;