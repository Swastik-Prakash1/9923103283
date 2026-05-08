'use client';
import { Card, CardContent, Typography, Chip, Box } from '@mui/material';

const typeColor: any = {
  Placement: "success",
  Result: "primary",
  Event: "warning"
};

export default function NotificationCard({ notif }: { notif: any }) {
  return (
    <Card sx={{ mb: 2, boxShadow: 2 }}>
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Chip 
            label={notif.type} 
            color={typeColor[notif.type] || "default"} 
            size="small" 
          />
          <Typography variant="caption" color="text.secondary">
            {new Date(notif.timestamp).toLocaleString()}
          </Typography>
        </Box>
        <Typography variant="body1" fontWeight={500}>
          {notif.message}
        </Typography>
      </CardContent>
    </Card>
  );
}