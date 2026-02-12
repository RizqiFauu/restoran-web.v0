"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Send, CheckCircle2 } from "lucide-react"

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center gap-4 py-12 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h4 className="font-heading text-lg font-semibold text-foreground">
          Message sent!
        </h4>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thank you for reaching out. Our team will review your inquiry and get
          back to you within 24 hours.
        </p>
        <Button
          variant="outline"
          className="mt-2 rounded-xl bg-transparent"
          onClick={() => setSubmitted(false)}
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="firstName" className="text-sm font-medium text-foreground">
            First Name
          </Label>
          <Input
            id="firstName"
            required
            placeholder="John"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="lastName" className="text-sm font-medium text-foreground">
            Last Name
          </Label>
          <Input
            id="lastName"
            required
            placeholder="Smith"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          required
          placeholder="john@company.com"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="company" className="text-sm font-medium text-foreground">
          Company
        </Label>
        <Input
          id="company"
          placeholder="Your company name"
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="service" className="text-sm font-medium text-foreground">
          Service of Interest
        </Label>
        <Select>
          <SelectTrigger id="service" className="rounded-xl">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="engineering">Engineering & Design</SelectItem>
            <SelectItem value="technology">Technology Consulting</SelectItem>
            <SelectItem value="project-management">
              Project Management
            </SelectItem>
            <SelectItem value="quality">Quality Assurance</SelectItem>
            <SelectItem value="innovation">Innovation Lab</SelectItem>
            <SelectItem value="infrastructure">
              Infrastructure Solutions
            </SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <Label htmlFor="message" className="text-sm font-medium text-foreground">
          Message
        </Label>
        <Textarea
          id="message"
          required
          rows={4}
          placeholder="Tell us about your project..."
          className="rounded-xl resize-none"
        />
      </div>
      <Button
        type="submit"
        size="lg"
        className="mt-2 rounded-xl font-medium gap-2"
      >
        Send Message
        <Send className="h-4 w-4" />
      </Button>
    </form>
  )
}
