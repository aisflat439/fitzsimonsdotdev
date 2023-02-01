---
date: "2023-01-31"
description: "A bunch of examples of tables with React and Tailwind"
layout: ../../layouts/BlogLayout.astro
revisions: 1
title: "Tables are hard in lots of ways"
updated: "2023-01-31"
---

Mostly, tasks on the front end are either create a form that does something or create a table that displays something. Setting aside for a moment that really, that's now how people want data presented to them it's a task you're bound to get as a developer. This post serves to note all the table experiences that I've gathered along the way.

### Simplest Example

Let's start with some reasonable sample data.

```js
// list of comic book titles
const comicData = [
  {
    id: 1,
    name: "Spider-man",
    publisher: "Marvel",
    initialPublishDate: "1962-08-01",
  },
  {
    id: 2,
    name: "Miles Morales: Spider-man",
    publisher: "Marvel",
    initialPublishDate: "2011-10-01",
  },
  {
    id: 3,
    name: "Saga",
    publisher: "Image",
    initialPublishDate: "2012-08-01",
  },
  {
    id: 4,
    name: "What's the Furthest Place from Here?",
    publisher: "Image",
    initialPublishDate: "2019-08-01",
  },
];
```

We can set up some columns for our table.

```js
const columns: ColumnDef<TComicBook>[] = [
  {
    accessorKey: "name",
    cell: (info) => info.getValue(),
    header: "Comic Book Name",
  },
  {
    accessorKey: "publisher",
    cell: (info) => info.getValue(),
    header: "Publisher",
  },
  {
    accessorKey: "initialPublishDate",
    cell: (info) =>
      new Date(info.getValue()).toLocaleDateString("en-US", {
        month: "long",
        year: "numeric",
      }),
    header: "Comic Book Name",
  },
];
```

Now using TanStack Table we can create a table with the following code.

```js
const table = useReactTable({
  data,
  columns,
  getCoreRowModel: getCoreRowModel(),
});
```

We'll fancy it up a bit with Tailwind.

```js
<table className="table border-collapse border border-slate-500">
  <thead>
    {table.getHeaderGroups().map((headerGroup) => (
      <tr key={headerGroup.id}>
        {headerGroup.headers.map((header) => (
          <th className="border border-slate-600 p-4" key={header.id}>
            {flexRender(header.column.columnDef.header, header.getContext())}
          </th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody>
    {table.getRowModel().rows.map((row, index) => (
      <tr key={row.id} className={`border ${index % 2 && "bg-gray-200"}`}>
        {row.getVisibleCells().map((cell) => (
          <td className="border border-slate-600 p-4" key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
```

If you haven't seen headless tables rendered the above might look weird. The neat thing is that you are in complete control of the tables style. This saves so many headaches that sneak up on you when you pick a table library.

There's a couple fun table things that are worth noticing here. For styling, `border-collapse` comes in handy when styling tables. This keeps you from having to style the borders on every cell. If you're not used to styling things, this is one you'll want to use. The other is that when we want to do a data transformation we can do it in the column definition. This keeps logic for presentation in one place. It's very easy to have tables that get out of hand with logic in the wrong place.

### Sorting
