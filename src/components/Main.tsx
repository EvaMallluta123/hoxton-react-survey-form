import { useState } from "react";
import {AnswerItemType}from "./AnswersItem"
import AnswersList from "./AnswersList";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  
const[answers, setAnswer]=useState<AnswerItemType[]>([])

const initialForm:AnswerItemType= {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [`colour`],
  worstFeatures: [`logo`],
  timeSpent: [`Swimming`]
};
  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}

        <AnswersList answersList={answers}/>
      </section>
      <section className="main__form">{/* a form should be here */}
      <form className="form" 
      onSubmit={event=> {
        event.preventDefault() 
        const bestFeatures = [
          ...document.querySelectorAll('input[name="features"]:checked')
        ].map(input => input.value)

        const worstFeatures = [
          ...document.querySelectorAll('input[name="worstFeatures"]:checked')
        ].map(input => input.value)

        const timeSpent = [
          ...document.querySelectorAll('input[name="timeSpent"]:checked')
        ].map(input => input.value)

        const answer:AnswerItemType={
          review: event.target.review.value,
          email: event.target.email.value,
          username: event.target.username.value,
          consistency: event.target.consistency.value,
          colour: event.target.colour.value,
          logo: event.target.logo.value,
          bestFeatures: bestFeatures,
          worstFeatures: worstFeatures,
          timeSpent: timeSpent
        }
      setAnswer([...answers, answer])
      }}
      
      >
        <h2>Tell us what you think about you rubber duck!</h2>
       
        <h3>What would you saythat are the best features of your rubber duck?</h3>
        <label className="form__group">
         <input type="checkbox" value="It`s yellow!" name="bestFeatures"/>It`s yellow!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It squeaks!" name="bestFeatures"/>It squeaks!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It has a logo!" name="bestFeatures"/>It has a logo!
         </label>
         <label className="form__group">
         <input type="checkbox" value="Its big!" name="bestFeatures"/>Its big!
         </label>
         
        <h3>What would you saythat are the worst bits of your rubber duck?</h3>
        <label className="form__group">
         <input type="checkbox" value="It`s yellow!" name="worstFeatures"/>It`s yellow!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It squeaks!" name="worstFeatures"/>It squeaks!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It has a logo!" name="worstFeatures"/>It has a logo!
         </label>
         <label className="form__group">
         <input type="checkbox" value="Its big!" name="worstFeatures"/>Its big!
         </label>

        <h3>How do you rate your rubber duck consistency?</h3>
        <ul className='form__group radio'>
  <li>
    <input
      id='consistency-1'
      type='radio'
      name='consistency'
      value='1'
    />
    <label htmlFor='consistency-1'>1</label>
  </li>
  <li>
    <input
      id='consistency-2'
      type='radio'
      name='consistency'
      value='2'
    />
    <label htmlFor='consistency-1'>2</label>
  </li>
  <li>
    <input
      id='consistency-3'
      type='radio'
      name='consistency'
      value='3'
    />
    <label htmlFor='consistency-1'>3</label>
  </li>
  <li>
    <input
      id='consistency-4'
      type='radio'
      name='consistency'
      value='4'
    />
    <label htmlFor='consistency-1'>4</label>
  </li>
</ul>

<h3>How do you rate your rubber duck colour?</h3>
<ul className='form__group radio'>
  <li>
    <input
      id='colour-1'
      type='radio'
      name='colour'
      value='1'
    />
    <label htmlFor='colour-1'>1</label>
  </li>
  <li>
    <input
      id='colour-2'
      type='radio'
      name='colour'
      value='2'
    />
    <label htmlFor='colour-2'>2</label>
  </li>
  <li>
    <input
      id='colour-3'
      type='radio'
      name='consistency'
      value='3'
    />
    <label htmlFor='colour-3'>3</label>
  </li>
  <li>
    <input
      id='colour-4'
      type='radio'
      name='colour'
      value='4'
    />
    <label htmlFor="colour-14">4</label>
  </li>
</ul>
<h3>How do you rate your rubber duck logo?</h3>
<ul className='form__group radio'>
  <li>
    <input
      id='logo-1'
      type='radio'
      name='logo'
      value='1'
    />
    <label htmlFor='logo-1'>1</label>
  </li>
  <li>
    <input
      id='logo-2'
      type='radio'
      name='logo'
      value='2'
    />
    <label htmlFor='logo-2'>2</label>
  </li>
  <li>
    <input
      id='logo-3'
      type='radio'
      name='logo'
      value='3'
    />
    <label htmlFor='logo-3'>3</label>
  </li>
  <li>
    <input
      id='logo-4'
      type='radio'
      name='logo'
      value='4'
    />
    <label htmlFor='logo-4'>4</label>
  </li>
</ul>
<h3>How do you like to spend time with your rubber duck?</h3>
<label className="form__group">
         <input type="checkbox" value="Swimming" name="timeSpent"/>Swimming
         </label>
         <label className="form__group">
         <input type="checkbox" value="Bathing" name="timeSpent"/>Bathing
         </label>
         <label className="form__group">
         <input type="checkbox" value="Chatting" name="timeSpent"/>Chatting
         </label>
         <label className="form__group">
         <input type="checkbox" value="I dont like to spend time with it" name="timeSpent"/>I dont like to spend time with it
         </label>

<h3>What else have you got to say about your rubber duck?</h3>
<textarea name="review" rows={7} cols={50}/>

<h3>Put your name here (if you feel free):</h3>
<input type="textarea" name="username"/>

<h3>Leave as your email pretty please??</h3>
<input type="email" name="email"/>
 <label className="form__submit">
 <input type="button"  value="Submit Survey!"/></label>
      </form>
      </section>
    </main>
  )
}

export default Main;
