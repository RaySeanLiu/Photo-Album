import PhotoGallery from './components/PhotoGallery';
import ScrollIndicator from './components/ScrollIndicator';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="flex flex-col items-center justify-center min-h-screen px-4 py-12 sm:px-6 sm:py-16 md:px-8">
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-editorial mb-6 sm:mb-8 text-center leading-tight">
          Photo Album
        </h1>
        <p className="font-sans text-base sm:text-lg md:text-xl text-gray-700 max-w-xl md:max-w-2xl text-center mb-12 sm:mb-16 px-4">
          Happy Birthday, Mom! Thank you for all the great memories over the years.
        </p>
        <ScrollIndicator />
      </header>

      {/* Gallery Section */}
      <section className="pb-16 sm:pb-24 md:pb-32">
        <PhotoGallery />
      </section>
    </div>
  );
}

export default App;
