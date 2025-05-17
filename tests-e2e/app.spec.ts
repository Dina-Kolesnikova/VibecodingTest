import { test, expect } from '@playwright/test';

test.describe('Spanish Flashcards App Navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the starting url before each test.
    await page.goto('/');
  });

  test('should display welcome message on home page', async ({ page }) => {
    // Check for the welcome message
    await expect(page.getByRole('heading', { name: 'Welcome to Spanish Flashcards!' })).toBeVisible();
  });

  test('should navigate to Study Mode category selection', async ({ page }) => {
    // Click the "Study Mode" button
    await page.getByRole('button', { name: 'Study Mode' }).click();

    // Check for a heading on the category selection page
    await expect(page.getByRole('heading', { name: 'Select a Category for Study Mode' })).toBeVisible();

    // Check if category buttons are present
    await expect(page.getByRole('button', { name: 'Animals' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Food' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Verbs' })).toBeVisible();
  });

  test('should navigate to Study Page when a category is selected', async ({ page }) => {
    // Go to category selection for study
    await page.getByRole('button', { name: 'Study Mode' }).click();
    
    // Click the "Animals" category button
    await page.getByRole('button', { name: 'Animals' }).click();

    // Check for a heading on the study page, specific to the selected category
    await expect(page.getByRole('heading', { name: 'Studying: Animals' })).toBeVisible();

    // Check if a flashcard is present (could be more specific, e.g., check for Spanish word)
    // For now, let's check for the progress text as an indicator
    await expect(page.getByText(/Card \d+ of \d+/)).toBeVisible(); 
  });
}); 