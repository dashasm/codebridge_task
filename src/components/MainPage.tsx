import { useEffect, useMemo, useState } from "react";
import {
  Input,
  Divider,
  Container,
  Box,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import search from "../images/search.svg";
import { Card } from "./Card";
import { getArticles } from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setArticles } from "../articleSlice";
import { RootState } from "../store";
import { IArtice } from "../types/article";
import { isIncludesQuery } from "../helper";

export const theme = createTheme({
  typography: {
    fontFamily: "Montserrat",
  },
});

export const MainPage = () => {
  const [query, setQuery] = useState("");

  const dispatch = useDispatch();
  const { article } = useSelector((state: RootState) => state);

  const visibleArticle = useMemo(() => {
    const formattedQuery = query.toLowerCase().trim();

    const filteredTitle: IArtice[] = [];
    const filteredSummary: IArtice[] = [];

    article.forEach((elem) => {
      const { title, summary } = elem;
      if (isIncludesQuery(formattedQuery, title)) {
        filteredTitle.push(elem);
      } else if (isIncludesQuery(formattedQuery, summary)) {
        filteredSummary.push(elem);
      }
    });

    return [...filteredTitle, ...filteredSummary];
  }, [article, query]);

  useEffect(() => {
    getArticles().then((res) => dispatch(setArticles(res)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const art = query.length ? visibleArticle : article;

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Box className="filter">
          <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
            Filter by keywords
          </Typography>
          <Box className="filter_block">
            <img src={search} alt="search" className="filter_block_icon" />
            <Input
              placeholder="The most successful IT companies in 2020"
              fullWidth
              disableUnderline
              className="filter_block_input"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </Box>
        </Box>

        <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
          Results: {visibleArticle.length}
        </Typography>
        <Divider />
        <Box className="grid">
          {art.map((elem) => {
            return <Card article={elem} key={elem.id} query={query} />;
          })}
        </Box>
      </Container>
    </ThemeProvider>
  );
};
