import React from "react";
import styled from "styled-components";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";
import { AiFillFacebook, AiOutlineFacebook } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";

const Footer = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<div className="section-header">
					<h1 className="title">Shortly</h1>
				</div>

				<div className="body">
					<div className="subsection">
						<div className="header">
							<h3>Features</h3>
						</div>

						<ul className="links">
							<li>
								<a href="#">Link Shortening</a>
							</li>
							<li>
								<a href="#">Branded Links</a>
							</li>
							<li>
								<a href="#">Analytics</a>
							</li>
						</ul>
					</div>
					<div className="subsection">
						<div className="header">
							<h3>Resources</h3>
						</div>

						<ul className="links">
							<li>
								<a href="#">Blog</a>
							</li>
							<li>
								<a href="#">Developers</a>
							</li>
							<li>
								<a href="#">Support</a>
							</li>
						</ul>
					</div>
					<div className="subsection">
						<div className="header">
							<h3>Company</h3>
						</div>

						<ul className="links">
							<li>
								<a href="#">About</a>
							</li>
							<li>
								<a href="#">Our team</a>
							</li>
							<li>
								<a href="#">Careers</a>
							</li>
							<li>
								<a href="#">Contact</a>
							</li>
						</ul>
					</div>

					<div className="social-icons">
						<button type="button">
							<FaFacebookSquare />
						</button>
						<button>
							<FaTwitter />
						</button>
						<button>
							<BsPinterest />
						</button>
						<button>
							<FaInstagram />
						</button>
					</div>
				</div>
			</div>
		</Wrapper>
	);
};

// # STYLED COMPONENTS

const Wrapper = styled.footer`
	background-color: var(--clr-primary-2-1);
	padding: 2rem 0;

	.section-center {
		color: white;

		a {
			color: white;
		}

		.section-header {
			margin-bottom: 20px;
			h1 {
				text-align: center;
			}
		}

		.body {
			display: grid;
			grid-template-columns: 1fr;
			grid-template-rows: repeat(3, 1fr);
			justify-items: center;
			grid-row-gap: 1em;

			.subsection {
				/* border: 1px solid white; */

				.header {
					margin-bottom: 10px;
					h3 {
						text-align: center;
					}
				}

				.links {
					li {
						text-align: center;
						margin-bottom: 9px;

						a {
							font-size: 0.8rem;
							transition: var(--transition);
						}
						a:hover {
							color: var(--clr-primary-1);
						}
					}
				}
			}

			.social-icons {
				/* border: 1px solid white; */
				margin-top: 20px;
				width: 200px;
				display: flex;
				justify-content: space-between;
				align-items: center;

				button {
					cursor: pointer;
					border: transparent;
					background: transparent;
					color: white;
					font-size: 1.5rem;
					transition: var(--transition);
				}

				button:hover {
					color: var(--clr-primary-1);
				}
			}
		}
	}
`;
export default Footer;
