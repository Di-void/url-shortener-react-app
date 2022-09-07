import React, { useState } from "react";
import styled from "styled-components";
import { ReactComponent as Logo } from "../assets/images/logo.svg";
import { FaBars } from "react-icons/fa";
// import { useGlobalContext } from "../context";
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

        <motion.div className="nav-cont" initial={false} animate={{ y: pos }}>
          <div className="nav-cont-center">
            <ul className="nav-links">
              <li>
                {/* eslint-disable-next-line */}
                <a href="#">Features</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
                <a href="#">Pricing</a>
              </li>
              <li>
                {/* eslint-disable-next-line */}
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
          .login-btn:hover {
            color: var(--clr-primary-1);
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

    .bars {
      height: fit-content;
      background: transparent;
      border: transparent;
      font-size: 1.5rem;
      color: var(--clr-neutral-1);
      cursor: pointer;

      @media screen and (min-width: 750px) {
        display: none;
      }
    }
    .bars:hover {
      color: var(--clr-neutral-3);
    }

    @media screen and (min-width: 750px) {
      /* border: 1px solid black; */
      width: 80%;

      .nav-cont {
        top: 400px;
        right: 0;
        width: 80%;
        height: 100%;
        justify-content: space-between;
        /* border: 1px solid black; */
        padding: 0;

        .nav-cont-center {
          width: 100%;
          /* border: 1px solid black; */
          padding: 0;
          background: none;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;

          .nav-links {
            /* border: 1px solid black; */
            padding: 0;
            display: flex;
            width: fit-content;
            height: fit-content;
            border-bottom: none;
            li {
              a {
                color: var(--clr-neutral-1);
              }
              a:hover {
                color: var(--clr-neutral-3);
              }
            }
          }

          .nav-btns {
            /* border: 1px solid black; */
            width: fit-content;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 0;

            .login-btn {
              margin-right: 40px;
              margin-bottom: 0;
              color: var(--clr-neutral-1);
            }
            .login-btn:hover {
              color: var(--clr-neutral-3);
            }

            .signup-btn {
              font-size: 1rem;
              padding: 0.4rem 0.7rem;
            }
          }
        }
      }
    }
  }
`;
export default Navbar;
