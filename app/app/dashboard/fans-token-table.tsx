"use client";

import * as React from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ArrowUpDown, ChevronDown, MoreHorizontal } from "lucide-react";

import { Button } from "-/components/ui/button";
import { Checkbox } from "-/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "-/components/ui/dropdown-menu";
import { Input } from "-/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "-/components/ui/table";
import { FansTokenFilterType } from "./token-type-filter";

const data: FanToken[] = [
  {
    id: 1,
    name: "Farcaster Network",
    symbol: "FAN TOKEN",
    price: 2037.46,
    change24h: 0.19,
    changeAllTime: 195.84,
    volume: 371325496.72,
    marketCap: 205843277.84,
    totalSupply: 101029.4,
  },
  {
    id: 2,
    name: "/airstack",
    symbol: "FAN TOKEN",
    price: 10823.8,
    change24h: 1.15,
    changeAllTime: 133.3,
    volume: 53234302.32,
    marketCap: 27040971.19,
    totalSupply: 2498.29,
  },
  {
    id: 3,
    name: "wake",
    symbol: "@wake.eth",
    price: 829.46,
    change24h: 0.59,
    changeAllTime: 97.49,
    volume: 22803412.28,
    marketCap: 13400341.61,
    totalSupply: 16155.44,
  },
  {
    id: 4,
    name: "Dan Romero",
    symbol: "@dwr.eth",
    price: 340.73,
    change24h: 0.27,
    changeAllTime: 11.8,
    volume: 55584701.72,
    marketCap: 12966496.83,
    totalSupply: 38054.99,
  },
  {
    id: 5,
    name: "/success",
    symbol: "FAN TOKEN",
    price: 7440.82,
    change24h: 3.44,
    changeAllTime: 313.38,
    volume: 7696167.73,
    marketCap: 10259052.31,
    totalSupply: 1378.75,
  },
  {
    id: 6,
    name: "Jason Goldberg",
    symbol: "@betashop.eth",
    price: 359.08,
    change24h: 1.03,
    changeAllTime: 89.35,
    volume: 23495789.88,
    marketCap: 9590009.95,
    totalSupply: 26706.85,
  },
  {
    id: 7,
    name: "/memes",
    symbol: "FAN TOKEN",
    price: 128.53,
    change24h: 0.66,
    changeAllTime: 157.07,
    volume: 13693963.02,
    marketCap: 7976266.3,
    totalSupply: 62055.33,
  },
  {
    id: 8,
    name: "agusti",
    symbol: "@bleu.eth",
    price: 3908.49,
    change24h: 0.18,
    changeAllTime: 19.32,
    volume: 21549908.46,
    marketCap: 6121794.48,
    totalSupply: 1566.28,
  },
];

export type FanToken = {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  changeAllTime: number;
  volume: number;
  marketCap: number;
  totalSupply: number;
};

export const columns: ColumnDef<FanToken>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
    cell: ({ row }) => <div>{row.getValue("symbol")}</div>,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Price (MOXIE)
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = price.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
      return <div className="text-right font-medium">{formatted} MOXIE</div>;
    },
  },

  {
    accessorKey: "change24h",
    header: "24h Change",
    cell: ({ row }) => {
      const change = parseFloat(row.getValue("change24h"));
      return (
        <div className={change >= 0 ? "text-green-600" : "text-red-600"}>
          {change.toFixed(2)}%
        </div>
      );
    },
  },
  {
    accessorKey: "changeAllTime",
    header: "All Time Change",
    cell: ({ row }) => {
      const change = parseFloat(row.getValue("changeAllTime"));
      return (
        <div className={change >= 0 ? "text-green-600" : "text-red-600"}>
          {change.toFixed(2)}%
        </div>
      );
    },
  },
  {
    accessorKey: "volume",
    header: "Volume (MOXIE)",
    cell: ({ row }) => {
      const volume = parseFloat(row.getValue("volume"));
      return <div className="text-right">{volume.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: "marketCap",
    header: "Market Cap (MOXIE)",
    cell: ({ row }) => {
      const marketCap = parseFloat(row.getValue("marketCap"));
      return <div className="text-right">{marketCap.toLocaleString()}</div>;
    },
  },
  {
    accessorKey: "totalSupply",
    header: "Total Supply",
    cell: ({ row }) => {
      const totalSupply = parseFloat(row.getValue("totalSupply"));
      return <div className="text-right">{totalSupply.toLocaleString()}</div>;
    },
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const fanToken = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(fanToken.id.toString())
              }
            >
              Copy token ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View token details</DropdownMenuItem>
            <DropdownMenuItem>Buy / Sell token</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

export function FansTokenTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <FansTokenFilterType />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                );
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
