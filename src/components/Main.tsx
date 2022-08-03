import { useState } from "react";
import {AnswerItemType}from "./AnswersItem"

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  
const[answer, setAnswer]=useState<AnswerItemType[]>([])

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className="main__form">{/* a form should be here */}
      <form className="form" 
      onSubmit={event=> {
        event.preventDefault() 
        let form:AnswerItemType={
          review: event.target.review.value,
          email: event.target.email.value,
          username: event.target.username.value,
          consistency: event.target.consistency.value,
          colour: event.target.colour.value,
          logo: event.target.logo.value,
          bestFeatures: event.target.bestFeatures.value,
          worstFeatures: event.target.worstFeatures.value,
          timeSpent: event.target.timeSpent.value
        }
      setAnswer([...answer, form])
      }}
      
      >
        <h2>Tell us what you think about you rubber duck!</h2>
       
        <h3>What would you saythat are the best features of your rubber duck?</h3>
        <label className="form__group">
         <input type="checkbox" value="It`s yellow!" name="rubber"/>It`s yellow!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It squeaks!" name="rubber"/>It squeaks!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It has a logo!" name="rubber"/>It has a logo!
         </label>
         <label className="form__group">
         <input type="checkbox" value="Its big!" name="rubber"/>Its big!
         </label>
         
        <h3>What would you saythat are the worst bits of your rubber duck?</h3>
        <label className="form__group">
         <input type="checkbox" value="It`s yellow!" name="rubber"/>It`s yellow!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It squeaks!" name="rubber"/>It squeaks!
         </label>
         <label className="form__group">
         <input type="checkbox" value="It has a logo!" name="rubber"/>It has a logo!
         </label>
         <label className="form__group">
         <input type="checkbox" value="Its big!" name="rubber"/>Its big!
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
<h3>How do you rate your rubber duck logo?</h3>
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
<h3>How do you like to spend time with your rubber duck?</h3>
<label className="form__group">
         <input type="checkbox" value="Swimming" name="rubber"/>Swimming
         </label>
         <label className="form__group">
         <input type="checkbox" value="Bathing" name="rubber"/>Bathing
         </label>
         <label className="form__group">
         <input type="checkbox" value="Chatting" name="rubber"/>Chatting
         </label>
         <label className="form__group">
         <input type="checkbox" value="I dont like to spend time with it" name="rubber"/>I dont like to spend time with it
         </label>

<h3>What else have you got to say about your rubber duck?</h3>
<textarea name="textarea" rows={7} cols={50}/>

<h3>Put your name here (if you feel free):</h3>
<input type="textarea" name="textarea"/>

<h3>Leave as your email pretty please??</h3>
<input type="textarea" name="textarea"/>
 <label className="form__submit">
 <input type="button"  value="Submit Survey!"/></label>
      </form>
      </section>
    </main>
  )
}

export default Main;
