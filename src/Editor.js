import { useParams, useRouteMatch } from "react-router-dom";

export default function Editor() {
  const { entryId } = useParams();
  return <h1>Editor - {entryId}</h1>;
}
