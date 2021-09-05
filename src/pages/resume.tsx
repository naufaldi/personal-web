import Layout from '@/components/Layout/Index';
import Seo from '@/components/Seo';
import Hero from '@/components/Resume/Hero';
import React from 'react';
import Qualification from '@/components/Resume/Qualification';

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
