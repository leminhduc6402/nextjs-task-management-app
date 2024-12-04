"use client";
import Header from "@/components/Header";
import { dataGridClassName, dataGridSxStyles } from "@/lib/utils";
import { useGetTeamQuery } from "@/state/api";
import {
    DataGrid,
    GridColDef,
    GridToolbarContainer,
    GridToolbarExport,
    GridToolbarFilterButton,
} from "@mui/x-data-grid";
import { useAppSelector } from "../redux";

const CustomToolbar = () => (
    <GridToolbarContainer className="toolbar flex gap-2">
        <GridToolbarFilterButton />
        <GridToolbarExport />
    </GridToolbarContainer>
);

const columns: GridColDef[] = [
    { field: "id", headerName: "Team ID", width: 100 },
    { field: "teamName", headerName: "Team Name", width: 150 },
    { field: "productOwnerUsername", headerName: "Product Owner", width: 150 },
    { field: "projectOwnerUsername", headerName: "Project Owner", width: 150 },
];

const Teams = () => {
    const { data: teams, isLoading, isError } = useGetTeamQuery();
    const isDarkMode = useAppSelector((state) => state.global.isDarkMode);
    if (isLoading) return <div>Loading...</div>;
    if (isError || !teams) return <div>Error fetching teams...</div>;

    return (
        <div className="flex w-full flex-col p-8">
            <Header name="Teams" />
            <div style={{ height: 650, width: "100%" }}>
                <DataGrid
                    rows={teams || []}
                    columns={columns}
                    getRowId={(row) => row.id}
                    pagination
                    className={dataGridClassName}
                    sx={dataGridSxStyles(isDarkMode)}
                    slots={{
                        toolbar: CustomToolbar,
                    }}
                />
            </div>
        </div>
    );
};

export default Teams;
