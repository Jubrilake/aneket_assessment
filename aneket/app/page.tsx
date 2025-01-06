import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { InsightCards } from "./layout/InsightCards";

interface User {
  id: string; // or number if applicable
  name: string;
  email: string;
  company: {
    name: string;
  };
}

async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) {
    throw new Error("Failed to fetch users");
  }
  return res.json();
}

export default async function Home() {
  const users = await getUsers();

  const totalUsers = users.length;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const totalCompanies = new Set(users.map((user: any) => user.company.name))
    .size;
  // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  const totalCities = new Set(users.map((user: any) => user.address.city)).size;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">User Directory</h1>

      <InsightCards
        totalUsers={totalUsers}
        totalCompanies={totalCompanies}
        totalCities={totalCities}
      />

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {users.map((user: User) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.company.name}</TableCell>
              <TableCell>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/user/${user.id}`}>View Details</Link>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
