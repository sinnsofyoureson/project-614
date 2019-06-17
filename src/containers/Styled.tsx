import styled from 'styled-components';

export const Wrapper = styled.div`
	position: absolute;
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const Card = styled.div`
  padding: 48px 48px 60px 48px;
	border-radius: 8px;
	box-shadow: 0 2px 16px 0 rgba(0, 0, 0, 0.15);
	background-color: #ffffff;
	display: flex;
	flex-direction: column;
	justify-content: center;
  align-items: center;

	@media(max-width: 768px) {
		padding: 32px 24px 48px 24px;

	}
`;

export const Headline = styled.h3`
	font-size: 24px;
	font-weight: 900;
	color: rgba(38, 38, 38, 0.8);
	margin-bottom: 32px;

	@media(max-width: 768px) {
		margin: 0 0 20px 0;
		font-size: 20px;
	}
`;

export const Input = styled.input`
	padding: 14px 16px;
	margin: 16px 0;
	min-width: 504px;
	color: rgba(38, 38, 38, 0.8);
	font-family: 'Montserrat', sans-serif;
	font-size: 16px;
	font-weight: 500;
	background-color: #f1f1f1;
	border-radius: 4px;
	border: solid 1px rgba(151, 151, 151, 0);
	transition: 144ms ease-in-out;

	:hover {
		color: #262626;
		background-color: rgba(235, 235, 235, 0.25);
		transition: 144ms ease-in-out;
	}

	:focus {
		outline: none !important;
		border: solid 1px rgba(151, 151, 151, 0.25);
		color: #262626;
		transition: 144ms ease-in-out;
	}

	@media(max-width: 768px) {
		min-width: 180px;
		margin: 12px 0;

		:focus {
			outline: none !important;
			border: solid 1px #ed4159;
			color: #ed4159;
			background-color: #f1f1f1;
			transition: 144ms ease-in-out;
		}
	}
`;

export const ErrorWrapper = styled.p`
	background-color: rgba(237, 65, 89, 0.25);
	min-width: 504px;
	border-radius: 4px;
	padding: 11px 16px;
	color: #ed4159;
	font-size: 14px;
	font-weight: 500;
	text-align: left;

	@media(max-width: 768px) {
		font-size: 12px;
		min-width: 180px;
		margin: 1px;
	}
`;

export const Button = styled.button`
	outline: none !important;
	min-width: 145px;
	padding: 16px 32px;
	margin-top: 32px;
	border: none;
	border-radius: 100px;
	box-shadow: 0 4px 16px 0 rgba(237, 65, 89, 0.4);
	background-color: #ed4159;
	font-family: 'Montserrat', sans-serif;
	font-size: 14px;
	font-weight: 500;
	color: #ffffff;
	text-align: center;
	cursor: pointer;
	transition: 144ms ease-in-out;

	:hover {
		outline: none !important;
		background-color: #ffffff;
		color: #ed4159;
		box-shadow: 0 6px 20px 0 rgba(237, 65, 89, 0.4);
		transition: 144ms ease-in-out;
	}

	:active {
		outline: none !important;
		background-color: #ffffff;
		color: #ed4159;
		box-shadow: 0 2px 10px 0 rgba(237, 65, 89, 0.5);
		transition: 89ms ease-in-out;
	}

	@media(max-width: 768px) {
		margin-top: 20px;
	}
`;

export const Avatar = styled.img`
	width: 128px;
	height: 128px;
	border: solid 1px #979797;
	border-radius: 100%;
	margin: 0 188px;

	@media(max-width: 768px) {
		width: 86px;
		height: 86px;
		margin: 0 0 24px 0;
	}
`;