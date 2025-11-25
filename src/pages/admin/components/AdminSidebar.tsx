import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Film, 
  Users, 
  BarChart3,
  Settings
} from 'lucide-react';

const navItems = [
  { to: '/admin', icon: LayoutDashboard, label: 'Dashboard', end: true },
  { to: '/admin/content', icon: Film, label: 'Conteúdo' },
  { to: '/admin/users', icon: Users, label: 'Usuários' },
  { to: '/admin/analytics', icon: BarChart3, label: 'Analytics' },
  { to: '/admin/settings', icon: Settings, label: 'Configurações' },
];

export function AdminSidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-6">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-white">Admin Panel</h1>
      </div>
      <nav className="space-y-2">
        {navItems.map(({ to, icon: Icon, label, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-300 hover:bg-gray-700'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}