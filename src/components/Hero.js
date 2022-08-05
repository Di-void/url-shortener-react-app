import React from "react";
import styled from "styled-components";
import Logo from "../images/illustration-working.svg";
import Logo1 from "../images/bg-shorten-mobile.svg";

const Hero = () => {
	return (
		<Wrapper>
			<header className="section-header">
				<div className="icon-box">
					<img src={Logo} alt="working" />
				</div>

				<article className="content-box">
					<div className="title">
						<h1>More than just shorter links</h1>
					</div>
					<div className="body">
						<p>
							Build your brand's recognition and get detailed insights on
							how your links are performing.
						</p>
					</div>

					<div className="btn-bx">
						<button className="start-btn">Get Started</button>
					</div>
				</article>
			</header>

			<div className="action-box">
				<div className="form-svg">
					<img src={Logo1} alt="" />
				</div>
				<form className="form">
					<input
						type="text"
						className="link-input"
						placeholder="Shorten a link here..."
					/>
					<button type="submit">Shorten it!</button>
				</form>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENTS
const Wrapper = styled.section`
	/* border: 1px solid black; */

	.section-header {
		/* border: 1px solid black; */
		.icon-box {
			/* border: 1px solid black; */
			padding-left: 30px;

			img {
				width: 100%;
				height: 100%;
			}
		}

		.content-box {
			/* border: 1px solid black; */
			.title {
				display: flex;
				justify-content: center;
				h1 {
					text-transform: none;
					font-weight: 700;
					font-size: 2.3rem;
					color: var(--clr-neutral-4);
					text-align: center;
					width: 80%;
				}
			}
			.body {
				/* border: 1px solid black; */
				padding: 0 30px;
				p {
					text-align: center;
					color: var(--clr-neutral-1);
					font-weight: 500;
				}
			}
			.btn-bx {
				margin: 30px 0;
				display: flex;
				justify-content: center;
				align-items: center;
				/* border: 1px solid black; */

				.start-btn {
					cursor: pointer;
					padding: 0.75rem 2rem;
					border-radius: 1em;
					text-align: center;
					color: white;
					font-size: 1.5rem;
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

	.action-box {
		position: relative;
		top: 5rem;
		overflow: hidden;
		background-color: var(--clr-primary-2);
		margin-right: auto;
		margin-left: auto;
		border-radius: 12px;
		width: 85%;
		background-image: url("../images/bg-shorten-mobile.svg");
		z-index: 1;

		.form-svg {
			position: absolute;
			right: 0;
			z-index: 0;
			width: fit-content;
		}
		.form {
			/* border: 1px solid black; */
			padding: 1.5rem;
			display: grid;
			grid-template-rows: repeat(2, 1fr);
			grid-row-gap: 1em;

			button {
				color: white;
				font-size: 16px;
				font-weight: 700;
				background-color: var(--clr-primary-1);
				cursor: pointer;
				transition: var(--transition);
			}
			button:hover {
				background-color: var(--clr-prim-hover);
			}
			input {
				outline: none;
				font-size: 1rem;
			}
			input::placeholder {
				color: var(--clr-neutral-3);
				font-size: 1rem;
			}
			& > * {
				border: transparent;
				z-index: 1;
				border-radius: 0.4em;
				padding: 1rem;
			}
		}
	}
`;
export default Hero;
