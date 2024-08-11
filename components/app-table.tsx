"use client"

import React from 'react';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { IconAlertTriangleFilled } from "@tabler/icons-react";

import {Statement} from "@/types";
import AppPagination from "@/components/app-pagination";
import {useRouter} from "next/navigation";

const AppTable = ({statements}: { statements: Statement[] }) => {

    const router = useRouter();

    return (
        <div className={"w-[100%]"}>
            <Table className={"bg-white rounded rounded-b-[0px] min-w-[800px]"}>
                <TableHeader>
                    <TableRow>
                        <TableHead className="xl:w-[200px]">Тема</TableHead>
                        <TableHead className="px-0 text-left">Номер</TableHead>
                        <TableHead className="px-0 text-left">Дата создания</TableHead>
                        <TableHead className="px-0 text-left">Дата изменения</TableHead>
                        <TableHead className="px-0 text-left">Крайний срок</TableHead>
                        <TableHead className="text-left">Состояние</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className={"px-10"}>
                    {statements.map((s) => (
                        <TableRow onClick={() => router.push(`/statements/${s.id}`)} className={"cursor-pointer hover:bg-gray-3"} key={s.number}>
                            <TableCell className="xl:w-[50%] first-letter:uppercase font-bold text-blue-600">{s.article} {s.waitingForResponse && (
                                    <IconAlertTriangleFilled className={"ml-[7px] text-red-600 inline"} width={"15px"} />
                            )}
                            </TableCell>
                            <TableCell className="px-0 text-left">N {s.number}</TableCell>
                            <TableCell className="px-0 text-left">{s.createdAt}</TableCell>
                            <TableCell className="px-0 text-left">{s.updatedAt}</TableCell>
                            <TableCell className="px-0 text-left">{s.deadline}</TableCell>
                            <TableCell className="text-left">{s.state}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className={"w-full bg-white rounded-b py-[15px]"}>
                <AppPagination/>
            </div>
        </div>

    );
};

export default AppTable;