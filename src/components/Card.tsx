import calendar from "../images/calendar.svg";
import arrowRight from "../images/arrowRight.svg";
import { IArtice } from "../types/article";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedArticle } from "../articleSlice";
import { useCallback } from "react";
import { Box, Link, Typography } from "@mui/material";
import { HightLightText } from "./HightLightText";

interface Props {
  article: IArtice;
  query: string;
}

export const Card: React.FC<Props> = ({ article, query }) => {
  const { title, imageUrl, summary, publishedAt, id, url } = article;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const light = useCallback(
    (str: string) => {
      return <HightLightText query={query} data={str} />;
    },
    [query]
  );

  const date = moment(publishedAt).format("MMMM Do, YYYY");
  const slicedSummary =
    summary.length > 100
      ? light(`${summary.slice(0, 100)}...`)
      : light(summary);

  return (
    <Box
      className="card"
      onClick={() => {
        navigate(`:${id}`);
        dispatch(setSelectedArticle(article));
      }}
    >
      <img src={imageUrl} alt="img" className="card_image" />

      <Box className="flex">
        <Box className="card_date">
          <img src={calendar} alt="calendar" />
          {date}
        </Box>

        <Typography sx={{ fontSize: "24px", lineHeight: 1 }}>
          {light(title)}
        </Typography>

        <Typography sx={{ fontSize: "16px", lineHeight: 1 }}>
          {slicedSummary}
        </Typography>

        <Link
          href={url}
          underline="none"
          color="#363636"
          className="card_more"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          Read more
          <img src={arrowRight} alt="arrowRight" />
        </Link>
      </Box>
    </Box>
  );
};
