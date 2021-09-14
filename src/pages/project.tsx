import React from 'react';

import Layout from '@/components/Layout/Index';
import Hero from '@/components/Project/Hero';
import List from '@/components/Project/List';
import Seo from '@/components/Seo';

export default function project() {
  return (
    <>
      <Seo templateTitle='Project' />
      <Layout>
        <Hero />
        <List />
      </Layout>
    </>
  );
}
