
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Phone, Mail, MapPin, Search, Plus, ChevronDown, User, UserPlus, Star, Clock } from "lucide-react";

// Types for our data models
interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  jobsCompleted: number;
  totalSpent: number;
  lastServiceDate: string;
  rating: number;
  notes?: string;
}

const ClientSettings: React.FC = () => {
  // Sample data for clients
  const [clients, setClients] = useState<Client[]>([
    {
      id: "1",
      name: "Sarah Johnson",
      email: "sarah.johnson@example.com",
      phone: "(123) 456-7890",
      address: "123 Oak Street, Colombo",
      jobsCompleted: 5,
      totalSpent: 750.00,
      lastServiceDate: "April 10, 2025",
      rating: 5,
      notes: "Prefers appointments in the morning"
    },
    {
      id: "2",
      name: "Michael Smith",
      email: "michael.smith@example.com",
      phone: "(234) 567-8901",
      address: "456 Pine Avenue, Colombo",
      jobsCompleted: 3,
      totalSpent: 425.00,
      lastServiceDate: "April 5, 2025",
      rating: 4,
      notes: "Has a dog, please call before arriving"
    },
    {
      id: "3",
      name: "Emily Davis",
      email: "emily.davis@example.com",
      phone: "(345) 678-9012",
      address: "789 Maple Road, Kandy",
      jobsCompleted: 1,
      totalSpent: 200.00,
      lastServiceDate: "March 28, 2025",
      rating: 5,
      notes: ""
    },
    {
      id: "4",
      name: "Robert Brown",
      email: "robert.brown@example.com",
      phone: "(456) 789-0123",
      address: "321 Elm Drive, Galle",
      jobsCompleted: 2,
      totalSpent: 350.00,
      lastServiceDate: "March 20, 2025",
      rating: 4,
      notes: "Prefers text messages for communication"
    },
    {
      id: "5",
      name: "Jennifer Lee",
      email: "jennifer.lee@example.com",
      phone: "(567) 890-1234",
      address: "654 Birch Lane, Negombo",
      jobsCompleted: 4,
      totalSpent: 600.00,
      lastServiceDate: "April 1, 2025",
      rating: 5,
      notes: "Allergic to certain paint types"
    }
  ]);
  
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedClientId, setExpandedClientId] = useState<string | null>(null);
  
  // Filter clients based on search query
  const filteredClients = clients.filter(client => {
    return client.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
           client.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
           client.phone.includes(searchQuery) ||
           client.address.toLowerCase().includes(searchQuery.toLowerCase());
  });
  
  // New client form state
  const [newClient, setNewClient] = useState<Omit<Client, 'id' | 'jobsCompleted' | 'totalSpent' | 'lastServiceDate' | 'rating'>>({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });
  
  // Handler for adding a new client
  const handleAddClient = () => {
    const id = Math.random().toString(36).substring(2, 9);
    setClients([
      ...clients, 
      { 
        ...newClient, 
        id,
        jobsCompleted: 0,
        totalSpent: 0,
        lastServiceDate: "N/A",
        rating: 0
      }
    ]);
    
    // Reset form
    setNewClient({
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: ""
    });
  };
  
  // Handler for toggling client details
  const toggleClientDetails = (clientId: string) => {
    if (expandedClientId === clientId) {
      setExpandedClientId(null);
    } else {
      setExpandedClientId(clientId);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-y-auto p-0 md:p-0">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-1">Client Settings</h1>
            <p className="text-gray-600">
              Manage your clients and their information
            </p>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Client List</h2>
              
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search clients..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-[#14B22D] hover:bg-green-700">
                      <UserPlus className="mr-1 h-4 w-4" /> Add Client
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[500px]">
                    <DialogHeader>
                      <DialogTitle>Add New Client</DialogTitle>
                      <DialogDescription>
                        Enter the details for the new client.
                      </DialogDescription>
                    </DialogHeader>
                    
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Full name"
                          className="col-span-3"
                          value={newClient.name}
                          onChange={(e) => setNewClient({...newClient, name: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Email address"
                          className="col-span-3"
                          value={newClient.email}
                          onChange={(e) => setNewClient({...newClient, email: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          placeholder="Phone number"
                          className="col-span-3"
                          value={newClient.phone}
                          onChange={(e) => setNewClient({...newClient, phone: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="address" className="text-right">
                          Address
                        </Label>
                        <Input
                          id="address"
                          placeholder="Full address"
                          className="col-span-3"
                          value={newClient.address}
                          onChange={(e) => setNewClient({...newClient, address: e.target.value})}
                        />
                      </div>
                      
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="notes" className="text-right">
                          Notes
                        </Label>
                        <Input
                          id="notes"
                          placeholder="Additional notes"
                          className="col-span-3"
                          value={newClient.notes || ""}
                          onChange={(e) => setNewClient({...newClient, notes: e.target.value})}
                        />
                      </div>
                    </div>
                    
                    <DialogFooter>
                      <Button 
                        className="bg-[#14B22D] hover:bg-green-700" 
                        onClick={handleAddClient}
                      >
                        Add Client
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
            
            {filteredClients.length > 0 ? (
              <div className="space-y-4">
                {filteredClients.map((client) => (
                  <Collapsible
                    key={client.id}
                    open={expandedClientId === client.id}
                    onOpenChange={() => toggleClientDetails(client.id)}
                    className="border rounded-md"
                  >
                    <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50">
                      <div className="flex items-center">
                        <div className="bg-[#14B22D] text-white p-2 rounded-full mr-4">
                          <User className="h-6 w-6" />
                        </div>
                        <div>
                          <h3 className="font-medium text-lg">{client.name}</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <Mail className="h-3 w-3 mr-1" /> {client.email}
                          </div>
                        </div>
                      </div>
                      
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <ChevronDown className={`h-4 w-4 transition-transform ${
                            expandedClientId === client.id ? "transform rotate-180" : ""
                          }`} />
                        </Button>
                      </CollapsibleTrigger>
                    </div>
                    
                    <CollapsibleContent>
                      <div className="px-4 pb-4 pt-1 border-t">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Contact Information</h4>
                            <div className="space-y-2">
                              <div className="flex items-center text-sm">
                                <Phone className="h-4 w-4 mr-2 text-[#14B22D]" />
                                {client.phone}
                              </div>
                              <div className="flex items-center text-sm">
                                <MapPin className="h-4 w-4 mr-2 text-[#14B22D]" />
                                {client.address}
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium text-gray-500 mb-2">Client Details</h4>
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Jobs Completed</span>
                                <div className="flex items-center">
                                  <span className="font-medium">{client.jobsCompleted}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Total Spent</span>
                                <div className="flex items-center">
                                  <span className="font-medium">${client.totalSpent.toFixed(2)}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Last Service</span>
                                <div className="flex items-center">
                                  <Clock className="h-3 w-3 mr-1 text-gray-400" />
                                  <span className="text-sm">{client.lastServiceDate}</span>
                                </div>
                              </div>
                              
                              <div className="flex flex-col">
                                <span className="text-xs text-gray-500">Rating</span>
                                <div className="flex items-center">
                                  <Star className="h-3 w-3 mr-1 text-yellow-500" />
                                  <span className="text-sm">{client.rating.toFixed(1)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {client.notes && (
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-500 mb-1">Notes</h4>
                            <p className="text-sm bg-gray-50 p-2 rounded">{client.notes}</p>
                          </div>
                        )}
                        
                        <div className="mt-4 flex justify-end gap-2">
                          <Button variant="outline" size="sm">Edit</Button>
                          <Button variant="outline" size="sm" className="text-[#14B22D] border-[#14B22D]">
                            Schedule Job
                          </Button>
                        </div>
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                ))}
              </div>
            ) : (
              <div className="rounded-md border bg-white p-8 text-center">
                <UserPlus className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-4 text-lg font-medium">No clients found</h3>
                <p className="mt-2 text-sm text-gray-500">
                  {searchQuery ? 
                    "No clients match your search criteria. Try a different search term." : 
                    "You haven't added any clients yet. Add your first client to get started."}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientSettings;
