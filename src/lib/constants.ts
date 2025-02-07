export interface Experience {
    role: string;
    company: string;
    location: string;
    duration: string;
    details: string[];
}

export const experiences: Experience[] = [
    {
        role: "Senior Software Developer",
        company: "Nibbl Finance",
        location: "Remote",
        duration: "Feb 2023 - Present",
        details: [
            "Designed, developed, and maintained a scalable NFT marketplace platform, ensuring seamless integration of both frontend and backend components to enhance user experience and functionality.",
            "Engineered a robust backend infrastructure utilizing JavaScript and ExpressJS, effectively managing NFT listings, orders, trades, and settlements to support high-volume transactions.",
            "Successfully integrated the Rarible order book into the marketplace, facilitating efficient and secure order matching and execution, thereby improving transaction reliability.",
            "Deployed and managed smart contracts on the Ethereum blockchain, enabling secure NFT ownership transfers and auction functionalities.",
            "Developed a user-friendly and visually appealing frontend interface using Next.js, showcasing NFT collections, enabling bidding processes, and managing user accounts with a focus on responsive design.",
            "Created RESTful APIs to enhance the marketplace's functionality, enabling seamless integration with external services and improving overall system interoperability.",
            "Continuously optimized the marketplace's performance and scalability, implementing strategies to handle high transaction volumes and ensure a seamless user experience under peak loads.",
            "Created custom hooks for NFT contract interactions utilizing Thirdweb SDK and Ethers.js, streamlining the integration of blockchain functionalities into the frontend.",
            "Implemented Sign-In with Ethereum (SIWE) for secure wallet authentication, enhancing user security and simplifying the login process.",
            "Utilized Biconomy to facilitate gasless transactions, improving user experience by eliminating transaction fees for end-users.",
            "Built backend services with Node.js, AWS CDK, and DynamoDB for efficient management of NFT metadata and user analytics, ensuring high availability and scalability."
        ]
    },
    {
        role: "Software Developer",
        company: "Element Zero",
        location: "Remote",
        duration: "Mar 2021 - Feb 2023",
        details: [
            "Enhanced user experience by implementing custom EIP712 signature types for off-chain signature generation and verification, facilitating gasless transactions.",
            "Integrated support for popular web wallets using Web3.js, Ethers.js, Gnosis SDK, and Onboard.js, allowing users to interact with the DApp without incurring gas fees.",
            "Developed interactive dashboards to visualize wallet metrics and transaction histories, creating reusable chart components for displaying complex financial data in an intuitive manner.",
            "Architected and orchestrated the development of a modularized suite of tools for front-end infrastructure, including Webpack, Babel, i18next for localization, and Jest for unit testing.",
            "Led the revamp of the fintech DApp version 2 using Next.js, employing Custom Static Site Generation (SSG) & Server-Side Rendering (SSR) for optimized performance.",
            "Achieved a 70% reduction in page load times by leveraging Vercel CDN for caching and optimizing asset delivery, significantly enhancing the user experience.",
            "Established CI/CD pipelines using GitHub Actions for automated testing and deployment, ensuring rapid iteration and deployment of features while maintaining code quality."
        ]
    },
    {
        role: "Frontend Developer",
        company: "Decentralized Finance",
        location: "Remote",
        duration: "Jan 2020 - Feb 2021",
        details: [
            "Expertise in Angular 10, RxJS, and NGXS for robust and reactive applications.",
            "Proficient in HTML5, CSS3, Material UI, and Bootstrap for visually appealing and user-friendly interfaces.",
            "Developed a comprehensive business console for managing billing models, products, settlements, and refunds for merchants.",
            "Created a user-friendly Buy Crypto Tool for purchasing PMA cryptocurrency using credit card, supporting multiple currencies (USD, EUR, GBP).",
            "Built a centralized Admin Portal dashboard for monitoring and managing user and merchant transactions.",
            "Solid understanding of Solidity for creating Ethereum-based smart contracts."
        ]
    }
];

export interface EducationDetail {
    institute: string;
    course: string;
    location: string;
    duration: string;
}

export const educationDetails: EducationDetail[] = [
    {
        institute: "Indian Institute of Technology, Delhi",
        course: "BTech, Computer Engineering",
        location: "Delhi, India",
        duration: "2014 - 2018"
    }
];


export interface SkillDetail {
    skill: string;
    description: string[];
}

export const skillDetails: SkillDetail[] = [
    {
        skill: "Languages",
        description: [
            "Proficient in JavaScript, TypeScript, and Python for developing scalable applications.",
            "Experienced in writing clean and maintainable code following best practices.",
            "Familiar with asynchronous programming and performance optimizations.",
        ],
    },
    {
        skill: "Frameworks & Libraries",
        description: [
            "Developed and optimized applications using Express.js, React.js, Redux, and Next.js.",
            "Worked with Node.js and Nest.js for backend development and API integrations.",
            "Implemented responsive UI/UX with Tailwind CSS and Shadcn UI.",
            "Integrated Web3 libraries like Ethers.js, Wagmi, Thirdweb, and Biconomy for blockchain interactions.",
        ],
    },
    {
        skill: "Blockchain Expertise",
        description: [
            "Developed NFT Marketplaces with minting, listing, and auction functionalities.",
            "Worked on DeFi applications, including Perpetual DEX, Lending-Borrowing, AMM, and Vaults.",
            "Integrated smart contracts with frontends using Web3 tools and libraries.",
            "Optimized gas fees and security in Solidity smart contracts.",
        ],
    },
    {
        skill: "Tools & Technologies",
        description: [
            "Experience with testing frameworks like Chai and Cypress.",
            "Developed and deployed smart contracts using Hardhat.",
            "Worked with cloud services like AWS EC2 & S3 for application hosting and storage.",
            "Used Docker for containerized development and deployment.",
            "Version control and CI/CD automation using GitHub, Jenkins, Vercel, and Netlify.",
        ],
    },
    {
        skill: "Services",
        description: [
            "Provided backend consultancy for scalable and efficient architectures.",
            "Developed cross-platform applications with optimal performance.",
            "Optimized backend-frontend interactions for faster response times and lower latency.",
        ],
    }
];

export const profileData = {
    name: "Vijay Wankhede",
    phone: "123-456-7890",
    email: "vijaykops1@gmail.com",
    emailLink: "mailto:vijaykops1@gmail.com",
    description: [
        "Experienced Full Stack Engineer with a robust foundation in blockchain and web development, specializing in building scalable applications and optimizing performance.",
        "Proficient in JavaScript, TypeScript, Node.js, Express.js, React, and Solidity, with a proven track record of delivering high-quality, user-centric applications in the DeFi and NFT spaces.",
        "Adept at leading teams to implement agile methodologies, ensuring iterative development and continuous improvement. Expertise in architecting modular infrastructures, integrating smart contracts, and enhancing user experiences through innovative solutions.",
        "Committed to leveraging cutting-edge technologies to drive impactful results in decentralized finance and protocol development."
    ],
    socialLinks: {
        linkedin: "https://www.linkedin.com/in/vijay-k-982a5b288/",
    },
    videoSrcDesktop: "/land_4.mp4",
    videoSrcMobile: "/land.mp4"
};