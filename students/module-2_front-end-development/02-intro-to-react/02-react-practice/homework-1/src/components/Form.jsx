import styled from "styled-components";
import "./Form.css";

function Form() {
  return (
    <>
      <h1>Contact Us</h1>
      <form action="">
        <section>
          <div>
            <label htmlFor="firstName" className="float">
              First Name *
            </label>
            <input type="text" name="firstName" className="inputForm" />
          </div>
          <div>
            <label htmlFor="lastName" className="float">
              Last Name *
            </label>
            <input type="text" name="lastName" className="inputForm" />
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="email" className="float">
              Email Address *
            </label>
            <input type="email" name="email" id="" className="inputForm" />
          </div>
        </section>
        <label htmlFor="" className="float">
          Query Type *
        </label>
        <section>
          <div className="radioButton">
            <input
              type="radio"
              name="query"
              id="general"
              className="radioInput"
            />
            <label htmlFor="general" className="lineLabel">
              General Enquiry
            </label>
          </div>
          <div className="radioButton">
            <input
              type="radio"
              name="query"
              id="support"
              className="radioInput"
            />
            <label htmlFor="support" className="lineLabel">
              Support Enquiry
            </label>
          </div>
        </section>
        <section>
          <div>
            <label htmlFor="message" className="float">
              Message *
            </label>
            <textarea name="message" id=""></textarea>
          </div>
        </section>
        <section>
          <div className="footer">
            <input type="checkbox" name="consent" id="consent" />
            <label htmlFor="consent" className="lineLabel">
              I consent to being contacted by the team *
            </label>
          </div>
        </section>
        <div className="footer">
          <input type="submit" value="Submit" className="button" />
        </div>
      </form>
    </>
  );
}

export default Form;
