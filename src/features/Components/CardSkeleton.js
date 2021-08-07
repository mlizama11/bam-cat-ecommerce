import Skeleton from "react-loading-skeleton";
import { Card, Button } from "react-bootstrap";
import "../styles/Card.css";

function CardSkeleton() {
  return (
    <Card style={{ width: "18rem", padding: "0.5rem" }}>
      <Skeleton height={250} />

      <Skeleton height={30} />

      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />

      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <Button disabled style={{ cursor: "default" }}></Button>
          <Button disabled style={{ cursor: "default" }}></Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default CardSkeleton;