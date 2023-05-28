'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { SiHiveBlockchain } from 'react-icons/si';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <div className="flex items-center">
        <SiHiveBlockchain className="text-white text-[24px]" />
        &nbsp;&nbsp;
        <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
          LeXar
        </h2>
      </div>
      <ul className="hidden md:flex flex items-center gap-8 text-white font-semibold">
        <li className="z-[99]">
          <a href="https://lexar-domains.gitbook.io/introduction/introduction/introduction">
            Developers
          </a>
        </li>
        <li className="z-[99]">
          <a href="https://lexar-domains.gitbook.io/introduction/introduction/introduction">
            Resources
          </a>
        </li>
        <li>
          <a href="https://lexar-domains.gitbook.io/introduction/introduction/introduction">
            Community
          </a>
        </li>
      </ul>
      <button className="bg-purple-600 p-2 text-white rounded-[10px] font-bold">
        <a href="/dashboard" target="_blank">
          Launch App
        </a>
      </button>
    </div>
  </motion.nav>
);

export default Navbar;
