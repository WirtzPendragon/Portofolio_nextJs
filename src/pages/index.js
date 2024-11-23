import Image from "next/image";
import ImageProfile from "@/res/profile.jpg";
import localFont from "next/font/local";

export default function Home() {
  return (
    <>
    <div className="mt-20 mx-36 flex justify-evenly w-10/12 font-inter">
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
    width={500}
    height={500}
    className="border rounded-full"
    />
    </div>
    </div>

    <div className="mt-64 text-appGreen-900 font-inter w-10/12 mx-auto mb-64">
      <h1 className="text-center font-bold  text-4xl">ABOUT ME</h1>
      <p className="text-center text-lg mx-56">My name is Made Suastika Aditya Wiranata, I'm 17 years old. I am a student of SMK Wira Harapan (Tegal Jaya), a person who can fast learner, honest and discipline. I enjoy to learn new things and get a new experience. I can work as a team and personal I love coding and playing games.</p>
    </div>
    </>
  );
}
