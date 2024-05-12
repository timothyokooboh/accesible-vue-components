import type { Meta, StoryObj } from "@storybook/vue3";
import { fn } from "@storybook/test";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeader,
  AccordionItemPanel,
} from "@/components/accordion";
import {
  AccordionBasic,
  AccordionMultiple,
  AccordionSingle,
} from "@/components/accordion/examples";

const meta = {
  title: "Accordion",
  component: Accordion,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => ({
    components: { Accordion },
    template: `<Accordion 
      :items="[
        {title: 'About us', content: 'A real estate company'},
        {title: 'Contact us', content: 'Send mail to support@estates.ng'},
      ]" 
    />`,
  }),
};

export const Multiple: Story = {
  render: () => ({
    components: {
      Accordion,
      AccordionItem,
      AccordionItemHeader,
      AccordionItemPanel,
    },
    template: `<Accordion>
      <AccordionItem>
        <AccordionItemHeader> svelte </AccordionItemHeader>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>`,
  }),
};

export const Single: Story = {
  render: () => ({
    components: {
      Accordion,
      AccordionItem,
      AccordionItemHeader,
      AccordionItemPanel,
    },
    template: `<Accordion single>
      <AccordionItem>
        <AccordionItemHeader> svelte </AccordionItemHeader>
        <AccordionItemPanel>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
            rerum, ratione magnam cumque tempora unde placeat minima harum
            suscipit accusamus doloremque sit nulla nostrum quis necessitatibus,
            optio totam! Sapiente, quisquam.
          </p>
        </AccordionItemPanel>
      </AccordionItem>

      <AccordionItem>
        <AccordionItemHeader> Angular </AccordionItemHeader>
        <AccordionItemPanel>This is Angular</AccordionItemPanel>
      </AccordionItem>
    </Accordion>`,
  }),
};
