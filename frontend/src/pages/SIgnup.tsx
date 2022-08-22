import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


const schema = yup.object().shape({
  name: yup.string().required().max(30),
  email: yup.string().email().required(),
  password: yup.string().required().min(6)
});

function Signup() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  function handleSignup(data: any) {
    // handle submitting the form
    console.log(data);
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit(handleSignup)} className="p-4">
        <div className="mb-8">
          <label
            className={`block font-bold text-sm mb-2 ${errors.name? "text-red-400" : "text-blue-400"
              }`}
          >
            Нэр
          </label>
          <input
            type="text"
            placeholder="Нэр"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray focus:bg-gray-light ${errors.name
                ? "text-red-300 border-red-400"
                : "text-textClr/90 border-blue-400"
              }`}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-2">
              A valid name is required.
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="email"
            className={`block font-bold text-sm mb-2 ${errors.email ? "text-red-400" : "text-blue-400"
              }`}
          >
            Имайл
          </label>
          <input
            type="text"
            id="email"
            placeholder="hey@chrisoncode.io"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4  placeholder-gray focus:bg-gray-light ${errors.email
                ? "text-red-300 border-red-400"
                : "text-textClr/90 border-blue-400"
              }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-2">
              A valid email is required.
            </p>
          )}
        </div>

        <div className="mb-8">
          <label
            htmlFor="password"
            className={`block font-bold text-sm mb-2 ${errors.password ? "text-red-400" : "text-blue-400"
              }`}
          >
            Нууц үг
          </label>
          <input
            type="password"
            id="password"
            placeholder="Нууц үг"
            className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${errors.password ? "border-red-400" : "border-blue-400"
              }`}
            {...register("password")}
          />
          {errors.password && (
            <p className="text-red-400 text-sm mt-2">
              Your password is required.
            </p>
          )}
        </div>

        <button className="inline-block left-5 absolute right-5 bottom-5 md:static bg-blue-400 font-medium text-white rounded shadow py-3 px-10 text-sm">
          Бүртгүүлэх
        </button>
      </form>
    </div>
  );
}

export default Signup;
