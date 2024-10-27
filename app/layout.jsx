import "@/assets/styles/global.css";

export const metadata = {
  title: "Phoenix Pulse",
  description: "Find A Perfect Rental Property",
  keywords: "rental, property, real estate",
};

const MainLayout = ({ children }) => {
  return (
    <html>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
