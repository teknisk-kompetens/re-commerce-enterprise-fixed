import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
      <Head>
        <title>RE:Commerce Enterprise</title>
        <meta name="description" content="RE:Commerce Enterprise System" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Welcome to RE:Commerce Enterprise
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Hybrid dokumentation och auto-deployment med superkrafter
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
                <p className="text-gray-600">Manage your e-commerce operations</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Widgets</h2>
                <p className="text-gray-600">Customizable UI components</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Scenes</h2>
                <p className="text-gray-600">Build dynamic user experiences</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}