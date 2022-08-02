import { useState } from "react";
import { AnswerItemType } from "./components/AnswersItem";
import Header from "./components/Header";
import Main from "./components/Main";


  const initialForm:AnswerItemType= {
    review: "",
    email: "",
    username: "",
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: []
  };


export default function App() {

  return (
    <>
      <Header />
      <Main />
    </>
  );
}
