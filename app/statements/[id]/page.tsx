import React from 'react';
import {IconChevronDown} from "@tabler/icons-react";

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {Statement} from "@/types";

const Statement = async ({params}) => {
    const {id} = params;

    const getStatement = async (id) => {
        const response = await fetch(
            `http://localhost:3000/api/statements/${id}`
        )

        return response.json()
    }

    const s: Statement = await getStatement(id)

    return (
        <section>
            <div className={"flex justify-center items-center w-full h-screen min-w-[300px]"}>
                <Collapsible className={"bg-white w-full rounded p-[20px] relative"}>
                    <div className={"xl:flex justify-between"}>
                        <div>
                            <article className={"text-gray-5 text-[13px] mb-2"}>Обращение
                                N {s.number} от {s.createdAt}</article>
                            <h2 className={"first-letter:uppercase font-bold text-[22px] text-gray-800 mb-[5px]"}>{s.article}</h2>
                            <p className={"first-letter:uppercase className={\"text-[14px]\"}"}>{s.description}</p>
                        </div>
                        <div className={"flex flex-col w-[45%] justify-start"}>
                            <div className={"mb-2"}>{s.state}</div>
                            <div className={"mb-2"}>
                                <small className={"text-gray-6"}>Крайний срок</small>
                                <div className={"text-[14px]"}>{s.deadline}</div>
                            </div>
                            <div>
                                <small className={"text-gray-6"}>Решение</small>
                                <div className={"text-[14px]"}>{s.solution}</div>
                            </div>
                        </div>
                    </div>
                    <CollapsibleTrigger
                        className={"absolute bottom-[-30px] left-[50%] bg-sky-100 w-[40px] h-[30px] rounded-b-[50px] flex justify-center items-center"}>
                        <IconChevronDown width={"20px"}/>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                        <div className={"mt-2 text-[14px]"}>
                            <small className={"text-gray-6"}>Дополнительная информация</small>
                            <div>{s.service}</div>
                            <div>{s.serviceType}</div>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            </div>
        </section>
    );
};

export default Statement;