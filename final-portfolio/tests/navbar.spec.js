const { test, expect } = require("@playwright/test");

const url = "http://localhost:3000";
const NAV_ITEMS = ["Home", "About Me", "Projects", "Resume"];

// Describe a test suite
test("Check <h2> in <div> with the content: Lauren Mercer", async ({
  page,
}) => {
  await page.goto(process.env.URL || url);
  const expectedContent = "Lauren Mercer";
  const headerSelector = `div h2:has-text("${expectedContent}")`;

  await expect(page.locator(headerSelector)).toBeVisible();
});
