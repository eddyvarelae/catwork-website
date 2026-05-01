import MinimalNav from './components/MinimalNav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import AppRouter from './router'
import { usePageViewNotify } from './hooks/usePageViewNotify'

function App() {
  usePageViewNotify()

  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <MinimalNav />
      <main className="pt-16">
        <PageTransition>
          <AppRouter />
        </PageTransition>
      </main>
      <Footer />
    </div>
  )
}

export default App
