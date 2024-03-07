import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: 'j7s71r',
  e2e: {
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    baseUrl: 'http://localhost:4173',
    defaultCommandTimeout: 8000,
  },
})
