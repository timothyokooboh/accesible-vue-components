import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import { Alert, AlertHeader, AlertDescription } from "@/components/alert";

const meta = {
  title: "Alert",
  component: Alert,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => ({
    components: { Alert },
    template: `<Alert class="w-[400px]" :data="{ description: 'this is awesome' }" />`,
  }),
};

export const Success: Story = {
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription,
    },
    template: `<Alert class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Data uploaded successfully</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You have subscribed successfully</p>
    </AlertDescription>
  </Alert>`,
  }),
};

export const Error: Story = {
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription,
    },
    template: `<Alert variant="error" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Unable to upload file</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>Your browser is not supported</p>
    </AlertDescription>
  </Alert>`,
  }),
};

export const Warning: Story = {
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription,
    },
    template: `<Alert variant="warning" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Your API key is public</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You have almost exhausted your data</p>
    </AlertDescription>
  </Alert>`,
  }),
};

export const Info: Story = {
  render: () => ({
    components: {
      Alert,
      AlertHeader,
      AlertDescription,
    },
    template: `<Alert variant="info" class="w-[400px]">
    <AlertHeader class="mb-3">
      <template #alertTitle>
        <p>Your free trial ends in two days</p>
      </template>
    </AlertHeader>

    <AlertDescription>
      <p>You are eligible for a new loan</p>
    </AlertDescription>
  </Alert>`,
  }),
};
