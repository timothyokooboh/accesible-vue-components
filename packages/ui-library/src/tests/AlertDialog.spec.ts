import AlertDialog from "@/components/alertDialog/examples/AlertDialog.vue";
import { getFocusableElements } from "@/helpers";
import userEvent from "@testing-library/user-event";

import { screen, render, cleanup, fireEvent } from "@testing-library/vue";
import { describe, it, afterEach, beforeEach, expect, vi } from "vitest";

describe("AlertDialog", () => {
  afterEach(() => cleanup());

  beforeEach(async () => {
    // https://github.com/jsdom/jsdom/issues/3294
    HTMLDialogElement.prototype.showModal = vi.fn();
    HTMLDialogElement.prototype.close = vi.fn();

    render(AlertDialog);
    const dialogTrigger = await screen.findByTestId("dialog-trigger");
    await fireEvent.click(dialogTrigger);
  });

  describe("aria states", async () => {
    it("has aria-labelledby which is equal to the id of the dialog title", async () => {
      const alertDialogRoot = await screen.findByTestId("alert-dialog-root");
      const alertDialogTitle = await screen.findByTestId("alert-dialog-title");
      const titleId = alertDialogTitle.id;

      expect(alertDialogRoot).toHaveAttribute("aria-labelledby", titleId);
    });

    it("has aria-describedby which is equal to the id of the dialog description", async () => {
      const alertDialogRoot = await screen.findByTestId("alert-dialog-root");
      const alertDialogDescription = await screen.findByTestId(
        "alert-dialog-description",
      );
      const descriptionId = alertDialogDescription.id;
      expect(alertDialogRoot).toHaveAttribute(
        "aria-describedby",
        descriptionId,
      );
    });
  });

  describe("keyboard accessibility", () => {
    it("closes when the escape key is pressed", async () => {});
    it("closes when the close icon is pressed", () => {});

    it("traps focus within the modal", async () => {
      const alertDialogRoot = await screen.findByTestId("alert-dialog-root");
      const focusableElements = getFocusableElements(alertDialogRoot);

      const lastFocusableElement =
        focusableElements[focusableElements.length - 1];

      // set focus on the last focusable element
      lastFocusableElement.focus();

      // press tab key
      await fireEvent.keyDown(focusableElements[focusableElements.length - 1], {
        key: "Tab",
      });

      // expect focus to move to the first focusable element
      expect(focusableElements[0]).toBe(document.activeElement);
    });
  });
});
