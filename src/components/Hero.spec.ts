import { render } from '@testing-library/vue'
import { describe, expect, it } from 'vitest'
import Hero from './Hero.vue'

describe('# Hero', () => {
  it('should render correctly', () => {
    const { container } = render(Hero)

    expect(container).toHaveTextContent('Welcome To Job Board')
  })
})
