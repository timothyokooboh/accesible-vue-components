import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import {
  AlertDialog,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
} from "@/components/alertDialog";

const meta = {
  title: "AlertDialog",
  component: AlertDialog,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => ({
    components: {
      AlertDialog,
      AlertDialogBody,
      AlertDialogHeader,
      AlertDialogFooter,
    },
    template: `
      <AlertDialog
      :isOpen="true"
      :onClose="isOpen = false"
      :onConfirm="onConfirm"
      class="backdrop:bg-red-500"
    >
      <AlertDialogHeader>
        <template #title>
          <p class="text-[18px]">Delete User</p>
        </template>
      </AlertDialogHeader>

      <AlertDialogBody>
        <p>Are you sure that you want to delete this user?</p>
      </AlertDialogBody>

      <AlertDialogFooter cancelText="Cancel" confirmText="Confirm">
      </AlertDialogFooter>
    </AlertDialog>
  `,
  }),
};
