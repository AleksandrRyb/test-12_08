"use client"
import React from 'react';
import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form"
import AppInput from "@/components/app-input";
import CheckboxWithText from "@/components/checkbox-with-text";
import {useRouter} from "next/navigation";


export const formSchema = z.object({
    login: z.string().min(2, {
        message: "Длина логина не может быть меньше 2 символов!"
    }),
    password: z.string().min(2, {
        message: "Длина пароля не может быть меньше 2 символов!"
    })
})

const AuthForm = () => {

    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            login: "",
            password: ""
        }
    })

    const onSubmit = (values: z.infer<typeof formSchema>) => {

        router.push("/statements")
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <AppInput control={form.control} name="login" label={"Логин"} placeholder={"Логин"} />
                <AppInput type={"password"} control={form.control} name="password" label={"Логин"} placeholder={"Пароль"} />
                <CheckboxWithText className={"mb-[30px]"} text={"Запомнить меня"} />
                <div className={"flex justify-center"}>

                    <Button
                        className={"rounded-[100px] font-bold uppercase text-white bg-gray-7"}
                        type={"submit"}
                    >Войти
                    </Button>

                </div>
            </form>
        </Form>
    );
};

export default AuthForm;