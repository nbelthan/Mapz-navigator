export interface ZipInfoProps {
  ZipCode: string;
  Owner: string;
  Link: string;
}

interface ZipData {
  data: ZipInfoProps;
}

export const ZipInfo = ({ data }: ZipData) => {
  const { ZipCode, Owner, Link }: ZipInfoProps = data;

  console.log("data", data);
  return (
    <div
      style={{
        position: "relative",
        zIndex: 1000,
        bottom: 100,
        left: 10,
        backgroundColor: "white",
        padding: 10,
        width: "fit-content",
      }}
    >
      <div>Zip code: {ZipCode}</div>
      <div>Owner: {Owner}</div>
      <div>
        <a href={Link}>Link on Marketplace </a>
      </div>
    </div>
  );
};
