// import Lesson_16 from "lessons/Lesson_16/Lesson_16"
// import Feedback from "components/Feedback/FeedBack"
import { ROUTES } from "pages/constants/routes"
import CreateEmployee from "pages/CreateEmployee/CreateEmployee"
import Employees from "pages/Employees/Employees"
import Layout from "pages/Layout/Layout"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import GlobalStyles from "styles/GlobalStyles"
function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path={ROUTES.HOME} element={<CreateEmployee />} />
          <Route path={ROUTES.CREATE_EMPLOYEE} element={<CreateEmployee />} />
          <Route path={ROUTES.EMPLOYEES} element={<Employees />} />
          <Route path={ROUTES.NOT_FOUND} element="Page Not Found" />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
export default App
