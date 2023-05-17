'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';
import { SiReactivex } from 'react-icons/si';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';

const Nav = () => {
  return (
    <div className="mx-8 mt-6">
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <Link href="/">
          <div className="flex items-center w-full">
            <SiReactivex className="text-white text-[24px]" />
            &nbsp;&nbsp;
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
              Mechao
            </h2>
          </div>
        </Link>
        <ul className="hidden md:flex flex items-center gap-8 text-white font-semibold cursor-pointer ml-20">
          <li>Developers</li>
          <li>Resources</li>
          <li>Community</li>
        </ul>

        <ConnectButton showBalance={false} />
      </div>
    </div>
  );
};

export default Nav;
