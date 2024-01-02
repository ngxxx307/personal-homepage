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

  const handleSubmit = (e) => {
      console.log(e)
  }

  return (
    <div id="Contact" className="pt-10">
      <p className=" text-oliveGreen font-syne text-center text-9xl font-semibold">
        Contact
      </p>
      <div className="h-96 w-full px-96">
        <div className=" p-12">
          <form className="flex flex-col m-auto" onSubmit={handleSubmit}>
              <input placeholder='Name' value={name.value} onChange={name.onChange} className="block my-1 rounded-sm p-2 bg-transparent outline outline-oliveGreen outline-2 focus:outline-4" />
              <input placeholder='Email' value={age.value} onChange={age.onChange} className="block my-1 rounded-sm p-2 bg-transparent outline outline-oliveGreen outline-2 focus:outline-4" />
              <textarea placeholder='Message' value={age.value} onChange={age.onChange} className="block my-1 rounded-sm min-h-32 p-2 bg-transparent outline outline-oliveGreen outline-2 focus:outline-4" />
            <button className="ml-auto">
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
