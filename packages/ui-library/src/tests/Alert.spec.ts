import { cleanup, screen, render } from "@testing-library/vue";
import { describe, it, afterEach, expect } from "vitest";
import {
  AlertBasic,
  AlertSuccess,
  AlertError,
  AlertInfo,
  AlertWarning,
} from "@/alert/examples";
import { Alert } from "@/alert/components";

describe("Alert", () => {
  afterEach(() => {
    cleanup();
  });

  describe("success variant", () => {
    describe("when a custom title is not passed", () => {
      it('renders "Success" as the title of the alert', () => {
        render(AlertBasic);
        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe("Success");
      });
    });

    describe("when a custom title is passed", () => {
      it("renders the custom title as the title of the alert", () => {
        render(AlertSuccess);
        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe("Data uploaded successfully");
      });
    });
  });

  describe("error variant", () => {
    describe("when a custom title is not passed", () => {
      it('renders "Error" as the title of the alert', () => {
        render(Alert, {
          props: {
            variant: "error",
          },
        });
        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe("Error");
      });
    });

    describe("when a custom title is passed", () => {
      it("renders the custom title as the title of the alert", () => {
        render(AlertError);

        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe("Unable to upload file");
      });
    });
  });

  describe("warning variant", () => {
    describe("when a custom title is not passed", () => {
      it('renders "Warning" as the title of the alert', () => {
        render(Alert, {
          props: {
            variant: "warning",
          },
        });

        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe("Warning");
      });
    });

    describe("when a custom title is passed", () => {
      it("renders the custom title as the title of the alert", () => {
        render(AlertWarning);
        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe("Your API key is public");
      });
    });
  });

  describe("info variant", () => {
    describe("when a custom title is not passed", () => {
      it('renders "Info" as the title of the alert', () => {
        render(Alert, {
          props: {
            variant: "info",
          },
        });

        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe("Info");
      });
    });
    describe("when a custom title is passed", () => {
      it("renders the custom title as the title of the alert", () => {
        render(AlertInfo);
        const titleElement = screen.queryByTestId("alert-title");
        expect(titleElement?.textContent).toBe(
          "Your free trial ends in two days",
        );
      });
    });
  });
});
