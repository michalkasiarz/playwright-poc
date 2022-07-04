import { expect, Locator, Page } from '@playwright/test'

export class LoginPage {
  readonly page: Page
  readonly errorMessage: Locator
  readonly passwordInput: Locator
  readonly submitButton: Locator
  readonly usernameInput: Locator

  constructor(page: Page) {
    this.page = page
    this.errorMessage = page.locator('.alert-error')
    this.passwordInput = page.locator('#user_password')
    this.submitButton = page.locator('text=Sign in')
    this.usernameInput = page.locator('#user_login')
  }

  async assertErrorMessage(errorMessage: string) {
    await expect(this.errorMessage).toHaveText(errorMessage)
  }

  async login(username: string, password: string) {
    await this.usernameInput.type(username)
    await this.passwordInput.type(password)
    await this.submitButton.click()
  }
}
