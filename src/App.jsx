import React, { useState } from 'react';
import { 
  HomeIcon, 
  ChartBarIcon, 
  UsersIcon, 
  Cog6ToothIcon, 
  BellIcon, 
  MagnifyingGlassIcon 
} from '@heroicons/react/24/outline';

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const stats = [
    { name: 'Total Revenue', value: '$45,231.89', change: '+20.1%', changeType: 'positive' },
    { name: 'Active Users', value: '2,314', change: '+15.3%', changeType: 'positive' },
    { name: 'Bounce Rate', value: '18.4%', change: '-2.1%', changeType: 'negative' },
    { name: 'Server Uptime', value: '99.9%', change: '+0.1%', changeType: 'positive' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans text-gray-900">
      
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 bg-white border-r border-gray-200 flex flex-col`}>
        <div className="h-16 flex items-center justify-center border-b border-gray-200">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
            {sidebarOpen ? 'NovaDash' : 'ND'}
          </span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {[
            { icon: HomeIcon, label: 'Overview', active: true },
            { icon: ChartBarIcon, label: 'Analytics' },
            { icon: UsersIcon, label: 'Customers' },
            { icon: Cog6ToothIcon, label: 'Settings' },
          ].map((item, idx) => (
            <a key={idx} href="#" className={`flex items-center p-3 rounded-lg transition-colors ${item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'}`}>
              <item.icon className={`h-6 w-6 ${sidebarOpen ? 'mr-3' : 'mx-auto'}`} />
              {sidebarOpen && <span className="font-medium">{item.label}</span>}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        
        {/* Header */}
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="text-gray-500 hover:text-gray-700">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          
          <div className="flex items-center space-x-4">
            <div className="relative">
              <MagnifyingGlassIcon className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-64"
              />
            </div>
            <button className="p-2 text-gray-400 hover:text-gray-600 relative">
              <BellIcon className="h-6 w-6" />
              <span className="absolute top-1 right-1 h-2.5 w-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white flex items-center justify-center font-bold text-sm shadow-sm cursor-pointer">
              GM
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-6">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
            <p className="text-sm text-gray-500 mt-1">Here is what's happening with your projects today.</p>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <h3 className="text-sm font-medium text-gray-500">{item.name}</h3>
                <div className="mt-2 flex items-baseline justify-between">
                  <p className="text-3xl font-semibold text-gray-900">{item.value}</p>
                  <span className={`text-sm font-medium ${item.changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Main Area layout for Charts & Activity */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Chart Area */}
            <div className="col-span-2 bg-white rounded-xl shadow-sm border border-gray-100 p-6 min-h-[400px] flex flex-col items-center justify-center">
              <ChartBarIcon className="h-16 w-16 text-gray-200 mb-4" />
              <p className="text-gray-400 text-sm">Main Revenue Chart Placeholder</p>
              <p className="text-gray-300 text-xs mt-2">Integrate Recharts or Chart.js here</p>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4].map((_, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <div className="h-2 w-2 mt-2 rounded-full bg-blue-500"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">New user registered</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
