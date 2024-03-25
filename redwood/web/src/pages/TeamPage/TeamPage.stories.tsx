import type { Meta, StoryObj } from '@storybook/react'

import TeamPage from './TeamPage'

const meta: Meta<typeof TeamPage> = {
  component: TeamPage,
}

export default meta

type Story = StoryObj<typeof TeamPage>

export const Primary: Story = {}
