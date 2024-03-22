import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

export default function Contact() {
    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
        >
            <Typography variant="h3" gutterBottom>
                Contact
            </Typography>
            <Grid container spacing={8}>
                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Name:" variant="outlined" />
                </Grid>
                <Grid xs={12}>
                    <TextField id="outlined-basic" label="Email address:" variant="outlined" />
                </Grid>
                <Grid xs={12}>
                <TextField id="outlined-basic" label="Message:" variant="outlined" />
                </Grid>
            </Grid>
        </Box>
    )
}