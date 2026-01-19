"use client";
import {
  Box,
  Button,
  Card,
  CardContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Logo from "@/public/next-js.svg";
function page() {
  return (
    <Box
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Card sx={{ minWidth: 355 }}>
        <CardContent>
          <Box display="flex" justifyContent="center" mb={2}>
            <Image src={Logo.src}  alt="logo" width={120} height={120} />
          </Box>

          <Box
            
            mb={1}
            
          >
            <Typography
              variant="h5"
              textAlign="center"
              fontWeight="bold"
            
            >
              Create Account!
            </Typography>
            <Typography
              variant="body1"
              textAlign="center"
              sx={{ mb: 2 }}
            >
              Fill this form to create new account
            </Typography>
          </Box>

          <Box component="form">
            <Stack spacing={3} direction="column">
              <TextField
                label="Full Name"
                placeholder="Adam Smith"
                required
                sx={{ height: 1 }}
                size="small"

                // {...register("name")}
                // error={!!errors.name}
                // helperText={errors.name?.message}
              />

              <TextField
                label="Email"
                placeholder="example@gmail.com"
                type="email"
                required
                size="small"
              />

              <TextField
                label="password"
                type="password"
                placeholder="********"
                required
                size="small"
              />

              <TextField
                label="confirm password"
                type="password"
                placeholder="********"
                required
                size="small"
              />

              <Button
                //   onClick={handleClick}
                //   endIcon={<SendIcon />}
                loading={false}
                loadingPosition="end"
                variant="contained"
              >
                Submit
              </Button>
            </Stack>
          </Box>
          <Typography variant="body2" textAlign="center" sx={{ mb: 2, mt: 1 }}>
            Already have account ? <a href="#">Login</a>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}

export default page;
