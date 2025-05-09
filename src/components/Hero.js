import React from 'react';
import Container from './ui/container';
import Title from './ui/title';
import Card from './ui/card';
import CountiesCard from './bounties-card';
import Filter from './Filter';

export default function Hero() {
  return (
    <div>
      <div className="bg-[#FDF4E9] relative pt-[56px] bg_square">
        <Container>
          <div className="mb-6 lg:mb-9">
            <Title>Bounties</Title>
          </div>
          <Card>
            <div>
              <div className="mb-4 lg:mb-7">
                <Filter />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6">
                <CountiesCard />
                <CountiesCard />
                <CountiesCard />
                <CountiesCard />
                <CountiesCard />
              </div>
            </div>
          </Card>
        </Container>
      </div>
    </div>
  );
}
