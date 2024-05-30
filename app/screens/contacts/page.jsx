import { ContactForm } from "@/app/components/forms";

export default function Page() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-customLightGray w-full">
      <div className="flex flex-col md:flex-row absolute inset-0">
        <div className="w-full md:w-1/2 h-1/3 md:h-full bg-customDark"></div>
        <div className="w-full md:w-1/2 h-2/3 md:h-full bg-white"></div>
      </div>
      <div className="relative text-center w-full md:w-1/2 md:pt-20 pt-32 justify-center">
        <div className="flex justify-center items-center mb-6">
          <div className="bg-white p-2 rounded-lg flex">
            <div className="w-6 h-6 bg-black mr-2" />
            <h1 className="md:text-4xl text-2xl font-extrabold font-grifter text-gray-800">
              Contact Me
            </h1>
          </div>
        </div>

        <div className="md:flex w-full px-2">
          <div className="text-center w-full md:w-1/2 text-gray-900 bg-customLightGray md:px-4 px-2 font-grifter py-4 md:rounded-l-md rounded-md">
            <p className="md:text-4xl text-lg md:mb-8 mb-2">Hey there!</p>
            <p className="md:text-4xl text-lg md:mb-8 mb-2">
              Thanks for stopping by.
            </p>
            <p className="md:text-4xl text-lg md:mb-8 mb-2">
              If you want to work with me or just have a chat, I'd love to hear
              from you!
            </p>
            <p className="md:text-4xl text-lg md:mb-8 mb-2">
              Fill out the form below, and let's create something awesome
              together!
            </p>
          </div>
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <ContactForm />
          </div>
        </div>
        <div className="loader"></div>
      </div>
    </div>
  );
}
