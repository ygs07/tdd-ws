import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/vue'
import { createRouter, createWebHistory } from 'vue-router'

import NavigationEnd from '../../views/examples/navigation-example/End.vue'
import UserProfile from '../../views/examples/navigation-example/UserProfile.vue'

// Dummy pages for routes
const HomePage = {
  template: '<div>🏠 Home Page</div>',
}
const AboutPage = {
  template: '<div>ℹ️ About Page</div>',
}

const routes = [
  {
    path: '/navigation/end',
    component: NavigationEnd,
    children: [
      { path: 'home', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'user/:id', component: UserProfile },
    ],
  },
]

function renderWithRouter() {
  const router = createRouter({
    history: createWebHistory(),
    routes,
  })

  return render(NavigationEnd, {
    global: {
      plugins: [router],
    },
  })
}

describe('Navigation Example', () => {
  it('renders the navigation links', async () => {
    renderWithRouter()

    expect(screen.queryByText('Home')).to.exist
    expect(screen.queryByText('About')).to.exist
    expect(screen.queryByText('User Profile (ID: 42)')).to.exist

    // expect(screen.getByText('Home')).toBeInTheDocument()
    // expect(screen.getByText('About')).toBeInTheDocument()
    // expect(screen.getByText('User Profile (ID: 42)')).toBeInTheDocument()
  })

  //   it('navigates to Home page', async () => {
  //     const { container } = renderWithRouter()

  //     const homeLink = screen.getByText('Home')
  //     await fireEvent.click(homeLink)

  //     expect(container.innerHTML).toContain('🏠 Home Page')
  //   })

  //   it('navigates to About page', async () => {
  //     const { container } = renderWithRouter()

  //     const aboutLink = screen.getByText('About')
  //     await fireEvent.click(aboutLink)

  //     expect(container.innerHTML).toContain('ℹ️ About Page')
  //   })

  //   it('navigates to UserProfile page with correct user id', async () => {
  //     const { container } = renderWithRouter()

  //     const userProfileLink = screen.getByText('User Profile (ID: 42)')
  //     await fireEvent.click(userProfileLink)

  //     expect(container.innerHTML).toContain('User ID: 42')
  //   })
})
