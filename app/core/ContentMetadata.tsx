import { Outline } from "~/core";
import { formatDate } from "~/utils/dates";

type Props = {
  createdAt: string;
  updatedAt: string;
};

export default function ContentMetadata({ createdAt, updatedAt }: Props) {
  const created = formatDate(createdAt);
  const updated = formatDate(updatedAt);
  return (
    <div className="contentMetadata grid-column-prose">
      <p><Outline>Created</Outline> {created}</p>
      {created === updated ? null : <p><Outline>Updated</Outline> {updated}</p>}
    </div>
  );
};
