
import axios from "axios";
import { Button, Checkbox, Label, Radio, TextInput } from "flowbite-react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
// import Link from "next/link";

export default function Login() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    const navigate = useNavigate

    async function onClick(data) {
        console.log(data);

        try {
            const { data: response } = await axios.post('https://linked-posts.routemisr.com/users/signin', data)
            console.log(response);
            console.log(response.message);

            if (response.message === "success") {
                navigate('/')
            } else {
                throw new Error("invalid login date");

            }
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className=" max-w-lg mx-auto p-8 m-8 rounded-lg shadow-lg shadow-gray-500">

            <h1 className="font-bold text-3xl text-center pt-8 mb-8">Login</h1>
            <form
                onSubmit={handleSubmit(onClick)}
                className="flex flex-col gap-4">

                {/* ************************* Email ************************** */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email">Your email</Label>
                    </div>
                    <TextInput {...register('email')} id="email" type="email" placeholder="Mohamed@Bahaa.com" shadow />
                </div>
                {/* ************************* Password ************************** */}
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password">Your Password</Label>
                    </div>
                    <TextInput {...register('password', { required: 'enter a valid password' })} id="password" type="password" placeholder="Enter your password" shadow />
                    {errors.password && <p className="text-red-700">{errors.password.message}</p>}
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div >
    );
}
