import { render, screen, cleanup, fireEvent } from "@testing-library/vue";
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
        expect(accordionPanels[0]).toBeVisible();
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
        expect(accordionPanels[0]).toBeVisible();
        expect(accordionPanels[1]).toBeVisible();
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

  describe("keyboard accessibility", () => {
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

    describe("navigating with down arrow key", () => {
      it("it moves focus to the next accordion item header", async () => {
        const firstHeader = screen.queryAllByTestId("accordion-header")[0];

        // focus on first accordion header
        firstHeader.focus();

        // press down arrow key
        await fireEvent.keyUp(firstHeader, {
          key: "ArrowDown",
        });

        // focus should move to the next item header
        const secondHeader = screen.queryAllByTestId("accordion-header")[1];
        expect(secondHeader).toHaveFocus();
      });

      describe("when focus is on the last item header", () => {
        it("moves focus to the first item header", async () => {
          const lastHeader = screen.queryAllByTestId("accordion-header")[1];

          // focus on the last header
          lastHeader.focus();

          // press the down arrow key
          await fireEvent.keyUp(lastHeader, { key: "ArrowDown" });

          // focus should move to the first item header
          const firstHeader = screen.queryAllByTestId("accordion-header")[0];
          expect(firstHeader).toHaveFocus();
        });
      });
    });

    describe("navigating with up arrow key", () => {
      it("it moves focus to the previous accordion item header", async () => {
        const secondHeader = screen.queryAllByTestId("accordion-header")[1];
        // focus on the first header
        secondHeader.focus();
        // press the down arrow key
        await fireEvent.keyUp(secondHeader, { key: "ArrowUp" });

        // focus should move to the last item header
        const firstHeader = screen.queryAllByTestId("accordion-header")[0];
        expect(firstHeader).toHaveFocus();
      });
      describe("when focus is on the first item header", () => {
        it("moves focus to the last item header", async () => {
          const firstHeader = screen.queryAllByTestId("accordion-header")[0];
          // focus on the first header
          firstHeader.focus();
          // press the down arrow key
          await fireEvent.keyUp(firstHeader, { key: "ArrowUp" });

          // focus should move to the last item header
          const lastHeader = screen.queryAllByTestId("accordion-header")[1];
          expect(lastHeader).toHaveFocus();
        });
      });
    });
  });
});
