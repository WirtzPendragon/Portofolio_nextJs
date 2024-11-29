import Image from "next/image";
import ImageProfile from "@/res/profile.jpg";
import ImageChess from "@/res/chess.png";
import ImageAdmin from "@/res/adminlte.png";
import ImageBs from "@/res/bootstrap.png";
import localFont from "next/font/local";

export default function Home() {
  return (
    <>
    <div className="mt-20 mx-36 lg:flex lg:justify-evenly w-10/12 font-inter">
    <div className="w-1/2">
    <h1 className="text-appGreen-900 font-semibold text-5xl mt-32">Hello, I'm Suastika</h1>
    <h2 className="text-appGreen-900 font-semibold text-2xl mt-5">Web Designer</h2>
    <p className="text-appGreen-900 font-medium text-base">I like creating responsive website designs, fixing bugs and error codes Just For Fun.</p>

    <ul className="*:bg-appOrange-500 *:text-zinc-50 *:rounded-full *:border *:border-appOrange-200 *:px-3 *:py-1 flex *:mx-1 *:my-1 mt-3 flex-wrap w-11/12">
      <li>HTML</li>
      <li>CSS</li>
      <li>Javascript</li>
      <li>PHP</li>
      <li>Java</li>
      <li>Bootstrap</li>
      <li>Tailwind</li>
      <li>ReactJs</li>
      <li>NextJs</li>
      <li>GitHub</li>
      <li>MySql</li>
      <li>GameMakerStudio</li>
      <li>Unity</li>
    </ul>
    </div>
    <div>
    <Image 
    src={ImageProfile}
    className="border w-10/12 rounded-full"
    />
    </div>
    </div>

    <div className="mt-64 text-appGreen-900 font-inter w-10/12 mx-auto mb-64">
      <h1 className="text-center font-bold  text-4xl">ABOUT ME</h1>
    <div>
      <p className="text-center text-lg mx-56">My name is Made Suastika Aditya Wiranata, I'm 17 years old. I am a student of SMK Wira Harapan (Tegal Jaya), a person who can fast learner, honest and discipline. I enjoy to learn new things and get a new experience. I can work as a team and personal I love coding and playing games.</p>
    </div>

    <div>
    <h1 className="text-center font-bold mt-10 text-2xl">WHAT I DO</h1>
    <div className="flex flex-row flex-wrap justify-evenly">
      <div className="border rounded mt-5 p-4 w-96 bg-white shadow-2xl">
        <h2 className="font-semibold text-lg">Study</h2>
        <p>I am a student at SMK Wira Harapan, and I have chosen the RPL program because of my passion for technology and software development. This field allows me to explore my creativity and problem-solving skills by learning to design and develop innovative software solutions.</p>
      </div>
      <div className="border rounded mt-5 p-4 w-96 bg-white shadow-2xl">
        <h2 className="font-semibold text-lg">Fitness</h2>
        <p>Staying fit is really important to me as a student because it helps me stay energized and focused on my studies. I make time for regular exercise, like jogging, doing workouts, or even yoga, to keep my body active and my mind clear. </p>
      </div>
      <div className="border rounded mt-5 p-4 w-96 bg-white shadow-2xl">
        <h2 className="font-semibold text-lg">Playing games</h2>
        <p>As a student, I enjoy playing games in my free time. It’s a great way for me to relax, have fun, and sometimes even challenge my problem-solving and strategic thinking skills. Gaming helps me stay balanced, giving me a break from studies while keeping my mind sharp and entertained.</p>
      </div>
    </div>
    </div>

    </div>


    <div className="mt-64 text-appGreen-900 font-inter w-10/12 mx-auto mb-64">
      <h1 className="text-center font-bold  text-4xl underline">MY PROJECT</h1>

<div className="flex flex-row flex-wrap justify-evenly">
      <div className="border rounded mt-24 p-4 w-2/5 bg-white shadow-2xl">
        <Image 
    src={ImageBs}
    className="w-full mx-auto my-5"
    />
        <h2 className="text-center font-semibold text-2xl ">S&P BEVERAGES</h2>
        <p className="m-2"> A user-friendly product catalog showcasing a variety of beverages with vibrant visuals. Each product displays a name, price, rating, and a "Buy" button for quick purchasing, providing an engaging and accessible online shopping experience.</p>
        <h3 className="m-2 font-semibold text-lg underline">Bootstrap</h3>
    </div>


      <div className="border rounded mt-24 p-4 w-2/5 bg-white shadow-2xl">
        <Image 
    src={ImageAdmin}
    className="w-full mx-auto my-5"
    />
        <h2 className="text-center font-semibold text-2xl ">ADMIN LTE</h2>
        <p className="m-2"> A modern and responsive dashboard designed for data management. It features key statistics such as the number of students, teachers, classes, and majors. The interface includes a detailed table for viewing student information with options for actions, making it efficient for administrators to manage school data.</p>
        <span className="flex mt-2">
        <h3 className="mr-2 font-semibold text-lg underline">PHP</h3>
        <h3 className="mr-2 font-semibold text-lg underline">Admin LTE</h3>
        </span>
    </div>
      <div className="border rounded mt-24 p-4 w-2/5 bg-white shadow-2xl">
        <Image 
    src={ImageChess}
    className="w-full mx-auto my-5"
    />
        <h2 className="text-center font-semibold text-2xl ">CHESSBOARD</h2>
        <p className="m-2"> A visually appealing chessboard application created in Java, featuring a complete and accurately arranged starting position for chess pieces. It serves as a graphical interface for playing or developing chess games, showcasing Java's capability for creating interactive and dynamic visuals.</p>
        <h3 className="m-2 font-semibold text-lg underline">JAVA</h3>
    </div>

    </div>

    </div>
    </>
  );
}
