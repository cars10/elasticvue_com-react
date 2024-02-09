import type { Metadata } from 'next'
import Header from '@/components/layout/Header/Header'
import Footer from '@/components/layout/Footer/Footer'
import '../styles/globals.css'
import React from 'react'

export const metadata: Metadata = {
  title: 'Elasticvue',
  description:
    'Elasticvue is a free and open-source elasticsearch gui for the browser',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
