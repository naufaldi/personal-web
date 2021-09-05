import Layout from '@/components/Layout/Index';
import React from 'react';
import Seo from '@/components/Seo';
import Hero from '@/components/Project/Hero';
import List from '@/components/Project/List';

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
