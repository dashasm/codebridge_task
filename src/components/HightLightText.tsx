interface Props {
  query: string;
  data: string;
}

export const HightLightText: React.FC<Props> = ({ query, data }) => {
  if (!query.length) return <>{data}</>;

  const splitQuery = query.split(" ");
  const splitData = data.split(" ");

  return (
    <>
      {splitData.map((elem, index) => {
        if (splitQuery.includes(elem)) {
          return <span className="higthlight" key={index}>{`${elem} `}</span>;
        }
        return <span key={index}>{`${elem} `}</span>;
      })}
    </>
  );
};
