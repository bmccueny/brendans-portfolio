import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ProjectCard } from "@/components/ProjectCard";

describe("ProjectCard", () => {
  it("renders the title, description, and tags", () => {
    render(
      <ProjectCard
        title="Test Project"
        description="A test description."
        tags={["React", "TypeScript"]}
        href="/test"
      />
    );

    expect(screen.getByText("Test Project")).toBeDefined();
    expect(screen.getByText("A test description.")).toBeDefined();
    expect(screen.getByText("React")).toBeDefined();
    expect(screen.getByText("TypeScript")).toBeDefined();
  });

  it("links to the provided href", () => {
    render(
      <ProjectCard
        title="Linked"
        description="Desc"
        tags={[]}
        href="https://example.com"
      />
    );

    const link = screen.getByRole("link");
    expect(link.getAttribute("href")).toBe("https://example.com");
  });
});
