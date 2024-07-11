"use client";
import React, { useState } from "react";
import { Input } from "@/app/components/shadcn-ui/input";
import { Button } from "@/app/components/shadcn-ui/button";
import { Switch } from "@/app/components/shadcn-ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/app/components/shadcn-ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/app/components/shadcn-ui/select";

// Define the structure for an invitation
interface Invitation {
  email: string;
  experienceId: string;
  event: string;
  contractOwner: string;
  usedInstances: string;
  expireIn: string;
}

// Sample data for invitations
const sampleInvitations: Invitation[] = [
  {
    email: "ray_crowley@trendmicro.com",
    experienceId: "ext-user",
    event: "-",
    contractOwner: "callum_fiekert@trendmicro.com",
    usedInstances: "0/3",
    expireIn: "4 months ago",
  },
  {
    email: "callum_fiekert@trendmicro.com",
    experienceId: "ext-user",
    event: "-",
    contractOwner: "callum_fiekert@trendmicro.com",
    usedInstances: "0/3",
    expireIn: "4 months ago",
  },
  {
    email: "callum_fiekert@trendmicro.com",
    experienceId: "ext-user",
    event: "-",
    contractOwner: "callum_fiekert@trendmicro.com",
    usedInstances: "0/3",
    expireIn: "3 months ago",
  },
];

export default function Invitations() {
  const [showMine, setShowMine] = useState(false);
  const [activeTab, setActiveTab] = useState("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState("10");

  // Filter invitations based on search query and active tab
  const filteredInvitations = sampleInvitations.filter((invitation) =>
    Object.values(invitation).some((value) =>
      value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Invitations</h1>
        <div className="flex items-center space-x-4">
          <span className="text-sm">Show Mine</span>
          <Switch checked={showMine} onCheckedChange={setShowMine} />
          <Button
            variant={activeTab === "active" ? "default" : "outline"}
            onClick={() => setActiveTab("active")}
          >
            Active
          </Button>
          <Button
            variant={activeTab === "expired" ? "default" : "outline"}
            onClick={() => setActiveTab("expired")}
          >
            Expired
          </Button>
        </div>
      </div>

      <div className="flex justify-between items-center mb-4">
        <Input
          className="max-w-sm"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
            setSearchQuery(e.target.value)
          }
        />
        <Button variant="outline">Refresh</Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Invitation email</TableHead>
            <TableHead>Experience Id</TableHead>
            <TableHead>Event</TableHead>
            <TableHead>Contract Owner</TableHead>
            <TableHead>Used Instances</TableHead>
            <TableHead>Expire In</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredInvitations.map((invitation, index) => (
            <TableRow key={index}>
              <TableCell>{invitation.email}</TableCell>
              <TableCell>{invitation.experienceId}</TableCell>
              <TableCell>{invitation.event}</TableCell>
              <TableCell>{invitation.contractOwner}</TableCell>
              <TableCell>{invitation.usedInstances}</TableCell>
              <TableCell>{invitation.expireIn}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-4 flex justify-between items-center">
        <Select value={rowsPerPage} onValueChange={setRowsPerPage}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Rows per page" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="10">10 rows per page</SelectItem>
            <SelectItem value="20">20 rows per page</SelectItem>
            <SelectItem value="50">50 rows per page</SelectItem>
          </SelectContent>
        </Select>
        {/* Add pagination component here if needed */}
      </div>
    </div>
  );
}
