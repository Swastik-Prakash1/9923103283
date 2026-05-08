import './globals.css';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Notification System</Typography>
          </Toolbar>
        </AppBar>
        {children}
      </body>
    </html>
  );
}