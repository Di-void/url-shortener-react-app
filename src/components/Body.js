import React from "react";
import styled from "styled-components";
import Brandrecog from "../images/icon-brand-recognition.svg";
import Detrec from "../images/icon-detailed-records.svg";
import Fullcust from "../images/icon-fully-customizable.svg";
import Boost from "../images/bg-boost-mobile.svg";

const Body = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<header>
					<div className="title">
						<h1>advanced statistics</h1>
					</div>
					<p>
						Track how your links are performing across the web with our
						advanced statistics dashboard.
					</p>
				</header>

				<main>
					<div className="items">
						<div className="clipped">&nbsp;</div>
						<div className="info-box">
							<div className="icon">
								<div className="icon-box">
									{/* ICON */}
									<img src={Brandrecog} alt="brand recognition" />
								</div>
							</div>
							<div className="info-title">
								<h2>Brand Recognition</h2>
							</div>

							<article className="info-body">
								<p>
									Boost your brand recognition with each click. Generic
									links don't mean a thing. Branded links help instil
									confidence in your content.
								</p>
							</article>
						</div>

						<div className="info-box">
							<div className="icon">
								{/* <div className="divider">&nbsp;</div> */}
								<div className="icon-box">
									{/* ICON */}
									<img src={Detrec} alt="Detailed Records" />
								</div>
							</div>
							<div className="info-title">
								<h2>Detailed Records</h2>
							</div>

							<article className="info-body">
								<p>
									Gain insights into who is clicking your links.
									Knowhing when and where people engage with your
									content helps inform better decisions.
								</p>
							</article>
						</div>

						<div className="info-box">
							<div className="icon">
								{/* <div className="divider">&nbsp;</div> */}
								<div className="icon-box">
									{/* ICON */}
									<img src={Fullcust} alt="Fully customizable" />
								</div>
							</div>
							<div className="info-title">
								<h2>Fully Customizable</h2>
							</div>

							<article className="info-body">
								<p>
									Improve brand awareness and content discoverability
									throuh customizable links, supercharging audience
									engagement.
								</p>
							</article>
						</div>
					</div>
				</main>

				<div className="footer">
					<div className="boost-bg">
						<img src={Boost} alt="boost background mobile" />
					</div>
					<div className="footer-center">
						<div className="title">
							<h1>Boost your links today</h1>
						</div>

						<div className="btn-bx">
							<button className="start-btn">Get Started</button>
						</div>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENTS

const Wrapper = styled.section`
	background-color: var(--clr-neutral-10);
	padding-top: 10rem;

	.section-center {
		/* border: 1px solid black; */
		header {
			/* border: 1px solid black; */
			div {
				margin-bottom: 30px;
				h1 {
					text-align: center;
					color: var(--clr-neutral-3);
				}
			}
			p {
				/* border: 1px solid black; */
				padding: 0 3rem;
				text-align: center;
				color: var(--clr-neutral-2);
			}
		}

		main {
			/* border: 1px solid black; */
			margin-top: 5rem;
			padding-bottom: 5rem;

			.items {
				/* background-color: var(--clr-primary-1); */
				/* border: 1px solid black; */
				position: relative;
				display: grid;
				grid-template-columns: 1fr;
				grid-template-rows: repeat(3, 1fr);
				grid-gap: 6em;
				place-items: center;
				padding: 0 1.5rem;

				.clipped {
					/* border: 1px solid black; */
					position: absolute;
					width: 5px;
					height: 90%;
					background-color: var(--clr-primary-1);
					/* clip-path: inset(5% 50% 15% 49%); */
				}
				.info-box {
					/* border: 1px solid black; */
					position: relative;
					padding: 1.5rem 0;
					border-radius: 0.5em;
					background-color: white;

					.icon {
						/* border: 1px solid black; */
						display: flex;
						justify-content: center;
						align-items: center;
						width: 100%;
						position: absolute;
						top: -40px;

						.icon-box {
							position: relative;
							border-radius: 50%;
							display: flex;
							justify-content: center;
							align-items: center;
							width: fit-content;
							background-color: var(--clr-primary-2);
							padding: 1.1rem;
						}
					}
					.info-title {
						text-align: center;
						color: var(--clr-neutral-3);
						margin-top: 40px;
						margin-bottom: 20px;
					}

					.info-body {
						display: flex;
						justify-content: center;
						align-items: center;
						p {
							width: 80%;
							text-align: center;
							color: var(--clr-neutral-2);
						}
					}
				}
			}
		}

		.footer {
			/* border: 1px solid black; */
			position: relative;
			padding: 1.5rem 2rem;
			background-color: var(--clr-primary-2);
			z-index: 1;

			.boost-bg {
				position: absolute;
				top: 0;
				right: 0;
				width: 100%;
				height: 100%;
				z-index: -1;
				/* border: 1px solid black; */

				img {
					width: 100%;
					height: 100%;
				}
			}
			.footer-center {
				/* border: 1px solid black; */
				width: fit-content;
				height: fit-content;
				margin: 2rem auto;
			}
			h1 {
				text-align: center;
				color: white;
				font-size: 1.6rem;
			}
			.btn-bx {
				margin-top: 30px;
				display: flex;
				justify-content: center;
				align-items: center;
				.start-btn {
					cursor: pointer;
					padding: 0.75rem 2rem;
					border-radius: 1em;
					text-align: center;
					color: white;
					font-size: 1.2rem;
					font-weight: 700;
					border: transparent;
					background-color: var(--clr-primary-1);
					transition: var(--transition);
				}
				.start-btn:hover {
					background-color: var(--clr-prim-hover);
				}
			}
		}
	}
`;
export default Body;
