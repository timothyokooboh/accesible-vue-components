import { render, screen, cleanup, fireEvent } from "@testing-library/vue";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach, afterEach } from "vitest";
import {
  AccordionBasic,
  AccordionMultiple,
  AccordionSingle,
} from "@/components/accordion/story";

describe("accordion", () => {
  afterEach(() => {
    cleanup();
  });

  it("shows all the accordion item titles", async () => {
    render(AccordionBasic);

    const accordionHeaders = await screen.findAllByTestId("accordion-header");
    expect(accordionHeaders[0].textContent).toBe("Vue.js");
    expect(accordionHeaders[1].textContent).toBe("React.js");
  });

  describe("when multiple items can be opened per time", () => {
    beforeEach(() => {
      render(AccordionMultiple);
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

    describe("clicking on another accordion item header", () => {
      it("opens its accordion item panel without closing the first accordion item", async () => {
        const accordionHeaders =
          await screen.findAllByTestId("accordion-header");

        expect(screen.queryAllByTestId("accordion-panel").length).toBe(0);
        await userEvent.click(accordionHeaders[0]);
        await userEvent.click(accordionHeaders[1]);

        expect(screen.queryAllByTestId("accordion-panel").length).toBe(2);
      });
    });
  });

  describe("when only one item can be open per time", () => {
    beforeEach(() => {
      render(AccordionSingle);
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

    describe("clicking on another accordion item header", () => {
      it("opens its accordion item panel and closes the first accordion item", async () => {
        const accordionHeaders =
          await screen.findAllByTestId("accordion-header");

        expect(screen.queryAllByTestId("accordion-panel").length).toBe(0);
        await userEvent.click(accordionHeaders[0]);
        await userEvent.click(accordionHeaders[1]);

        expect(screen.queryAllByTestId("accordion-panel").length).toBe(1);
      });
    });
  });

  describe("keyboard accessibility", () => {
    beforeEach(() => {
      render(AccordionBasic);
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
