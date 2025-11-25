import React from 'react';
import { Users, Film, Play, TrendingUp } from 'lucide-react';

const stats = [
  { label: 'Total Usuários', value: '1,234', icon: Users, color: 'bg-blue-500' },
  { label: 'Total Vídeos', value: '567', icon: Film, color: 'bg-green-500' },
  { label: 'Visualizações', value: '89,012', icon: Play, color: 'bg-purple-500' },
  { label: 'Engajamento', value: '23%', icon: TrendingUp, color: 'bg-orange-500' },
];

export function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-gray-800 rounded-lg p-6">
            <div className="flex items-center">
              <div className={`p-3 rounded-lg ${color}`}>
                <Icon className="w-6 h-6 text-white" />
              </div>
              <div className="ml-4">
                <p className="text-sm text-gray-400">{label}</p>
                <p className="text-2xl font-semibold text-white">{value}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}