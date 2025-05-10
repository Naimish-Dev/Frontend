'use client';
import React, { useState } from 'react';
import Input from '@/components/ui/input';
import Title from '@/components/ui/title';
import Card from '@/components/ui/card';
import Container from '@/components/ui/container';
import ExploreBtn from '@/components/ui/explorebtn';

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
        <div className="">
          <ExploreBtn className="bg-blue-btn text-white! hover:text-white  mx-auto mb-4 px-4 lg:px-7 py-1.5 lg:py-3 text-14 lg:text-20 border-none shadow-none">
            Ambassador Program{' '}
          </ExploreBtn>
          <Title className="flex justify-center items-center text-center ">
            You need Mercenaries,
            <br className="hidden md:block" />
            <span className=" text-blue-tx">
              not <br className="block md:hidden" /> cheerleaders
            </span>
          </Title>
        </div>
        <Card className="rounded-2xl ">
          <h2 className="text-[#306400] text-center">Still trying to find ambassadors on zealy? </h2>
          <p className='text-20 text-center'>
            You don’t need more airdrop hunters, You need people who will fight for your project
            like it’s their own bag.
          </p>
          <Card className="bg-[#FFF9F1] lg:p-18px mt-8">
            <h3 className="text-[#306400] mb-2 text-24! font-semibold! text-center">OUR VETTING STACK</h3>
            <div>
              <h4>{` Tweet Scout score > 200`}</h4>
              <p className='text-16'>We don't care about follower count. We care about followers who care.</p>
            </div>
          </Card>
        </Card>
      </Container>
    </div>
  );
}
