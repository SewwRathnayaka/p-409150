
import React, { useState } from "react";
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Check,
  ChevronDown,
  ClipboardList,
  Filter,
  Search,
  Timer,
  UserCheck,
  X,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

// Types for our data models
interface Job {
  id: string;
  clientName: string;
  serviceType: string;
  date: string;
  status: "pending" | "in-progress" | "completed" | "cancelled";
  payment: {
    amount: number;
    status: "paid" | "pending" | "overdue";
  };
  location: string;
  description: string;
}

const Jobs: React.FC = () => {
  // Sample data for jobs
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "JOB-1001",
      clientName: "Sarah Johnson",
      serviceType: "Plumbing Repair",
      date: "Apr 18, 2025",
      status: "pending",
      payment: {
        amount: 120,
        status: "pending"
      },
      location: "123 Oak Street, Colombo",
      description: "Fix leaking faucet in kitchen and bathroom"
    },
    {
      id: "JOB-1002",
      clientName: "Michael Smith",
      serviceType: "Electrical Wiring",
      date: "Apr 20, 2025",
      status: "in-progress",
      payment: {
        amount: 250,
        status: "pending"
      },
      location: "456 Pine Avenue, Colombo",
      description: "Install new ceiling fan in living room"
    },
    {
      id: "JOB-1003",
      clientName: "Emily Davis",
      serviceType: "Bathroom Renovation",
      date: "Apr 15, 2025",
      status: "completed",
      payment: {
        amount: 750,
        status: "paid"
      },
      location: "789 Maple Road, Kandy",
      description: "Complete bathroom remodel with new fixtures"
    },
    {
      id: "JOB-1004",
      clientName: "Robert Brown",
      serviceType: "Carpentry",
      date: "Apr 10, 2025",
      status: "completed",
      payment: {
        amount: 180,
        status: "paid"
      },
      location: "321 Elm Drive, Galle",
      description: "Fix broken cabinet doors in kitchen"
    },
    {
      id: "JOB-1005",
      clientName: "Jennifer Lee",
      serviceType: "Painting",
      date: "Apr 5, 2025",
      status: "cancelled",
      payment: {
        amount: 350,
        status: "overdue"
      },
      location: "654 Birch Lane, Negombo",
      description: "Paint living room and dining room walls - cancelled due to scheduling conflict"
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  
  // Filter jobs based on search query and status filter
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = 
      job.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.serviceType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.id.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === "all" || job.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });
  
  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-blue-100 text-blue-800";
      case "in-progress":
        return "bg-yellow-100 text-yellow-800";
      case "completed":
        return "bg-green-100 text-green-800";
      case "cancelled":
        return "bg-red-100 text-red-800";
      case "paid":
        return "bg-green-100 text-green-800";
      case "overdue":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Timer className="h-3 w-3 mr-1" />;
      case "in-progress":
        return <ClipboardList className="h-3 w-3 mr-1" />;
      case "completed":
        return <Check className="h-3 w-3 mr-1" />;
      case "cancelled":
        return <X className="h-3 w-3 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-y-auto p-0 md:p-0">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Jobs</h1>
            <p className="text-gray-600">
              Manage and track all your service jobs
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger 
                    value="all" 
                    onClick={() => setFilterStatus("all")}
                  >
                    All Jobs
                  </TabsTrigger>
                  <TabsTrigger 
                    value="pending" 
                    onClick={() => setFilterStatus("pending")}
                  >
                    Pending
                  </TabsTrigger>
                  <TabsTrigger 
                    value="in-progress" 
                    onClick={() => setFilterStatus("in-progress")}
                  >
                    In Progress
                  </TabsTrigger>
                  <TabsTrigger 
                    value="completed" 
                    onClick={() => setFilterStatus("completed")}
                  >
                    Completed
                  </TabsTrigger>
                </TabsList>
                
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search jobs..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" className="flex gap-1">
                        <Filter className="h-4 w-4" /> 
                        Filter 
                        <ChevronDown className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                      <DropdownMenuItem onClick={() => setFilterStatus("all")}>
                        All Status
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterStatus("pending")}>
                        Pending Jobs
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterStatus("in-progress")}>
                        In Progress
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterStatus("completed")}>
                        Completed
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setFilterStatus("cancelled")}>
                        Cancelled
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              
              <TabsContent value="all" className="space-y-4">
                {filteredJobs.length > 0 ? (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Job ID</TableHead>
                          <TableHead>Client</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Payment</TableHead>
                          <TableHead>Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredJobs.map((job) => (
                          <TableRow key={job.id}>
                            <TableCell className="font-medium">{job.id}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <UserCheck className="mr-2 h-4 w-4 text-[#14B22D]" />
                                {job.clientName}
                              </div>
                            </TableCell>
                            <TableCell>{job.serviceType}</TableCell>
                            <TableCell>{job.date}</TableCell>
                            <TableCell>
                              <Badge variant="outline" className={`flex w-fit items-center ${getStatusColor(job.status)}`}>
                                {getStatusIcon(job.status)}
                                <span className="capitalize">{job.status.replace("-", " ")}</span>
                              </Badge>
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-col">
                                <span className="font-medium">${job.payment.amount}</span>
                                <Badge variant="outline" className={`mt-1 w-fit text-xs ${getStatusColor(job.payment.status)}`}>
                                  {job.payment.status}
                                </Badge>
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex gap-2">
                                <Button variant="outline" size="sm">View</Button>
                                {job.status === "pending" && (
                                  <Button size="sm" className="bg-[#14B22D] hover:bg-green-700">
                                    Start Job
                                  </Button>
                                )}
                                {job.status === "in-progress" && (
                                  <Button size="sm" className="bg-[#14B22D] hover:bg-green-700">
                                    Complete Job
                                  </Button>
                                )}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="rounded-md border bg-white p-8 text-center">
                    <ClipboardList className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium">No jobs found</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      {searchQuery || filterStatus !== "all" ? 
                        "No jobs match your search criteria. Try a different search or filter." : 
                        "You don't have any jobs yet."}
                    </p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="pending" className="space-y-4">
                {/* Same content as "all" tab but with filtered jobs */}
              </TabsContent>
              
              <TabsContent value="in-progress" className="space-y-4">
                {/* Same content as "all" tab but with filtered jobs */}
              </TabsContent>
              
              <TabsContent value="completed" className="space-y-4">
                {/* Same content as "all" tab but with filtered jobs */}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
