import React from "react";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function SettingsPage() {
  return (
    <div className="max-w-5xl w-full p-2 text-white">
      <h1 className="text-3xl font-bold mb-8">Settings</h1>

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-800 bg-[#151e2e]">
            <h2 className="text-sm font-semibold text-gray-200">General</h2>
          </div>
          <div className="p-6 space-y-5 bg-[#172033]/50">
            <div className="space-y-2">
              <Label htmlFor="platform-name" className="text-xs text-gray-400">Platform Name</Label>
              <Input
                id="platform-name"
                defaultValue="CareerSprint"
                className="bg-[#0f172a] border-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="support-email" className="text-xs text-gray-400">Support Email</Label>
              <Input
                id="support-email"
                defaultValue="support@careersprint.ae"
                className="bg-[#0f172a] border-gray-800 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="currency" className="text-xs text-gray-400">Currency</Label>
              <Select defaultValue="aed">
                <SelectTrigger id="currency" className="bg-[#0f172a] border-gray-800 text-white h-10 w-full">
                  <SelectValue placeholder="Select Currency" />
                </SelectTrigger>
                <SelectContent className="bg-[#1f2937] text-white border-gray-700">
                  <SelectItem value="aed">AED</SelectItem>
                  <SelectItem value="usd">USD</SelectItem>
                  <SelectItem value="eur">EUR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timezone" className="text-xs text-gray-400">Timezone</Label>
              <Select defaultValue="dubai">
                <SelectTrigger id="timezone" className="bg-[#0f172a] border-gray-800 text-white h-10 w-full">
                  <SelectValue placeholder="Select Timezone" />
                </SelectTrigger>
                <SelectContent className="bg-[#1f2937] text-white border-gray-700">
                  <SelectItem value="dubai">Asia/Dubai (UTC+4)</SelectItem>
                  <SelectItem value="utc">UTC</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Localization & Preferences */}
        <div className="bg-[#111827] border border-gray-800 rounded-xl overflow-hidden shadow-sm">
          <div className="px-6 py-4 border-b border-gray-800 bg-[#151e2e]">
            <h2 className="text-sm font-semibold text-gray-200">Localization & Preferences</h2>
          </div>
          <div className="p-6 space-y-6 bg-[#172033]/50">
            <div className="space-y-2">
              <Label htmlFor="language" className="text-xs text-gray-400">Primary Language</Label>
              <Select defaultValue="en">
                <SelectTrigger id="language" className="bg-[#0f172a] border-gray-800 text-white h-10 w-full">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent className="bg-[#1f2937] text-white border-gray-700">
                  <SelectItem value="en">English (EN)</SelectItem>
                  <SelectItem value="ar">Arabic (AR)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between py-1">
              <div className="space-y-1">
                <Label htmlFor="rtl-support" className="text-sm font-medium text-gray-300">RTL Support (Arabic)</Label>
                <p className="text-xs text-gray-500">Enable right-to-left layout for Arabic</p>
              </div>
              <Switch id="rtl-support" defaultChecked className="data-[state=checked]:bg-indigo-500" />
            </div>
            
            <div className="w-full h-px bg-gray-800/50"></div>

            <div className="flex items-center justify-between py-1">
              <div className="space-y-1">
                <Label htmlFor="email-notifications" className="text-sm font-medium text-gray-300">Email Notifications</Label>
                <p className="text-xs text-gray-500">Send transactional emails</p>
              </div>
              <Switch id="email-notifications" defaultChecked className="data-[state=checked]:bg-indigo-500" />
            </div>

            <div className="w-full h-px bg-gray-800/50"></div>

            <div className="flex items-center justify-between py-1">
              <div className="space-y-1">
                <Label htmlFor="auto-matching" className="text-sm font-medium text-gray-300">AI Auto-Matching</Label>
                <p className="text-xs text-gray-500">Auto-run matching when jobs are posted</p>
              </div>
              <Switch id="auto-matching" defaultChecked className="data-[state=checked]:bg-indigo-500" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
