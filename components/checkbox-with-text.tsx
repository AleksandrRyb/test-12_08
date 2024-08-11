import React from 'react';
import {Checkbox} from "@/components/ui/checkbox";

const CheckboxWithText = ({ text }: {text: string}) => {
    return (
        <div className="items-center flex space-x-2 mb-[30px]">
            <Checkbox className={"bg-white text-sky-4 rounded text-xl w-[30px] h-[30px]"} id="terms1" />
            <div className="grid gap-1.5 leading-none">
                <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none text-gray-6 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    {text}
                </label>
            </div>
        </div>
    );
};

export default CheckboxWithText;