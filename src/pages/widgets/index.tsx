import Head from 'next/head'

export default function Widgets() {
  return (
    <>
      <Head>
        <title>Widgets - RE:Commerce Enterprise</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Widgets</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Sales Chart</h3>
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-500">Chart Placeholder</span>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Order #1234</span>
                  <span className="text-green-600">$99.99</span>
                </div>
                <div className="flex justify-between">
                  <span>Order #1235</span>
                  <span className="text-green-600">$149.99</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-4">User Activity</h3>
              <div className="h-32 bg-gray-100 rounded flex items-center justify-center">
                <span className="text-gray-500">Activity Feed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}