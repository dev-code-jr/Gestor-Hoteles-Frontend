import { useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { getUser } from "../../services/api";

export const useTableData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUser();
            const users = response.data.registros;
            setData(users);
        };

        fetchData();
    }, []);

    const columns = [
        { header: "ID", accessorKey: "_id" },
        { header: "Nombre", accessorKey: "nombre" },
        { header: "Apellido", accessorKey: "apellido" },
        { header: "Email", accessorKey: "email" },
        { header: "Foto", accessorKey: "foto" }
    ];

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
    });

    return { table, flexRender };
};
