
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
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Plus, Search, User } from "lucide-react";
import { format } from "date-fns";

// Types for our data models
interface Job {
  id: string;
  date: Date;
  timeSlot: string;
  clientName: string;
  serviceType: string;
  location: string;
  status: "scheduled" | "completed" | "cancelled";
  notes?: string;
}

const ScheduleJobs: React.FC = () => {
  // Sample data for scheduled jobs
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: "1",
      date: new Date(2025, 3, 16), // April 16, 2025
      timeSlot: "9:00 AM - 11:00 AM",
      clientName: "Sarah Johnson",
      serviceType: "Plumbing Repair",
      location: "123 Oak Street",
      status: "scheduled",
      notes: "Leaking faucet in kitchen and bathroom"
    },
    {
      id: "2",
      date: new Date(2025, 3, 16), // April 16, 2025
      timeSlot: "1:00 PM - 3:00 PM",
      clientName: "Michael Smith",
      serviceType: "Electrical Wiring",
      location: "456 Pine Avenue",
      status: "scheduled",
      notes: "Install new ceiling fan in living room"
    },
    {
      id: "3",
      date: new Date(2025, 3, 17), // April 17, 2025
      timeSlot: "10:00 AM - 12:00 PM",
      clientName: "Emily Davis",
      serviceType: "Bathroom Renovation",
      location: "789 Maple Road",
      status: "scheduled",
      notes: "Initial consultation for bathroom remodel"
    },
    {
      id: "4",
      date: new Date(2025, 3, 18), // April 18, 2025
      timeSlot: "9:00 AM - 11:00 AM",
      clientName: "Robert Brown",
      serviceType: "Carpentry",
      location: "321 Elm Drive",
      status: "scheduled",
      notes: "Fix broken cabinet doors"
    },
    {
      id: "5",
      date: new Date(2025, 3, 18), // April 18, 2025
      timeSlot: "2:00 PM - 4:00 PM",
      clientName: "Jennifer Lee",
      serviceType: "Painting",
      location: "654 Birch Lane",
      status: "scheduled",
      notes: "Paint living room and dining room walls"
    }
  ]);
  
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [searchQuery, setSearchQuery] = useState<string>("");
  
  // Filter jobs based on selected date and search query
  const filteredJobs = jobs.filter(job => {
    const sameDate = job.date.toDateString() === selectedDate.toDateString();
    const matchesSearch = job.clientName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         job.serviceType.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return sameDate && (searchQuery === "" || matchesSearch);
  });
  
  // New job form state
  const [newJob, setNewJob] = useState<Omit<Job, 'id'>>(
    {
      date: new Date(),
      timeSlot: "",
      clientName: "",
      serviceType: "",
      location: "",
      status: "scheduled",
      notes: ""
    }
  );
  
  // Handler for adding a new job
  const handleAddJob = () => {
    const id = Math.random().toString(36).substring(2, 9);
    setJobs([...jobs, { ...newJob, id }]);
    
    // Reset form
    setNewJob({
      date: new Date(),
      timeSlot: "",
      clientName: "",
      serviceType: "",
      location: "",
      status: "scheduled",
      notes: ""
    });
  };
  
  // Function to handle date navigation
  const navigateDate = (days: number) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + days);
    setSelectedDate(newDate);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-y-auto p-0 md:p-0">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Schedule Jobs</h1>
            <p className="text-gray-600">
              Manage your appointments and scheduled services
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <Tabs defaultValue="list" className="w-full">
              <div className="flex justify-between items-center mb-6">
                <TabsList>
                  <TabsTrigger value="list">List View</TabsTrigger>
                  <TabsTrigger value="calendar">Calendar View</TabsTrigger>
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
                  
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="bg-[#14B22D] hover:bg-green-700">
                        <Plus className="mr-1 h-4 w-4" /> Add Job
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Add New Job</DialogTitle>
                        <DialogDescription>
                          Enter the details for the new scheduled job.
                        </DialogDescription>
                      </DialogHeader>
                      
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="date" className="text-right">
                            Date
                          </Label>
                          <Input
                            id="date"
                            type="date"
                            className="col-span-3"
                            value={format(newJob.date, 'yyyy-MM-dd')}
                            onChange={(e) => {
                              const date = new Date(e.target.value);
                              setNewJob({...newJob, date});
                            }}
                          />
                        </div>
                        
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="time" className="text-right">
                            Time
                          </Label>
                          <Input
                            id="time"
                            placeholder="e.g. 9:00 AM - 11:00 AM"
                            className="col-span-3"
                            value={newJob.timeSlot}
                            onChange={(e) => setNewJob({...newJob, timeSlot: e.target.value})}
                          />
                        </div>
                        
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="client" className="text-right">
                            Client
                          </Label>
                          <Input
                            id="client"
                            placeholder="Client name"
                            className="col-span-3"
                            value={newJob.clientName}
                            onChange={(e) => setNewJob({...newJob, clientName: e.target.value})}
                          />
                        </div>
                        
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="service" className="text-right">
                            Service
                          </Label>
                          <Input
                            id="service"
                            placeholder="Service type"
                            className="col-span-3"
                            value={newJob.serviceType}
                            onChange={(e) => setNewJob({...newJob, serviceType: e.target.value})}
                          />
                        </div>
                        
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="location" className="text-right">
                            Location
                          </Label>
                          <Input
                            id="location"
                            placeholder="Address"
                            className="col-span-3"
                            value={newJob.location}
                            onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                          />
                        </div>
                        
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="notes" className="text-right">
                            Notes
                          </Label>
                          <Input
                            id="notes"
                            placeholder="Additional details"
                            className="col-span-3"
                            value={newJob.notes || ""}
                            onChange={(e) => setNewJob({...newJob, notes: e.target.value})}
                          />
                        </div>
                      </div>
                      
                      <DialogFooter>
                        <Button 
                          className="bg-[#14B22D] hover:bg-green-700" 
                          onClick={handleAddJob}
                        >
                          Add Job
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
              
              <TabsContent value="list" className="space-y-4">
                <div className="flex justify-between items-center mb-4">
                  <div className="flex items-center gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => navigateDate(-1)}
                    >
                      Previous
                    </Button>
                    
                    <div className="font-medium">
                      {format(selectedDate, 'MMMM d, yyyy')}
                    </div>
                    
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => navigateDate(1)}
                    >
                      Next
                    </Button>
                  </div>
                  
                  <div className="text-sm text-gray-500">
                    {filteredJobs.length} jobs scheduled
                  </div>
                </div>
                
                {filteredJobs.length > 0 ? (
                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Client</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Location</TableHead>
                          <TableHead>Notes</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredJobs.map((job) => (
                          <TableRow key={job.id}>
                            <TableCell className="font-medium">
                              <div className="flex items-center">
                                <Clock className="mr-2 h-4 w-4 text-[#14B22D]" />
                                {job.timeSlot}
                              </div>
                            </TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <User className="mr-2 h-4 w-4 text-[#14B22D]" />
                                {job.clientName}
                              </div>
                            </TableCell>
                            <TableCell>{job.serviceType}</TableCell>
                            <TableCell>
                              <div className="flex items-center">
                                <MapPin className="mr-2 h-4 w-4 text-[#14B22D]" />
                                {job.location}
                              </div>
                            </TableCell>
                            <TableCell className="max-w-[200px] truncate">
                              {job.notes}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="rounded-md border bg-white p-8 text-center">
                    <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                    <h3 className="mt-4 text-lg font-medium">No jobs scheduled</h3>
                    <p className="mt-2 text-sm text-gray-500">
                      No jobs are scheduled for this date. Use the "Add Job" button to create a new job.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="calendar">
                <div className="rounded-md border bg-white p-8 text-center">
                  <Calendar className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-4 text-lg font-medium">Calendar View</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Calendar implementation is coming soon. For now, please use the List View to manage your schedule.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleJobs;
