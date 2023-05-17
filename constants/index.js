import { AiOutlineHome, AiOutlineLineChart } from 'react-icons/ai';
import { FiUpload } from 'react-icons/fi';
import { FaExchangeAlt } from 'react-icons/fa';
import { MdOutlineIntegrationInstructions } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: '1: Minimum Viable Product (MVP)',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: '2: Restructing and Improvement',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: '3: Community building & Auditing',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: '4: Launch on mainnet',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: '5: Scaling and Partnerships',
  },
];

export const startingFeatures = [
  'Choose the kind of domain you want to create (Non Transferable Domains (SBTs) or Transferable)',
  'Add the custom domain name of your choice ( example ".tld", ".gnosis")',
  'Create your domain name that can be minted by community members',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle:
      'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle:
      'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'Personalized Domain Data',
    subtitle:
      'Users can add custom data to their domain (example "profile picture(an address and token ID of an NFT), description, social media links").',
  },
  {
    imgUrl: '/planet-07.png',
    title: 'Sharable Link',
    subtitle:
      'After creating a top level domain (example ".tld"), creators can send the link to a domain minting page to members of their community',
  },
  // {
  //   imgUrl: "/planet-08.png",
  //   title: "With one platform you can explore the whole world virtually",
  //   subtitle:
  //     "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  // },
];

export const socials = [
  {
    name: 'twitter',
    url: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: '/facebook.svg',
  },
];

export const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: <AiOutlineHome />,
  },
  {
    name: 'Create Domain',
    href: '/createDomain',
    icon: <FaExchangeAlt />,
  },
  {
    name: 'Minter',
    href: '/minter',
    icon: <AiOutlineLineChart />,
  },
  {
    name: 'Whois',
    href: '/lookup',
    icon: <BsSearch />,
  },
  {
    name: 'Integration',
    href: '/integration',
    icon: <MdOutlineIntegrationInstructions />,
  },
  {
    name: 'Send Tokens',
    href: '/send-tokens',
    icon: <FiUpload />,
  },
];
