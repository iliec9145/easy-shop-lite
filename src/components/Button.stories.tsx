import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
const meta: Meta<typeof Button> = { component: Button, title: 'UI/Button' }
export default meta
type Story = StoryObj<typeof Button>
export const Primary: Story = { args: { children: 'Primary', variant: 'primary' } }
export const Ghost: Story = { args: { children: 'Ghost', variant: 'ghost' } }
