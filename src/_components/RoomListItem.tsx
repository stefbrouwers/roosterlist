import Link from "next/link";
import { type RoomListItemData } from "~/type/RoomListItemData";

interface RoomListItemProps {
  room: RoomListItemData;
}

export const RoomListItem = ({ room }: RoomListItemProps) => {
  //https://cloud.timeedit.net/be_kdg/web/1/s.html?sid=4&object=room_GR-118&type=rooms&p=0.m%2C2.w&rr=1

  //https://cloud.timeedit.net/be_kdg/web/1/s.html?sid=4
  const customer_signature = "cloud.timeedit.net/be_kdg/web";
  const lang = "&l=fi";
  const reservePageObject = "&rr=1";
  const dateSelection = "&p=0.m%2C2.w";

  return (
    <li>
      <Link
        href={`https://${customer_signature}/1/s.html?sid=4&object=room_${room.queryString}&type=rooms${dateSelection}${reservePageObject}${lang}`}
        target="_blank"
        className="block rounded-lg bg-blue-500 p-4 text-white transition hover:bg-blue-600"
      >
        {room.displayName}
      </Link>
    </li>
  );
};
