// import "@testing-library/jest-dom";
import { render, screen, cleanup } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { Accordion } from "@/ui/accordion/components";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

describe("accordion", () => {
  afterEach(() => {
    cleanup();
  });

  it("shows all the accordion item titles", async () => {
    render(Accordion, {
      props: {
        items: [
          { title: "About", content: "This is a course on practical vue.js" },
          { title: "Technologies", content: "TypeScript Vuejs TailwindCSS" },
        ],
      },
    });

    const accordionHeaders = await screen.findAllByTestId("accordion-header");
    expect(accordionHeaders[0].textContent).toBe("About");
    expect(accordionHeaders[1].textContent).toBe("Technologies");
  });

  describe("when multiple items can be opened per time", () => {
    beforeEach(() => {
      render(Accordion, {
        props: {
          items: [
            {
              title: "About",
              content: "This is a course on practical vue.js",
            },
            {
              title: "Technologies",
              content: "TypeScript Vuejs TailwindCSS",
            },
          ],
        },
      });
    });

    describe("clicking on one accordion header", () => {
      it("opens its accordion item panel", async () => {
        const accordionHeaders =
          await screen.findAllByTestId("accordion-header");
        let accordionPanels = screen.queryAllByTestId("accordion-panel");

        expect(accordionPanels.length).toBe(0);
        await userEvent.click(accordionHeaders[0]);

        accordionPanels = screen.queryAllByTestId("accordion-panel");
        expect(accordionPanels.length).toBe(1);
      });
    });

    describe("clicking on multiple accordion headers", () => {
      it("opens the panel of each header", async () => {
        const accordionHeaders =
          await screen.findAllByTestId("accordion-header");
        let accordionPanels = screen.queryAllByTestId("accordion-panel");

        expect(accordionPanels.length).toBe(0);
        await userEvent.click(accordionHeaders[0]);
        await userEvent.click(accordionHeaders[1]);

        accordionPanels = await screen.findAllByTestId("accordion-panel");
        expect(accordionPanels.length).toBe(2);
      });
    });
  });

  describe("when only one item can be open per time", () => {
    beforeEach(() => {
      render(Accordion, {
        props: {
          isSingle: true,
          items: [
            {
              title: "About",
              content: "This is a course on practical vue.js",
            },
            {
              title: "Technologies",
              content: "TypeScript Vuejs TailwindCSS",
            },
          ],
        },
      });
    });

    describe("clicking one accordion header", () => {
      it("opens its accordion item panel", async () => {
        const accordionHeaders =
          await screen.findAllByTestId("accordion-header");
        let accordionPanels = screen.queryAllByTestId("accordion-panel");

        expect(accordionPanels.length).toBe(0);
        await userEvent.click(accordionHeaders[0]);

        accordionPanels = screen.queryAllByTestId("accordion-panel");
        expect(accordionPanels.length).toBe(1);
      });
    });

    describe("clicking on multiple accordion headers", () => {
      it("opens the panel of each header", async () => {
        const accordionHeaders =
          await screen.findAllByTestId("accordion-header");
        let accordionPanels = screen.queryAllByTestId("accordion-panel");

        expect(accordionPanels.length).toBe(0);
        await userEvent.click(accordionHeaders[0]);
        await userEvent.click(accordionHeaders[1]);

        accordionPanels = await screen.findAllByTestId("accordion-panel");
        expect(accordionPanels.length).toBe(1);
      });
    });
  });
});
