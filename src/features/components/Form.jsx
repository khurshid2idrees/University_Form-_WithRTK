import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addStudent } from "../form/formSlice";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [option, setOption] = useState(null);
  const [dropoption, setDropoption] = useState(null);
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [amount, setAmount] = useState();
  const [duration, setDuration] = useState();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addStudent({
        name,
        email,
        password,
        option,
        dropoption,
        date,
        time,
        amount,
        duration,
      })
    );
  };

  return (
    <>
      <>
        <div className="min-h-screen bg-gray-100 p-0 sm:p-12">
          <div className="mx-auto max-w-md px-6 py-12 bg-white border-0 shadow-lg sm:rounded-3xl">
            <h1 className="text-2xl font-bold mb-8">
              Register as a student to our university portal
            </h1>
            <form id="form" onSubmit={handleSubmit}>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="name"
                  required=""
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />

                <span className="text-sm text-red-600 hidden" id="error">
                  Name is required
                </span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />

                <span className="text-sm text-red-600 hidden" id="error">
                  Email address is required
                </span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />

                <span className="text-sm text-red-600 hidden" id="error">
                  Password is required
                </span>
              </div>
              <fieldset className="relative z-0 w-full p-px mb-5">
                <legend className="absolute text-gray-500 transform scale-75 -top-3 origin-0">
                  Choose an option
                </legend>
                <div className="block pt-3 pb-2 space-x-4">
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={"regular college"}
                      onChange={(e) => setOption(e.target.value)}
                      checked={option === "regular college"}
                      className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    />
                    Option 1
                  </label>
                  <label>
                    <input
                      type="radio"
                      name="radio"
                      value={"virtual college"}
                      checked={option === "virtual college"}
                      onChange={(e) => setOption(e.target.value)}
                      className="mr-2 text-black border-2 border-gray-300 focus:border-gray-300 focus:ring-black"
                    />
                    Option 2
                  </label>
                </div>
                <span className="text-sm text-red-600 hidden" id="error">
                  Option has to be selected
                </span>
              </fieldset>
              <div className="relative z-0 w-full mb-5">
                <select
                  name="select"
                  onChange={(e) => setDropoption(e.target.value)}
                  className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none z-1 focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                >
                  <option value="" selected="" disabled="" hidden="" />
                  <option value={1}>Option 1</option>
                  <option value={2}>Option 2</option>
                  <option value={3}>Option 3</option>
                  <option value={4}>Option 4</option>
                  <option value={5}>Option 5</option>
                </select>
                <label
                  htmlFor="select"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Select an option
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Option has to be selected
                </span>
              </div>
              <div className="flex flex-row space-x-4">
                <div className="relative z-0 w-full mb-5">
                  <input
                    type="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    placeholder=" "
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />
                  <label
                    htmlFor="date"
                    className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                  >
                    Date
                  </label>
                  <span className="text-sm text-red-600 hidden" id="error">
                    Date is required
                  </span>
                </div>
                <div className="relative z-0 w-full">
                  <input
                    type="text"
                    name="time"
                    onChange={(e) => setTime(e.target.value)}
                    placeholder=" Time"
                    className="pt-3 pb-2 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                  />

                  <span className="text-sm text-red-600 hidden" id="error">
                    Time is required
                  </span>
                </div>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="number"
                  name="money"
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Amount"
                  className="pt-3 pb-2 pl-5 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />
                <div className="absolute top-0 left-0 mt-3 ml-1 text-gray-400">
                  $
                </div>

                <span className="text-sm text-red-600 hidden" id="error">
                  Amount is required
                </span>
              </div>
              <div className="relative z-0 w-full mb-5">
                <input
                  type="text"
                  name="duration"
                  onChange={(e) => setDuration(e.target.value)}
                  placeholder=" "
                  className="pt-3 pb-2 pr-12 block w-full px-0 mt-0 bg-transparent border-0 border-b-2 appearance-none focus:outline-none focus:ring-0 focus:border-black border-gray-200"
                />

                <label
                  htmlFor="duration"
                  className="absolute duration-300 top-3 -z-1 origin-0 text-gray-500"
                >
                  Duration
                </label>
                <span className="text-sm text-red-600 hidden" id="error">
                  Duration is required
                </span>
              </div>
              <button
                id="button"
                type="submit"
                className="w-full px-6 py-3 mt-3 text-lg text-white transition-all duration-150 ease-linear rounded-lg shadow outline-none bg-pink-500 hover:bg-pink-600 hover:shadow-lg focus:outline-none"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </>
    </>
  );
}
