import ContactsIcon from "public/icones/contacts.svg";
import CurriculumGuideIcon from "public/icones/curriculum-guide.svg";
import CoursesIcon from "public/icones/courses.svg";

const requirementsNavItem = [
  {
    name: "دفترچه تماس",
    link: "/requirements/contacts",
    repo: "requirements",
    icon: <ContactsIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "چارت",
    link: "/requirements/curriculum-guide",
    repo: "requirements",
    icon: <CurriculumGuideIcon className="w-8 fill-gray-600" />,
  },
  {
    name: "دروس",
    link: "/requirements/courses",
    repo: "requirements",
    icon: <CoursesIcon className="w-8 fill-gray-600" />,
  },
];

export default requirementsNavItem;