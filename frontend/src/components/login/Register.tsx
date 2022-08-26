import React, { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { signup } from "../../api/user";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { handleShowLogin } from "../../redux/slices/appSlice";
import { MdOutlineCancel } from "react-icons/md";


const schema = yup.object().shape({
  name: yup.string().required('Нэрээ оруулана уу').max(30),
  email: yup.string().email("Имэйлэ зөв оруулана уу").required("Имэйлэ оруулана уу"),
  password: yup.string().required("Нууц үгээ оруулана уу").min(6)
});


type Props = {
  setShow: Dispatch<SetStateAction<"register" | "login">>
}

function Register({ setShow }: Props) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    mode: "onBlur",
    resolver: yupResolver(schema)
  });

  const dispatch = useAppDispatch()
  const { user } = useAppSelector(state => state.user)



  async function handleRegister(data: any) {
    await signup(dispatch, data)
  }

  user && dispatch(handleShowLogin(false))

  return (
    <div>
      <div className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] w-full  max-w-[600px] p-5">
        <div className=" flex flex-col rounded-2xl bg-white">
          <div className="text-end">
            <button className='text-gray text-2xl hover:shadow-lg hover:bg-gray-light rounded-full p-3 m-2' onClick={() => dispatch(handleShowLogin(false))}><MdOutlineCancel /></button>
          </div>
          <div className="rounded-t-xl mb-0 px-6 pb-6">
            {/* <div className="text-center mb-3">
                <h6 className="text-gray-600 text-sm font-bold">
                  Sign in with
                </h6>
              </div> */}
            <div className="flex gap-5 justify-center">
              <button
                className="bg-white text-gray-800 font-normal px-5 py-3 rounded-xl outline-none focus:outline-none mr-2 mb-1 uppercase shadow-md hover:shadow-xl hover:bg-gray-light inline-flex items-center text-xs"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png'
                />
                Facebook
              </button>
              <button
                className="bg-white active:bg-gray-100 text-gray-800 font-normal px-5 py-3 rounded-xl outline-none focus:outline-none mr-1 mb-1 uppercase shadow-md hover:bg-gray-light hover:shadow-xl inline-flex items-center text-xs"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                <img
                  alt="..."
                  className="w-5 mr-1"
                  src='https://raw.githubusercontent.com/creativetimofficial/tailwind-starter-kit/830f9267ad556745e6fd7857260c020dcd9dacea/Login%20Page/react-login-page/src/assets/img/google.svg'
                />
                Google
              </button>
            </div>
            <hr className="mt-6 border-b-1 border-gray-400" />
          </div>
          <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
            {/* <div className="text-gray-500 text-center mb-3 font-bold">
                <small>Or sign in with credentials</small>
              </div> */}
            <form onSubmit={handleSubmit(handleRegister)}>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Нэр
                </label>
                <input
                  type="text"
                  // className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${errors.name ? "border-red-500" : "border-primary"
                    }`}
                  {...register("name")}
                  placeholder="Нэр"
                  style={{ transition: "all .15s ease" }}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.name.message as string}
                  </p>
                )}
              </div>
              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Имэйл
                </label>
                <input
                  type="email"
                  // className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${errors.email ? "border-red-500" : "border-primary"
                    }`}
                  {...register("email")}
                  placeholder="Email"
                  style={{ transition: "all .15s ease" }}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.email.message as string}
                  </p>
                )}
              </div>

              <div className="relative w-full mb-3">
                <label
                  className="block uppercase text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Нууц үг
                </label>
                <input
                  type="password"
                  // className="border-0 px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                  className={`block w-full bg-transparent outline-none border-b-2 py-2 px-4 text-textClr/90 focus:bg-gray-light placeholder-gray ${errors.password ? "border-red-500" : "border-primary"
                    }`}
                  {...register("password")}
                  placeholder="Password"
                  style={{ transition: "all .15s ease" }}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-2">
                    {errors.password.message as string}
                  </p>
                )}
              </div>
              <div className="text-center mt-10">
                <button
                  className="bg-primary text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-4 rounded-xl shadow hover:shadow-xl outline-none focus:outline-none mr-1 mb-1 w-full"
                  type="submit"
                  style={{ transition: "all .15s ease" }}
                >
                  Бүртгүүлэх
                </button>
              </div>
            </form>
            <div className="flex justify-end pt-3">
              <button className="hover:underline text-primary" onClick={() => setShow('login')}>Аль хэдийн бүртгүүлсэн</button>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Register;
