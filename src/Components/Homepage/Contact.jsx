import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeInDropAnimation } from "../../Animation/Animation";

const useTextField = () => {
  const [value, setValue] = useState('')

  const onChange = () => {
    setValue(event.target.value)
  }
  return {
    value,
    onChange
  }
}

const Contact = () => {
  const name = useTextField();
  const age = useTextField();
  const message = useTextField();

  const handleSubmit = (e) => {
      console.log(e)
  }

  return (
    <div id="Contact" className="pt-10 ">
      <p className=" text-7xl lg:text-9xl text-oliveGreen font-syne text-center font-semibold">
        Contact
      </p>
      <div className="h-96 w-full sm:px-24 lg:px-80">
        <div className=" p-12">
          <form className="flex flex-col m-auto" onSubmit={handleSubmit}>
              <input placeholder='Name' value={name.value} onChange={name.onChange} className="block my-1 rounded-sm p-2 bg-transparent outline outline-oliveGreen outline-2 focus:outline-4" />
              <input placeholder='Email' value={age.value} onChange={age.onChange} className="block my-1 rounded-sm p-2 bg-transparent outline outline-oliveGreen outline-2 focus:outline-4" />
              <textarea placeholder='Message' value={message.value} onChange={message.onChange} className="block my-1 rounded-sm min-h-32 p-2 bg-transparent outline outline-oliveGreen outline-2 focus:outline-4" />
            <button className="ml-auto rounded-lg bg-oliveGreen px-2 py-1 text-white font-syne">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
