import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function About() {
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h3" gutterBottom>
                About me
            </Typography>
            <Box display="flex"
                justifyContent="center"
                alignItems="center">
            <Typography variant="body1" gutterBottom>
                I'm thrilled to introduce myself as a recent graduate of a women's fullstack bootcamp, where I've honed my skills and passion for technology to embark on an exciting journey in the world of software development.
                Throughout my time in the bootcamp, I've delved deep into the intricacies of both front-end and back-end development, mastering languages like HTML, CSS, JavaScript, Python, and more. But beyond the technical knowledge, I've also cultivated invaluable soft skills such as communication, problem-solving, and adaptability—skills that are essential for success in the fast-paced tech industry.
                As a woman in tech, I'm deeply committed to fostering diversity and inclusion in the field. I believe that diverse perspectives drive innovation and creativity, and I'm passionate about contributing to a more equitable and welcoming tech community.
            </Typography>
            </Box>
        </Box>
    );
}