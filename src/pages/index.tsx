import React from 'react';

import Hero from '@/components/Homepage/Hero';
import Project from '@/components/Homepage/Project';
import Service from '@/components/Homepage/Service';
import Layout from '@/components/Layout/Index';
import Seo from '@/components/Seo';

export default function index() {
  return (
    <>
      <Seo templateTitle='Home' />
      <Layout>
        <Hero />
        <Project />
        <Service />
      </Layout>
    </>
  );
}
