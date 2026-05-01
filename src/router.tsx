import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute'
import LoadingCat from './components/LoadingCat'

// Public pages — lazy loaded for code splitting
const HomePage = lazy(() => import('./pages/HomePage'))
const CatGalleryPage = lazy(() => import('./pages/CatGalleryPage'))
const CatProfilePage = lazy(() => import('./pages/CatProfilePage'))
const MenuPage = lazy(() => import('./pages/MenuPage'))
const SpacesPage = lazy(() => import('./pages/SpacesPage'))
const ReservationsPage = lazy(() => import('./pages/ReservationsPage'))
const MembershipsPage = lazy(() => import('./pages/MembershipsPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'))
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'))
const OrderConfirmPage = lazy(() => import('./pages/OrderConfirmPage'))
const PetPolicyPage = lazy(() => import('./pages/PetPolicyPage'))

// Admin pages — lazy loaded
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'))
const AdminMenuPage = lazy(() => import('./pages/admin/AdminMenuPage'))
const AdminCatsPage = lazy(() => import('./pages/admin/AdminCatsPage'))
const AdminReservationsPage = lazy(() => import('./pages/admin/AdminReservationsPage'))
const AdminProductsPage = lazy(() => import('./pages/admin/AdminProductsPage'))

export default function AppRouter() {
  return (
    <Suspense fallback={<LoadingCat />}>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/gatos" element={<CatGalleryPage />} />
        <Route path="/gatos/:slug" element={<CatProfilePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/espacios" element={<SpacesPage />} />
        <Route path="/membresias" element={<MembershipsPage />} />
        <Route path="/tienda" element={<ShopPage />} />
        <Route path="/tienda/:slug" element={<ProductDetailPage />} />
        <Route path="/tienda/checkout" element={<CheckoutPage />} />
        <Route path="/tienda/confirmacion" element={<OrderConfirmPage />} />
        <Route path="/politica-mascotas" element={<PetPolicyPage />} />

        {/* Auth-required route */}
        <Route
          path="/reservaciones"
          element={
            <ProtectedRoute>
              <ReservationsPage />
            </ProtectedRoute>
          }
        />

        {/* Admin routes — protected, admin only */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute requireAdmin>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route path="menu" element={<AdminMenuPage />} />
          <Route path="gatos" element={<AdminCatsPage />} />
          <Route path="reservaciones" element={<AdminReservationsPage />} />
          <Route path="productos" element={<AdminProductsPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
