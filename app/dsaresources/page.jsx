"use client";
import Link from "next/link";

const dsaResources = {
  youtube: [
    {
      name: "MIT OCW - Introduction to Algorithms",
      link: "https://www.youtube.com/playlist?list=PLUl4u3cNGP61Oq3tWYp6V_F-5jb5L2iHb",
    },
    {
      name: "Data Structures by Code School",
      link: "https://www.youtube.com/playlist?list=PL2_aWCzGMAwI3W_JlcBbtYTwiQSsOTa6P",
    },
    { name: "Harvard’s CS50", link: "https://youtu.be/e9Eds2Rc_x8" },
    {
      name: "TheCherno - C++ Tutorials",
      link: "https://www.youtube.com/playlist?list=PLlrATfBNZ98dudnM48yfGUldqGD0S4FFb",
    },
    {
      name: "freeCodeCamp's YT Channel",
      link: "https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ",
    },
    {
      name: "Errichto's YT Channel",
      link: "https://www.youtube.com/channel/UCBr_Fu6q9iHYQCh13jmpbrg",
    },
    {
      name: "Gaurav Sen's YT Channel",
      link: "https://www.youtube.com/channel/UCRPMAqdtSgd0Ipeef7iFsKw",
    },
    {
      name: "Rachit Jain's YT Channel",
      link: "https://www.youtube.com/channel/UC9fDC_eBh9e_bogw87DbGKQ",
    },
  ],
  courses: [
    {
      name: "Easy to Advanced Data Structures",
      link: "https://www.udemy.com/share/101r90AkQaeVpUQ3Q=/",
    },
    {
      name: "Algorithms I - Princeton University - Coursera",
      link: "https://www.coursera.org/learn/algorithms-part1",
    },
    {
      name: "Algorithms II - Princeton University - Coursera",
      link: "https://www.coursera.org/learn/algorithms-part2",
    },
    {
      name: "Algorithms Specialization by Stanford University - Coursera",
      link: "https://www.coursera.org/specializations/algorithms",
    },
    {
      name: "Further recommendations",
      link: "https://www.freecodecamp.org/news/these-are-the-best-free-courses-to-learn-data-structures-and-algorithms-in-depth-4d52f0d6b35a/",
    },
  ],
  booksDSA: [
    "Introduction to Algorithms - CLRS",
    "The Algorithm Design Manual - Steve S. Skiena",
    "Algorithms - Robert Sedgewick and Kevin Wayne",
    "Cracking the Coding Interview - Gayle Laakmann McDowell",
    "Algorithms for Interviews - A. Aziz and A. Prakash",
  ],
  booksCPP: {
    beginners: [
      "C++ Primer - Stanley Lippman, Josée Lajoie, and Barbara E. Moo",
      "Programming: Principles and Practises using C++ - Bjarne Stroustrup",
    ],
    experienced: [
      { name: "A Tour of C++ - Bjarne Stroustrup" },
      { name: "The C++ Programming Language - Bjarne Stroustrup" },
      { name: "Effective C++ - Scott Meyers, 3rd Edition" },
      { name: "Effective Modern C++ - Scott Meyers" },
      { name: "Effective STL - Scott Meyers" },
      {
        name: "StackOverflow list",
        link: "https://stackoverflow.com/questions/388242/the-definitive-c-book-guide-and-list",
      },
      {
        name: "Competitive Programmer’s Handbook",
        link: "https://cses.fi/book.pdf",
      },
    ],
  },
  websites: [
    { name: "Geeks for Geeks", link: "https://www.geeksforgeeks.org/" },
    {
      name: "Tutorials Point",
      link: "https://www.tutorialspoint.com/data_structures_algorithms/index.htm",
    },
    { name: "CppReference", link: "https://en.cppreference.com/w/" },
    { name: "Class Central", link: "https://www.classcentral.com/" },
    {
      name: "Hackr.io",
      link: "https://hackr.io/tutorials/learn-data-structures-algorithms",
    },
    { name: "OpenMyMind", link: "https://algorithms.openmymind.net/" },
    { name: "Visualgo", link: "https://visualgo.net/en" },
  ],
  practicePlatforms: [
    { name: "CodeForces", link: "https://codeforces.com/" },
    { name: "CodeChef", link: "https://www.codechef.com/" },
    { name: "LeetCode", link: "https://leetcode.com/" },
    { name: "HackerRank", link: "https://www.hackerrank.com/" },
    { name: "HackerEarth", link: "https://www.hackerearth.com/" },
    { name: "AtCoder", link: "https://atcoder.jp/" },
    { name: "Project Euler", link: "https://projecteuler.net/" },
    { name: "SPOJ", link: "https://www.spoj.com/" },
  ],
  githubRepositories: [
    {
      name: "Programming E Books",
      link: "https://github.com/trumpowen/All-Programming-E-Books-PDF",
    },
    { name: "The Algorithms", link: "https://github.com/TheAlgorithms" },
    {
      name: "JavaScript Algorithms",
      link: "https://github.com/trekhleb/javascript-algorithms",
    },
    {
      name: "Computer Science Resources",
      link: "https://github.com/the-akira/Computer-Science-Resources",
    },
    {
      name: "OSSU Computer Science",
      link: "https://github.com/ossu/computer-science",
    },
  ],
  articles: [
    {
      name: "700 Free Online Programming & Computer Science Courses",
      link: "https://www.freecodecamp.org/news/free-online-programming-cs-courses/",
    },
    {
      name: "CodeChef DSA Certification",
      link: "https://www.codechef.com/certification/data-structures-and-algorithms/prepare",
    },
    { name: "Teach Yourself CS", link: "https://teachyourselfcs.com/" },
    {
      name: "How to become good at DSA",
      link: "https://www.geeksforgeeks.org/how-can-one-become-good-at-data-structures-and-algorithms-easily/",
    },
  ],
};

