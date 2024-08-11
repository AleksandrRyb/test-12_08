import React, {useState} from 'react';
import { Control, FieldPath } from "react-hook-form";
import { IconEye, IconEyeClosed } from "@tabler/icons-react";
import {FormControl, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {z} from "zod";
import {formSchema} from "@/components/auth-form";

interface AppInputProps {
    control: Control<z.infer<typeof formSchema>>,
    name: FieldPath<z.infer<typeof formSchema>>,
    label: string,
    placeholder: string,
    type: string
}

const AppInput = ({ control, name, label, placeholder, type = "text" }: AppInputProps) => {

    const [isOpen, setIsOpen] = useState(false);

    const setIsOpenHandler = () => {
         setIsOpen(prevState => !prevState)
    }

    const renderEeyIcon = () => {
        if(type !== "password") return

        if(isOpen) {
            return <IconEye onClick={setIsOpenHandler} className={"absolute top-[25%] right-[25px] cursor-pointer text-gray-400"} />
        } else {
            return <IconEyeClosed onClick={setIsOpenHandler} className={"absolute top-[25%] right-[25px] cursor-pointer text-gray-400"}  />
        }
    }

    return (
        <FormField
            name={name}
            control={control}
            render={({field}) => (
                <FormItem>
                    {!label && <FormLabel>{label}</FormLabel>}

                    <FormControl>
                        <div className={"relative"}>
                            <Input
                                type={isOpen ? "text" : type}
                                className={"py-6"}
                                placeholder={placeholder} {...field}
                            />

                            {renderEeyIcon()}
                        </div>
                    </FormControl>

                    <div className={"ml-1 h-[30px]"}>
                        <FormMessage className={"text-red-600"} />
                    </div>
                </FormItem>
            )}
        />
    );
};

export default AppInput;