import React, { useState } from 'react';
import DashboardLayout from '../../../layouts/company/Dashboard.layout';
import { Box, Divider, Typography } from '@mui/material';

export default function CustomForm() {
  return (
    <DashboardLayout>
      <Box>
        <Typography variant="h4" color="initial">
          Make your custom form for your employees to conduct surveys
        </Typography>
        <Divider sx={{ my: 1 }} />
        Coming soon... We will email you once we are ready with this feature
        until then stay tuned!
      </Box>
    </DashboardLayout>
  );
}
