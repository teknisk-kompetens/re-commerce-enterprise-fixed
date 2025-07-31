import Head from 'next/head'

export default function Scenes() {
  return (
    <>
      <Head>
        <title>Scenes - RE:Commerce Enterprise</title>
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Scene Builder</h1>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Create Dynamic Scenes</h2>
            <p className="text-gray-600 mb-6">
              Build interactive user experiences with our scene builder tool.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                <h3 className="text-lg font-medium mb-2">Drag & Drop Components</h3>
                <p className="text-gray-500">Add widgets and elements here</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Available Components</h3>
                <div className="space-y-2">
                  <div className="bg-blue-100 p-3 rounded cursor-pointer hover:bg-blue-200">
                    Text Widget
                  </div>
                  <div className="bg-green-100 p-3 rounded cursor-pointer hover:bg-green-200">
                    Chart Widget
                  </div>
                  <div className="bg-purple-100 p-3 rounded cursor-pointer hover:bg-purple-200">
                    Image Widget
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}