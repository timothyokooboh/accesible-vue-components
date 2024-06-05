import { Breadcrumb, BreadcrumbItem } from "@/breadcrumb/components";
import { BREADCRUMB_ACTIVE_CLASS } from "@/constants";
import { render, cleanup, screen } from "@testing-library/vue";
import { expect, it, describe, afterEach } from "vitest";
import { axe, toHaveNoViolations } from "jest-axe";
import BreadcrumbDefault from "@/breadcrumb/examples/BreadcrumbDefault.vue";
import BreadcrumbCustomSeparator from "@/breadcrumb/examples/BreadcrumbCustomSeparator.vue";

expect.extend(toHaveNoViolations);

describe("Breadcrumb", () => {
  afterEach(() => {
    cleanup();
  });

  it("is accessible", async () => {
    const { container } = render(BreadcrumbDefault);
    const result = await axe(container);
    expect(result).toHaveNoViolations();
  });

  it("has the proper aria attribute", async () => {
    render(BreadcrumbDefault);
    const breadcrumb = screen.getByTestId("breadcrumb");
    expect(breadcrumb).toHaveAttribute("aria-label", "Breadcrumb");
  });

  describe("breadcrumb separator", () => {
    it("can be changed to a custom separator", () => {
      render(BreadcrumbCustomSeparator);

      const separator = screen.getAllByTestId("separator");
      expect(separator[0].textContent).toBe("...");
    });
  });

  describe("BreadcrumbItem", () => {
    describe("current page", () => {
      it("has default unique appearance", async () => {
        render(BreadcrumbItem, {
          props: {
            isCurrentPage: true,
          },
        });

        const item = await screen.findByTestId("breadcrumbitem");
        const classList = item.classList.toString();
        expect(classList).toContain(BREADCRUMB_ACTIVE_CLASS);
      });

      it("can have a custom unique appearance", async () => {
        render(BreadcrumbItem, {
          attrs: {
            class: "text-red-500",
          },
          props: {
            isCurrentPage: true,
          },
        });

        const item = await screen.findByTestId("breadcrumbitem");
        const classList = item.classList.toString();
        expect(classList).toContain("text-red-500");
      });
    });
  });
});
