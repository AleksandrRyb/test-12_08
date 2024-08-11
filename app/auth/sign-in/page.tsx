import React from 'react';

import AuthForm from "@/components/auth-form";

const SignIn = () => {
    return (
        <section className={"h-screen w-100% flex items-center justify-center"}>
            <div className={"xl:w-[40%] lg:w-[50%] sm:w-[70%]"}>
                <AuthForm />
            </div>
        </section>
    );
};

export default SignIn;