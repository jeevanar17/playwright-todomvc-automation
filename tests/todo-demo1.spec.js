import { test, expect } from '@playwright/test';

test('TodoMVC end-to-end sanity @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/', {
    waitUntil: 'networkidle',
  });

  const input = page.getByTestId('text-input');

  const addTodo = async (text) => {
    await input.waitFor({ state: 'visible' });
    await input.fill(text);
    await input.press('Enter');
  };

  await addTodo('Buy Groceries');
  await addTodo('Pay Bills');
  await addTodo('Go for walk');
  await addTodo('Play');
  await addTodo('Rest');

  const todos = page.locator('.todo-list li');
  await expect(todos).toHaveCount(5);

  await todos.filter({ hasText: 'Buy Groceries' })
    .locator('.toggle')
    .click();

  await todos.filter({ hasText: 'Rest' })
    .locator('.toggle')
    .click();

  await page.getByRole('link', { name: 'Active' }).click();
  await expect(todos).toHaveCount(3);

  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(todos).toHaveCount(2);

  await page.getByRole('button', { name: 'Clear completed' }).click();

  await page.getByRole('link', { name: 'All' }).click();
  await expect(todos).toHaveCount(3);
});
