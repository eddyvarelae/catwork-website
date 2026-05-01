import { Outlet } from 'react-router-dom'

export default function AdminLayout() {
  return (
    <div className="min-h-screen flex">
      <aside className="w-64 bg-charcoal text-cream p-6">
        <h2 className="font-heading text-2xl mb-8">Admin</h2>
        <nav className="space-y-2">
          <p>Panel de Administración</p>
        </nav>
      </aside>
      <main className="flex-1 p-8">
        <Outlet />
      </main>
    </div>
  )
}
