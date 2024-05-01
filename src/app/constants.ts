let menus = {
  courses: {
    label: 'Courses',
    url: '',
    icon: 'fa-solid fa-list',
    id:'course'
  },
  demos: {
    label: 'Demos',
    url: '',
    icon: 'fa-solid fa-laptop',
    id:'demo'
  },
  freeSessions: {
    label: 'Free Sessions',
    url: '',
    icon: 'fa-solid fa-headset',
    id:'fs'
  },
  aboutUs: {
    label: 'About Us',
    url: '',
    icon: 'fa-solid fa-heart',
    id:'about'
  },
  contact: {
    label: 'Contact',
    url: '',
    icon: 'fa-solid fa-phone',
    id:'contact'
  },
  login: {
    label: 'Login',
    url: '',
    icon: '',
    id:'login'
  },
  logout: {
    label: 'Logout',
    url: '',
    icon: '',
    id:'logout'
  },
  menu: {
    label: 'Menu',
    url: '',
    icon: 'fa-solid fa-bars',
    id:'menu'
  },
  recordedSessions:{
    label: 'Recorded Sessions',
    url: '',
    icon: 'fa-solid fa-headset',
    id:'rs'
  },
  home:{
    label: 'Home',
    url: '',
    icon: 'fa-solid fa-house',
    id:'home'
  }
};
export const SCConstants = {
  homeMenuItems: {
    left: [
      menus.courses,
      menus.demos,
      menus.freeSessions,
      menus.aboutUs,
      menus.contact,
    ],
    right: [menus.login],
  },
  mobileMenuItems: {
    bar: {
      left: [menus.aboutUs, menus.contact],
      right: [menus.login],
    },
    chips: [menus.courses, menus.demos, menus.freeSessions],
  },
  mobileDashBoardMenuItems: {
    bar: {
      left: [menus.menu],
      right: [menus.logout],
    },
    chips: [],
  },
  desktopDashboardMenuItems: {
    left: [
      menus.menu,
      menus.courses,
      menus.demos,
      menus.freeSessions,
      menus.aboutUs,
      menus.contact,
    ],
    right: [menus.login],
  },
  sideMenuItems: {
    top:[
      {main:menus.home,subMenus:[]},
      {main:menus.courses, subMenus:[]},
      {main:menus.demos, subMenus:[]},
      {main:menus.freeSessions, subMenus:[]},
      {main:menus.recordedSessions, subMenus:[]}
    ],
    bottom:[]
  },
  brandName:"SubraTech",
  upcomingFreeCourse: 'Upcoming Free Sessions',
  courseInfo: 'We have well Designed Online Live courses',
  viewAll: 'View All',
  ourCourses: 'Our Live Courses',
  viewCourse: 'View Course',
  ourRecordedCourses: 'Our Recorded Courses',
  recordedCourseHelpText: 'We have well Designed Recorded courses',
  viewAllLiveCourses: 'View All Live Courses',
  viewAllRecordedCourses: 'View All Recorded Courses',
  courseTypes: {
    live: 'live',
    record: 'record',
    webinar: 'webinar',
  },
};
