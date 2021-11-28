import React from "react";
import { FaHome, FaUserFriends, FaBookOpen } from "react-icons/fa";
import { GrConnect } from "react-icons/gr";
import { GiPartyFlags, GiTriforce, GiRank3 } from "react-icons/gi";

export const links = [
  {
    id: 1,

    text: "home",
    icon: <FaHome />,
  },
  {
    id: 2,

    text: "message",
    icon: <FaBookOpen />,
  },
];

export const links2 = [
  {
    id: 1,

    text: "ranking",
    icon: <GiRank3 />,
  },
  {
    id: 2,

    text: "challenge",
    icon: <GiTriforce />,
  },
  {
    id: 3,

    text: "party",
    icon: <GiPartyFlags />,
  },
  {
    id: 4,

    text: "connect",
    icon: <GrConnect />,
  },
  {
    id: 5,

    text: "parade",
    icon: <FaBookOpen />,
  },
  {
    id: 6,

    text: "group",
    icon: <FaUserFriends />,
  },
];
