import MinimalNav from './components/MinimalNav'
import Footer from './components/Footer'
import PageTransition from './components/PageTransition'
import AppRouter from './router'

function App() {
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
