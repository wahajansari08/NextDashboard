"use client"
 
import { ColumnDef } from "@tanstack/react-table"

export type Payment = {
    id:string;
    amount:number;
    username:string;
    email:string;
    status:"pending"|"processing"|"success"|"failed";
}
