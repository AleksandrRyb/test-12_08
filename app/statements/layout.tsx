export default function Layout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
       <main className={"xl:px-[150px]"}>{children}</main>
    );
}
