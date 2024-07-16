"use client";
import courseData from "@/data/music_courses.json";
import Link from "next/link";
import { BackgroundGradient } from "./ui/background-gradient";

interface Course {
  id: number;
  title: string;
  slug: string;
  description: string;
  price: number;
  instructor: string;
  isFeatured: boolean;
}
function FeaturedCourses() {
  const featuredCourse = courseData.courses.filter(
    (course: Course) => course.isFeatured
  );

  return (
    <div className="py-20 bg-gray-900">
      <div>
        <div className="text-center">
          <h2 className="text-xl text-teal-600 font-semibold tracking-wide uppercase">
            FEATURED COURSES
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Learn With the Best
          </p>
        </div>
      </div>
      <div className="mt-10 mx-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {featuredCourse.map((course: Course) => (
            <div key={course.id} className="flex justify-center">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-base">
                {" "}
                <div className="p-4 flex flex-col items-center text-center flex-grow">
                  <p className="text-2xl sm:text-xl text-black mt- mb-2 dark:text-neutral-200">
                    {course.title}
                  </p>
                  <p className="md:text-base px-10 text-neutral-600 dark:text-neutral-400 flex-grow mt-4 mb-4">
                    {course.description}
                  </p>
                  <p className="md:text-sm">
                  <Link href={`/courses/${course.slug}`}>Learn More</Link>
                  </p>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          href={"/courses"}
          className="px-6 py-3 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
        >
          View All courses
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCourses;
