import React from 'react';

import Layout from '@/components/Layout/Index';
import Hero from '@/components/Resume/Hero';
import Qualification from '@/components/Resume/Qualification';
import Seo from '@/components/Seo';

export default function resume() {
  return (
    <>
      <Seo templateTitle='Resume' />
      <Layout>
        <Hero />
        <Qualification />
      </Layout>
    </>
  );
}
