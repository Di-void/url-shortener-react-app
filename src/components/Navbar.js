import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "../context";
import { motion } from "framer-motion";

// # MAIN COMP..
const Navbar = () => {
	// # STATE VALUES
	const hiddenVal = -400;
	const [pos, setPos] = useState(hiddenVal);
	// # FUNCTIONS AND SIDE EFFECTS
	const toggle = () => {
		if (pos === hiddenVal) {
			setPos(0);
		} else {
			setPos(hiddenVal);
		}
	};
	// # RETs
	return (
		<Wrapper>
			<div className="nav-center">
				<div className="logo-box">
					<Logo className="logo" />
				</div>

				<motion.div
					className="nav-cont"
					initial={false}
					animate={{ y: pos }}
				>
					<div className="nav-cont-center">
						<ul className="nav-links">
							<li>
								<a href="#">Features</a>
							</li>
							<li>
								<a href="#">Pricing</a>
							</li>
							<li>
								<a href="#">Resources</a>
							</li>
						</ul>
						<div className="nav-btns">
							<button className="login-btn">Login</button>
							<button className="signup-btn">Sign up</button>
						</div>
					</div>
				</motion.div>

				<button className="bars" onClick={toggle}>
					<FaBars />
				</button>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.nav`
	/* border: 1px solid black; */
	/* border-bottom: 1px solid black; */
	padding: 1rem 0.1rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.nav-center {
		/* border: 1px solid black; */
		position: relative;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 90%;

		.logo {
			/* border: 1px solid black; */
			height: fit-content;
		}
		div {
			/* border: 1px solid black; */
			height: fit-content;
		}

		.nav-cont {
			/* border: 1px solid black; */
			padding: 0 1rem;
			position: absolute;
			top: 50px;
			width: 100%;
			display: flex;
			justify-content: center;
			align-items: center;

			.nav-cont-center {
				/* border: 1px solid black; */
				background-color: var(--clr-primary-2);
				border-radius: 11px;
				padding: 1.5rem;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				width: 80%;
				.nav-links {
					width: 90%;
					padding-bottom: 1.2rem;
					display: grid;
					grid-template-columns: 1fr;
					grid-template-rows: repeat(3, 1fr);
					grid-gap: 1.5em;
					place-items: center;
					border-bottom: 1px solid var(--clr-neutral-1);

					li {
						a {
							color: white;
						}
						a:hover {
							color: var(--clr-primary-1);
						}
					}
				}

				.nav-btns {
					/* border: 1px dotted var(--clr-neutral-1); */
					width: 80%;
					margin-top: 20px;
					display: grid;
					grid-template-rows: repeat(2, 1fr);

					.login-btn {
						color: white;
						font-size: 1.2rem;
						background: transparent;
						border: transparent;
						text-align: center;
						margin-bottom: 18px;
						cursor: pointer;
					}

					.signup-btn {
						background-color: var(--clr-primary-1);
						border: transparent;
						border-radius: 15px;
						color: white;
						font-size: 1rem;
						font-weight: 700;
						text-align: center;
						padding: 0.5rem 0.75rem;
						cursor: pointer;
						transition: background-color 0.3s linear;
					}

					.signup-btn:hover {
						background-color: var(--clr-prim-hover);
					}
				}
			}
		}
		.active {
			visibility: visible;
		}

		.bars {
			height: fit-content;
			background: transparent;
			border: transparent;
			font-size: 1.5rem;
			color: var(--clr-neutral-1);
			cursor: pointer;
		}
		.bars:hover {
			color: var(--clr-neutral-3);
		}
	}

	@media screen and (min-width: 680px) {
		/* border: 1px solid black;
	padding: 1.5rem 0.7rem;
	display: flex;
	justify-content: center;
	align-items: center;

	.nav-center {
		position: relative;
		border: 1px solid black;
		display: flex;
		align-items: center;
		width: 80%;

		.logo {
			height: fit-content;
		}
		div {
			border: 1px solid black;
			height: fit-content;
		}

		.links-container {
			visibility: vis;
			margin-left: 40px;
			width: 30%;
			.nav-links {
				border: 1px solid black;
				display: flex;
				justify-content: space-between;

				a {
					color: var(--clr-neutral-1);
					font-weight: var(--fweight-bold);
					font-size: 14px;
				}
				a:hover {
					color: var(--clr-neutral-3);
				}
			}
		}

		.nav-btns {
			display: flex;
			justify-content: space-between;
			position: absolute;
			right: 20px;

			.login-btn {
				background: transparent;
				border: transparent;
				color: var(--clr-neutral-1);
				font-weight: var(--fweight-bold);
				cursor: pointer;
				font-size: 1.2rem;
				margin-right: 20px;
			}
			.login-btn:hover {
				color: var(--clr-neutral-3);
			}

			.signup-btn {
				text-transform: capitalize;
				background-color: var(--clr-primary-1);
				padding: 0.4rem 1rem;
				border-radius: 2rem;
				border: transparent;
				font-size: 1.3rem;
				color: white;
				font-weight: var(--fweight-bold);
				cursor: pointer;
			}
		}

		
	} */
	}
`;
export default Navbar;
