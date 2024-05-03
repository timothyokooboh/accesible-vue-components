import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/ui/accordion/components";

const meta = {
  title: "Accordion",
  component: Accordion,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Multiple: Story = {
  args: {
    isSingle: false,
    items: [
      { title: "Svelte", content: "Smart framework" },
      { title: "Angular", content: "Robust library" },
    ],
  },
};

export const Single: Story = {
  args: {
    isSingle: true,
    items: [
      { title: "Vue.js", content: "Cool framework" },
      { title: "React.js", content: "Nice library" },
    ],
  },
};
