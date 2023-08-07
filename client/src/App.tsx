import { AppLayout, AppSidebar, PaddedArea } from "./components";
import DashboardPage from "./pages/dashboard";

function App() {
  return (
    <AppLayout
      navigation={
        <PaddedArea>
          <AppSidebar />
        </PaddedArea>
      }
      main={<DashboardPage />}
    />
  );
}

export default App;
