import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Ana Sayfa",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Çözümlerimiz",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "Ürünlerimiz",
    newTab: false,
    path: '/products',
    submenu: [
      {
        id: 31,
        title: 'Modüler E-Ticaret Yazılımı',
        newTab: false,
        path: '#'
      },
      {
        id: 32,
        title: 'Haberleşme Modülü',
        newTab: false,
        path: '#'
      },
      {
        id: 33,
        title: 'Pazaryeri Entegratörü',
        newTab: false,
        path: '#'
      },
      {
        id: 34,
        title: 'Filo Yönetim Uygulaması',
        newTab: false,
        path: '#'
      },
      {
        id: 35,
        title: 'Personel Yönetim Sistemi',
        newTab: false,
        path: '#'
      },
    ]
  },
  // {
  //   id: 2.1,
  //   title: "Blog",
  //   newTab: false,
  //   path: "/blog",
  // },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Teklif Alın",
    newTab: false,
    path: "/support",
  },
  {
    id: 5,
    title: "Gizlilik ve Güvenlik Politikamız",
    newTab: false,
    path: "/security",
  },
];

export default menuData;
