"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Edit2, Trash2 } from "lucide-react";

const candidatePlans = [
  { id: 1, name: "Starter", price: 99, credits: 50, subscribers: 284 },
  { id: 2, name: "Momentum", price: 249, credits: 150, subscribers: 631 },
  { id: 3, name: "Sprint", price: 499, credits: 400, subscribers: 631 },
];

const companyPlans = [
  { id: 1, name: "Starter", price: 199, credits: 50, subscribers: 284 },
  { id: 2, name: "Growth", price: 499, credits: 150, subscribers: 631 },
  { id: 3, name: "Sprint", price: 999, credits: 400, subscribers: 631 },
];

export default function SubscriptionsPage() {
  const [activeTab, setActiveTab] = useState("company");
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const PlanCard = ({ plan }: { plan: any }) => (
    <div className="bg-[#172033]/70 border border-gray-800 rounded-xl overflow-hidden flex flex-col p-5 h-[140px]">
      <div className="flex justify-between items-start mb-1">
        <h3 className="font-semibold text-white text-base">{plan.name}</h3>
        <div className="text-white font-semibold text-sm">
          <span className="text-gray-400 text-xs font-normal mr-1">AED</span> 
          {plan.price}
        </div>
      </div>
      <div className="text-gray-500 text-xs mb-auto">{plan.credits} credits</div>
      
      <div className="w-full h-px bg-gray-800 my-3"></div>
      
      <div className="flex justify-between items-center text-xs">
        <div>
          <span className="text-white font-medium">{plan.subscribers}</span> <span className="text-gray-500">subscribers</span>
        </div>
        <div className="flex gap-3 text-gray-500">
          <button onClick={() => setIsDialogOpen(true)} className="hover:text-indigo-400 transition-colors">
            <Edit2 className="w-3.5 h-3.5" />
          </button>
          <button className="hover:text-red-400 text-red-500/70 transition-colors">
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl w-full p-2 text-white">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Subscriptions</h1>
        <Button 
          onClick={() => setIsDialogOpen(true)}
          className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg px-4 h-9 font-medium"
        >
          Add plans
        </Button>
      </div>

      <Tabs defaultValue="company" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="bg-[#111827] border border-gray-800 rounded-lg p-1 h-10 mb-6 flex space-x-1">
          <TabsTrigger 
            value="candidate" 
            className="rounded-md px-4 py-1.5 text-sm data-[state=active]:bg-[#1e293b] data-[state=active]:text-white text-gray-400 hover:text-gray-200"
          >
            Candidate
          </TabsTrigger>
          <TabsTrigger 
            value="company" 
            className="rounded-md px-4 py-1.5 text-sm data-[state=active]:bg-[#1e293b] data-[state=active]:text-white text-gray-400 hover:text-gray-200"
          >
            Company
          </TabsTrigger>
        </TabsList>

        <TabsContent value="candidate" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {candidatePlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="company" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {companyPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} />
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-[#111827] border border-gray-800 text-white sm:max-w-[425px] p-0 overflow-hidden">
          <DialogHeader className="px-6 py-5 border-b border-gray-800/50">
            <DialogTitle className="text-xl font-semibold">Edit Plan</DialogTitle>
          </DialogHeader>
          <div className="px-6 py-5 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-gray-400">Plan Name</Label>
              <Input
                id="name"
                defaultValue="Starter"
                className="bg-[#172033] border-gray-800 text-white h-10"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-gray-400">Category</Label>
              <Select defaultValue="company">
                <SelectTrigger id="category" className="bg-[#172033] border-gray-800 text-white h-10 w-full">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent className="bg-[#1f2937] text-white border-gray-700">
                  <SelectItem value="company">Company</SelectItem>
                  <SelectItem value="candidate">Candidate</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="price" className="text-sm font-medium text-gray-400">Price (AED)</Label>
                <Input
                  id="price"
                  type="number"
                  defaultValue="199"
                  className="bg-[#172033] border-gray-800 text-white h-10"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="credits" className="text-sm font-medium text-gray-400">Credits</Label>
                <Input
                  id="credits"
                  type="number"
                  defaultValue="50"
                  className="bg-[#172033] border-gray-800 text-white h-10"
                />
              </div>
            </div>
          </div>
          <DialogFooter className="px-6 py-4 bg-transparent border-t-0 sm:justify-end gap-2 flex-row justify-end">
            <DialogClose >
              <Button type="button" variant="outline" className="bg-transparent border-gray-700 text-white hover:bg-gray-800 hover:text-white">
                Cancel
              </Button>
            </DialogClose>
            <Button type="button" className="bg-indigo-500 hover:bg-indigo-600 text-white">
              Save
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
