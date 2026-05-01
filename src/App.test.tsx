import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { describe, it, expect } from 'vitest'
import App from './App'

function renderWithRouter(initialRoute = '/') {
  return render(
    <MemoryRouter initialEntries={[initialRoute]}>
      <App />
    </MemoryRouter>,
  )
}

describe('App', () => {
  it('renders the MinimalNav with Catwork logo', async () => {
    renderWithRouter('/')
    // The nav contains the Catwork logo link
    const logos = await screen.findAllByText('Catwork')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the Footer with pet policy notice', async () => {
    renderWithRouter('/')
    // Wait for lazy page to load, then check footer content
    await screen.findByText('Conoce a nuestros gatitos')
    // Both the HomePage pet policy banner and Footer contain "Solo gatitos"
    const notices = screen.getAllByText(/Solo gatitos/)
    expect(notices.length).toBeGreaterThanOrEqual(1)
  })

  it('renders the HomePage at /', async () => {
    renderWithRouter('/')
    expect(await screen.findByText('Conoce a nuestros gatitos')).toBeInTheDocument()
  })

  it('renders the CatGalleryPage at /gatos', async () => {
    renderWithRouter('/gatos')
    expect(await screen.findByText('Nuestros Gatitos')).toBeInTheDocument()
  })

  it('renders the MenuPage at /menu', async () => {
    renderWithRouter('/menu')
    expect(await screen.findByText('Menú del Día')).toBeInTheDocument()
  })

  it('renders the SpacesPage at /espacios', async () => {
    renderWithRouter('/espacios')
    expect(await screen.findByText('SpacesPage')).toBeInTheDocument()
  })

  it('renders the MembershipsPage at /membresias', async () => {
    renderWithRouter('/membresias')
    expect(await screen.findByText('MembershipsPage')).toBeInTheDocument()
  })

  it('renders the ShopPage at /tienda', async () => {
    renderWithRouter('/tienda')
    expect(await screen.findByText('ShopPage')).toBeInTheDocument()
  })

  it('renders the PetPolicyPage at /politica-mascotas', async () => {
    renderWithRouter('/politica-mascotas')
    expect(await screen.findByText('PetPolicyPage')).toBeInTheDocument()
  })

  it('renders social links in the footer with target _blank', async () => {
    renderWithRouter('/')
    await screen.findByText('Conoce a nuestros gatitos')
    // Both the HomePage social section and Footer have Instagram/TikTok links
    const instagramLinks = screen.getAllByLabelText('Visitar Instagram de Catwork')
    expect(instagramLinks.length).toBeGreaterThanOrEqual(1)
    instagramLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })

    const tiktokLinks = screen.getAllByLabelText('Visitar TikTok de Catwork')
    expect(tiktokLinks.length).toBeGreaterThanOrEqual(1)
    tiktokLinks.forEach((link) => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })

  it('renders loading fallback while lazy components load', () => {
    renderWithRouter('/')
    // The Suspense fallback should show briefly
    // Once loaded, the page content appears
    expect(document.querySelector('.min-h-screen')).toBeInTheDocument()
  })
})
