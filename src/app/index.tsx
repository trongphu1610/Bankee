import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Center, ChakraProvider } from '@chakra-ui/react'

import theme from 'theme'
import Fonts from 'theme/fonts'
import { ThemeProvider } from '@emotion/react'
import { SignUp } from 'app/pages/SignUpPage'
import { Splash } from 'app/pages/SplashPage'
import { SignIn } from 'app/pages/SignInPage'
import { MobileNumber } from 'app/pages/MobileNumberPage'
import { VerifyNumber } from 'app/pages/VerifyPage'
import { AccountCreate } from 'app/pages/AccountCreatePage/components'
import { TouchId } from 'app/pages/TouchIdPage'
import { PhoneProvider } from 'contexts/phoneContext'
import { NotFoundPage } from 'app/pages/NotFoundPage'
import { TouchIdConfirm } from 'app/pages/TouchIdConfirmPage'
import { MoneySummary } from 'app/pages/MoneySummaryPage'
import { BudgetDetails } from 'app/pages/BudgetDetailsPage'
import { MainScreen } from 'app/pages/MainScreenPage'
import { DetailsScreen } from 'app/pages/DetailsScreenPage'
import { SavingScore } from 'app/pages/SavingScorePage'
import { Transferring } from 'app/pages/TransferingPage'
import { Receipt } from 'app/pages/ReceiptPage'
import { MonthlyBudget } from 'app/pages/MonthlyBudgetPage'
import { MyAccount } from 'app/pages/MyAccountPage'
import { CardDetails } from 'app/pages/CardDetailsPage'
import { QRCodePage } from 'app/pages/QRCodePage'
import { ExpenseScreen } from 'app/pages/ExpensesPage'

/**
 * @returns Component app
 */
export function App() {
  return (
    <ThemeProvider theme={theme}>
      <ChakraProvider
        theme={theme}
        toastOptions={{ defaultOptions: { position: 'top' } }}
      >
        <Fonts />
        <PhoneProvider>
          <BrowserRouter>
            <Center
              bg={theme.colors.Alphas['50']}
              gap={2}
              h={theme.sizes['896']}
              w={theme.sizes['100']}
            >
              <Routes>
                <Route element={<Splash />} path="/" />
                <Route element={<NotFoundPage />} path="*" />
                <Route element={<SignUp />} path="/signup" />
                <Route element={<SignIn />} path="/signin" />
                <Route element={<MobileNumber />} path="/mobile_number" />
                <Route element={<VerifyNumber />} path="/verify_number" />
                <Route element={<AccountCreate />} path="/account_create" />
                <Route element={<TouchId />} path="/touch_id" />
                <Route
                  element={<TouchIdConfirm />}
                  path="/touch_confirmation"
                />
                <Route element={<MoneySummary />} path="/money_summary" />
                <Route element={<BudgetDetails />} path="/budget_details" />
                <Route element={<MainScreen />} path="/main_screen" />
                <Route element={<DetailsScreen />} path="/details_screen" />
                <Route element={<SavingScore />} path="/saving_score" />
                <Route element={<Transferring />} path="/transferring" />
                <Route element={<Receipt />} path="/receipt/:id" />
                <Route element={<MonthlyBudget />} path="/monthly_budget" />
                <Route element={<MyAccount />} path="/my_account" />
                <Route element={<CardDetails />} path="/card_details" />
                <Route element={<QRCodePage />} path="/qr_code" />
                <Route element={<ExpenseScreen />} path="/expenses_screen" />
              </Routes>
            </Center>
          </BrowserRouter>
        </PhoneProvider>
      </ChakraProvider>
    </ThemeProvider>
  )
}
