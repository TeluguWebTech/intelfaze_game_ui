import { useState } from "react";
import { FaEdit, FaTrash, FaEnvelope, FaHome, FaChevronRight } from "react-icons/fa";
import NavbarComp from "../components/NavbarComp";
import ContactAccordian from "./ContactAccordian";
import { Link } from "react-router-dom";

const members = [
  {
    id: 1,
    name: "Ana Simmons",
    skills: "HTML, JS, ReactJS",
    company: "Intertico",
    role: "Web, UI/UX Design",
    progress: 50,
    progressColor: "bg-blue-500",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    id: 2,
    name: "Jessie Clarcon",
    skills: "C#, ASP.NET, MS SQL",
    company: "Agoda",
    role: "Houses & Hotels",
    progress: 70,
    progressColor: "bg-red-500",
    avatar: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Lebron Wayde",
    skills: "PHP, Laravel, VueJS",
    company: "RoadGee",
    role: "Transportation",
    progress: 60,
    progressColor: "bg-green-500",
    avatar: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    id: 4,
    name: "Natali Goodwin",
    skills: "Python, PostgreSQL, ReactJS",
    company: "The Hill",
    role: "Insurance",
    progress: 50,
    progressColor: "bg-yellow-500",
    avatar: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    id: 5,
    name: "Kevin Leonard",
    skills: "HTML, JS, ReactJS",
    company: "RoadGee",
    role: "Art Director",
    progress: 90,
    progressColor: "bg-purple-500",
    avatar: "https://randomuser.me/api/portraits/men/5.jpg",
  },
];

const ContactTable = () => {
  const [data, setData] = useState(members);

  const handleDelete = (id) => {
    setData(data.filter((member) => member.id !== id));
  };

  return (
    <>
      {/* Breadcrumbs */}
      <div className="flex items-center text-gray-600 text-sm mb-4">
        <FaHome className="mr-1 text-blue-500" />
        <Link to="/">
        Home
        </Link>
        <FaChevronRight className="mx-2 text-gray-400" />
        <span className=" text-green-500">Contacts</span>
      </div>

      <div className="">
        <ContactAccordian />
      </div>
    </>
  );
};

export default ContactTable;
