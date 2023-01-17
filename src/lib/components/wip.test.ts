import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/svelte'
import Wip from './wip.svelte'

test('Placeholder test', () => {
	render(Wip)

	expect(screen.getByText(/Under construction/i)).toBeInTheDocument()
})
