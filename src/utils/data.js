import UrgentPriority from "./icons_FEtask/SVG - Urgent Priority colour.svg";
import NoPriority from "./icons_FEtask/No-priority.svg";
import LowPriority from "./icons_FEtask/Img - Low Priority.svg";
import MediumPriority from "./icons_FEtask/Img - Medium Priority.svg";
import HighPriority from "./icons_FEtask/Img - High Priority.svg";
import BacklogIcon from "./icons_FEtask/Backlog.svg";
import ToDoIcon from "./icons_FEtask/To-do.svg";
import InProgressIcon from "./icons_FEtask/in-progress.svg";
import DoneIcon from "./icons_FEtask/Done.svg";
import CancelledIcon from "./icons_FEtask/Cancelled.svg";

const bgColors = ["#B57136", "#868728", "#4D9446", "#5F80E4"];

export const priorities = [
  {
    title: "no priority",
    color: "gray",
    icon: <img src={NoPriority} alt="no priority" />,
  },
  {
    title: "low",
    color: "lightgray",
    icon: <img src={LowPriority} alt="low priority" />,
  },
  {
    title: "medium",
    color: "gray",
    icon: <img src={MediumPriority} alt="medium priority" />,
  },
  {
    title: "high",
    color: "black",
    icon: <img src={HighPriority} alt="high priority" />,
  },
  {
    title: "urgent",
    color: "orange",
    icon: <img src={UrgentPriority} alt="urgent priority" />,
  },
];

export const status = [
  {
    title: "backlog",
    color: "black",
    icon: <img src={BacklogIcon} alt="backlog" />,
  },
  {
    title: "todo",
    color: "lightgrey",
    icon: <img src={ToDoIcon} alt="to do" />,
  },
  {
    title: "in progress",
    color: "#EBCB62",
    icon: <img src={InProgressIcon} alt="in progress" />,
  },
  { title: "done", color: "#606ACB", icon: <img src={DoneIcon} alt="done" /> },
  {
    title: "cancelled",
    color: "gray",
    icon: <img src={CancelledIcon} alt="cancelled" />,
  },
];

export const statusIcons = {
  backlog: {
    color: "black",
    icon: <img src={BacklogIcon} alt="backlog" />,
  },
  todo: {
    color: "lightgrey",
    icon: <img src={ToDoIcon} alt="to do" />,
  },
  "in progress": {
    color: "#EBCB62",
    icon: <img src={InProgressIcon} alt="in progress" />,
  },
  done: {
    color: "#606ACB",
    icon: <img src={DoneIcon} alt="done" />,
  },
  cancelled: {
    color: "gray",
    icon: <img src={CancelledIcon} alt="cancelled" />,
  },
};

export const generateIntials = (name) => {
  return name
    .split(" ")
    .map((word) => word.charAt(0))
    .join("");
};

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * bgColors.length);
  return bgColors[randomIndex];
};
