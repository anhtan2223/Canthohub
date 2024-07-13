import Events from "../ui/tintuc/events";
import EventsSection from "../ui/tintuc/EventsSection";
import News from "../ui/tintuc/news";
import WelcomeSection from "../ui/tintuc/WelcomeSection";

export default function Page() {
    return (
        <div className="flex flex-col items-center space-y-6">
          <div className="w-full">
            <img src="/welcome.png" alt="" className='w-full' />
            <p className="my-4"> Trang chủ / <span className="text-medium-blue">Tin tức</span></p>
              <WelcomeSection />
          </div>
          <div className="flex space-x-6 justify-center items-start w-full">
              <div className="flex-grow">
                  <News />
              </div>
              <div className="flex flex-col space-y-6 flex-shrink-0" style={{ width: '280px' }}>
                  <Events />
                  <EventsSection />
              </div>
          </div>
        </div>
    );
}

