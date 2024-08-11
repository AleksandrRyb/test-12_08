import React from 'react';
import AppTable from "@/components/app-table";


const Statements = async () => {

    const getStatements = async () => {
        const res = await fetch("http://localhost:3000/api/statements")

        return res.json()
    }

    const statements = await getStatements();

    return (
        <section>
            <div className={"flex h-screen items-center justify-center"}>
                <AppTable statements={statements} />
            </div>
        </section>
    );
};

export default Statements;