const DsaResourcesPage = () => {
  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold mb-5">
        Data Structures and Algorithms Resources
      </h1>
      <p className="mb-8">
        A list of resources by DSC KIIT members you can use to learn and master
        the subject of Data Structures and Algorithms.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">YouTube</h2>
        <ul className="list-disc list-inside">
          {dsaResources.youtube.map((resource, index) => (
            <li key={index}>
              <a
                className="text-blue-500 underline"
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {resource.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Courses</h2>
        <ul className="list-disc list-inside">
          {dsaResources.courses.map((course, index) => (
            <li key={index}>
              <a
                className="text-blue-500 underline"
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {course.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Books on DSA</h2>
        <ul className="list-disc list-inside">
          {dsaResources.booksDSA.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Books on C++</h2>
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">For absolute Beginners</h3>
          <ul className="list-disc list-inside">
            {dsaResources.booksCPP.beginners.map((book, index) => (
              <li key={index}>{book}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">
            For students with previous C++ experience
          </h3>
          <ul className="list-disc list-inside">
            {dsaResources.booksCPP.experienced.map((book, index) => (
              <li key={index}>
                {book.link ? (
                  <a
                    className="text-blue-500 underline"
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {book.name}
                  </a>
                ) : (
                  book.name
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Websites</h2>
        <ul className="list-disc list-inside">
          {dsaResources.websites.map((site, index) => (
            <li key={index}>
              <a
                className="text-blue-500 underline"
                href={site.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">Practise Platforms</h2>
        <ul className="list-disc list-inside">
          {dsaResources.practicePlatforms.map((platform, index) => (
            <li key={index}>
              <a
                className="text-blue-500 underline"
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {platform.name}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          Github Repositories and Articles
        </h2>
        <div className="mb-5">
          <h3 className="text-xl font-semibold mb-2">Repositories</h3>
          <ul className="list-disc list-inside">
            {dsaResources.githubRepositories.map((repo, index) => (
              <li key={index}>
                <a
                  className="text-blue-500 underline"
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Articles</h3>
          <ul className="list-disc list-inside">
            {dsaResources.articles.map((article, index) => (
              <li key={index}>
                <a
                  className="text-blue-500 underline"
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {article.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DsaResourcesPage;
