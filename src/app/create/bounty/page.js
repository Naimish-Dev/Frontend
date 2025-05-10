'use client';
import React, { useState } from 'react';
import Input from '@/components/ui/input';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';

export default function pages() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <div className="bg-[#FDF4E9] relative pt-[56px] pb-10 bg_square bg_square_bottom overflow-x-hidden">
      <Container>
        <div className="mb-6 ml-6 lg:ml-0 lg:mb-9">
          <Title className="text-left lg:text-center ">Create Bounty</Title>
          <p className="text-[#00000073] font-normal block lg:hidden">
            Fill out the form below and we’ll get back to you as soon as we can.
          </p>
        </div>
        <Card className="border-0 rounded-2xl lg:rounded-4xl">
          <form className="p-4">
            <div className="space-y-4">
              <Input
                label="Name"
                name="name"
                placeholder="Enter your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                label="Email Address"
                name="email"
                placeholder="Enter your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <Input
                label="Subject"
                name="subject"
                placeholder="Enter Subject"
                value={form.name}
                onChange={handleChange}
                required
              />
              <Input
                type="textarea"
                label="Write your message here"
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
              />
              <button className="bg-[#813DD4] text-center text-white w-full py-2 text-20 font-bold rounded mt-4 cursor-pointer">
                Submit
              </button>
            </div>
          </form>

          <div>
            <p className="text-center text-xs text-[#0000004D] hidden lg:block">
              By submitting this form, you agree to our Terms & Conditions and Privacy Policy.
            </p>
          </div>
        </Card>
      </Container>
    </div>
  );
}
