import React from "react";
import styled from "styled-components";
import { FiMail } from "react-icons/fi";
import { CgArrowTopRightO } from "react-icons/cg";
import { AiOutlineMessage } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { GiTwoCoins } from 'react-icons/gi';
import { BiVideoRecording } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';

const Login = ({ setChat }) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const history = useHistory();
  return (
    <StyleLogin>
      {isAuth ? (
        <>
          <CgArrowTopRightO />
          <BiVideoRecording />
          <AiOutlineMessage onClick={() => setChat((pre) => !pre)} />
          <IoNotificationsOutline />
          <AiOutlinePlus onClick={()=>{history.push("/create-post")}} />
          <span>
            <GiTwoCoins />
            Get Coins
          </span>
        </>
      ) : (
        <>
          <img src= "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsevWGOm2ujBhw4LdjZsq3yVAnuOf9l_QFKw&usqp=CAU" style={{
            width : "40px",
            height : "40px",
            // marginTop : "15px",
            // marginLeft : "10%",
            color :"black"
          }}  alt="Campgain"/>
          <button
            onClick={() => {
              history.push("/account");
            }}
          >
            Log In
          </button>
          <button
            onClick={() => {
              history.push("/account");
            }}
          >
            Sign Up
          </button>
        </>
      )}
    </StyleLogin>
  );
};
const StyleLogin = styled.div`
  /* border: 2px solid skyblue; */
  height: 90%;
  width: 22%;
  margin: auto 0;
  margin-right: 1%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > button {
    height: 100%;
    font-weight: bold;
    border: 1px solid #0079d3;
    border-radius: 50px;
    padding: 0 14%;
    background: #fff;
    color: #0079d3;
    cursor: pointer;
  }
  & > button + button {
    color: #fff;
    background: #0079d3;
  }
  & > svg {
    font-size: 140%;
    color: #757575;
    cursor: pointer;
  }
  & > span {
    display: flex;
    font-size: 12px;
    align-items: center;
    border: solid 1px #ddbd37;
    border-radius: 20px;
    padding: 4px;
    color:#757575;
    & > svg {
      margin-right: 4px;
      font-size: 20px;
      color:#757575
    }
  }
`;

export default Login;
