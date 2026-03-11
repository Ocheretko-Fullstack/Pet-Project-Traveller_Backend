//===================== Hero=================
// import styles from './Hero.module.css';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function Hero() {
//   return (
//     <section className={styles.heroContainer}>
//       <picture>
//         <source
//           media="(min-width: 1440px)"
//           srcSet="/images/hero/desktop@1x.webp 1x, /images/hero/desktop@2x.webp 2x, /images/hero/desktop@3x.webp 3x"
//         />
//         <source
//           media="(min-width: 768px)"
//           srcSet="/images/hero/tablet@1x.webp 1x, /images/hero/tablet@2x.webp 2x, /images/hero/tablet@3x.webp 3x"
//         />
//         <Image
//           src="/images/hero/desktop@1x.webp"
//           alt="Traveler Background"
//           fill
//           quality={75}
//           className={styles['hero-image']}
//         />
//       </picture>
//       <div className={`container ${styles.container}`}>
//         <h1 className={`hero-title ${styles['hero-title']}`}>
//           Відкрийте світ подорожей з нами!
//         </h1>
//         <p className={`hero-text ${styles['hero-text']}`}>
//           Приєднуйтесь до нашої спільноти мандрівників, де ви зможете ділитися
//           своїми історіями та отримувати натхнення для нових пригод. Відкрийте
//           для себе нові місця та знайдіть однодумців!
//         </p>

//         <Link href="/sign-up" className="btn btn--hero">
//           Доєднатись
//         </Link>
//       </div>
//     </section>
//   );
// }

//=====================Cta-Join====================
// 'use client';

// import Link from 'next/link';
// import css from './CTA.module.css';
// import { useAuthStore } from '@/lib/store/authStore';

// export default function CTA() {
//   const { isAuthenticated } = useAuthStore();

//   return (
//     <section className="container">
//       <div className={css.position}>
//         <div className={css.wrapper}>
//           <h2 className={css.title}>Приєднуйтесь до нашої спільноти</h2>
//           <p className={css.description}>
//             Долучайтеся до мандрівників, які діляться своїми історіями та
//             надихають на нові пригоди.
//           </p>

//           {isAuthenticated ? (
//             <Link
//               className="btn btn-primary"
//               style={{ height: '48px' }}
//               href="/profile/saved"
//             >
//               Збережені
//             </Link>
//           ) : (
//             <Link
//               className="btn btn-primary"
//               style={{ height: '48px' }}
//               href="/sign-up"
//             >
//               Зареєструватися
//             </Link>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// }

// .wrapper {
//   display: flex;
//   justify-content: flex-start;
//   flex-direction: column;
//   padding: 20px;
//   border-radius: 24px;

//   background-image:
//     linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
//     image-set(
//       url('/images/cta/mobile@1x.webp') 1x,
//       url('/images/cta/mobile@2x.webp') 2x,
//       url('/images/cta/mobile@3x.webp') 3x
//     );
//   background-size: cover;
//   background-position: center;
// }
// .position {
//   padding: 32px 0;
// }
// .wrapper h2 {
//   color: var(--color-white);
//   text-align: start;
//   margin-bottom: 16px;
//   font-size: 26px;
// }
// .wrapper p {
//   color: var(--color-white);
//   margin-bottom: 16px;
// }
// .wrapper > a {
//   font-size: var(--fs-sm);
//   border: 1px solid var(--color-royal-blue);
// }

// @media (min-width: 768px) {
//   .wrapper {
//     padding: 32px;
//     box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
//     background-image:
//       linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
//       image-set(
//         url('/images/cta/tablet@1x.webp') 1x,
//         url('/images/cta/tablet@2x.webp') 2x,
//         url('/images/cta/tablet@3x.webp') 3x
//       );
//     background-size: cover;
//     background-position: center;
//   }
//   .wrapper h2 {
//     margin-bottom: 8px;
//     font-size: 32px;
//   }
//   .wrapper p {
//     margin-bottom: 8px;
//     letter-spacing: 1.02;
//   }
//   .wrapper > a {
//     width: 153px;
//   }
// }

// @media (min-width: 1440px) {
//   .wrapper {
//     padding: 64px;
//     background-image:
//       linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
//       image-set(
//         url('/images/cta/desktop@1x.webp') 1x,
//         url('/images/cta/desktop@2x.webp') 2x,
//         url('/images/cta/desktop@3x.webp') 3x
//       );
//     background-size: cover;
//     background-position: center;
//   }
//   .wrapper h2 {
//     margin-bottom: 24px;
//     width: 558px;
//     font-size: 48px;
//     line-height: 1.2;
//     letter-spacing: -0em;
//   }
//   .wrapper p {
//     margin-bottom: 32px;
//     width: 558px;
//   }
//   .wrapper > a {
//     width: 169px;
//     font-size: var(--fs-md);
//   }
// }

//=====================Our travellers====================
// 'use client';
// import css from './Team.module.css';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import TravelerCard from '@/components/TravellerCard/TravellerCard';
// import { User } from '@/types/user';
// import Link from 'next/link';

// interface RequestUser {
//   users: User[];
//   totalPages: number;
// }

// export default function Team() {
//   const [users, setUsers] = useState<User[]>([]);
//   const perPage = 4;

//   const fetchUsers = async (perPage: number, nextPage: number) => {
//     try {
//       const { data } = await axios.get<RequestUser>(
//         'https://traveller-backend-lia1.onrender.com/users',
//         { params: { page: nextPage, perPage } },
//       );

//       setUsers([...data.users]);
//     } catch (error) {
//       console.error('Помилка при отриманні користувачів:', error);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(perPage, 1);
//   }, []);
//   return (
//     <section className="container">
//       <div className={css.wrapper}>
//         <h2>Наші Мандрівники</h2>
//         <div className={css.positionUlButton}>
//           <ul className={css.wrapperUl}>
//             {users.map((user) => (
//               <li key={user._id}>
//                 <TravelerCard
//                   avatarUrl={user.avatarUrl}
//                   name={user.name}
//                   description={user.description}
//                   _id={user._id}
//                 />
//               </li>
//             ))}
//           </ul>
//           <Link
//             className="btn btn-primary"
//             style={{ height: '48px', width: '156px' }}
//             href="/app/(public)/travellers"
//           >
//             Переглянути всіх
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// }






// .wrapper {
//   padding: 64px 0;
//   h2 {
//     margin-bottom: 48px;
//   }
// }
// .wrapperUl {
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   gap: 24px;
//   & li {
//     transition:
//       transform 0.3s ease,
//       box-shadow 0.6s ease;
//   }
//   & li:hover {
//     transform: translateY(-7px);
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// }
// @media (max-width: 768px) {
//   .positionUlButton > a {
//     display: none;
//   }
// }
// /**=================================768px===================================*/

// @media (min-width: 768px) {
//   .wrapper {
//     padding: 64px 0;
//   }
//   .positionUlButton {
//     display: flex;
//     flex-direction: column;
//     gap: 48px;
//     align-items: center;
//   }
//   .wrapperUl {
//     flex-direction: row;
//     flex-wrap: wrap;
//     gap: 24px;
//     justify-content: space-between;
//   }
// }
// /**===================================1440px================================*/

// @media (min-width: 1440px) {
//   .wrapper {
//     padding: 64px 0;
//   }
//   .wrapperUl {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//   }
// }


//=====================Our travellers====================
