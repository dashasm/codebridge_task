import arrowRight from "../images/arrowRight.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { Box, ThemeProvider, Typography } from "@mui/material";
import { theme } from "./MainPage";

export const Article = () => {
  const navigate = useNavigate();
  const { selectedArticle } = useSelector((state: RootState) => state);

  return (
    <ThemeProvider theme={theme}>
      <img src={selectedArticle?.imageUrl} className="background" alt="img" />
      <Box className="content">
        <Typography
          className="content_title"
          sx={{ fontSize: "24px", lineHeight: 1 }}
        >
          {selectedArticle?.title}
        </Typography>
        <Typography
          sx={{ fontSize: "18px", color: "black", lineHeight: "150%" }}
        >
          {selectedArticle?.summary}
        </Typography>
      </Box>

      <Box className="back" onClick={() => navigate("/")}>
        <img src={arrowRight} alt="arrowRight" className="back_icon" />
        <Typography
          className="back_text"
          sx={{ fontWeight: 700, fontSize: "16px", lineHeight: "150%" }}
        >
          Back to homepage
        </Typography>
      </Box>
    </ThemeProvider>
  );
};
